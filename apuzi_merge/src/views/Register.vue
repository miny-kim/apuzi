<template>
    <div class = "container">
        <label for="title"><h3>Title</h3></label>
        <textarea v-model="title"  required="" id ="title"></textarea>
        <p></p>
        <p></p>
        <label for="contents"><h3>Contents</h3></label>
        <textarea v-model="contents" id ="contents" required=""></textarea>


        <input type="file" accept="image/*" @change="onChange" id="file-input">

        <br>
        <br>
        <br>

        <input type="button" value="글 쓰기" v-on:click = "register">
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
    
    var idx = this.$route.params.idx;
    console.log("idx____d__"+idx);
      this.$http.post(`/board/${idx}/register`, 
      {title: this.title, contents: this.contents, img:this.image}).then(response => {
                console.warn(response)
                this.result = response.data
                this.no = response.data.no 
                this.$router.replace({name: 'board'});
                    
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


#title{ 
    width: 1000px;
    height: 40px;

}


#contents{ 
    width: 1000px;
    height: 300px;
}

textarea{
  display: block;
  margin-left: auto;
  margin-right: auto;
    border: 2px solid grey;
    box-sizing: border-box;
    border-radius: 4px;
}

</style>