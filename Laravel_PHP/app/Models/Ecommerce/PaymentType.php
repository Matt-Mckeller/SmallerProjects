<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    public $table = 'payment_types';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'name'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
