<template>
<div>
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
  <button> 찾기 </button>
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
    padding: 14px 20px 20px;
    margin: 70px 0px;
    border: 2px solid burlywood;
    border-radius: 8px;
}
button {
   display: inline-block;
    width: 15%;
    background-color:none;
    color: black;
    padding: 14px 20px;
    margin: 8px 10px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
}
.space{
  padding: 20px 20px;
}

</style>
