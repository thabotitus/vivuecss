<template>
  <div>
    <sidebar></sidebar>
    <main>
      <topbar pageTitle="Cards"></topbar>
      <div class="container">
        <div class="row">
          <div class="col col--1/4-large">
            <vv-card-info value="Hello"
                          color="teal">
            </vv-card-info>
          </div>
          <div class="col col--1/4-large">
            <vv-card-info value="my"
                          color=""
                          icon="ion-social-skype">
            </vv-card-info>
          </div>
          <div class="col col--1/4-large">
            <vv-card-info value="beautiful"
                          color="pink"
                          icon="ion-social-python">
            </vv-card-info>
          </div>
          <div class="col col--1/4-large">
            <vv-card-info value="components"
                          color=""
                          icon="ion-social-python">
            </vv-card-info>
          </div>
        </div>
        <div class="row">
          <div class="col col--1/2-large">
            <vv-card>
              <vv-card-header title="daily views"></vv-card-header>

              <vv-card-content>
                  Now that there is the Tec-9, a crappy spray gun from South Miami.
                  This gun is advertised as the most popular gun in American crime.
                  Do you believe that shit? It actually says that in the little book
                  that comes with it: the most popular gun in American crime. Like
                  they're actually proud of that shit.
              </vv-card-content>

              <vv-card-footer>
                <div class="row">
                  <div class="col col--1-small">
                    <p>Just Make shit Happen</p>
                  </div>
                </div>
              </vv-card-footer>
            </vv-card>
          </div>
          <div class="col col--1/2-large">
            <vv-card>
              <vv-card-header title="daily views"></vv-card-header>

              <vv-card-content>
                  Now that there is the Tec-9, a crappy spray gun from South Miami.
                  This gun is advertised as the most popular gun in American crime.
                  Do you believe that shit? It actually says that in the little book
                  that comes with it: the most popular gun in American crime. Like
                  they're actually proud of that shit.
              </vv-card-content>
            </vv-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import vvButton from '../components/vv-Button';
  import vvCard from '../components/card/vv-Card';
  import vvCardHeader from '../components/card/vv-CardHeader';
  import vvCardContent from '../components/card/vv-CardContent';
  import vvCardFooter from '../components/card/vv-CardFooter';
  import vvSidebar from '../components/sidebar/vv-Sidebar';
  import vvSidebarItem from '../components/sidebar/vv-SidebarItem';
  import Topbar from '../containers/Topbar';
  import Sidebar from '../containers/Sidebar';
  import vvCardInfo from '../components/card/vv-CardInfo';

  export default {
    name: 'Cards',
    components: {
      vvButton,
      vvCard,
      vvCardInfo,
      vvCardHeader,
      vvCardContent,
      vvCardFooter,
      vvSidebar,
      vvSidebarItem,
      Topbar,
      Sidebar,
    },
    data() {
      return {
        pageTitle: 'Cards',
      };
    },
  };
</script>
