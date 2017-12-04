<template>
  <div>
    <sidebar></sidebar>
    <main>
      <topbar pageTitle="Blog"></topbar>
      <div class="container">
        <div class="row">
          <div class="col col--1/2-large">

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import vvButton from '../components/vv-Button';
  import Topbar from '../containers/Topbar';

  export default {
    name: 'Blog',
    components: {
      vvButton,
      Topbar,
    },
    data() {
      return {
        pageTitle: 'Blog',
      };
    },
  };
</script>
