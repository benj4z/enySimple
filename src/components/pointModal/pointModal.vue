<template>
    <div class="point-container" v-if="content && Object.keys(content).length">
        <div class="background" :style="{backgroundImage: bg}"/>
        <vue-perfect-scrollbar v-once class="scroll-area">
          <div class="scroll-content">
              <div class="separator" />
              <div class="content">
                   <div class="content-header">
                      <h2 class="title">{{content.title}}</h2>
                       <div class="play-link" v-show="false">
                           <img src="src/assets/play.svg" alt="">
                           <span>видео</span>
                       </div>
                   </div>
                  <div class="content-body">
                      <div class="article" v-for="item in content.content">
                        <h2 class="subtitle">{{item.title}}</h2>
                        <p v-for="text in item.texts">
                          {{text}}
                        </p>
                      </div>
                      <!--<div class="more">
                        <span class="moreTitle">{{content.more.title}}</span>
                        <a :href="data.more.site" target="_blank">{{content.more.site}}</a>
                      </div>-->
                  </div>
              </div>
          </div>
        </vue-perfect-scrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue';

export default {
  name: 'point-modal',
  components: {
    VuePerfectScrollbar,
  },
  props: ['content'],
  data() {
    return {
      bg: 'url(src/assets/point1.jpg)',
    };
  }
};
</script>

<style lang="scss" scoped>
    .scroll-area {
      position: absolute;
      top: 50%;
      left: 6%;
      transform: translateY(-50%);
      width: 92%;
      height: 80%;
    }

    .scroll-content {
      width: 97%;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-size: cover;
        left: 0;
        top: 0;
    }

    .point-container {
        width: 100%;
        height: 100%;
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
        opacity: 0.6;
        letter-spacing: 2px;
        cursor: pointer;

        img {
            margin-right: 20px;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    .separator {
        height: 55vh;
    }

    .subtitle {
      color: #fff;
      text-transform: uppercase;
      font-family: arame;
    }

    .title {
        color: #fff;
        width: 55%;
        font-weight: 400;
        font-family: arame;
        font-size: 2.5vw;
        margin: 0;
    }

    .content-header {
        display: flex;
        justify-content: space-between;
        padding: 0 60px 60px 60px;
        border-bottom: 1px solid #fff;;
    }

    .content-body {
        width: 65%;
        padding: 60px;

        p {
            color: #fff;
            font-size: 16px;
            line-height: 30px;
            letter-spacing: 1px;
        }
    }
</style>
