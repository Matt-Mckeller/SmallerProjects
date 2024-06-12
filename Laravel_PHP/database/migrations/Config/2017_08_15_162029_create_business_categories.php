<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Models\Businesses\BusinessCategory;

class CreateBusinessCategories extends Migration
{
    var $categories = array();

    function __construct()
    {
        $this->categories[] = 'Dentist';
        $this->categories[] = 'Lawn care';
        $this->categories[] = 'Landscaping';
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Begin population of db
        foreach ($this->categories as $category){
            $Object = BusinessCategory::firstOrNew(['category'=>$category]); //Find a matching record or instantiate an object
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
