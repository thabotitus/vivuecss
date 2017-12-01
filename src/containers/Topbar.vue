<template>
  <div class="vv-topbar">
    <span class="vv-topbar__logo">{{ title }}</span>
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
