<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Events\NewInquiryEvent;

use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use App\Models\Ecommerce\PaymentType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Api\ApiController;

class PaymentTypesController extends ApiController
{
    function __construct(){
    }

    private $rules = array(
    );

    /**
     * Retrieve a single payment type instance
     * @param PaymentType $paymentType
     */
    function getPaymentType(PaymentType $paymentType){}

    /**
     * Retrieve all existing payment types
     * @param Request $request
     */
    function getPaymentTypes(Request $request){}

    /**
     * Add a new payment type
     * @param Request $request
     */
    function addPaymentType(Request $request){}

    /**
     * Remove an existing payment type
     * @param Request $request
     */
    function removePaymentType(Request $request){}

    /**
     * Edit a shipping option
     * @param Request $request
     */
    function editPaymentType(Request $request){}



}
