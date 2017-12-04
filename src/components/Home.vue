<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="hello__logo">
            {{ logoText }}
          </div>
        </div>
      </div>
      <div class="row row--align-center">
        <div class="col col--1/4-large col--1/3-medium col--1/2-small">
          <router-link to="library">
            <div class="vv-button vv-button--round vv-button--teal">Open App</div>
          </router-link>
        </div>
      </div>
    </div>
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
