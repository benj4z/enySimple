<template>
    <div class="switcherContent">
        <router-link to="/ru" :class="{active: lang.ru, linkItem: true}">ru</router-link>
        <div class="devider"></div>
        <router-link to="/en" :class="{active: lang.en, linkItem: true}">en</router-link>
    </div>
</template>

<script>
export default {
  name: 'lang-switcher',
  data() {
    return {
      lang: {
        ru: true,
        en: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
    .switcherContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .devider {
        width: 40px;
        height: 1px;
        background-color: #fff;
        margin: 0 10px;
        display: inline-block;
    }

    .linkItem {
        font-family: arame;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        opacity: 0.5;
        transition: all 0.35s;

        &:hover {
            transition: all 0.35s;
            opacity: 1;
        }

        &.active {
            opacity: 1;
        }
    }
</style>
