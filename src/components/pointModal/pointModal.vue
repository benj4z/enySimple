<template>
    <div class="point-container" v-if="data && Object.keys(data).length">
        <div class="background" :style="{backgroundImage: bg}"/>
        <vue-perfect-scrollbar v-once class="scroll-area">
            <div class="separator" />
            <div class="content">
                 <div class="content-header">
                    <h2 class="title">{{data.title}}</h2>
                     <div class="play-link">
                         <img src="src/assets/play.svg" alt="">
                         <span>видео</span>
                     </div>
                 </div>
                <div class="content-body">
                    <div class="article" v-for="item in data.content">
                      <h2 class="subtitle">{{item.title}}</h2>
                      <p v-for="text in item.texts">
                        {{text}}
                      </p>
                    </div>
                    <!--<div class="more">
                      <span class="moreTitle">{{data.more.title}}</span>
                      <a :href="data.more.site" target="_blank">{{data.more.site}}</a>
                    </div>-->
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
  },
  computed: {
    data() {
      return this.content;
    }
  }
};
</script>

<style lang="scss" scoped>
    .scroll-area {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 85%;
        height: 80%;
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
        width: 40%;
        font-family: arame;
        font-size: 2vw;
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
