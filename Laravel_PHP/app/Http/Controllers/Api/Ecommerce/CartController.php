<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Events\NewInquiryEvent;

use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Api\ApiController;

class CartController extends ApiController
{
    function __construct(){
    }

    private $rules = array(
    );

    /**
     * Get current products in a customers cart
     * @param Request $request
     */
    function getProducts(Request $request){}

    /**
     * Add a product to a customers cart
     * @param Request $request
     */
    function addProduct(Request $request){}

    /**
     * Remove product from a customers cart
     * @param Request $request
     */
    function removeProduct(Request $request){}

    /**
     * Empty the customers cart of all products
     * @param Request $request
     */
    function emptyCart(Request $request){}



}
