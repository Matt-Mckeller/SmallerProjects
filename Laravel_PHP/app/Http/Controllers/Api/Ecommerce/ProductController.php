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
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Api\ApiController;

class ProductController extends ApiController
{
    function __construct(){

    }

    private $rules = array(
    );


    /**
     * Get information about an individual product
     * @param Product $product
     */
    function getProduct(Product $product){
        $product->load('productImages');
        return Response($product, 200);
    }

    /**
     * Get information about many products
     * @param Request $request
     */
    function getProducts(Request $request){
        $products = new Product();
        $products = $products->get();
        $products->load('productImages');
        return Response($products);
    }

    /**
     * Add a new product to the database
     * @param Request $request
     */
    function createProduct(Request $request){
        $productData = $request->input('product');
        $product = new Product($productData);
        $product->quantity_available = 1;
        $product->save();
        if(!empty($productData['product_images'])){
            foreach($productData['product_images'] as $image) {
                $productImage = new ProductImage();
                $productImage = $productImage->find($image['id']);
                $product->productImages()->save($productImage);
            }
        }

        $product->load('productImages');
        return Response($product, 200);
    }

    /**
     * Edit an existing product
     * @param Product $product
     */
    function editProduct(Product $product, Request $request){
        $editedProduct = Product::findOrFail($product->id);
        // Quantity cannot be edited
        $editedProduct->id = $request->input('product.id', $product->id);
        $editedProduct->name = $request->input('product.name', $product->name);
        $editedProduct->price = $request->input('product.price', $product->price);
        $editedProduct->description = $request->input('product.description', $product->description);
        $editedProduct->save();


        $editedImages = $request->input('product.product_images', false);
        if(!empty($editedImages)){
            foreach($editedImages as $image) {
                $productImage = new ProductImage();
                $productImage = $productImage->find($image['id']);
                $editedProduct->productImages()->save($productImage);
            }
        }

        $product->load('productImages');
        return Response($product, 200);
    }

    /**
     * Soft delete an existing product
     * @param Product $product
     */
    function removeProduct(Product $product){
        $productToDelete = Product::findOrFail($product->id);
        $success = $productToDelete->delete();

        return Response(array('success'=>$success), 200);
    }

    /**
     * Set an existing image as the primary image for a product.
     * @param Request $request
     */
    function setPrimaryImage(Request $request){}

    /**
     * Update the order in which the product images appear for a product.
     * @param Request $request
     */
    function updateImageOrder(Request $request){}

}
