window._ = require('lodash');

window.Vue = require('vue');
require('vue-resource');

require('jquery-scrollify');
window['vue-easy-slider'] = require('vue-easy-slider');

import VueMaterial from 'vue-material'
Vue.use(VueMaterial);

import { Slider, SliderItem } from 'vue-easy-slider'

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
