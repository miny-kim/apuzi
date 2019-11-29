<template>
  <div id="board_page">
      <p>
      </p>
      <Board id="Board"></Board>
      <T id="T"></T>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import T from '@/components/T.vue'

export default {
  name: 'main',
  components:{
      T,
      Board
  }
}
</script>

<style scoped>
#board_page{
    padding: 30px;
}
#Board{
    float: left;
}
img{
  padding: 30px;
}
</style>
