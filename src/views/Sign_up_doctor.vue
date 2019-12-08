<template>
<div id="app">
<section class="banner-area" id="home">
        <div class="container">
            <div class="about-content col-lg-12">
                <h1 class="text-white" style="font-size:40px; color: white; line-height: 200px;">
                    Become a User_Doctor
                </h1>
                <p class="text-white"><span class="lnr lnr-arrow-right"></span></p>
                  <router-link :to = "{name:'login'}">Go to Login</router-link>
            </div>
        </div>
    </section>
    <h2 style="line-height: 100px;">Want to help? Become a User_Doctor.</h2>
    <div id="join_form">
            <label for="id"><b>ID</b></label>
            <input type="text" v-model="id"  placeholder="Enter Id" required="">
            <br>
            <label for="psw1"><b>Password</b></label>
            <input type="password" v-model="pw"  placeholder="Enter pw" required="">
            <br>
            <label for="d_psw2"><b>Password Confirm </b></label>
            <input type="password" v-model="pw2"  placeholder="Enter pw2" required="">
            <br>
            <label for="h_name"><b>Hospital name</b></label>
            <input type="text" v-model="hospital_name" placeholder="Enter hospital name" maxlength="100" required="">
            <br>
            <label for="address"><b>Hospital Address</b></label>
            <input type="text" v-model="address" placeholder="Enter hospital address" maxlength="100" required="">
            <br>
            <label for="d_name"><b>Doctor name</b></label>
            <input type="text" v-model="doctor_name" placeholder="Enter doctor name" required="">
            <br>

            <label for="d_email"><b>Email Address</b></label>
            <input type="text" v-model="email" placeholder="Enter email" maxlength="100" required="">
            <br>
            <button type="submit" id="submit" v-on:click="sign_up_button">Sign Up</button>
        </div>

</div>

</template>


 <script>
// import axios from "axios";
// import VueAxios from "vue-axios";
export default{
    data(){
        return {
            id: '',
            pw : '',
            pw2:'',
            pwcheck:'',
            hospital_name : '',
            address : '',
            doctor_name: '',
            email: '',s
        }
    },
    methods: {
        
    sign_up_button: function(){ //post
    console.log(this.pw.length);
    if(this.pw != this.pw2 || this.pw.length <6 || this.pw.length>=12){
        alert("Please check password");
        this.pw ='';
        this.pw2 ='';

    }
    else if(!this.email.includes("@")){
        alert("Please check email");
        this.email ='';
        }
    else{ 
        this.$http.post('/sign_up_doctor', { id: this.id, pw : this.pw, hospital_name : this.hospital_name, address: this.address, doctor_name : this.doctor_name, email: this.email}
            ).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            })
        }
    }
    }
  }
</script>

<style scoped>
*{
    text-align: center;
}
.banner-area {
    background: url(../../public/images/call-bg.jpg) center;
    background-size: cover;
    width: 100%;
    height: 400px;
    line-height: 100px;
    margin:  0 auto;
  }
  #submit{
    background-color: gray;
    border-radius: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80px;
    height: 30x;
  }
</style>