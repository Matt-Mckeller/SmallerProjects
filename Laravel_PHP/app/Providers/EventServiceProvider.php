<?php

namespace App\Providers;

use App\Listeners\SendCustomerConfirmInquiryEmail;
use App\Listeners\SendTeamNewInquiryNotificationEmail;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\NewInquiryEvent;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
        NewInquiryEvent::class=>[
            SendCustomerConfirmInquiryEmail::class,
            SendTeamNewInquiryNotificationEmail::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
