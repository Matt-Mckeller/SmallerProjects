<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Models\Ecommerce\PaymentType;

class AddInitialPaymentMethods extends ConfigMigration
{
    var $entries = array();

    function __construct()
    {
        $this->entries[] = array(
            'name'=>'Credit card'
        );
        $this->entries[] = array(
            'name'=>'Debit card'
        );
        $this->entries[] = array(
            'name'=>'Cash'
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
            $Object = PaymentType::firstOrNew($entry); //Find a matching record or instantiate an object
            if(!$Object->exists){//The model does not currently exist, create it.
                $Object->save();
            }
        }
    }
}
