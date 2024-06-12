<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoursquareDataTable extends Migration
{
    public function up()
    {
        Schema::create('foursquare_data', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('foursquare_data');
    }
}
