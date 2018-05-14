<template>
  <transition
    name="details"
    mode="out-in"
    appear
    v-bind:css="false"
    v-on:enter="startAnimate"
    v-on:before-enter="beforeAnimate"
    v-on:leave="leaveAnimate" >
    <div class="container offScreen">
        <modal v-show="settings" @close="close">
            <settings />
        </modal>
        <modal v-show="points.p1" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p2" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p3" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p4" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p5" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p6" @close="close">
            <point-modal :content="content"/>
        </modal>
        <modal v-show="points.p7" @close="close">
            <point-modal :content="content"/>
        </modal>
        <div class="drag-container">
          <div class="drag" v-drag>
            <div class="drag-img-container">
              <button
                type="button"
                class="point p1"
                data-point="p1"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen"
              >
                <point />
                <span class="point-text">
                  Плазменная технологическая оснастка семейства Powermax, Maxpro 200, HyPerfomance HPR XPR.
                </span>
              </button>
              <button
                type="button"
                class="point p2"
                data-point="p2"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
                <span class="point-text">
                  Система числового программного управления Hypertherm EDGE Connect.
                </span>
              </button>
              <button
                type="button"
                class="point p3"
                data-point="p3"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
                <span class="point-text">
                  Портал с приводами перемещения
                </span>
              </button>
              <button
                type="button"
                class="point p4"
                data-point="p4"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
                <span class="point-text">
                  Газокислородная технологическая оснастка
                </span>
              </button>
              <button
                type="button"
                class="point p5"
                data-point="p5"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
                <span class="point-text">
                  Путь рельсовый
                </span>
              </button>
              <button
                type="button"
                class="point p6"
                data-point="p6"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
                <span class="point-text">
                  Рабочий стол вытяжной секционный с самоочищающимся фильтром.
                </span>
              </button>
              <button
                type="button"
                class="point p7"
                data-point="p7"
                @mouseover="showHighlight"
                @mouseleave="hideHighlight"
                @click="pointOpen">
                <point />
              </button>
              <img class="product-img" src="src/assets/source.png" alt="Енисей 2М">
              <img class="highlight" data-highlight="p1" src="src/assets/h1.png" />
              <img class="highlight" data-highlight="p2" src="src/assets/h2.png" />
              <img class="highlight" data-highlight="p3" src="src/assets/h3.png" />
              <img class="highlight" data-highlight="p4" src="src/assets/h4.png" />
              <img class="highlight" data-highlight="p5" src="src/assets/h5.png" />
              <img class="highlight" data-highlight="p6" src="src/assets/h6.png" />
              <img class="highlight" data-highlight="p7" src="src/assets/h7.png" />
            </div>
          </div>
        </div>
        <div class="content">
            <div class="titleBlock">
                <div class="tag">
                    Енисей 2м
                </div>
                <h2 class="title">Состав<br>комплекса</h2>
            </div>
        </div>
        <div class="bottom-controls">
          <button class="play-link">
            <img src="src/assets/play.svg" alt="play">
            <span>о комплексе</span>
          </button>
          <button data-modal="settings" @click="settingsOpen" class="btnControls">
            характеристики
          </button>
        </div>
        <button type="button" @click="backToMain" class="close">
          Назад
        </button>
        <div class="rightText">
          Раскрой (технологический процесс разрезания листов на отдельные детали или заготовки) может производиться двумя порталами одновременно, так же позволяет выполнять разделку кромок различной конфигурации листового металлопроката под сварку, типа А, V, Y
        </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import vueDrag from 'vue-dragging';
import Modal from '../components/modal/modal.vue';
import Settings from '../components/settings/settings.vue';
import Point from '../components/point/point.vue';
import PointModal from '../components/pointModal/pointModal.vue';


Vue.use(vueDrag);

