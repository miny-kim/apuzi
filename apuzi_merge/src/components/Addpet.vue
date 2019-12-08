<template>
    <div class = "container">
        <label for="p_name"><b>Pet Name</b></label>
            <p></p>
            <input type="text" v-model="p_name" placeholder="Enter p_name" name="p_name" required>
            <p></p>
            
        <input type="radio" id="female" value="female" v-model="p_sex">
        <label for="female">female</label>
        <input type="radio" id="male" value="male" v-model="p_sex">
        <label for="male">male</label>
        <p></p>
        <input type="radio" id="dog" value="dog" v-model="p_type">
        <label for="dog">dog</label>
        <input type="radio" id="cat" value="cat" v-model="p_type">
        <label for="cat">cat</label>
        <p></p>
        <label for="p_age"><b>Pet age</b></label>
            <p></p>
            <input type="text" v-model="p_age" placeholder="Enter p_age" name="p_age" required>
            <p></p>
        <input type="button" id ="button" value="Register Pet" v-on:click = "register">
    </div>
</template>

<script>
export default {
  data(){
    return {
        p_name:'',
        p_age:'',
        p_sex:'',
        p_type:'',
    }
  },
  methods: {
    register : function(){
      console.log(this.p_name);
      console.log(this.p_age);
      console.log(this.p_sex);
      console.log(this.p_type);
      this.$http.post('/my_pet/addpet', 
      {p_name:this.p_name,p_sex:this.p_sex,p_type:this.p_type,p_age:this.p_age}).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no 
                this.$router.replace({name: 'mypet'});
                    
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            })
    }
  },
    
}
</script>


<style scoped>
.container{
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
.container:after{
  
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
#button {
   display: inline-block;
    width: 20%;
    background-color:none;
    color: black;
    padding: 14px 20px;
    margin: 8px 10px;
    border: 2px solid green;
    border-radius: 8px;
    cursor: pointer;
}
</style>