<template>
  <div>
    <h1>Library</h1>
    <vv-button value="submit" class="vv-button--round"></vv-button>
  </div>
</template>

<script>
  import vvButton from '../components/vv-Button';

  export default {
    name: 'Library',
    components: {
      vvButton,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
