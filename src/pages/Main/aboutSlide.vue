<template>
    <div class="slideContent">
        <div class="content about">
            <div class="text-block">
                <h2 class="title">
                    О компании
                </h2>
                <div class="youtube">
                    <div class="youtube-text">Наш канал на</div>
                    <a href="#" target="_blank" class="youtube-link">Youtube</a>
                </div>
                <div class="about-text">
                    <p class="text">{{about1}}</p>
                    <p class="text">{{about2}}</p>
                </div>
            </div>
            <div class="number-block">
                <div class="slide">
                    <div class="number">
                        <div class="big-number">54</div>
                        <div class="number-text">тысчи Тонн <br/> разрезанного металла</div>
                    </div>
                </div>
                <div class="slide">
                    <div class="number">
                        <div class="big-number">104</div>
                        <div class="number-text">тысчи Тонн <br/> разрезанного металла</div>
                    </div>
                </div>
                <div class="slide">
                    <div class="number">
                        <div class="big-number">9</div>
                        <div class="number-text">тысчи Тонн <br/> разрезанного металла</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'about-slide',
  data() {
    return {
      about1: 'В настоящее время наш производственный комплекс способен выпускать до 20 машин плазменной резки «Енисей» в год. Активно собирается портфель заказов.',
      about2: 'В числе потенциальных потребителей такого оборудования в России и ближнем зарубежье — крупные ресурсные корпорации, машиностроительные комплексы, включая предприятия ВПК, производства строительной отрасли.',
    };
  },
};
</script>

<style lang="scss" scoped>
    .slideContent {
        background-color: #000;
        background-image: url(../../../public/circle.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
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

    .horizontal {
        .fp-tableCell {
            height: 100%;
            display: block;
        }
    }

    .about {
        display: flex;
        justify-content: space-between;
    }

    .text-block {
        width: 45%;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .title {
        margin-top: 0;
        margin-bottom: 70px;
        font-size: 4.5vw;
        font-weight: 400;
        font-family: arame;
    }

    .text {
        line-height: 22px;
        letter-spacing: 2px;
    }

    .youtube {
        margin-bottom: 50px;
    }

    .youtube-text {
        letter-spacing: 3px;
        margin-bottom: 25px;
        opacity: 0.5;
    }

    .youtube-link {
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fff;
        text-decoration: none;
    }

    .number-block {
        width: 45%;
        margin-bottom: 100px;
    }

    .slide, .number {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .big-number {
        width: 100%;
        text-align: right;
        font-family: arame;
        font-size: 18vw;
        font-weight: 800;
    }

    .number-text {
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: 600;
        opacity: 0.5;
    }
</style>
