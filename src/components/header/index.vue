<template>
    <transition
        name="header"
        mode="out-in"
        appear
        v-on:enter="startAnimate"
        v-on:before-enter="beforeAnimate"
        v-on:leave="leaveAnimate" >
       <header class="offScreen">
            <div class="headerItem">
                <router-link to="/">
                    <img src="src/assets/logo.svg" alt="Logo" class="logo"/>
                </router-link>
                <SwitcherComponent />
            </div>
            <div class="headerItem">
                <a
                    href="#"
                    data-modal="contacts"
                    class="headerLink anim-link"
                    @click.prevent="emit"
                >
                    Контакты
                </a>
                <a href="tel:+7 (391) 219-33-33" class="phone headerLink">
                    <p>+7 (391) 219-33-33</p>
                    <img src="src/assets/Callback.svg" alt="phone">
                </a>
            </div>
       </header>
    </transition>
</template>

<script>
import SwitcherComponent from './components/LangSwitcher/LangSwitcher.vue';
import Contacts from '../contacts/contacts.vue';

export default {
  name: 'header',
  props: ['showModal'],
  components: {
    SwitcherComponent,
    Contacts,
  },
  methods: {
    /* eslint-disable */
    emit(event) {
      this.$emit('open_modal', event.target.dataset.modal);
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
  },
};
</script>

<style lang="scss" scoped>
    header {
        color: #fff;
        position: absolute;
        left: 3.12%;
        right: 2.45%;
        top: 4.54%;
        display: flex;
        align-content: center;
        justify-content: space-between;
        z-index: 2;
        transition: all .35s;

        &.onScreen {
            opacity: 1;
            transform: translateY(0%);
        }

        &.offScreen {
            opacity: 0;
            transform: translateY(-50%);
        }

        .headerItem {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:last-child {
                width: 30%;
            }
        }
    }

    .logo {
      width: 100px;
    }

    .headerLink {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 4px;
        opacity: 0.5;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        transition: all 0.35s;
        font-size: 13px;

        &:hover {
            opacity: 1;
        }
    }

    .phone {
        display: flex;
        align-items: center;

        p {
            margin: 0;
        }
    }


    @media screen and (max-width: 1367px) {

        header {
            .headerItem {
                width: 30%;

                &:last-child {
                    width: 40%;
                }
            }
        }
    }
</style>
