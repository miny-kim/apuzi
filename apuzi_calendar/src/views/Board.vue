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

#Board{
    float: left;
}
img{
  padding: 30px;
}
</style>
