<?php

namespace App\Models\Customers;

use Illuminate\Database\Eloquent\Model;
use Monolog\Processor\GitProcessor;

/**
 * Class phone_numbers
 * @package App\Models
 * @version November 23, 2016, 9:29 pm UTC
 */
class PhoneNumber extends Model
{

    public $table = 'phone_numbers';
    public $timestamps = true;
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'phoneNumber',
        'is_primary',
        'is_active'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'phoneNumber' => 'string'
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
