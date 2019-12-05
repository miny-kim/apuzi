<template>
  <div>
    <div >
        <h1> Board list</h1>
            <p>
        <div v-for="item in boards" v-bind:key="item.idx">
            <p></p>
            

            <a @click="handleClick(item.idx, $event)">Click me!</a>
                <hr />
                <!--router-link :to="{name:'board_idx', params:{idx: item.idx}}"></router-link-->
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Board',
  data () {
    return {
      now_index:'',
      boards: [{
          name:"Food",
          idx:1
      },
      {
          name:"ddd",
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
    //   document.getElementByID("button")
  },
  computed:{
      
  },
  methods: {
    get_texts: function(idx){
    //   this.$http.get('/board/:idx')
    // .then((response) => {
    //   this.boards = response.data;
    // })
    this.now_index = idx;
    console.log("Ddd"+ this.now_index);
    },
    handleClick: function(text, event) {
      console.log(text)
      console.log(event)
    }
  },
}


</script>

<style scoped>
h1 {
    margin: 30px;
}
.board {
    height: 800px;
    width: 300px;
    border: 3px solid;
    margin: auto;
    padding: 10px;
}

</style>
