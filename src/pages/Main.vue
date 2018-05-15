<template>
    <div class="pageContent" id="MainPage">
        <full-page :options="options">
            <div class="section">
                <first-slide />
            </div>
            <div class="section">
                <k-t-m-p-slide />
            </div>
            <div class="section about">
                <about-slide />
            </div>
            <div class="section">
                <callback-slide />
            </div>
        </full-page>
        <button class="ctrlBtn down" type="button" @click="moveDown">
          <img src="src/assets/LineDown.svg" alt="">
        </button>
        <button class="ctrlBtn up" type="button" @click="moveUp">
          <img src="src/assets/LineUp.svg" alt="">
        </button>
    </div>
</template>

<script>
import FullPage from 'vue-fullpage.js/src/FullPage.vue';
import FirstSlide from './Main/firsSlide.vue';
import KTMPSlide from './Main/KTMPSlide.vue';
import AboutSlide from './Main/aboutSlide.vue';
import CallbackSlide from './Main/callbackSlide.vue';

export default {
  name: 'MainPage',
  data() {
    return {
      options: {
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Главная', 'КТРМ', 'О компании', 'Связь'],
        showActiveTooltip: true,
        slidesNavigation: true,
        controlArrows: false,
      },
    };
  },
  methods: {
    moveDown() {
      $.fn.fullpage.moveSectionDown();
    },
    moveUp() {
      $.fn.fullpage.moveSectionUp();
    }
  },
  beforeDestroy () {
    console.log(1);
    $.fn.fullpage.destroy('all');
  },
  components: {
    FullPage,
    FirstSlide,
    KTMPSlide,
    AboutSlide,
    CallbackSlide,
  },
};
</script>

<style lang="scss" scoped>
    .pageContent {
        width: 100%;
        min-height: 100vh;
    }

    .section {
        color: #fff;
        position: relative;
    }

    .ctrlBtn {
      position: absolute;
      top: calc(50% + 95px);
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      outline: none;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &.down {
        left: 3%;
      }

      &.up {
        top: calc(50% + 94px);
        left: calc(3% + 45px);
      }
    }
</style>
