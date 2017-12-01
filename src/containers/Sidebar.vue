<template>
  <vv-sidebar title="VVC">
    <vv-sidebar-item title="landing" path="/" icon="ion-grid"></vv-sidebar-item>
    <vv-sidebar-item title="cards" path="cards" icon="ion-social-buffer"></vv-sidebar-item>
    <vv-sidebar-item title="blog" path="blog" icon="ion-android-folder-open"></vv-sidebar-item>
    <vv-sidebar-item title="login" path="login" icon="ion-unlocked"></vv-sidebar-item>
    <vv-sidebar-item title="store" path="store" icon="ion-android-playstore"></vv-sidebar-item>
  </vv-sidebar>
</template>

<script>
  import vvSidebar from '../components/sidebar/vv-Sidebar';
  import vvSidebarItem from '../components/sidebar/vv-SidebarItem';

  export default {
    name: 'Library',
    components: {
      vvSidebar,
      vvSidebarItem,
    },
  };
</script>
