<template>
    <div class="slideContent offScreen">
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
                    <p class="text" v-show="false">{{about2}}</p>
                    <p class="text">{{about3}}</p>
                </div>
            </div>
            <div class="number-block" v-show="false">
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
      about3: 'С 2012 года возрожден проект «Енисей» по проектированию и производству комплексов термической резки. Получена декларация о соответствии таможенного союза. Регистрационный номер декларации: TCNRUД-RU.АУ14.В.11510. Более 50 завершенных проектов, в том числе в судостроительной, нефтегазовой и машиностроительной отрасли. Мы будем рады видеть Вас в числе наших партнеров в достижении общих целей, направленных на дальнейший рост достигнутых показателей совместной работы.'
    };
  },
};
</script>

<style lang="scss" scoped>
    .slideContent {
        background-color: #000;
        background-image: url(./circle.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        position: relative;

        &.offScreen {
          .title {
            opacity: 0;
            transform: translateY(-25%);
          }

          .youtube, .about-text {
            opacity: 0;
            transform: translateX(-25%);
          }

          .number-block {
            opacity: 0;
            transform: translateX(25%);
          }
        }

        &.onScreen {
          .title {
            opacity: 1;
            transform: translateY(0);
          }

          .youtube, .about-text {
            opacity: 1;
            transform: translateX(0);
          }

          .number-block {
            opacity: 1;
            transform: translateX(0);
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
    }

    .horizontal {
        .fp-tableCell {
            height: 100%;
            display: block;
        }
    }

    .about-text {
      transition: all .35s;
    }

    .about {
        display: flex;
        justify-content: space-between;
    }

    .text-block {
        width: 85%;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 0%;
    }

    .title {
        margin-top: 0;
        margin-bottom: 70px;
        font-size: 4.5vw;
        font-weight: 400;
        font-family: arame;
        transition: all .35s;
    }

    .text {
        line-height: 24px;
        letter-spacing: 2px;
    }

    .youtube {
        margin-bottom: 50px;
        transition: all .35s;
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
        transition: all .35s;
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
        font-size: 21vw;
        font-weight: 800;
    }

    .number-text {
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 6px;
        font-weight: 600;
        opacity: 0.6;
    }

    @media (max-width: 769px) {
      .about {
        flex-direction: column;
      }

      .text-block {
        width: 100%;
      }
      .number-block {
        width: 100%;
      }

      .title {
        margin-top: 30px;
        margin-bottom: 40px;
      }
    }

    @media (max-width: 469px) {
      .number-block {
        margin-bottom: 0px;
      }

      .text {
        line-height: 22px;
      }

      .title {
        font-size: 9vw;
      }

      .content {
        width: 100%;
        position: static;
        transform: translate(0);
      }

      .slideContent {
        padding: 5% 9%;
      }

      .big-number {
        text-align: center;
        font-size: 145px;
      }
    }
</style>
