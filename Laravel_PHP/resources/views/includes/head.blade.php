<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="ExpanseServices specializes in Website Design, Development, and marketing. We are headquartered in Jefferson City, Missouri.">
    <meta NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
    <meta name="_token" content="{ csrf_token() }"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" type="image/x-icon" href="/imgs/FaviconExpanse.png">
    <title>@yield('title')</title>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-102757380-1', 'auto');
        ga('send', 'pageview');
    </script>
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '1271724412938363',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
            fbApiInit = true; //init flag
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- Include all required JS/CSS global files -->
    @include('includes/globals')
    @yield('page-links')
</head>