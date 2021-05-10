<template>
  <div class="calendar">
      <div class="day vh-100 border position-relative">
          <div class="slot bg-info position-absolute w-100" :style="{
            top: `${timeDiffInPercent(slot.time_start)}%`,
            height: `${timeDiffInPercent(slot.time_end) - timeDiffInPercent(slot.time_start)}%`
          }" v-for="slot in slots">{{ slot.time_start}} {{ slot.time_end}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data(){
    return {
      time_open: '08:00:00',
      time_close: '21:00:00',
      slots: [
        {
          time_start: '10:00:00',
          time_end: '11:00:00',
        },
        {
          time_start: '15:00:00',
          time_end: '19:00:00',
        }
      ]
    }
  },
  computed:{
    timeOpenMoment(){
      return this.$moment(this.time_open, 'HH:mm:ss')
    },
    timeCloseMoment(){
      return this.$moment(this.time_close, 'HH:mm:ss')
    },
    onePercentInMinutes(){
      return this.timeCloseMoment.diff(this.timeOpenMoment, 'minutes') / 100
    }
  },
  methods: {
    timeDiffInPercent(time) {
      const timeDiffInMinutes = this.$moment(time, 'HH:mm:ss').diff(this.timeOpenMoment, 'minutes');
      return Math.round(timeDiffInMinutes / this.onePercentInMinutes);
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {

}
</style>
