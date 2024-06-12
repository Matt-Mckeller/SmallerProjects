<?php

namespace App\Http\Controllers\Api;

use App\Events\NewInquiryEvent;
use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    private $errors;

    function __construct(){
//        $this->CustomerRepository = App::make('CustomerRepository');
    }

    private $rules = array(
        'contactName' => 'nameRegex',
        'emailAddress' => 'email',
        'phoneNumber' => 'phoneRegex',
        'streetAddress1' => 'addressRegex',
        'streetAddress2' => 'addressRegex',
        'city' => 'addressRegex',
        'state' => 'state',
        'country' => 'country',
        'zip' => 'zip'
    );

    public function validateInput($data) {
        //Make a new validator object
        $validator = Validator::make($data, $this->rules);
        //Check for validation fail
        if($validator->fails()) {
            //Store errors and return
            $this->errors = $validator->errors();
            return false;
        }
        return true;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function submitContactForm(Request $request)
    {
        $input = $request->all();
        $validData = $this->validateInput($input);
        if($validData == true) {
            $customer = $this->saveCustomer($request);

            if($request->has("phone")) {
                $phone = $this->savePhone($request);

                $phone->customer()->associate($customer)->save();
            }
            if($request->has("email")) {
                $email = $this->saveEmail($request);
                $email->customer()->associate($customer)->save();
            }

            if($request->has("streetAddress1")
                || $request->has("streetAddress2")
                || $request->has("city")
                || $request->has("state")
                || $request->has("zip")
                || $request->has("country")
            ) {
                $address = $this->saveAddress($request);
                $address->customer()->associate($customer)->save();
            }
            event(new NewInquiryEvent($customer));
            return Redirect('/');
        }else {
            return response($this->errors, 500);
        }
    }

    function saveCustomer(Request $request){
        $customer = new Customer();
        $customer->fullName = $request->input('contactName', null);
        $customer->estimatedBudget = $request->input('estimatedBudget', null);
        $customer->role = $request->input('role', null);
        $customer->startTimeframe = $request->input('startTimeframe', null);
        $customer->website = $request->input('website', null);
        $customer->saveOrFail();
        return $customer;
    }

    function savePhone(Request $request){
        $phone = new PhoneNumber();
        $phone->phoneNumber = $request->input("phone");
        $phone->is_active = $request->input("isActive", 1);
        $phone->is_primary = $request->input("isPrimary", 1);
        $phone->save();
        return $phone;
    }

    function saveEmail(Request $request){
        $email = new EmailAddress();
        $email->emailAddress = $request->input("email");
        $email->is_active = $request->input("isActive", 1);
        $email->is_primary = $request->input("isPrimary", 1);
        $email->save();
        return $email;
    }

    function saveAddress(Request $request){
        $address = new Address();
        $address->streetAddress1 = $request->input("streetAddress1", null);
        $address->streetAddress2 = $request->input("streetAddress2", null);
        $address->city = $request->input("city", null);
        $address->state = $request->input("state", null);
        $address->zip = $request->input("zip", null);
        $address->country = $request->input("country", null);
        $address->is_primary = 1;
        $address->save();
        return $address;
    }
}
