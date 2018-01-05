<template>
  <div class="full_layout">
    <main>
      <topbar pageTitle="home">
        <main-menu></main-menu>
      </topbar>
      <div class="main__content">
        <div class="container-fluid">
          <div class="row">
            <div class="col col--1-large">
              <vv-card-image-banner bannerImage="desktop.jpg"
                                    mainHeading="welcome to vvc!"
                                    subHeading="building all the cool components"
                                    class="vv-card-image-banner--overlay-left">
              </vv-card-image-banner>
            </div>
          </div>

          <div class="row">
            <div class="col col--1/3-large">
              <vv-card>
                <vv-card-content>
                  Building components is really fun! Especially with Vue!
                </vv-card-content>
              </vv-card>
            </div>
            <div class="col col--1/3-large">
              <vv-card>
                <vv-card-content>
                  And then we use fellow developers tools like Floax, built by Stuart.
                  Super light weight, smart grid!
                </vv-card-content>
              </vv-card>
            </div>
            <div class="col col--1/3-large">
              <vv-card>
                <vv-card-content>
                  So lets build and have fun doing it.
                </vv-card-content>
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
  import vvSidebar from '../components/sidebar/vv-Sidebar';
  import vvSidebarItem from '../components/sidebar/vv-SidebarItem';
  import Topbar from '../containers/Topbar';
  import Sidebar from '../containers/Sidebar';
  import MainMenu from '../containers/Menu';
  import vvCardImageBanner from '../components/card/vv-CardImageBanner';
  import vvCard from '../components/card/vv-Card';
  import vvCardContent from '../components/card/vv-CardContent';

  export default {
    name: 'Library',
    components: {
      vvButton,
      vvSidebar,
      vvSidebarItem,
      Topbar,
      Sidebar,
      MainMenu,
      vvCardImageBanner,
      vvCard,
      vvCardContent,
    },
    data() {
      return {
        pageTitle: 'Library',
      };
    },
  };
</script>
