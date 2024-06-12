<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlacesTable extends Migration
{
    public function up()
    {
        Schema::create('places', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->string('name',255)->nullable();
            $table->string('coordinates',255)->nullable();
            $table->string('query',255)->nullable();
            $table->string('radius',255)->nullable();
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
        Schema::drop('places');
    }
}
