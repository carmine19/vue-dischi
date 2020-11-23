//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        load: false,
        dischi:[],
        cerco_genere:'',

    },

    methods: {

        ordino_array(arr){
            return arr.slice().sort((a, b) => parseInt(a.year)  - parseInt(b.year) );

        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((risposta) => {
                let ele = risposta.data.response

                 for (let i = 0; i < ele.length ; i++) {
                     var ele_corrente = ele[i];
                     this.dischi.push(ele_corrente)
                 }
            })

        this.load = true;
        this.ordino_array();
    },



})