<template>
<div id="app">
    <h1><img src="../../public/images/logo.png" height="62" width="62">아프지말개냥</h1>
        <div class="container">
            <label for="id"><b>ID</b></label>
            <p></p>
            <input type="text" v-model="id" placeholder="Enter ID" name="id" required>
            <p></p>
            <label for="pw"><b>Password</b></label>
            <p></p>
            <input type="password" v-model="pw" placeholder="Enter Password" name="pw" required>
            <p></p>
            <router-link :to = "{name:'board'}"><button type="submit" v-on: click="login_button">Login</button></router-link>
            <router-link :to = "{name:'sign_up'}"> <button type="button" class="sign_up">Sign up</button></router-link>
            <input type="checkbox" checked="checked" name="remember"> Remember me
            <p></p>
            <span class="psw">Forgot <a href="#">password</a>?</span>
    </div>
</div>

</template>


<script>

export default{
    data(){
        return {
            id: '',
            pw : ''
        }
    },
    methods: {
    login_button: function(){ //post
      console.log(this.id);
      console.log(this.pw);
      this.$http.post('http://localhost:3000/login', { id: this.id, pw : this.pw}
            ).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            });
      /*this.$http.get('http://localhost:3000/login').then(response => {
        console.warn(response);
        if(response.data.success == true)
          console.log("success");  
      })*/
    }
  }
}
</script>

<style scoped>
* {
    text-align: center;
    margin: 0 auto;
}
/* Bordered form */
form {
    border: 3px solid #f1f1f1;
  }
  
  /* Full-width inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  /* Set a style for all buttons */
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra style for the cancel button (red) */
  
  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  
  /* Avatar image */
  img.avatar {
    width: 40%;
    border-radius: 50%;
  }
  
  /* Add padding to containers */
  .container {
    padding: 16px;
  }
  
  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
</style>