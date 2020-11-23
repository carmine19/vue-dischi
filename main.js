//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        load: false,
        dischi:[],

    },

    methods: {

    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((risposta) => {
                this.dischi = risposta.data.response
            })

        this.load = true;
    }


})