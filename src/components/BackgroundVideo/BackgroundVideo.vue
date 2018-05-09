<template>
    <div class="video">
        <video src="src/assets/Enisey.mp4" autoplay loop muted></video>
    </div>
</template>

<script>
export default {
  name: 'BackgroundVideo',
  methods: {
    video() {
      /* eslint-disable */
      $(() => {
        const outerDiv = $('.video');
        const videoTag = outerDiv.find('video');
        function resize() {
          const width = outerDiv.width();
          const height = outerDiv.height();
          const aspectW = 16;
          const aspectH = 9;
          const scaleX = width / aspectW;
          const scaleY = height / aspectH;
          const scale = Math.max(scaleX, scaleY);
          const w = Math.ceil(aspectW * scale);
          const h = Math.ceil(aspectH * scale);
          let x = 0;
          let y = 0;
          if (w > width) x = -(w - width) * 0.5;
          if (h > height) y = -(h - height) * 0.5;
          videoTag.css({
            width: w,
            height: h,
            top: y,
            left: x,
          });
        }
        $(window).resize(resize);
        setTimeout(() => resize(), 100);
      });
    },
  },
  mounted() {
    this.video();
  },
};
</script>

<style lang="scss" scoped>
    .video{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: block;
        overflow-x: hidden;
        overflow-y: hidden;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
</style>
