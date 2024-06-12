<?php
namespace App\Repositories\Businesses;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use App\Models\Places\Place;


class BusinessRepository
{
    protected $businessSources = array();
    function __construct(){
        $classes = getAllClassesInDirectory(__DIR__.'/BusinessSources');
        foreach($classes as $class){
            $instance = new $class();
            $this->businessSources[$instance->getSourceName()] = $instance;
        }
    }

    /*
     *
     */
    function searchForBusinesses(Place $place, $query){
        $results = array();
        foreach($this->businessSources as $sourceName=>$businessSource){
            $businessSource->addPlace($place);
            $businessSource->setFilter('query', $query);
            $results[$sourceName] = $businessSource->find($place, $query);
        }
        return $results;
    }
}