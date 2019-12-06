<template>
  <div class="home">
    <input type="radio" name="pos" id="pos1" checked>
    <input type="radio" name="pos" id="pos2">
    <input type="radio" name="pos" id="pos3">
    <input type="radio" name="pos" id="pos4">
    <ul>
      <li><img alt="back_img" src="../../public/images/main_bg.jpeg"></li>
      <li><img alt="back_img" src="../../public/images/main2.jpg"></li>
      <li><img alt="back_img" src="../../public/images/main3.jpg"></li>
      <li><img alt="back_img" src="../../public/images/main4.jpg"></li>
    </ul>
    <p class="pos">
      <label for="pos1"></label>
      <label for="pos2"></label>
      <label for="pos3"></label>
      <label for="pos4"></label>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'main',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
*{margin:0;padding:0;}
  ul,li{list-style:none;}
  .home{height:300px;position:relative;overflow:hidden;}
  .home ul{width:400%;height:100%;transition:1s;}
  .home ul:after{content:"";display:block;clear:both;}
  .home li{float:left;width:25%;height:100%;}
  .home li:nth-child(1){background:#faa;}
  .home li:nth-child(2){background:#ffa;}
  .home li:nth-child(3){background:#faF;}
  .home li:nth-child(4){background:#aaf;}
  .home input{display:none;}
  .home label{display:inline-block;vertical-align:middle;width:10px;height:10px;border:2px solid #666;background:#fff;transition:0.3s;border-radius:50%;cursor:pointer;}
  .home .pos{text-align:center;position:absolute;bottom:10px;left:0;width:100%;text-align:center;}
  #pos1:checked~ul{margin-left:0%;}
  #pos2:checked~ul{margin-left:-100%;}
  #pos3:checked~ul{margin-left:-200%;}
  #pos4:checked~ul{margin-left:-300%;}
</style>