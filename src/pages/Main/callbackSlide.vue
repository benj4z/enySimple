<template>
    <div class="slideContent">
        <div class="content">
            <div class="callback">
                <div class="text-block">
                    <h2 class="title">Обратная связь</h2>
                    <p class="text">Уважаемые клиенты! <br> {{text}}</p>
                </div>
                <form class="callbackForm">
                    <input type="text" class="input" placeholder="Имя">
                    <input type="text" class="input" placeholder="Телефон/эл.почта">
                    <input type="submit" class="submit">
                </form>
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

<style scoped>
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

    .callback {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-block {
        width: 45%;
    }

    .callbackForm {
        width: 45%;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 2.7vw;
        font-family: arame;
        margin-top: 0;
        margin-bottom: 120px;
    }

    .text {
        letter-spacing: 3px;
        line-height: 20px;
    }

    .input {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #fff;
        margin-bottom: 30px;
        padding: 12px 10px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
    }

    .submit {
        margin-top: 20px;
        background-color: transparent;
        color: #fff;
        border: 0;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 3px;
        width: 200px;
        text-align: left;
    }
</style>
