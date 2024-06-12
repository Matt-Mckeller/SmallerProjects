<?php

namespace App\Providers;

use App\Repositories\Businesses\BusinessRepository;
use Illuminate\Support\ServiceProvider;

class BusinessServiceProvider extends ServiceProvider
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
        $this->app->singleton('BusinessRepository', function(){
            return new BusinessRepository();
        });
    }
}
