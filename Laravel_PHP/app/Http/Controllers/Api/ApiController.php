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

abstract class ApiController extends Controller
{
    private $errors;

    private $rules = array();

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

}
