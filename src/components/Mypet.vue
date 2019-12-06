<template>
  <div>
    <div >
        <h1>My Pet</h1>
            <p>
        <div v-for="item in pet_list" v-bind:key="item.idx">
            <p></p>
            <div class="mypet">
                <button>{{item.idx}}</button>
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
  name: 'Mypet',
  data () {
    return {
      pet_list: [{
          idx:1,
          name:"Dfdf",
          booking_info:[{
              booking_id:11111,
              booking_hosp:"hosp",
              booking_time:11111
          }]
      }],
      selected:"",
    }
  },
   created () {
    this.$http.get('/my_pet')
    .then((response) => {
      this.pet_list = response.data;
      
      console.log(this.pet_list[0]);
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
.mypet {
    height: 800px;
    width: 300px;
    border: 3px solid;
    margin: auto;
    padding: 10px;
}

</style>
