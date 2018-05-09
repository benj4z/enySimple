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
</style>
