<template>
  <div class="home">
    <img alt="back_img" src="../../public/images/main_bg.jpg">
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
img{
  padding: 30px;
}
</style>