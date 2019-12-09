import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events: [],
        token:'',
        role:''
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload;
        },
        trueRole(state){
            state.role =true;
        },
        falseRole(state){
            state.role =false;
        }
    },
    actions: {}
});