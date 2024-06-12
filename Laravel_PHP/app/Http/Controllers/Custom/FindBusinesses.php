<?php

namespace App\Http\Controllers\Custom;

use \App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Places\Place;

class FindBusinesses extends Controller
{
    protected $BusinessRepository;
    function __construct(){
        $this->BusinessRepository = App::make('BusinessRepository');

    }

    function find(){
        $term = 'Mowing';
        $place = new Place();
        $place = $place->where('name', 'Jefferson City')->first();
        $result = $this->BusinessRepository->searchForBusinesses($place, $term);

        return Response($result, 200);
    }

    function foursquareRedirect(Request $request){
        echo '????';
        $data = json_encode($request->all());
        Mail::to('mattmckeller@gmail.com')->send('??????? - '.$data);
    }
}
