<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Events\NewInquiryEvent;

use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use App\Models\Ecommerce\ShippingOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Api\ApiController;

class ShippingOptionsController extends ApiController
{
    function __construct(){
    }

    private $rules = array(
    );

    /**
     * Retrieve all existing shipping options
     * @param Request $request
     */
    function getOptions(Request $request){
        return Response(
            [
                [
                    'text'=>'Pickup - free',
                    'cost'=> 0
                ],
                [
                    'text'=>'Standard - 10$',
                    'cost'=> 10
                ],
                [
                    'text'=>'Premium - 20$',
                    'cost'=> 20
                ]
            ],
            200
        );
    }

    /**
     * Retrieve a single shipping option
     * @param ShippingOption $shippingOption
     */
    function getOption(ShippingOption $shippingOption){}

    /**
     * Add a new shipping option
     * @param Request $request
     */
    function addOption(Request $request){}

    /**
     * Remove a shipping option
     * @param Request $request
     */
    function removeOption(Request $request){}

    /**
     * Edit a shipping option
     * @param ShippingOption $option
     */
    function editOption(ShippingOption $option){}
}
