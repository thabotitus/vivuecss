<template>
  <vv-menu>
    <vv-menu-item title="home" path="/"></vv-menu-item>
    <vv-menu-item title="library" path="library"></vv-menu-item>
    <vv-menu-item title="cards" path="cards"></vv-menu-item>
    <vv-menu-item title="blog" path="blog"></vv-menu-item>
    <vv-menu-item title="login" path="login"></vv-menu-item>
    <vv-menu-item title="store" path="store"></vv-menu-item>
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
