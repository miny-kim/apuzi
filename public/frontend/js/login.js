
const app = new Vue({
  el: '#login',
  data: {
    id: '',
    psw : ''


  },

  methods: {
    login_button: function(){
      console.log(this.id);
      console.log(this.psw);
      location.href = "board_main.html"
    },
    sign_up: function(){
      
      location.href = "sign_up.html"


    }
  }


})