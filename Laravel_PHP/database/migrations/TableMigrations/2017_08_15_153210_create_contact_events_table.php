<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_events', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->timestamp('timestamp')->nullable();
            $table->boolean('outgoing_contact')->nullable();
            $table->boolean('incoming_contact')->nullable();
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
        Schema::drop('businessesCategories');
    }
}
