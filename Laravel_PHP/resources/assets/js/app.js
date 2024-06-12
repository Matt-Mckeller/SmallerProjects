
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./components/contactUs/contactUs');
require('./components/nav/scrollifyNav');
require('./components/slider/sliderOne');
var VueMaterial = require('vue-material');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));
//Vue.config.devtools = true;

//Vue.component('modal', {
//    template: require('./components/contactUs/contactUs.html')
//});


vueApp = new Vue({
    el: '#app',

    data: {
        showContactUsModal: false,
        navConfigData: {
            menuIcon:'',
            displayMenuIcon:true,
            currentColorClass:'white',
        },
        navElements:[]
    },
    methods: {
        addNavElement(menuObject){
            this.navElements.push(menuObject);
        },
        switchActiveNav(val){
            $.each(this.navElements, function(index, obj){
                if(obj.tag == val || removePseudoSelectors(obj.tag) == val){
                    vueApp.navConfigData.currentColorClass = obj.colorClass;
                    vueApp.navElements[index].active = true;
                }else{
                    vueApp.navElements[index].active = false;
                }
            })
        },
        toggleLeftSidenav() {
            console.log(this.$refs.leftSidenav);
            this.$refs.leftSidenav.toggle();
        },
        toggleRightSidenav() {
            this.$refs.rightSidenav.toggle();
        },
        closeRightSidenav() {
            this.$refs.rightSidenav.close();
        },
        open(ref) {
            $.scrollify.disable();
            disableScroll();
            console.log('Opened: ' + ref);
        },
        close(ref) {
            $.scrollify.enable();
            enableScroll();
            console.log('Closed: ' + ref);
        }
    },
    computed:{
        mobileDevice(){
            return ( navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i))?
                (true):(false);
        }
    },
    components: {
        'Slider': window[ 'vue-easy-slider' ].Slider,
        'SliderItem': window[ 'vue-easy-slider' ].SliderItem
    },
    mounted(){
        this.$on('navigate', function (val) {
            this.switchActiveNav(val)
        });
    }
});

$(document).ready(function() {
    setupNavMenu();
    $(function() {
        $.scrollify({
            section : ".scrollify-section",
            interstitialSection : "footer",
            scrollOverflow:true,
            standardScrollElements:".regular-scroll",
            before:function(i, panels) {
                let ref = panels[i].attr("data-section-name");
                vueApp.switchActiveNav(ref);
            },
            after:function() {

            }
        });
    });
});

function setupNavMenu(){
    vueApp.addNavElement({
        'name':'home',
        'tag':'#home',
        'active':true,
        'icon':null
    });
    vueApp.addNavElement({
        'name':'services',
        'tag':'#services',
        'active':false,
        'icon':null
    });
    vueApp.addNavElement({
        'name':'Mobile Design',
        'tag':'#responsive-design',
        'active':false,
        'icon':null
    });
    vueApp.addNavElement({
        'name':'Growth',
        'tag':'#grow-your-business',
        'active':false,
        'icon':null
    });
    vueApp.addNavElement({
        'name':'Statistics',
        'tag':'#web-design-statistics',
        'active':false,
        'icon':null
    });
}

function removePseudoSelectors(string){
    return string.replace(/^[.#]+/g, '');
}