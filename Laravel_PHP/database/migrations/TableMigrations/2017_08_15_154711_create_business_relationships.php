<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBusinessRelationships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->bigInteger('business_id')->unsigned()->nullable();
            $table->foreign('business_id', 'fk_customers_businesses')->references('id')->on('businesses');
        });

        Schema::create('_businesses_business_categories', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();

            $table->bigInteger('business_id')->unsigned()->nullable();
            $table->bigInteger('business_category_id')->unsigned()->nullable();

            $table->foreign('business_id', 'business_business_category_foreign')->references('id')->on('businesses');
            $table->foreign('business_category_id', 'business_category_business_foreign')->references('id')->on('business_categories');

            $table->timestamps();
        });

        Schema::table('links', function (Blueprint $table) {
            $table->bigInteger('business_id')->unsigned()->nullable();
            $table->foreign('business_id', 'fk_links_businesses')->references('id')->on('businesses');
        });

        Schema::table('foursquare_data', function (Blueprint $table) {
            $table->bigInteger('business_id')->unsigned()->nullable();
            $table->foreign('business_id', 'fk_foursquare_data_businesses')->references('id')->on('businesses');
        });

        Schema::table('contact_events', function (Blueprint $table) {
            $table->bigInteger('business_id')->unsigned()->nullable();
            $table->foreign('business_id', 'fk_contact_events_businesses')->references('id')->on('businesses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('businesses', function (Blueprint $table) {
            $table->dropForeign('fk_customers_businesses');
            $table->dropColumn('business_id');
        });

        Schema::table('_businesses_business_categories', function (Blueprint $table) {
            $table->dropForeign('business_business_category_foreign');
            $table->dropForeign('business_category_business_foreign');
        });
        Schema::dropIfExists('_businesses_business_categories');

        Schema::table('links', function (Blueprint $table) {
            $table->dropForeign('fk_links_businesses');
            $table->dropColumn('business_id');
        });

        Schema::table('foursquare_data', function (Blueprint $table) {
            $table->dropForeign('fk_foursquare_data_businesses');
            $table->dropColumn('business_id');
        });

        Schema::table('contact_events', function (Blueprint $table) {
            $table->dropForeign('fk_contact_events_businesses');
            $table->dropColumn('business_id');
        });
    }
}
