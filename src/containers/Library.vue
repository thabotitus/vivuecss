<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Library</h1>
        </div>
      </div>
      <div class="row">
        <div class="col col--1/2-large">
          <vv-card>
            <vv-card-header title="My Cool Card"></vv-card-header>

            <vv-card-content>
                Now that there is the Tec-9, a crappy spray gun from South Miami.
                This gun is advertised as the most popular gun in American crime.
                Do you believe that shit? It actually says that in the little book
                that comes with it: the most popular gun in American crime. Like
                they're actually proud of that shit.
            </vv-card-content>

            <vv-card-footer>
              <vv-button value="submit" class="vv-button--red vv-button--round" text="Magic"></vv-button>
            </vv-card-footer>
          </vv-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vvButton from '../components/vv-Button';
  import vvCard from '../components/card/vv-Card';
  import vvCardHeader from '../components/card/vv-CardHeader';
  import vvCardContent from '../components/card/vv-CardContent';
  import vvCardFooter from '../components/card/vv-CardFooter';

  export default {
    name: 'Library',
    components: {
      vvButton,
      vvCard,
      vvCardHeader,
      vvCardContent,
      vvCardFooter,
    },
    data() {
      return {
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
