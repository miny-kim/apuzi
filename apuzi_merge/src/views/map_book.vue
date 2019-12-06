

<template>
    <div>
        <div>
         <v-date-picker 
         v-model="picker" 
         color="green lighten-1"
         width="500"
         class="mx-auto"
         :min=minDate
         
         v-bind:landscape="$vuetify.breakpoint.smAndUp"></v-date-picker>
         </div>

        <v-btn
        v-for="time in times"
        v-bind:key="time"
        color="primary"
        dark
        @click.stop="dialog = true"
        @click="p_time=time">
        {{time}}
        </v-btn>

        <v-dialog
        v-model="dialog"
        max-width="290">
      <v-card>
        <v-card-title class="headline">예약을 확인합니다.</v-card-title>

        <v-card-text>
          {{picker}} {{p_time}} 예약이 맞습니까?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="booking" 
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>

import { Datetime } from 'vue-datetime'
var times= new Array();

var tomorrow=new Date();
tomorrow.setHours(tomorrow.getHours()+9)
tomorrow.setDate(tomorrow.getDate()+1)
tomorrow=tomorrow.toISOString().substr(0,10)



export default {
  
  data: () => ({
          picker: new Date().toISOString().substr(0, 10),
          dialog: false,
          times:["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"],
          p_time:"",
          minDate:tomorrow,
          pet_list:'',
          
  }),

  methods:{
    booking:function(){
        let id=this.$route.params.idx
        console.log(this.picker)
        console.log(this.p_time)
        console.log(id)

        this.$http.get('/map/'+id)
        .then((result)=>{
            this.$http.post('/map'+id,{
                date:this.picker,
                time:this.p_time,
                hospital:result.hospital,
                latlng:result.latlng
            })
        })

        this.dialog=false
      },
      
  }
}
</script>

<style>
</style>