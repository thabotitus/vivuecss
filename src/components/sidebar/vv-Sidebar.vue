<template>
  <div class="vv-sidebar">
    <div class="vv-sidebar__header">
      <vv-time></vv-time>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import vvTime from '../vv-Time';

  export default {
    name: 'vv-sidebar',
    components: {
      vvTime,
    },
    props: {
      title: '',
    },
  };
</script>
