<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_images', function(Blueprint $table)
        {
            $table->bigInteger('id', true)->unsigned();
            $table->string('image', 255);

            $table->bigInteger('product_id')->unsigned()->nullable();
            $table->foreign("product_id", "fk_product_image_product")
                ->references("id")->on("products");

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
