<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Events\NewInquiryEvent;
use App\Models\Customers\Address;
use App\Models\Customers\Customer;
use App\Models\Customers\EmailAddress;
use App\Models\Customers\PhoneNumber;
use App\Models\Ecommerce\Product;
use App\Models\Ecommerce\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

use App\Http\Controllers\Api\ApiController;

class ProductImageController extends ApiController
{
    function __construct(){

    }

    private $rules = array(
    );

    /**
     * Returns the requested product image object
     * @param ProductImage $productImage
     * @return ProductImage
     */
    function getImage(ProductImage $productImage){
        return Response($productImage, 200);
    }

    /**
     * Creates a new image and adds it to a product.
     * @param Request $request -- Image upload data, image name, product to associate image with
     * @return ProductImage
     */
    function addImage(Request $request){
        $path = $request->file->store('imgs/productImages', 'public');
        $path = 'storage/'.$path;
        $productImage = new ProductImage([
            'image'=>$path
        ]);
        $productImage->save();
        return $productImage;
    }

    /**
     * Removes an image from a product
     * @param ProductImage $productImage -- ProductImage
     * @return boolean
     */
    function removeImage(ProductImage $productImage){
        $productImage->product_id = null;
        $productImage->save();
        return Response($productImage, 200);
    }

    /**
     * Edit an image's data
     * @param Request $request
     */
    function editImage(Request $request){}
}
