<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->dateTime('date_order_filled')->nullable();
            $table->decimal('order_total');
            $table->decimal('tax_total');
            $table->boolean('canceled')->default(false);
            $table->boolean('refunded')->default(false);
            $table->text('order_details')->nullable();
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
        Schema::table("product_images", function(Blueprint $table){
            $table->dropForeign("fk_product_image_product");
            $table->dropColumn("product_id");
        });

        Schema::drop('product_images');
    }
}
