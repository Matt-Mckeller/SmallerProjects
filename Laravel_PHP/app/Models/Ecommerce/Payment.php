<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public $table = 'payments';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'total_amount',
        'tax_amount',
        'payment_details'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function paymentType()
    {
        return $this->hasOne(PaymentType::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function order()
    {
        return $this->hasOne(Order::class);
    }
}
