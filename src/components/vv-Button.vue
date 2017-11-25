<template>
  <button :value="value"
          :type="type"
          ref="submitButton"
          class="vv-button">
    Subscribe
  </button>
</template>

<script>
  export default {
    name: 'vv-button',
    props: {
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
