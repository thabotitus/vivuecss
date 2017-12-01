<template>
  <div class="vv-card-info">
    <div class="vv-card vv-card-info" :class="colorPrefix + color">
      <div class="vv-card__header text--centered text--large">
          {{ value }}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'vv-card-info',
    components: {

    },
    data() {
      return {
        colorPrefix: 'vv-card--',
      };
    },
    props: {
      value: '',
      description: '',
      color: '',
    },
  };
</script>
