<?php
namespace App\Repositories\Businesses\BusinessSources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use App\Models\Places\Place;
use App\Repositories\Businesses\BusinessSource;

class FoursquareSource extends BusinessSource
{
    protected $sourceName = 'Foursquare';

    function _find(Place $place, $filters){
        $foursquare = App::make('FourSquareAccessor');
        $gateway = $foursquare->getVenuesGateway();

        $venues = $gateway->search(array(
            'll' => $place->coordinates,
            'query' => $filters['query'],
            'radius' => $place->radius,
            'intent' => 'browse'
        ));

        return $venues;
    }

    function _formatAllInstances($businessResults){
        $results = array();
        foreach($businessResults as $foundBusiness){
            $businessDecoded = json_decode(json_encode($foundBusiness), true);
            $results[] = $this->_formatInstance($businessDecoded);
        }
        return $results;
    }

    function getBusinessName($sourceData){
        return $sourceData['name'];
    }

    function getBusinessPhoneNumber($sourceData){
        $contactInfo = (!empty($sourceData['contact']))?($sourceData['contact']):(null);
        $phone = (!empty($contactInfo))?($contactInfo['phone']):(null);
        return $phone;
    }

    function getBusinessEmail($sourceData){return null;}

    function getBusinessAddress($sourceData){return null;}

    function getBusinessWebsite($sourceData){
        return !empty($sourceData['url'])?($sourceData['url']):(null);
    }

    function getBusinessCategory($sourceData){
        //todo fix categories display?
        $categories = (!empty($sourceData['categories']))?($sourceData['categories']):(null);
        $category = (!empty($category) && !empty($category[0]['name']))?($category[0]['name']):(null);
        return $category;
    }

    function getBusinessLinks($sourceData){
        $links = array();
        $possibleLinks = array(
            'twitter',
            'facebook',
            'facebookUsername',
            'facebookName'
        );
        $contactInfo = (!empty($sourceData['contact']))?($sourceData['contact']):(null);
        foreach($possibleLinks as $possibleLinkName){
            $link = (!empty($contactInfo) && !empty($contactInfo[$possibleLinkName]))?($contactInfo[$possibleLinkName]):(null);
            $links[$possibleLinkName] = $link;

        }

        return $links;
    }

    function getCustomerName($sourceData){return null;}
    function getCustomerEmails($sourceData){return null;}
    function getCustomerPhoneNumbers($sourceData){return null;}

}