<?php
namespace App\Repositories\Businesses;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use App\Models\Places\Place;


abstract Class BusinessSource
{
    protected $filters = array();
    protected $places = array();
    protected $formattedResults = array();
    protected $sourceName;

    function find(){
        $allData = [];
        foreach($this->places as $place){
            $result = $this->_find($place, $this->filters);
            $formattedResult = $this->_formatAllInstances($result);
            $allData[$place->name] = array(
                'place'=>$place,
                'result'=>$formattedResult
            );
        }
        return $allData;
    }

    abstract function _find(Place $place, $filters);

    function _formatAllInstances($businessResults){
        $results = array();
        foreach($businessResults as $foundBusiness){
            $results[] = $this->_formatInstance($foundBusiness);
        }
        return $results;
    }

    function _formatInstance($instanceData){
        $instanceResult = array(
            'business'=>$this->getBusinessData($instanceData),
            'customer'=>$this->getCustomerData($instanceData),
            'full'=>$this->getExtraSourceData($instanceData)
        );
        return $instanceResult;
    }

    function getBusinessData($sourceData){
        return array(
            'name'=>$this->getBusinessName($sourceData),
            'phone'=>$this->getBusinessPhoneNumber($sourceData),
            'email'=>$this->getBusinessEmail($sourceData),
            'address'=>$this->getBusinessAddress($sourceData),
            'website'=>$this->getBusinessWebsite($sourceData),
            'links'=>$this->getBusinessLinks($sourceData),
        );
    }

    function getCustomerData($sourceData){
        return array(
            'name'=>$this->getCustomerName($sourceData),
            'email'=>$this->getCustomerEmails($sourceData),
            'phone'=>$this->getCustomerPhoneNumbers($sourceData)
        );
    }
    function getExtraSourceData($sourceData){
        return $sourceData;
    }

    abstract function getBusinessName($sourceData);
    abstract function getBusinessPhoneNumber($sourceData);
    abstract function getBusinessEmail($sourceData);
    abstract function getBusinessAddress($sourceData);
    abstract function getBusinessWebsite($sourceData);
    abstract function getBusinessCategory($sourceData);
    abstract function getBusinessLinks($sourceData);

    abstract function getCustomerName($sourceData);
    abstract function getCustomerEmails($sourceData);
    abstract function getCustomerPhoneNumbers($sourceData);



    function setFilter($key, $value){
        $this->filters[$key] = $value;
    }

    function addPlace(Place $place){
        $this->places[] = $place;
    }

    function getSourceName(){
        return $this->sourceName;
    }
}