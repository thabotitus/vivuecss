<template>
  <vv-menu>
    <vv-menu-item title="home" path="library"></vv-menu-item>
    <vv-menu-item title="cards" path="cards"></vv-menu-item>
    <vv-menu-item title="budget" path="budget"></vv-menu-item>
  </vv-menu>
</template>

<script>
  import vvMenu from '../components/menu/vv-Menu';
  import vvMenuItem from '../components/menu/vv-MenuItem';

  export default {
    name: 'Menu',
    components: {
      vvMenu,
      vvMenuItem,
    },
  };
</script>
