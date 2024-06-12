<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsPaymentTypesRelationship extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function(Blueprint $table) {
            $table->bigInteger('payment_type_id')->unsigned()->nullable();
            $table->foreign("payment_type_id", "fk_payments_payment_types")
                ->references("id")->on("payment_types");
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
            $table->dropForeign("fk_payments_payment_types");
            $table->dropColumn("payment_type_id");
        });
    }
}
