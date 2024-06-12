<?php

namespace App\Models\Session;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    public $table = 'sessions';
    public $timestamps = false;

    public $fillable = [
    ];
}
