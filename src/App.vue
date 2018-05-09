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
    left: 5.5%;
}

#fp-nav {
  z-index: 0;
}

#fp-nav ul li .fp-tooltip {
    text-transform: uppercase;
    font-family: arame;
    letter-spacing: 3px;
    font-size: 10px;
    left: auto!important;
    right: 25px;
    top: 1px!important;
}

#fp-nav ul li a span {
    height: 8px;
    width: 8px;
    background: transparent;
    border: 1px solid #fff;
    margin: -2px 0 0 -4px;
}

#fp-nav ul li {
    margin-bottom: 20px;
}

#fp-nav ul li a.active span:before,
#fp-nav ul li:hover a.active span:before,
.fp-slidesNav ul li a.active span:before,
.fp-slidesNav ul li:hover a.active span:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
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
    }

    .tabs-component-tab {
        margin-right: 100px;

        &:last-child {
            margin-right: 0;
        }

        &.is-active {
            a {
                opacity: 1;
                &:after {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 1px;
                    left: -15px;
                    top: 0;
                    background-color: #fff;
                }
            }
        }
        a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            text-transform: uppercase;
            opacity: 0.5;
            font-weight: 600;
            font-family: arame;
            letter-spacing: 3px;
            position: relative;
        }
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
            left: 58%!important;
            bottom: 10%;

            ul li {
                width: 60px;
            }

            ul li a span {
                width: 60px;
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

</style>
