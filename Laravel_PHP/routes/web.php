<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'Home\HomeController@index');
Route::get('', 'Home\HomeController@index');
Route::get('/findBusinesses', 'Custom\FindBusinesses@find');
Route::get('/foursquare-redirect', 'Custom\FindBusinesses@foursquareRedirect');