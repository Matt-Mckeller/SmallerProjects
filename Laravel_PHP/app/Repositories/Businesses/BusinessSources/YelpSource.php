<?php
namespace App\Repositories\Businesses\BusinessSources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use App\Models\Places\Place;
use App\Repositories\Businesses\BusinessSource;

class YelpSource extends BusinessSource
{
    protected $sourceName = 'Yelp';

    function _find(Place $place, $filters){
        $searchData = array (
            'term'=>$filters['query'],
            'location'=>$place->query
        );

        $businessSearchResults = $this->searchBusinesses($searchData);
        $allBusinessDetails = $this->parseDetailedBusinessData($businessSearchResults);

        return $allBusinessDetails;
    }

    function parseDetailedBusinessData($businessSearchResults){
        $businesses = $businessSearchResults['businesses'];
        $allBusinessDetails = array();
        foreach($businesses as $index=>$business){
            $allBusinessDetails[$business['id']]['details'] = $this->getBusinessDetails($business['id']);
            $allBusinessDetails[$business['id']]['original'] = $business;
        }
        return $allBusinessDetails;
    }

    function _formatAllInstances($businessResults){
        $results = array();
        foreach($businessResults as $foundBusiness){
            if(!empty($foundBusiness['details']['error'])){
                $results[] = $this->_formatInstance($foundBusiness['original']);
            }else {
                $results[] = $this->_formatInstance($foundBusiness['details']);
            }
        }
        return $results;
    }

    function getBusinessDetails($businessID){
        $url = 'https://api.yelp.com/v3/businesses';
        $token = $this->getAccessToken();
        $headers = array();
        $headers[] = 'Authorization: Bearer '.$token;
        $url = $url.'/'.$businessID;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        return json_decode($result, true);
    }

    function searchBusinesses($bodyData){
        $url = 'https://api.yelp.com/v3/businesses/search';
        $token = $this->getAccessToken();
        $headers = array();
        $headers[] = 'Authorization: Bearer '.$token;
        $bodyStr = http_build_query($bodyData);
        $url = $url.'?'.$bodyStr;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        return json_decode($result, true);
    }

    function getAccessToken(){
        $url = 'https://api.yelp.com/oauth2/token';

        $bodyData = array (
            'client_id' => config('yelp.client_id'),
            'client_secret' => config('yelp.client_secret'),
            'grant_type'=>'client_credentials'
        );

        $bodyStr = http_build_query($bodyData);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array());
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $bodyStr);
        $result = curl_exec($ch);
        $result = json_decode($result, true);
        return $result['access_token'];
    }



    function getBusinessName($sourceData){
        return $sourceData['name'];
    }

    function getBusinessPhoneNumber($sourceData){
        $numbers = [];
        $numbers[] = $sourceData['phone'];
        return $numbers;
    }

    function getBusinessEmail($sourceData){
        return null;
    }

    function getBusinessAddress($sourceData){
        return null;
    }
    function getBusinessWebsite($sourceData){
        $response = null;

        return $response;
    }
    function getBusinessCategory($sourceData){
        $response = null;
        if(!empty($sourceData['categories'])){
            $categories = json_decode($sourceData['categories'], true);
            if(!empty($categories) && !empty($categories['title'])){
                $response = $categories['title'];
            }
        }
        return $response;
    }
    function getBusinessLinks($sourceData){
        $response = array();
        return $response;
    }

    function getCustomerName($sourceData){
        return null;

    }
    function getCustomerEmails($sourceData){
        return null;
    }
    function getCustomerPhoneNumbers($sourceData){
        return null;
    }
}