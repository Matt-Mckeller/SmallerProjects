<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsCustomersRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function(Blueprint $table) {
            $table->bigInteger('customer_id')->unsigned()->nullable();
            $table->foreign("customer_id", "fk_customer_payment")
                ->references("id")->on("payments");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("payments", function(Blueprint $table){
            $table->dropForeign("fk_customer_payment");
            $table->dropColumn("customer_id");
        });
    }
}
