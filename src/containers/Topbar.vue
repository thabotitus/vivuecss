<template>
  <div class="vv-topbar">
    <router-link to="/">
      <span class="vv-topbar__logo">{{ title }}</span>
    </router-link>
    <span class="vv-topbar__title">{{ pageTitle }}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vv-topbar',
    props: {
      pageTitle: '',
    },
    data() {
      return {
        title: 'VVC',
      };
    },
  };
</script>
