@include('includes/head')
<body>
    <div id="app">
        <div>
            <header id="header">
                @include('header/header')
            </header>
            <md-sidenav class="md-left vm-menu-custom" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <div class="">
                <md-toolbar id="side-toolbar" class="">
                    <div id="side-toolbar-header" class="md-toolbar-container">
                        <h3 id="side-toolbar-text" class="md-title">Menu</h3>
                    </div>
                </md-toolbar>
                <div class="pagination-container">
                    <scrollify-nav :nav-config="navConfigData" :nav-items="navElements" class="left"></scrollify-nav>
                </div>
            </div>
            </md-sidenav>

            <div class="main-body-container">
                <div class="left-nav-container">

                </div>

                <div class="container">
                    <div class="scrollify-section" data-section-name="home">
                        @yield('banner')
                    </div>
                    <div class="scrollify-section" data-section-name="services">
                        @yield('sectionone')
                    </div>
                    <div class="scrollify-section" data-section-name="responsive-design">
                        @yield('sectiontwo')
                    </div>
                    <div class="scrollify-section" data-section-name="grow-your-business">
                        @yield('sectionthree')
                    </div>
                    <div class="scrollify-section" data-section-name="web-design-statistics">
                        @yield('sectionfour')
                    </div>
                    <div class="scrollify-section" data-section-name="web-design-statistics-cont">
                        @yield('sectionfive')
                    </div>
                </div>

                <div class="right-nav-container"></div>
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