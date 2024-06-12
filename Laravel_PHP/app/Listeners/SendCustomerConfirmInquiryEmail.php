<?php

namespace App\Listeners;

use App\Events\NewInquiryEvent;
use App\Mail\TeamNotificationEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendCustomerConfirmInquiryEmail
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
        Mail::to('mattmckeller@gmail.com')->send(new TeamNotificationEmail($event->customer));
    }
}
