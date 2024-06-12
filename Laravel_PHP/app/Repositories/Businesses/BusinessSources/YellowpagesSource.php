<?php
namespace App\Repositories\Businesses\BusinessSources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use App\Models\Places\Place;
use App\Repositories\Businesses\BusinessSource;

class YellowpagesSource extends BusinessSource
{
    protected $sourceName = 'Yellowpages';

    function _find(Place $place, $filters){
        $searchData = array (
            'key'=>config('yellowpages.key'),
            'term'=>$filters['query'],
            'searchloc'=>$place->query,
            'format'=>'json'
        );
        $response = $this->yellowpages_call($searchData);
        $searchListings = (!empty($response['searchResult']['searchListings']))?($response['searchResult']['searchListings']):(null);
        $searchResults = (!empty($searchListings['searchListing']))?($searchListings['searchListing']):(null);
        return $searchResults;
    }


    function _formatAllInstances($searchResults){
        $results = array();
        foreach($searchResults as $foundBusiness){
            $results[] = $this->_formatInstance($foundBusiness);
        }
        return $results;
    }

    function yellowpages_call($bodyData){
        //This may or may not return the url im not sure.
        $url = 'http://pubapi.yp.com/search-api/search/devapi/search';

        $bodyStr = http_build_query($bodyData);
        $url = $url.'?'.$bodyStr;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_USERAGENT,Request()->header('user_agent'));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array());
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        $result = json_decode($result, true);
        return $result;
    }

    function yellowpages_details($bodyData){
        //unused at the moment
        $url = 'http://pubapi.yp.com/search-api/search/devapi/details';

        $bodyStr = http_build_query($bodyData);
        $url = $url.'?'.$bodyStr;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_USERAGENT,Request()->header('user_agent'));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array());
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        $result = json_decode($result, true);
        return $result;
    }

    function getBusinessName($sourceData){
        return $sourceData['businessName'];
    }
    function getBusinessPhoneNumber($sourceData){
        $phone = (!empty($sourceData['phone']))?($sourceData['phone']):(null);
        return $phone;
    }

    function getBusinessEmail($sourceData){return null;}

    function getBusinessAddress($sourceData){return null;}

    function getBusinessWebsite($sourceData){
        return !empty($sourceData['websiteURL'])?($sourceData['websiteURL']):(null);
    }

    function getBusinessCategory($sourceData){
        $category = (!empty($sourceData['primaryCategory']))?($sourceData['primaryCategory']):(null);
        return $category;
    }

    function getBusinessLinks($sourceData){return null;}

    function getCustomerName($sourceData){return null;}
    function getCustomerEmails($sourceData){return null;}
    function getCustomerPhoneNumbers($sourceData){return null;}

}