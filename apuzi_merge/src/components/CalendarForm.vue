<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <b-form @submit.prevent="onSubmit" novalidate>
        <b-form-group label="Title" label-for="title">
          <ValidationProvider name="title" rules="required" v-slot="{ errors }">
            <b-form-input
              :state="errors.length == 0"
              v-model="form.title"
              type="text"
              required
              placeholder="Title"
              name="title"
            ></b-form-input>
            <b-form-invalid-feedback :state="errors.length == 0">Title is required</b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>
<b-form-group label="Start" label-for="start">
          <ValidationProvider name="start" rules="required" v-slot="{ errors }">
            <VueCtkDateTimePicker
              input-class="form-control"
              :state="errors.length == 0"
              v-model="form.start"
              name="start"
            ></VueCtkDateTimePicker>
            <b-form-invalid-feedback :state="errors.length == 0">Start is required</b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>
        <b-form-group label="End" label-for="end">
          <ValidationProvider name="end" rules="required" v-slot="{ errors }">
            <VueCtkDateTimePicker
              input-class="form-control"
              :state="errors.length == 0"
              v-model="form.end"
              name="end"
            ></VueCtkDateTimePicker>
            <b-form-invalid-feedback :state="errors.length == 0">End is required</b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
        <b-button type="button" variant="primary" @click="deleteEvent(form.id)">Delete</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { requestsMixin } from "../../mixins/requestsMixin";
import * as moment from "moment";

require('moment-timezone');

moment.tz.setDefault("Asia/Seoul");
export default {
  
  name: "CalendarForm",
  props: {
    edit: Boolean,
    calendarEvent: Object
  },
  mixins: [requestsMixin],
  data() {
    return {
      form: {}
    };
  },
  watch: {
    calendarEvent: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {
        this.form = val || {};
      }
    }
  },
  methods: {
    async onSubmit() {
      var f_start;
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      moment.tz.setDefault("Asia/Seoul");
      console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
      this.form.start  = moment(this.form.start,'YYYY-MM-DD[T]kk:mm:ss A').format();
      this.form.end  = moment(this.form.end,'YYYY-MM-DD[T]kk:mm:ss A').format();

      if (this.edit) {
        await this.editCalendar(this.form);
      } else {
        await this.addCalendar(this.form);
      }
      const response = await this.getCalendar();
      this.$store.commit("setEvents", response.data);
      this.$emit("eventSaved");
    },
    async deleteEvent(id) {
      await this.deleteCalendar(id);
      const response = await this.getCalendar();
      this.$store.commit("setEvents", response.data);
      this.$emit("eventSaved");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  margin-right: 10px;
}
</style>