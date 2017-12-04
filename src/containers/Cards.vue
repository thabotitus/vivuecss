<template>
  <div>
    <main>
      <topbar pageTitle="Cards">
        <main-menu></main-menu>
      </topbar>
      <div class="main__content">
        <div class="container">
          <div class="row">
            <div class="col col--1-large">
              <vv-card-image-banner bannerImage="food.jpg"
                                    mainHeading="the vegan"
                                    subHeading="a short story about a vegan."
                                    class="vv-card-image-banner--overlay-left">
              </vv-card-image-banner>
            </div>
          </div>
          <div class="row">
            <div class="col col--1/3-large" v-for="i in 6">
              <vv-card-info :value="i"
                            color=""
                            description="Random Fact #">
              </vv-card-info>
            </div>
          </div>
          <div class="row">
            <div class="col col--1/2-large">
              <vv-card>
                <vv-card-header title="daily news"></vv-card-header>

                <vv-card-content>
                    Now that there is the Tec-9, a crappy spray gun from South Miami.
                    This gun is advertised as the most popular gun in American crime.
                    Do you believe that shit? It actually says that in the little book
                    that comes with it: the most popular gun in American crime. Like
                    they're actually proud of that shit.
                </vv-card-content>

                <vv-card-footer>
                  “Security is a top priority for every Apple product, and regrettably
                  we stumbled with this release of macOS,” admitted an Apple spokesperson.
                  “We greatly regret this error and we apologize to all Mac users, both
                  for releasing with this vulnerability and for the concern it has caused.
                  Our customers deserve better. We are auditing our development processes
                  to help prevent this from happening again.”
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

                <vv-card-footer>
                  <div class="row">
                    <div class="col col--1-small">
                      <p>......</p>
                    </div>
                  </div>
                </vv-card-footer>
              </vv-card>
            </div>
          </div>
          <div class="row">
            <div class="col col--1-large">
              <vv-card-image-banner bannerImage="bridge.jpeg"
                                    mainHeading="the bridge"
                                    subHeading="build a bridge, get over it"
                                    class="vv-card-image-banner--overlay-top">
              </vv-card-image-banner>
            </div>
          </div>
          <div class="row">
            <div class="col col--1/2-large">
              <vv-card>
                <vv-card-header title="the hill"></vv-card-header>
                <div class="vv-card__image vv-card__image--overlay-to">
                  <img src="../assets/images/hill.jpg" />
                </div>
              </vv-card>
            </div>
            <div class="col col--1/2-large">
              <vv-card>
                <vv-card-header title="true friends"></vv-card-header>
                <div class="vv-card__image vv-card__image--overlay-to">
                  <img src="../assets/images/friends.jpg" />
                </div>
                <vv-card-content>
                    May musical arrival beloved luckily adapted him. Shyness mention
                    married son she his started now. Rose if as past near were. To
                    graceful he elegance oh moderate attended entrance pleasure.
                    Vulgar saw fat sudden edward way played either. Thoughts smallest
                    at or peculiar relation breeding produced an. At depart spirit on
                    stairs. She the either are wisdom praise things she before. Be mother
                    itself vanity favour do me of. Begin sex was power joy after had walls miles.
                </vv-card-content>

                <vv-card-footer>
                  <vv-button class="vv-button--teal" text="share this story"></vv-button>
                </vv-card-footer>
              </vv-card>
            </div>
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
  import vvCardImageBanner from '../components/card/vv-CardImageBanner';
  import vvSidebar from '../components/sidebar/vv-Sidebar';
  import vvSidebarItem from '../components/sidebar/vv-SidebarItem';
  import Topbar from '../containers/Topbar';
  import Sidebar from '../containers/Sidebar';
  import MainMenu from '../containers/Menu';
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
      vvCardImageBanner,
      vvSidebar,
      vvSidebarItem,
      Topbar,
      Sidebar,
      MainMenu,
    },
    data() {
      return {
        pageTitle: 'Cards',
      };
    },
  };
</script>
