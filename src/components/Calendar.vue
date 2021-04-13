<template>
  <div class="calendar">
      <h1>Календарь</h1>
      <div class="day">

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
          time_end: '12:30:00',
        },
        {
          time_start: '15:00:00',
          time_end: '17:30:00',
        }
      ]
    }
  },
  mounted() {
    const timeOpen = this.$moment('08:00:00', 'HH:mm:ss');
    const timeClose = this.$moment('21:00:00', 'HH:mm:ss');

    const timeDiffInMinutes = timeClose.diff(timeOpen, 'minutes'); // 780
    const onePercentInMinutes = timeDiffInMinutes / 100; // 78

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.calendar {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .day {
    background-color: aqua;
    height: 100%;
  }
}
</style>
