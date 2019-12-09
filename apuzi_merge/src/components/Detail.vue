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
import eventBus from '../../eventBus.js'
export default {
  name: 'D',
  props: ['myindex'],
  data(){
    return {
      image : null,
      myindex:1,
      title:'a',
      contents:'',
      view:'',
    }
  },
     created () {
      var t_idx =  this.$store.state.index;
      console.log("ttttttt"+t_idx);
       var idx = this.myindex;
       this.$http.get(`/board/${idx}/text/${t_idx}`)
          .then((response) => {
            console.log(response.data.title);
            this.title = response.data.title;
            this.contents = response.data.contents;
            this.image = response.data.image;
            this.view = response.data.view;
       }); 
    //    eventBus.$on('D',function(payload){
    //      var t_idx = payload;
    //      console.log("ttttt"+t_idx);
    //      this.$http.get(`/board/${idx}/text/${t_idx}`)
    //       .then((response) => {
    //         console.log(response.data.title);
    //         this.title = response.data.title;
    //         this.contents = response.data.contents;
    //         this.image = response.data.image;
    //         this.view = response.data.view;
    //    }); 
      
    // });
   

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