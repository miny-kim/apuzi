<template>
    <div class = "container">
        <label for="p_name"><h3>pet Name</h3></label>
        <br>
        <textarea v-model="p_name"  required="" id ="p_name"></textarea>
        <br>
        <input type="radio" id="female" value="female" v-model="p">
        <label for="female">female</label>
        <br>
        <input type="radio" id="male" value="male" v-model="p_sex">
        <label for="male">male</label>
        <br>
        <span>선택: {{ p_sex }}</span>



        <input type="radio" id="dog" value="dog" v-model="p_type">
        <label for="dog">dog</label>
        <br>
        <input type="radio" id="cat" value="cat" v-model="p_type">
        <label for="cat">cat</label>
        <br>
        <span>선택: {{ p_type }}</span>
        <input type="button" value="Register p  " v-on:click = "register">
        <br>
        <textarea v-model="p_age"  required="" id ="p_age"></textarea>
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
</style>