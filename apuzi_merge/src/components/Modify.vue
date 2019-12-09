<template>
<div id="app">
<section class="banner-area" id="home">
        <div class="container">
            <div class="about-content col-lg-12">
                <h1 class="text-white" style="font-size:40px; color: white; line-height: 200px;">
                    Modify your Information
                </h1>
            </div>
        </div>
    </section>

    <div id="modify_form">
            <label for="pw"><b>Password</b></label>
            <input type="password" v-model="pw"  placeholder="Password length must be 6 to 12" required="">
            <br>
            <label for="pw2"><b>Password Confirm </b></label>
            <input type="password" v-model="pw2"  placeholder="Please password check" required="">
            <br>
            <label for="user_name"><b>User name</b></label>
            <input type="text" v-model="user_name" placeholder="Enter User name" required="">
            <br>
            <label for="p_num"><b>User Phone number</b></label>
            <input type="text" v-model="p_num" placeholder="Enter p_num" maxlength="100" required="">
            <br>
            
            <label for="nickname"><b>User nickname</b></label>
            <input type="text" v-model="nickname" placeholder="Enter nickname" required="">
            <br>
            <label for="address"><b>User Address</b></label>
            <input type="text" v-model="address" placeholder="Enter address" maxlength="100" required="">
            <br>

            <label for="email"><b>User Email</b></label>
            <input type="text" v-model="email" placeholder="Enter email" maxlength="100" required="">
            <br>
            <button type="submit" id="submit" v-on:click="submit_button">submit</button>
        </div>

</div>

</template>


 <script>
export default{
    data(){
        return {
            pw : '',
            pw2: '',
            user_name:'',
            nickname : '',
            address : '',
            p_num: '',
            email: ''
        }
    },
    methods: {
    submit_button: function(){ //post
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
            this.$http.post('/mypage/modify', {pw : this.pw, user_name : this.user_name, nickname: this.nickname, address : this.address, email: this.email, p_num: this.p_num}
                ).then(response => {
                   if(response.data.success == true){
                    console.log("success"); 
                    this.$router.push({name: 'main'});
                    }  
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