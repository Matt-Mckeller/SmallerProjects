<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = 'orders';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'date_order_filled',
        'order_total',
        'tax_total',
        'canceled',
        'refunded',
        'order_details'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function shippingOption()
    {
        return $this->hasOne(ShippingOption::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
