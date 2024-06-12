<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class ShippingOption extends Model
{
    public $table = 'shipping_options';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'name',
        'cost'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
