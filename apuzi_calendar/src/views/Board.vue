<template>
  <div>
    <div >
        <h1> Board list</h1>
            <p>
        <div v-for="item in boards" v-bind:key="item.idx">
            <p></p>
            <button @click= "get_texts(item.idx)">{{item.name}}</button>
                <hr />
                <!--router-link :to="{name:'board_idx', params:{idx: item.idx}}"></router-link-->
        </div>
    </div>
      
      <T id="T" v-bind:myindex="myindex" /></T>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import T from '@/components/T.vue'

export default {
  name: 'main',
  props: ['myindex'],
  components:{
      T
  },
  data () {
    return {
      myindex: '1',
      boards: [{
          name:"Food",
          idx:1
      },
      {
          name:"자유",
          idx:2
      }],
      selected:"",
    }
  },
    created () {
    // this.$http.get('/board')
    // .then((response) => {
    //   this.boards = response.data;
      
    // })
  },
 methods: {
    get_texts: function(idx){
    //   this.$http.get('/board/:idx')
    // .then((response) => {
    //   this.boards = response.data;
    // })
    this.myindex = idx;
    console.log("P"+this.myindex);
    },
  },


}



</script>

<style scoped>

#board_page{
    padding: 30px;
}

#board_page:after{
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
img{
  padding: 30px;
}
h1 {
    margin: 30px;
}
.board {
   float: left;
    height: 800px;
    width: 300px;
    border: 3px solid;
    margin: auto;
    padding: 10px;
}

</style>
