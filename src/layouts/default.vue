<template>
  <div id="top" class="Layout">
    <b-button
      id="toggler"
      class="navbar-toggler navbar-light"
      variant="outline-light"
      :pressed.sync="is_toggled"
    >
      <span class="navbar-toggler-icon" />
    </b-button>

    <b-container id="container" :class="{ 'is-toggled': is_toggled }" fluid>
      <b-row>
        <div id="sidebar">
          <SideBar role="navigation" :reset-toggle="resetToggle" />
        </div>
        <div id="content">
          <nuxt role="main" />
          <!-- <Footer role="footer" /> -->
        </div>
      </b-row>
    </b-container>

    <b-link id="back" v-scroll-to="'#top'" @click="resetToggle">
      <fa-icon class="fa-2x text-primary" icon="chevron-circle-up" />
    </b-link>
  </div>
</template>

<script>
import SideBar from '@/components/layouts/sidebar.vue';
// import Footer from '@/components/layouts/footer.vue';

export default {
  components: {
    SideBar,
    // Footer,
  },
  data() {
    return {
      is_toggled: false,
    };
  },
  methods: {
    resetToggle() {
      this.is_toggled = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.Layout {
  overflow-x: hidden;

  #sidebar {
    position: fixed;
    top: 0;
    height: 100vh;
    width: auto;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: $zindex-sticky;
    transform: translateX(0);
    transition: width 1s ease, transform 1s ease;
  }

  #content {
    width: 100%;
    padding-left: 0;
    transform: translateX(0);
    transition: padding-left 1s ease, transform 1s ease;
  }

  #toggler {
    position: fixed;
    top: 1rem;
    right: 1rem;
    transition: right 1s;
    z-index: $zindex-fixed;
  }

  #back {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: $zindex-fixed;
  }

  // stylelint-disable-next-line order/order
  @include media-breakpoint-down(sm) {
    $sidebar-width: 240px;

    #sidebar {
      transform: translateX(-$sidebar-width);
      width: $sidebar-width;
    }

    #container {
      &.is-toggled {
        #sidebar {
          transform: translateX(0);
        }

        #content {
          transform: translateX($sidebar-width);
        }
      }
    }
  }

  // stylelint-disable-next-line order/order
  @mixin layout($sidebar-width) {
    #sidebar {
      width: $sidebar-width;
    }

    #content {
      padding-left: $sidebar-width;
    }
  }

  // stylelint-disable-next-line order/order
  @include media-breakpoint-up(md) {
    @include layout(256px);

    #toggler {
      right: -4rem;
    }
  }

  // stylelint-disable-next-line order/order
  @include media-breakpoint-up(lg) {
    @include layout(25%);
  }

  // stylelint-disable-next-line order/order
  @include media-breakpoint-up(xl) {
    @include layout(20%);
  }
}
</style>
