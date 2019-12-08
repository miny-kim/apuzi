<template>

    <div >
        <div v-for="item in pet_list" v-bind:key="item.idx">
            <p></p>
            
            <div class="mypet">
                <button style="font-size : 16px">{{item.idx}}
                {{item.p_name}}
                </button>
                <hr />
                <router-link :to="{name:'addpet'}"><b>Addpet</b></router-link>
                <!--router-link :to="{name:'board_idx', params:{idx: item.idx}}"></router-link-->
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
          p_name:"Dfdf",
          p_age:'',
          p_sex:'',
          p_type:'',
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
    this.$http.get('/mypet')
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
.mypet {
  float: left;
    height: 300px;
    width: 20%;
    border: 3px solid;
    margin: 120px 0px 30px 30px;
    padding: 40px;
}
@media (max-width: 768px) {
  .mypet {
    display: none;
}
}
</style>
