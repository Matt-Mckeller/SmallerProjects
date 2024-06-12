<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Models\Ecommerce\ShippingOption;

class AddInitialShippingOptions extends ConfigMigration
{
    var $entries = array();

    function __construct()
    {
        $this->entries[] = array(
            'name'=>'Standard Shipping',
            'cost'=>10.00
        );
        $this->entries[] = array(
            'name'=>'Pickup',
            'cost'=>0
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
        foreach ($this->entries as $entry){
            $Object = ShippingOption::firstOrNew($entry); //Find a matching record or instantiate an object
            if(!$Object->exists){//The model does not currently exist, create it.
                $Object->save();
            }
        }
    }
}
