<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Library from './containers/Library';

  export default {
    name: 'app',
    components: {
      Library,
    },
  };
</script>

<style lang="scss">
  @import './assets/app.scss';
</style>
