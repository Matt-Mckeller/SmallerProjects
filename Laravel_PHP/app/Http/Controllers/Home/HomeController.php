<?php
namespace App\Http\Controllers\Home;

use Faker\Provider\DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Event;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    function __construct(){
    }

    public function index() {
        return "nope.avi";
//        return view('pages/landing');
    }

}