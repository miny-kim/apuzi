<template>
  <div id="board_page">
    <div class="board">
        <div v-for="item in boards" v-bind:key="item.idx">
            <p></p>
            <button @click= "get_texts(item.idx)" style="font-size : 16px">{{item.name}}</button>
                <hr />
        </div>
    </div>
      
      <T id="T" v-bind:myindex="myindex"></T>
  </div>
</template>

<script>
// @ is an alias to /src
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
      board_length: '0',
      boards: [],
      selected:"",
    }
  },
    created () {
      this.myindex =1;
    this.board_length = this.boards.length;
    this.$http.get('/board')
    .then((response) => {
      this.boards = response.data;
      
    })
  },
 methods: {
    get_texts: function(idx){
    this.myindex = idx;
    console.log("BB"+this.board_length);
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

.board {
   float: left;
    height: 400px;
    width: 20%;
    border: 3px solid;
    margin: auto;
    padding: 10px;
}
#T {
   float: left;
    height: 600px;
    width: 80%;
}

@media (max-width: 768px) {
  h1 {
    display: none;
  }
}

</style>