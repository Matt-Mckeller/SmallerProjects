<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Expanse\Encryption\ExpanseEncryption;

class ExpanseEncryptionServiceProvider extends ServiceProvider
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
        $this->app->singleton('ExpanseEncryption', function($app){
            return new ExpanseEncryption($app);
        });
    }
}
