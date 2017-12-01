<template>
  <div class="vv-sidebar__item" v-on:click="navigate">
    <i :class="icon" class="vv-sidebar__icon"></i>
    <router-link :to="path">{{ title }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'vv-sidebar-item',
    props: {
      title: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: false,
      },
      icon: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        dataTitle: this.$options.propsData.title,
        dataPath: this.$options.propsData.path,
        dataIcon: this.$options.propsData.icon,
      };
    },
    methods: {
      navigate: () => {
        // const vt = this;
        // this.$router.go(vt.dataPath);
        // eslint-disable-next-line
        console.log(this)
      },
    },
  };
</script>
