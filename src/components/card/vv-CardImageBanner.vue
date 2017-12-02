<template>
  <div class="vv-card-image-banner" :style="{ backgroundImage: `url('${backgroundImageLocation}/${bannerImage}')` }">
    <div class="vv-card-image-banner__header">
      <h1 class="vv-card-image-banner__heading">
        {{ mainHeading }}
      </h1>
      <p class="vv-card-image-banner__sub-heading">
          {{ subHeading }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vv-card-image-banner',
    components: {

    },
    data() {
      return {
        colorPrefix: 'vv-card--',
        backgroundImageLocation: 'src/assets/images',
      };
    },
    props: {
      bannerImage: '',
      mainHeading: '',
      subHeading: '',
    },
  };
</script>
