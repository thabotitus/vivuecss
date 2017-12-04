<template>
  <router-link :to="path">
    <div class="vv-menu__item">
      {{ title }}
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'vv-menu-item',
    props: {
      title: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: false,
      },
    },
    data() {
      return {

      };
    },
  };
</script>
