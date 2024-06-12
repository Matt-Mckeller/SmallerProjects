<?php

namespace App\Models\Businesses;

use Illuminate\Database\Eloquent\Model;
use App\Models\Customers\PhoneNumber;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\Address;

/**
 * Class Customer
 * @package App\Models
 * @version November 23, 2016, 9:00 pm UTC
 */
class ContactEvents extends Model
{
    public $table = 'contact_events';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'timestamp'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public $rules = [
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function business()
    {
        return $this->hasOne(Business::class);
    }
}
