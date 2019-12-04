<template>
    <div class = "container">
        <label for="title"><b>Title</b></label>
        <input type="text" id ="title" v-model="title"  required="">
        <br>
        
        <label for="contents"><b>Contents</b></label>
        <input type="text" v-model="contents" id ="contents" required="">
        <br><input type="file" accept="image/*" @change="onChange" id="file-input">

        <br>
        <br>
        <br>

        <input type="button" value="등록" v-on:click = "register">
        <br>
    </div>
</template>
<script>
export default {
  data(){
    return {
      image : null,
      title:'',
      contents:''

    }
  },
  methods: {
    register : function(){
      this.$http.post('/board/register', 
      {title: this.title, contents: this.contents, img:this.image}).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no
            }).catch((ex) => {
                console.warn("ERROR!!!!! : ",ex)
            })
    },
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
    }
  },
    
}
</script>


<style scoped>
.container{
    border: 2px solid grey;
    box-sizing: border-box;

}
#contents{ 
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid grey;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
  }
#title{ 
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid grey;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
  }
</style>