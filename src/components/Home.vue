<template>
  <div class="hello">
    <div class="hello__logo">
      {{ logoText }}
    </div>
    <router-link to="library" class="vv-button vv-button--round vv-button--secondary vv-button--tiny">Open App</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'VVC',
      logoText: 'VVC',
    };
  },
};
</script>
