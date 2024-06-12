const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //SASS files to compile and include
    mix.sass('main.scss', 'public/css/main.css');
    mix.webpack('bootstrap.js');
    mix.webpack('app.js');
    mix.scripts(['social/facebookMethods.js'], './public/js/social/facebookMethods.js');
    mix.scripts(['includes/scrollToggling.js'], './public/js/includes/scrollToggling.js');

    mix
        .scripts(['includes/moment.min.js'], './public/js/includes/moment.min.js');

    //SASS files to be compiled to specific directories
    mix.sass(["navigation/navigation.scss"], 'public/css/navigation/navigation.css');

    //Global JS files to include
    mix.scripts(['jquery/dist/jquery.min.js'], 'public/js/includes/jquery.js', 'node_modules');
    mix.scripts(['components/vue.min.js', 'components/vue-resource.min.js'], 'public/js/vendor.js');

    mix
        .scripts(['includes/sidebar.js'], './public/js/includes/sidebar.js');

});