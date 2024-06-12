<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBasicCustomerRelationships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("email_addresses", function(Blueprint $table){
            $table->bigInteger("customer_id", false, true)->nullable();
            $table->foreign("customer_id", "fk_customer_email_address")
                ->references("id")->on("customers")
                ->onDelete('cascade');
        });

        Schema::table("phone_numbers", function(Blueprint $table){
            $table->bigInteger("customer_id", false, true)->nullable();
            $table->foreign("customer_id", "fk_customer_phone_number")
                ->references("id")->on("customers")
                ->onDelete('cascade');
        });

        Schema::table("addresses", function(Blueprint $table){
            $table->bigInteger("customer_id", false, true)->nullable();
            $table->foreign("customer_id", "fk_customer_address")
                ->references("id")->on("customers")
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("addresses", function(Blueprint $table){
            $table->dropForeign("fk_customer_address");
            $table->dropColumn("customer_id");
        });

        Schema::table("phone_numbers", function(Blueprint $table){
            $table->dropForeign("fk_customer_phone_number");
            $table->dropColumn("customer_id");
        });

        Schema::table("email_addresses", function(Blueprint $table){
            $table->dropForeign("fk_customer_email_address");
            $table->dropColumn("customer_id");
        });
    }
}
