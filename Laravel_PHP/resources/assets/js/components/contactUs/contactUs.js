// register the grid component
Vue.component('contact-us-modal', {
    template: require('./contactUs.html'),
    props: {
        data: Array
    },
    data: function () {
        return {
            formInputs:getContactUsInputs()
        };

    },
    methods: {
        getLoginStatus(){
            var _this = this;
            fbEnsureInit(function() {
                FB.getLoginStatus(function(response){
                    console.log('get login status response');
                    console.log(response);
                    if(notAuthorizedFB(response)){
                        _this.loginFB();
                    }else if(isConnectedFB(response)){
                        _this.finishedLoginFB(response);
                    }else{
                        _this.finishedLoginFB(response);
                    }
                    return response;
                })
            });
        },
        loginFB(){
            fbEnsureInit(function() {
                FB.login(function(response){
                    console.log('login response');
                    console.log(response);
                })
            });
        },
        finishedLoginFB(response){
            console.log('finished fb login');
            console.log(response);
        }
    },
    computed:{
        filteredData(){
            return this.data;
        }
    },
    mounted(){
        $("#contact-phone").mask("(999) 999-9999");
    }
});


// register the grid component
Vue.component('form-element', {
    template: require('./formElement.html'),
    props: {
        inputInformation: Object
    },
    data: function () {
        let response = {
            type: this.inputInformation.type,
            label: this.inputInformation.label,
            css: this.inputInformation.css,
            id: "oh"
        };
        return response;
    },
    computed: {
        filteredData: function () {
            return this.data;
        },
        isHtml: function(){
            return true;
        },
        rawValue: function(){
            return this.inputInformation;
        },
        getElementHtml(){
            if(this.type == 'text'){
                var str = this.getLabel() + this.getInput();
                return str;
            }else{
                return 'idk'
            }
        }
    },
    methods: {
        getLabel(){
            return $('<label/>', {
                //'id': this.getID(),
                'for':this.label,
                'text':this.label
            }).html();
        },
        getInput(){
            return $('<input/>', {
                'id':this.getID(),
                "type": this.type,
                "label": this.label,
                "name": this.getName()
                //"subtype": "button",
                //"className": "btn-default btn",
                //"style": "default"
            }).clone().wrap('<p>').parent().html();
        },
        getID(){
            return Math.random(1,100);
        },
        getName(){
            return Math.random(1,100);
        }
    },
    mounted() {
    }
});
