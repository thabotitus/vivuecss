<template>
  <div class="vv-topbar">
    <span class="vv-topbar__logo">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vv-topbar',
    props: {
    },
    data() {
      return {
        title: 'VVC',
      };
    },
  };
</script>
