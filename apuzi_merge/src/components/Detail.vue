<template>
    <div class = "container">
        <h3>Title</h3>
        <div id="title">
            <p></p>
            {{title}}
        </div>
        <p></p>
        <p></p>
        <h3>Contents</h3>
        <p></p>
       <div id="contents">
           {{contents}}
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      image : null,
      title:'aa',
      contents:'peqwor4851u03249jfalw'

    }
  },
     created () {
    /*this.$http.get('/board')
    .then((response) => {
      this.title = response.data.title;
      this.contents = response.data.contents;
      this.image = response.data.image;
      
    });*/

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

button:hover {
    opacity: 0.8;
    background-color: rgb(167, 77, 41);
    color: white;
}

button {
   display: inline-block;
    width: 10%;
    background-color:none;
    color: black;
    padding: 14px 20px;
    margin: 8px 10px;
    border: 2px solid rgb(167, 77, 41);
    border-radius: 8px;
    cursor: pointer;
}
</style>