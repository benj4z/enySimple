<template>
  <div id="app">
    <modal v-show="showModal" @close="close">
        <contacts/>
    </modal>
    <Header @open_modal="openModal" />
    <background-video/>
    <router-view/>
    <copyright/>
  </div>
</template>

<script>
import Header from './components/header/index.vue';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo.vue';
import Copyright from './components/copyright/Copyright.vue';
import Modal from './components/modal/modal.vue';
import Contacts from './components/contacts/contacts.vue';

export default {
  name: 'App',
  components: {
    Header,
    BackgroundVideo,
    Copyright,
    Modal,
    Contacts,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal(modalId) {
      if (modalId === 'contacts') {
        this.showModal = true;
      }
    },
    close() {
      this.showModal = false;
    },
  },
};

</script>

<style lang="scss">

@import '~normalize.css';

#app {
    background-color: #000;
    width: 100%;
    height: 100vh;
    position: relative;
}

body {
    font-family: monoline;
    font-size: 14px;
}

.fp-tableCell {
    position: relative;
    vertical-align: bottom;
}

.slideContent {
    width: 100%;
    height: 100%;
    padding: 5% 15%;
    position: relative;
}

* {
    box-sizing: border-box;
}

     /* GLOBAL STYLES FOR NAVIGATOR */

#fp-nav.left {
    left: 3%!important;
}

#fp-nav {
  z-index: 0;
}

#fp-nav ul li .fp-tooltip {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    opacity: 0.6;
    left: 40px!important;
    top: 2px!important;
}

#fp-nav ul li a span {
    height: 6px;
    width: 6px;
    background: transparent;
    border: 1px solid #fff;
    font-size: 12px;
    transform: translate(-50%, -50%);
    margin: 0!important;
}

#fp-nav ul li:hover a span {
  width: 10px;
  height: 10px;
}

#fp-nav ul li {
    margin-bottom: 32px;
}

#fp-nav ul li a.active span:before,
#fp-nav ul li:hover a span:before,
.fp-slidesNav ul li a.active span:before,
.fp-slidesNav ul li:hover a span:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

    /* GLOBAL STYLES TABS */

    .tabs-component-tabs {
        margin: 0;
        padding: 0;
        margin-top: 50px;
        margin-bottom: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        z-index: 2;
    }

    .tabs-component-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .number-block {
        .fp-tableCell {
            height: 100% !important;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }


    }

    .about {
        .fp-slidesNav.bottom {
            left: 64.5%!important;
            bottom: 12%;

            ul li {
                width: 55px;
                vertical-align: middle;
                margin: 7px 3px;
            }

            ul li a span {
                width: 55px;
                height: 1px;
                background-color: #fff;
                opacity: 0.5;
                border-radius: 0;
                left: 0;
                margin: 0;

                &:before, &:after {
                    content: none;
                }
            }

            ul li .active span{
                opacity: 1;
                height: 2px;
            }
        }
    }

    .anim-link {
      position: relative;
      background-color: transparent;

      &:after, &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        width: 0;
        height: 1px;
        transition: all .35s;
        background-color: #fff;
      }

      &:after {
        left: 50%;
      }

      &:before {
        right: 50%;
      }

      &:hover {
        &:after, &:before {
          width: 50%!important;
        }
      }

    }

    .ktmp {
      .fp-slidesNav {
        display: none!important;
      }

      .fp-section.fp-table, .fp-slide.fp-table {
        height: 100%;
        display: flex;
      }

      .fp-tableCell {
        position: relative;
        display: block;
        height: 100% !important;
      }
    }

    @media (max-width: 1367px) {
      body {
        font-size: 13px;
      }

      #fp-nav ul li .fp-tooltip {
        font-size: 8px;
      }
    }

    @media (max-width: 1024px) {
      #fp-nav ul li .fp-tooltip {
        display: none;
      }
    }

    @media (max-width: 469px) {
      #fp-nav.left {
        left: 1%!important;
      }

      body {
        font-size: 12px;
      }

      .about .fp-slidesNav.bottom {
        display: none;
      }
    }

</style>
