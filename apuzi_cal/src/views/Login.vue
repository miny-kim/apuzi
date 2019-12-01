<template>
<div id="login_page">
        <div class="container">
            <label for="id"><b>ID</b></label>
            <p></p>
            <input type="text" v-model="id" placeholder="Enter ID" name="id" required>
            <p></p>
            <label for="pw"><b>Password</b></label>
            <p></p>
            <input type="password" v-model="pw" placeholder="Enter Password" name="pw" required>
            <p></p>
            <router-link :to = "{name:'board'}"><button type="submit" v-on: click="login_button" id="login">Login</button></router-link>
            <router-link :to = "{name:'sign_up'}"> <button type="button" class="sign_up">Sign up</button></router-link>
            <p></p>
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
/* Bordered form */

form {
    border: 3px solid #f1f1f1;
}

* {
    text-align: center;
}

#login_page:after{
  content:"";
  position:absolute;
  top: 0;
  left: 0;
  margin: 0px 0px 60px 0px;
  width:100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  background-image: url("../../public/images/main_5.jpg")
}

/* Full-width inputs */

input[type=text],
input[type=password] {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 8px;
}


/* Set a style for all buttons */

button {
    width: 15%;
    background-color:none;
    color: black;
    padding: 14px 20px;
    margin: 8px 10px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
}


/* Add a hover effect for buttons */

button:hover {
    opacity: 0.8;
    background-color: red;
    color: white;
}

#login:hover {
    opacity: 0.8;
    background-color: green;
    color: white;
}

#space {
    margin: 25px 50px 25px 100px;
}


/* Extra style for the cancel button (red) */

.sign_up {
    width: 15%;
    border: 2px solid red;
}


/* Add padding to containers */


/* The "Forgot password" text */

span.psw {
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