<template>
  <div>
    <i class="ion-ios-time-outline"></i>
    <span>{{ currentHour }} :</span>
    <span>{{ currentMinute }}</span>
  </div>
</template>

<script>
  export default {
    name: 'time',
    data() {
      return {
        currentHour: new Date().getHours(),
        currentMinute: new Date().getMinutes(),
      };
    },
    mounted() {
      setInterval(() => {
        const date = new Date();
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
      }, 1000);
    },
  };
</script>
