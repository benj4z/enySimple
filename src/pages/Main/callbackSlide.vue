<template>
    <div class="slideContent offScreen">
        <div class="content">
            <div class="callback">
                <div class="text-block">
                    <h2 class="title">Обратная связь</h2>
                    <p class="text">Уважаемые клиенты! <br> {{text}}</p>
                </div>
                <form class="callbackForm">
                    <input type="text" class="input" placeholder="Имя" required>
                    <input type="text" class="input" placeholder="Телефон/эл.почта" required>
                    <a href="#" class="anim-link"><input type="submit" class="submit"></a>
                </form>
            </div>
            <div class="callback-success">
              <h2 class="title">Спасибо!</h2>
              <p>Мы обязательно свяжемся с вами.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'callback-slide',
  data() {
    return {
      text: 'Для оперативной связи, заполните, пожалуйста, формуи отправьте запрос. Наш специалист свяжется с вами в ближайшее время.',
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

          .text-block {
            opacity: 0;
            transform: translateX(-25%);
          }

          .callbackForm {
            opacity: 0;
            transform: translateX(25%);
          }
        }

        &.onScreen {
          .title {
            opacity: 1;
            transform: translateY(0);
          }

          .text-block {
            opacity: 1;
            transform: translateX(0);
          }

          .callbackForm {
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

    .callback {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-block {
        width: 45%;
        transition: all .35s;
    }

    .callbackForm {
        width: 45%;
        display: flex;
        flex-direction: column;
        transition: all .35s;
    }

    .title {
        margin-top: 0;
        font-size: 4.2vw;
        font-weight: 400;
        font-family: arame;
        margin-bottom: 70px;
        transition: all .35s;
    }

    .text {
        letter-spacing: 3px;
        line-height: 20px;
        width: 90%;
    }

    .input {
        background-color: transparent;
        border: 0;
        border-radius: 0;
        outline: 0;
        border-bottom: 1px solid #fff;
        margin-bottom: 55px;
        padding: 12px 10px;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 6px;
        outline: none;
        color: #fff;
    }

    .callback-success {
      display: none;
    }

    .anim-link {
      align-self: flex-start;
    }

    .submit {
        margin-top: 20px;
        background-color: transparent;
        color: #fff;
        border: 0;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 3px;
        width: auto;
        text-align: left;
        cursor: pointer;
    }

    @media (max-width: 769px) {
      .callback {
        flex-direction: column;
        justify-content: center;
      }

      .text-block {
        width: 100%;
        margin-bottom: 40px;
      }

      .callbackForm {
        width: 100%;
      }
    }

    @media (max-width: 469px) {
      .title {
        font-size: 9vw;
        margin-bottom: 45px;
      }

      .slideContent {
        padding: 5% 9%;
      }

      .content {
        width: 85%;
      }

      .input {
        margin-bottom: 30px;
        font-size: 14px;
      }

      .text-block {
        margin-bottom: 25px;
      }
    }
</style>
