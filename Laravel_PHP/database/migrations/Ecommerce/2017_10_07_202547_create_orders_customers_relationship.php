<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersCustomersRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function(Blueprint $table) {
            $table->bigInteger('customer_id')->unsigned()->nullable();
            $table->foreign("customer_id", "fk_order_customer")
                ->references("id")->on("customers");
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("orders", function(Blueprint $table){
            $table->dropForeign("fk_order_customer");
            $table->dropColumn("customer_id");
        });
    }
}
