<template>
  <div>
    <sidebar></sidebar>
    <main>
      <topbar pageTitle="library"></topbar>
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
  import vvSidebar from '../components/sidebar/vv-Sidebar';
  import vvSidebarItem from '../components/sidebar/vv-SidebarItem';
  import Topbar from '../containers/Topbar';
  import Sidebar from '../containers/Sidebar';

  export default {
    name: 'Library',
    components: {
      vvButton,
      vvSidebar,
      vvSidebarItem,
      Topbar,
      Sidebar,
    },
    data() {
      return {
        pageTitle: 'Library',
      };
    },
  };
</script>
