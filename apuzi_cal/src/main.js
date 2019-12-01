import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DaySpanVuetify from 'dayspan-vuetify'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2',
    getDefaultEventDetails: () => {
      console.log("DDD");
      //"{data:{title:'dd',color: '#3F51B5'},schedule: {weekspanOfMonth: '[0]', dayOfWeek: '[Weekday.FRIDAY]', duration: '3', durationUnit: 'days'}"
    }
  },
});

Vue.config.productionTip = false

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')