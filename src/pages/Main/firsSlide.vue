<template>
    <div class="slideContent">
        <div class="content">
            <h1 class="title">Комплекс термической <br>резки «Енисей»</h1>
            <div class="about">
                <div class="rotateTitle">О Ктрм</div>
                <p class="text">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FirstSlide',
  data() {
    return {
      text: 'Комплексы термической резки металлов «Енисей» предназначены для раскроя черного и цветного  листового металлов по контуру, запрограммированному в управляющей программе.',
    };
  },
};
</script>

<style lang="scss" scoped>

    .title {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 4.5vw;
        font-weight: 400;
        font-family: arame;
        margin: 0;
        width: 65%;
    }

    .slideContent {
        background-color: rgba(0, 0, 0, 0.15);
        position: relative;
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 80%;
    }

    .about {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 402px;
        display: flex;
        justify-content: space-between;
    }

    .rotateTitle {
        text-transform: uppercase;
        letter-spacing: 3px;
        transform: rotate(90deg);
        transform-origin: top;
        font-weight: 600;
        position: absolute;
        top: 42px;
        left: -42px;
    }

    .text {
        margin: 0;
        margin-left: 40px;
        line-height: 24px;
    }

</style>
