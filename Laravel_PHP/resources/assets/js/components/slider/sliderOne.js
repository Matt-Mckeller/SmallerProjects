
// register the grid component
Vue.component('slider-one', {
    template: require('./sliderOne.html'),
    props: {
    },
    data: function () {
        return {
            list: [
                {
                    'header':"Web development company in Jefferson City",
                    'paragraph':"If you would like to find out more about what we can offer and how we might give your website the enhancements it needs, why not call us to book your free consultation? Using the information collected in your consultation we will design a unique action plan that's geared to meeting the needs of your organization. To find out more or book your FREE consultation, call us at (573) 291-8667"
                },{
                    'header':"Marketing and Web Design Agency in Central Missouri",
                    'paragraph':"When you turn to us, you can expect to end up with a site that not only looks amazing but that's easy to navigate, highly interactive and search engine optimized."
                },{
                    'header':"Promoting growth in Jefferson City and Columbia Missouri",
                    'paragraph':"Our approach to growth is fairly simple. We drive qualified traffic to your website or organization, convert visitors into leads and customers, and generate brand loyalty and repeat business. Our digital marketing services are tailored to send targeted traffic to your website & mobile app to generate qualified leads and grow your business."
                }
            ]
        };
    },
    components: {
        'Slider': window[ 'vue-easy-slider' ].Slider,
        'SliderItem': window[ 'vue-easy-slider' ].SliderItem
    },
    mounted(){
    }
});
