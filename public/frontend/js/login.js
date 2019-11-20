const app = new Vue({
  el: '#login',
  data: {
    id: '',
    psw : ''


  },

  methods: {
    login_button: function(){
      console.log("id:"+this.id);
      console.log("ps:"+this.psw);
      axios.post('/users',{
        id:this.id,
        psw:this.psw
      })/*
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });*/
      //location.href = "board_main.html"
    },
    sign_up: function(){
      
      location.href = "sign_up.html"


    }
  }


})