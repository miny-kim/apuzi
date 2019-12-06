<template>
  <div id="booking_page">
      <p>
      </p>
      <Mypet id="mypet">sd</Mypet>
      <!-- <Cal id="cal">sd</Cal> -->
      <v-app id="dayspan" v-cloak>
        <ds-calendar-app :calendar="calendar"></ds-calendar-app>
      </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
//import Cal from '@/components/Cal.vue'
import Mypet from '@/components/Mypet.vue'
import { Calendar } from 'dayspan';

export default {
  name: 'app',
  components:{
      //Cal,
      Mypet,
  },
  data: () => ({
    calendar: Calendar.months()

  })
}
</script>

<style scoped>
#mypet{
    padding: 30px;
    float: left;
}
body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  /* width: 100%; */
  height: 100%;
}
</style>
