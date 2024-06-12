<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersPaymentsRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function(Blueprint $table) {
            $table->bigInteger('order_id')->unsigned()->nullable();
            $table->foreign("order_id", "fk_payments_orders")
                ->references("id")->on("orders");
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
            $table->dropForeign("fk_payments_orders");
            $table->dropColumn("order_id");
        });
    }
}
