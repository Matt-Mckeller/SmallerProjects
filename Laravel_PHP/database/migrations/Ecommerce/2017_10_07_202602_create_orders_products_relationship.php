<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersProductsRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_orders_products', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->timestamps();
        });
        Schema::table('_orders_products', function(Blueprint $table) {
            $table->bigInteger('product_id')->unsigned()->nullable();
            $table->foreign("product_id", "fk_products_orders")
                ->references("id")->on("products");
        });
        Schema::table('_orders_products', function(Blueprint $table) {
            $table->bigInteger('order_id')->unsigned()->nullable();
            $table->foreign("order_id", "fk_orders_products")
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
        Schema::table("_orders_products", function(Blueprint $table){
            $table->dropForeign("fk_products_orders");
            $table->dropColumn("product_id");
        });
        Schema::table("_orders_products", function(Blueprint $table){
            $table->dropForeign("fk_orders_products");
            $table->dropColumn("order_id");
        });
        Schema::drop('_orders_products');
    }
}
