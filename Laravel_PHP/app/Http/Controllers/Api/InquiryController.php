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

class InquiryController extends Controller
{
    private $errors;

    function __construct(){
//        $this->CustomerRepository = App::make('CustomerRepository');
    }

    private $rules = array(
        'emailAddress' => 'email',
        'phoneNumber' => 'phoneRegex',
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
    public function saveInquiry(Request $request)
    {
        $input = $request->all();
        $validData = $this->validateInput($input);
        if($validData == true) {
            $customer = $this->saveCustomer($request);

            if($request->has("phoneNumber")) {
                $phone = $this->savePhone($request);

                $phone->customer()->associate($customer)->save();
            }
            if($request->has("emailAddress")) {
                $email = $this->saveEmail($request);
                $email->customer()->associate($customer)->save();
            }

            event(new NewInquiryEvent($customer));
            return Response(array('success'=>true), 200);
        }else {
            return response($this->errors, 500);
        }
    }

    function saveCustomer(Request $request){
        $customer = new Customer();
        $customer->saveOrFail();
        return $customer;
    }

    private function savePhone(Request $request){
        $phone = new PhoneNumber();
        $phone->phoneNumber = $request->input("phoneNumber");
        $phone->is_active = $request->input("isActive", 1);
        $phone->is_primary = $request->input("isPrimary", 1);
        $phone->save();
        return $phone;
    }

    private function saveEmail(Request $request){
        $email = new EmailAddress();
        $email->emailAddress = $request->input("emailAddress");
        $email->is_active = $request->input("isActive", 1);
        $email->is_primary = $request->input("isPrimary", 1);
        $email->save();
        return $email;
    }

}
