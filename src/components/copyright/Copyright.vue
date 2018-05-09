<template>
    <transition
        name="copyright"
        mode="out-in"
        appear
        v-on:enter="startAnimate"
        v-on:before-enter="beforeAnimate"
        v-on:leave="leaveAnimate" >
        <div class="copyright offScreen">©«Enisey» 2018</div>
    </transition>
</template>

<script>
export default {
  name: 'copyright',
  methods: {
    /* eslint-disable */
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
  },
};
</script>

<style lang="scss" scoped>
    .copyright {
        text-transform: uppercase;
        font-family: arame;
        letter-spacing: 3px;
        transform: rotate(-90deg);
        position: absolute;
        bottom: 12%;
        left: 0;
        z-index: 2;
        color: #fff;
        transition: all .35s;

        &.onScreen {
            opacity: 1;
            transform: translateX(0%) rotate(-90deg);
        }

        &.offScreen {
            opacity: 0;
            transform: translateX(-50%) rotate(-90deg);
        }

    }
</style>
