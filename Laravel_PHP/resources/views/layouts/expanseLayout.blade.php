@include('includes/head')
<body>
    <div id="app">
        <div>
            <header id="header">
                @include('header/header')
            </header>
            <div class="container banner-container">
                @yield('banner')
            </div>
            <div class="container">
                @yield('sectionone')
                @yield('sectiontwo')
                @yield('sectionthree')
                @yield('sectionfour')
            </div>

            @include('modals/contactUs')
        </div>
    </div>
    <footer>
        @include('includes/vue')
        @include('footer/footer')
    </footer>
</body>

</html>