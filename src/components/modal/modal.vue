<template>
    <transition name="modal">
        <div :class="{modalContainer: true, active: state.opened}">
            <button type="button" class="close" @click="close">Закрыть</button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      state: {
        opened: false,
      },
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    open(modalId) {
      if (modalId === this.modalId) {
        this.state.opened = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
    .modalContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        top: 0;
        left: 0;
        z-index: 9999;
    }

    .modal-enter-active, .modal-leave-active{
        transition: all .25s ease-in-out;
    }
    .modal-enter, .modal-leave-to{
        transform: translate3d(0,-100%,0);
    }

    .close {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 0;
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
            left: -38%;
            transform: rotate(45deg);
        }

        &:before {
            top: 7px;
            left: -38%;
            transform: rotate(-45deg);
        }

    }

    @media (max-width: 469px) {
      .close {
        left: -25px;
      }

      .modalContainer {
        height: 100vh;
      }
    }
</style>
