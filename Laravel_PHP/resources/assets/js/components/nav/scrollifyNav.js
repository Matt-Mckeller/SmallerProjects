
// register the grid component
Vue.component('scrollify-nav', {
    template: require('./scrollifyNav.html'),
    props: {
        navItems: Array,
        navConfig: Object
    },
    data: function () {
        return {
        };

    },
    methods: {
    },
    computed:{
    },
    mounted(){
    }
});

// register the grid component
Vue.component('scrollify-nav-element', {
    template: require('./scrollifyNavElement.html'),
    props: {
        name: String,
        tag: String,
        active: Boolean,
        icon: String
    },
    data: function () {
        return {
            className:'navElement'
        };
    },
    methods: {
        scrollifyMove: function(){
            $.scrollify.move(this.tag);
        }
    },
    computed:{
        classObject(){
            var classObject = {active: this.active};
            return classObject;
        }
    },
    mounted(){
    }
});
