//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        load: false,
        dischi:[],
        cerco_genere:'',
        ordino_per_genere: [],

    },

    methods: {

        ordino_array(arr){
            return arr.slice().sort((a, b) => parseInt(a.year)  - parseInt(b.year) );

        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((risposta) => {
                this.dischi = risposta.data.response;

                this.dischi.forEach((item) => {
                    if (!this.ordino_per_genere.includes(item.genre)) {
                        this.ordino_per_genere.push(item.genre);
                    }
                });

            })

        this.load = true;
    },



})