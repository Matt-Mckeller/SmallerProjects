<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_cart_products', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();

            $table->bigInteger('customer_id')->unsigned()->nullable();
            $table->foreign("customer_id", "fk_customer_cart_items")
                ->references("id")->on("customers");

            $table->bigInteger('product_id')->unsigned()->nullable();
            $table->foreign("product_id", "fk_products_customers")
                ->references("id")->on("products");

            $table->bigInteger('session_id')->unsigned()->nullable();
            $table->foreign("session_id", "fk_cart_items_session")
                ->references("id")->on("sessions");

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
        Schema::table("_cart_products", function(Blueprint $table){
            $table->dropForeign("fk_customer_cart_items");
            $table->dropColumn("customer_id");

            $table->dropForeign("fk_products_customers");
            $table->dropColumn("product_id");

            $table->dropForeign("session_id");
            $table->dropColumn("fk_cart_items_session");
        });

        Schema::drop('products');
    }
}
