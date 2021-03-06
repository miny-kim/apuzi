import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events: [],
        token:'',
        role:'',
        data:[],
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload;
        },
        trueRole(state){
            console.log("trrrrrrrrrrrrrrrrrrrr");
            state.role =true;
        },
        falseRole(state){
            console.log("fffff");
            state.role =false;
        }
        ,setData(state,payload){
            state.data = payload;
        }
    },
    actions: {}
});