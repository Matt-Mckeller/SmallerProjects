<?php

namespace App\Models\Customers;

use Illuminate\Database\Eloquent\Model;

/**
 * Class email_addresses
 * @package App\Models
 * @version November 23, 2016, 9:28 pm UTC
 */
class EmailAddress extends Model
{
    public $table = 'email_addresses';
    public $timestamps = true;
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
        'emailAddress',
        'is_active',
        'is_primary'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_address' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

}
