<template>
  <div class="vv-card-info">
    <div class="vv-card vv-card-info" :class="colorPrefix + color">
      <div class="vv-card__header text--centered text--large">
          {{ description }}{{ value }}
      </div>
      <div class="vv-card__footer">
          {{ generatedFact }}
      </div>
      <div class="vv-card__content text-tiny">
          Fact generated by http://numbersapi.com
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'vv-card-info',
    components: {

    },
    data() {
      return {
        colorPrefix: 'vv-card--',
        generatedFact: 'finding your fact...',
      };
    },
    props: {
      value: '',
      description: '',
      color: '',
    },
    computed: {
      // eslint-disable-next-line
      randomFact: (vueObject) => {
        const http = axios;
        const vm = vueObject;
        const number = vm.$options.propsData.value;
        http.get(`http://numbersapi.com/${number}/trivia`)
          .then((response) => {
            vm.generatedFact = response.data;
          })
          .catch(() => {
            vm.generatedFact = "Can't find anything";
          });
        return 'Random Fact!';
      },
    },
    mounted() {
      const vueObject = this;
      this.randomFact(vueObject);
    },
  };
</script>
