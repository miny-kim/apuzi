<template>
    <div class = "container">
        <h4>image</h4>
        <div id="image">
        </div>
        <h4>Title</h4>
        <div id="title">
            <p></p>
            {{title}}
        </div>
        <p></p>
        <p></p>
        <h4>Contents</h4>
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
      contents:'peqwor4851u03249jfalw',
      view:'4',
    }
  },
     created () {
    this.$http.get(`/board/${idx}/text/${t_idx}`)
    .then((response) => {
      this.title = response.data.title;
      this.contents = response.data.contents;
      this.image = response.data.image;
      this.view = response.data.view;
      
    });

  },
    
}
</script>


<style scoped>

.container{
  color: black;
}

#title{ 
    width: 80%;
    height: 40px;
    display: block;
  margin-left: auto;
  margin-right: auto;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 4px;

}

#contents{ 
    width: 80%;
    height: 60%;
    display: block;
  margin-left: auto;
  margin-right: auto;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 4px;
}


</style>