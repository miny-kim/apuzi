<template>
  <div>
    <div >
        <h1> Board list</h1>
            <p>
        <div v-for="item in boards" v-bind:key="item.idx">
            <p></p>
            <div class="board">
                {{item.name}}
                <hr />
                <!--router-link :to="{name:'board_idx', params:{idx: item.idx}}"></router-link-->
            </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Board',
  data () {
    return {
      boards: [{
          name:"Food",
          idx:1
      },
      {
          name:"JJJ",
          idx:2
      }],
      selected:"",
    }
  },
    created () {
    this.$http.get('/board')
    .then((response) => {
      this.boards = response.data;
      
      console.log(this.boards[0]);
    })
  },
  computed:{
      
  }
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
