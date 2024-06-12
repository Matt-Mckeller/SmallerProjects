<?php

namespace App\Listeners;

use App\Events\NewInquiryEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendTeamNewInquiryNotificationEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewInquiryEvent  $event
     * @return void
     */
    public function handle(NewInquiryEvent $event)
    {
        //
    }
}