export default {
  name: 'details',
  components: {
    Modal,
    Settings,
    Point,
    PointModal,
    axios,
  },
  data() {
    return {
      settings: false,
      points: {
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
        p7: false,
      },
      content: '',
    };
  },
  updated() {
    console.log(this.content);
  },
  methods: {
    close() {
      this.settings = false;
      this.points.p1 = false;
      this.points.p2 = false;
      this.points.p3 = false;
      this.points.p4 = false;
      this.points.p5 = false;
      this.points.p6 = false;
      this.points.p7 = false;
      this.content = '';
    },
    settingsOpen() {
      this.settings = true;
    },
    pointOpen(event) {
      const { point } = event.currentTarget.dataset;

      this.points[point] = true;

      const callback = () => this.points[point] = true;

      this.uploadModalData(point, callback)

    },
    uploadModalData(point, callback){
      const data_src = `src/data/details/${point}.json`;

      axios.get(data_src).
      then(response => {
        this.content = response.data;
        callback();
      }).catch(error => {
        console.log(error);
      });
    },
    showHighlight(event) {
      const { point } = event.currentTarget.dataset;

      $(`.highlight[data-highlight=${point}]`).fadeIn(300);
      $(`.${point}`).find('.point-text').fadeIn(300);
    },

    hideHighlight(event) {
      const { point } = event.currentTarget.dataset;

      $(`.highlight[data-highlight=${point}]`).fadeOut(300);
      $(`.${point}`).find('.point-text').fadeOut(300);
    },

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

    backToMain() {
      this.$router.push('/');
      setTimeout(() => {
        $('#fp-nav').find('li a')[1].click();
      })
    }
  },
};
</script>

<style lang="scss" scoped>
    .container {
        background-color: #000;
        background-image: url(../../public/ktmpBg.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        position: relative;
        height: 100%;

        &.offScreen {
          .product-img {
            transform: scale(0.72);
          }

          .point {
            @for $i from 1 to 9 {
              &.p#{$i} {
                opacity: 0;
                transition-delay: 0s;
              }
            }
          }
        }

        &.onScreen {
          .product-img {
            transform: scale(1);
          }

          .point {
            @for $i from 1 to 9 {
              &.p#{$i} {
                opacity: 1;
                transition-delay: $i*0.1s;
              }
            }
          }
        }
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 80%;
        color: #fff;
        overflow: hidden;
    }

    .titleBlock {
        position: absolute;
        left: 20px;
    }

    .drag-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      overflow: hidden;
    }

    .drag {
        text-align: center;
        cursor: grabbing;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .drag-img-container {
      position: relative;
      width: auto;
      height: auto;
    }

    img {
        pointer-events: none;
        width: auto;
    }

    .product-img {
        width: auto;
        pointer-events: none;
        transition: all .45s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .rightText {
      position: absolute;
      bottom: 7%;
      right: 3%;
      color: #fff;
      width: 400px;
      line-height: 20px;
    }

    .tag {
        text-transform: uppercase;
        letter-spacing: 3px;
        opacity: 0.5;
        font-weight: 600;
    }

    .title {
        font-family: arame;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2vw;
    }

    .bottom-controls {
        z-index: 100;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    .play-link {
        display: flex;
        background-color: transparent;
        border: 0;
        align-items: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 10px;
        cursor: pointer;

        img {
            margin-right: 20px;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    .btnControls {
        background-color: transparent;
        border: 0;
        text-transform: uppercase;
        font-family: arame;
        font-weight: 600;
        letter-spacing: 3px;
        color: #fff;
        margin-right: 50px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    .point-text {
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fff;
      position: absolute;
      font-weight: 600;
      width: 220px;
      left: 100%;
      top: 50%;
      text-align: left;
      line-height: 18px;
      display: none;
    }

    .point {
        background-color: transparent;
        border: 0;
        position: absolute;
        cursor: pointer;
        z-index: 10;
        transition: all .45s;

        &.p1 {
            top: 38%;
            left: 300px;
        }

        &.p2 {
            top: 24%;
            left: 545px;
        }

        &.p3 {
            top: 10%;
            left: 850px;
        }

        &.p4 {
            top: 23%;
            left: 1020px;
        }

        &.p5 {
            top: 75%;
            left: 713px;
        }

        &.p6 {
            top: 66%;
            left: 390px;
        }

        &.p7 {
            top: 48%;
            left: 140px;
        }
    }

    .highlight {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }

    .close {
      position: absolute;
      z-index: 5;
      top: 50%;
      left: 2%;
      transform: translateY(-50%) rotate(90deg);
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-family: arame;
      cursor: pointer;
      background-color: transparent;
      border: none;

      &:after, &:before {
        content: '';
        width: 31px;
        height: 2px;
        background-color: #fff;
        position: absolute;
      }

      &:after {
        top: 7px;
        left: -33%;
        transform: rotate(45deg);
      }

      &:before {
        top: 7px;
        left: -33%;
        transform: rotate(-45deg);
      }
    }

    @media screen and (max-width: 1367px) {

      .content {
        height: 65%;
      }


    }
</style>
