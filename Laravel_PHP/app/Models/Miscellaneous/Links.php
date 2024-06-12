<?php

namespace App\Models\Miscellaneous;

use App\Models\Businesses\Business;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customers\PhoneNumber;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\Address;

/**
 * Class Customer
 * @package App\Models
 * @version November 23, 2016, 9:00 pm UTC
 */
class Links extends Model
{
    public $table = 'links';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'link_type',
        'link'
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
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function businesses()
    {
        return $this->hasMany(Business::class);
    }
}
