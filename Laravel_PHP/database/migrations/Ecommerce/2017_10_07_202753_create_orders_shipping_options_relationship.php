<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersShippingOptionsRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function(Blueprint $table) {
            $table->bigInteger('shipping_option_id')->unsigned()->nullable();
            $table->foreign("shipping_option_id", "fk_order_shipping_option")
                ->references("id")->on("shipping_options");
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
            $table->dropForeign("fk_order_shipping_option");
            $table->dropColumn("shipping_option_id");
        });
    }
}
