<template>
  <transition
    name="header"
    mode="out-in"
    appear
    v-on:enter="startAnimate"
    v-on:before-enter="beforeAnimate"
    v-on:leave="leaveAnimate" >
      <div class="slideContent offScreen">
          <div class="content">
            <div class="topControls tabs-component-tab">
              <a href="#" class="anim-link is-active" data-anchor="slide1" @click.prevent="moveLeft">Енисей 2М</a>
              <a href="#" class="anim-link" data-anchor="slide2" @click.prevent="moveRight">Енисей 3D</a>
            </div>
            <div class="slideContainer">
              <div class="slide" data-anchor="slide1">
                <img class="product-img" src="src/assets/source.png" alt="Енисей 2М">
                <div class="bottom-controls">
                  <router-link to="/complexes/eni2m" class="btnControls anim-link">
                    подробнее
                  </router-link>
                  <button class="btnControls anim-link">Видео</button>
                  <button class="btnControls anim-link">Фото</button>
                </div>
              </div>
              <div class="slide" data-anchor="slide2">
                <img class="product-img" src="src/assets/Eni3D.png" alt="Енисей 2М">
                <div class="bottom-controls">
                  <router-link to="/complexes/eni3d" class="btnControls anim-link">
                    подробнее
                  </router-link>
                  <button class="btnControls anim-link">Видео</button>
                  <button class="btnControls anim-link">Фото</button>
                </div>
              </div>
            </div>
          </div>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'k-t-m-p-slide',
  data() {
    return {
      options: {
        useUrlFragment: false,
      },
    };
  },
  methods: {
    startAnimate(el, done) {
      setTimeout(() => {
        $(this.$el).toggleClass('onScreen offScreen');
      }, 500);
      done();
    },

    leaveAnimate(el, done) {
      $(this.$el).toggleClass('onScreen offScreen');
      setTimeout(() => {
        done();
      }, 700);
    },

    beforeAnimate() {
      $(this.$el).removeClass('onScreen');
      $(this.$el).removeClass('onScreen');
    },

    moveLeft() {
      $.fn.fullpage.moveSlideLeft();
      $('.topControls a').removeClass('is-active');
      $('.topControls a').first().addClass('is-active');
    },

    moveRight() {
      $.fn.fullpage.moveSlideRight();
      $('.topControls a').removeClass('is-active');
      $('.topControls a').last().addClass('is-active');
    }
  }
};
</script>

<style lang="scss" scoped>

    .slideContent {
        background-color: #000;
        background-image: url(./ktmpBg.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        position: relative;

        &.offScreen {
          img {
            transform: scale(1.15) translate(-50%, -50%);
          }
        }

        &.onScreen {
          img {
            transform: scale(1) translate(-50%, -50%);
          }
        }
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 85%;
    }

    .tabs-component {
        width: 100%;
        height: 100%;
    }

    .topControls {
      width: 100%;
      position: absolute;
      top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .tabs-component-tab {
      margin-right: 100px;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;
        text-transform: uppercase;
        opacity: 0.5;
        font-weight: 600;
        letter-spacing: 5px;
        position: relative;
        margin-right: 100px;

        &.is-active {
          opacity: 1;

          &:after, &:before {
            width: 50%;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .slideContainer {
      height: 100%;
    }

    .product-img {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all .35s;
        z-index: -1;
        transform-origin: 0% 50%;
    }

    .bottom-controls {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
    }

    .btnControls {
        background-color: transparent;
        border: 0;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 4px;
        color: #fff;
        margin-right: 60px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 1367px) {
      .product-img {
        width: 60%;
      }
    }

    @media (max-width: 769px) {
      .product-img {
        width: 80%;
      }
    }

    @media (max-width: 469px) {
      .tabs-component-tab a {
        margin-right: 30px;
        font-size: 16px;
      }

      .bottom-controls {
        width: 95%;
        text-align: center;
      }

      .btnControls {
        margin-right: 8px;
      }

      .slideContent {
        min-height: 100vh;
      }

      .slideContent {
        padding: 5% 9%;
      }

      .content {
        width: 85%;
      }
    }

</style>
