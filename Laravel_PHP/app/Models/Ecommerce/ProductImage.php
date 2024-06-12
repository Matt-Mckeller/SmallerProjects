<?php

namespace App\Models\Ecommerce;

use App\Models\Customers\Customer;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    public $table = 'product_images';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    public $fillable = [
        'image'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
