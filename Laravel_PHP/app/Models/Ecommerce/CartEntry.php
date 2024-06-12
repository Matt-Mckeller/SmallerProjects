<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use App\Models\Session\Session;
use Illuminate\Database\Eloquent\Model;

class CartEntry extends Model
{
    public $table = '_orders_products';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function product()
    {
        return $this->hasOne(Product::class);
    }


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
    public function session()
    {
        return $this->hasOne(Session::class);
    }
}
