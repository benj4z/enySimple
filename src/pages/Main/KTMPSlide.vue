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
              <tabs :options={options}>
                  <tab name="Енисей 2М">
                      <img class="product-img" src="src/assets/source.png" alt="Енисей 2М">
                      <div class="bottom-controls">
                          <router-link to="/complexes/eni2m" class="btnControls">
                              подробнее
                          </router-link>
                          <button class="btnControls">Видео</button>
                          <button class="btnControls">Фото</button>
                      </div>
                  </tab>
                  <tab name="Енисей 3D">
                      <img class="product-img" src="src/assets/Eni3D.png" alt="Енисей 2М">
                      <div class="bottom-controls">
                          <router-link to="/complexes/eni3d" class="btnControls">
                              подробнее
                          </router-link>
                          <button class="btnControls">Видео</button>
                          <button class="btnControls">Фото</button>
                      </div>
                  </tab>
              </tabs>
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
  }
};
</script>

<style lang="scss" scoped>

    .slideContent {
        background-color: #000;
        background-image: url(../../../public/ktmpBg.png);
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
        width: 70%;
        height: 85%;
    }

    .tabs-component {
        width: 100%;
        height: 100%;
    }

    .product-img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all .35s;
        z-index: -1;
    }

    .bottom-controls {
        position: absolute;
        bottom: 0;
    }

    .btnControls {
        background-color: transparent;
        border: 0;
        text-transform: uppercase;
        text-decoration: none;
        font-family: arame;
        font-weight: 400;
        letter-spacing: 4px;
        color: #fff;
        margin-right: 60px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            text-decoration: underline;
        }
    }
</style>
