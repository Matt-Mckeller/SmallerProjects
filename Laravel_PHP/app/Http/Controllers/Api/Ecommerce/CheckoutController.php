<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Events\NewInquiryEvent;
use App\Http\Controllers\Controller;
use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Api\ApiController;

class CheckoutController extends Controller
{
    public function index(){

    }

    public function checkout(Request $request) {
//        pretty_print_r($request->all());
        $inputData = $request->all();
        \Stripe\Stripe::setApiKey(config('stripe.apiKey'));
        $cost = $this->calculateTotal($inputData['products'], $inputData['shippingSelection']);
        $stripeAmount = $this->convertToStripeAmount($cost);
        $customer = $this->saveCustomer($inputData);

        $charge = \Stripe\Charge::create(array(
            "amount" => $stripeAmount,
            "currency" => "usd",
            "description"=> "VintageHails purchase.",
            "source" => $request->input('stripeToken')
        ));

        $successful = ($charge['status'] == 'succeeded')?(true):(false);
        if($successful == true){
            return Response(array(
                'success'=>$successful
            ));
        }else{
            $error = ($charge['status'] == 'error')?(true):(false);
            $errorMessage = ($error==true) ?
                ($this->getStripeErrorMessage($charge['status'])) : ('');
            return Response(
                array(
                    'error'=>$error,
                    'errorMessage'=>$errorMessage
                )
            );
        }
    }

    function calculateTotal($products, $shippingSelection){
        $total = 0.00;
        foreach($products as $product){
            $total += $product['price'];
        }
        $total += $shippingSelection['cost'];
        return $total;
    }

    function saveCustomer($data){

    }

    function convertToStripeAmount($usd){
        return $usd*100;
    }

    function getStripeErrorMessage($status){
        return 'An error occurred, status was: ' . $status;
    }
}
