<template>
  <div>
    <i class="ion-clock"></i>
    <span>{{ currentHour }} :</span>
    <span>{{ currentMinute }}</span>
  </div>
</template>

<script>
  export default {
    name: 'time',
    data() {
      return {
        currentHour: (new Date().getHours() < 10 ? '0' : '') + new Date().getHours(),
        currentMinute: (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes(),
      };
    },
    mounted() {
      setInterval(() => {
        const date = new Date();
        this.currentHour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        this.currentMinute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      }, 1000);
    },
  };
</script>
