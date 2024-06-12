<?php

return [
    'logo' => env('SITE_LOGO', 'assets/img/logos/spaceholder-logo.svg'),
    'sidebar-title' => env('SIDEBAR_TITLE', 'Temporary Title'),
    'footer-logo' => env('FOOTER_LOGO', 'assets/img/logos/spaceholder-logo.svg'),

    'pages'=>array(
        'pageOne'
    ),
    'banner'=>array(
        'h1'=>env('BANNER_H1', 'Addicted to Growth?'),
        'p'=>env('BANNER_P', 'You are in the right place! Growth is what the marketing industry is all about! Today\'s technology helps us reach more customers than ever with web, mobile, and social media marketing. Come grow with us.')
    ),
    'facebook-link'=>env('FACEBOOK_LINK', 'https://www.facebook.com/ExpanseServices'),
    'twitter-link'=>env('TWITTER_LINK', 'https://www.twitter.com/ExpanseServices'),
    'google-link'=>env('GOOGLE_LINK', 'https://plus.google.com/u/2/106861415837412617707'),

    'email-address'=>env('EMAIL_ADDRESS', 'expanseservices@gmail.com'),
    'phone-number'=>env('PHONE_NUMBER', '573-291-8667'),
];
