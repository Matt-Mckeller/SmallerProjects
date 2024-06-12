<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
class FourSquareProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {


        $this->app->singleton('FourSquareAccessor', function(){
            $client = new \TheTwelve\Foursquare\HttpClient\CurlHttpClient(base_path()."/vendor/haxx-se/curl/cacert.pem");
            $redirector = new \TheTwelve\Foursquare\Redirector\HeaderRedirector();
            $factory = new \TheTwelve\Foursquare\ApiGatewayFactory($client, $redirector);

            // Required for most requests
            $factory->setClientCredentials(config('foursquare.client_id'), config('foursquare.client_secret'));
            // Optional (only use these if you know what you're doing)
            $factory->setEndpointUri('https://api.foursquare.com');
            $factory->useVersion(config('foursquare.v'));

            return $factory;
        });
    }
}
