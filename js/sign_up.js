
const app = new Vue({
    el: '#join_form',
    data: {
      id: '',
      psw1 : '',
      psw2 : ''
    },
    computed: {
        check_psw(){
            this.pws1 
            
        }
        
    },
    methods: {
        sign_up_button(){ 
            //db에 보내기

        }
    }
  
  
  })
  // import all
import {Datepicker, Timepicker, DatetimePicker} from '@livelybone/vue-datepicker';
// or
import * as VueDatepicker from '@livelybone/vue-datepicker';

// Global register
Vue.component('datepicker', Datepicker);
Vue.component('timepicker', Timepicker);
Vue.component('datetime-picker', DatetimePicker);

// Local register
new Vue({
  components:{Datepicker, Timepicker, DatetimePicker}
})