<template>
<div class = "container">
  <div class="find_pw">
<label for="id"><h5><b>ID</b></h5></label>
            <p></p>
            <input type="text" v-model="id" placeholder="Enter ID" name="id" required>
            <div class="space">
            </div>
    <label for="pw"><h5><b>Email</b></h5></label>
            <p></p>
            <input type="password" v-model="email" placeholder="Enter email" name="email" required>
            <p></p>
            
  </div>
  <p></p>
  <button type="submit" v-on:click="find_button"><b>찾기</b></button>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'main',
   data(){
        return {
            id: '',
            email:'',
        }
    },
     methods: {
    find_button: function(){ //post
      console.log(this.id);
      console.log(this.email);
      this.$http.post('/login', { id: this.id, pw : this.email}
            ).then(response => {
                console.warn(response)
                if(response.data.success == true){
                    console.log("success"); 
                    this.$router.push({name: 'login'});
                    }  
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            });

    }
  }
}
</script>

<style scoped>
/*.find_pw{
    float: left;
width: 40%;
height: 50%;
    background-color:none;
    color: black;
    padding: 14px 20px 20px;
    margin: 70px 0px 100px 100px;
    border: 2px solid burlywood;
    border-radius: 8px;
  
}*/
* {
    text-align: center;
}

.find_pw{
    display: inline-block;
width: 40%;
height: 50%;
    background-color:none;
    color: black;
    padding: 14px 0px 20px 0px;
    margin: 70px 0px;
    border: 2px solid burlywood;
    border-radius: 8px;
}
button {
   display: inline-block;
    width: 15%;
    background-color:none;
    color: black;
    padding: 14px 10px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
}
.space{
  padding: 20px 20px;
}

@media(max-width : 768px)/*768 보다 작으면*/
{
    button {
    width: 15%;
    background-color:none;
    color: black;
    padding: 14px 10px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
}

}

</style>
