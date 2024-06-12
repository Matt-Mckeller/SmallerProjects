<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Models\Places\Place;

class AddPlaces extends Migration
{
    var $places = array();

    function __construct()
    {
        $this->places[] = array(
            'name'=>'Jefferson City',
            'coordinates'=>'38.5767, -92.174782',
            'query'=>'Jefferson City, Missouri',
            'radius'=>25000
        );
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Begin population of db
        foreach ($this->places as $place){
            $Object = Place::firstOrNew($place); //Find a matching record or instantiate an object
            if(!$Object->exists){//The model does not currently exist, create it.
                $Object->save();
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        echo "Cannot revert config entries. Must be done manually.".PHP_EOL;
        return;
    }
}
