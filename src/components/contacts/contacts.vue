<template>
    <div class="content">
        <h2 class="title">Контакты</h2>
        <div class="contacts">
            <div class="half">
                <h3 class="subTitle">АДрес</h3>
                <div class="text">{{contacts.address}}</div>
            </div>
            <div class="half">
                <h3 class="subTitle">Телефон/факс</h3>
                <a class="text">{{contacts.phone}}</a>
                <a class="text">{{contacts.addPhone}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contacts',
  data() {
    return {
      contacts: {
        address: 'Россия, 660020, г. Красноярск, Северное шоссе, 16а',
        phone: '+7 (391) 275-00-80',
        addPhone: '+7 (391) 266-28-47',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 80%;
        color: #fff;
    }

    .title {
        font-family: arame;
        font-weight: 600;
        font-size: 5vw;
        margin-top: 0;
        margin-bottom: 18%;
    }

    .contacts {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .half {
        width: 45%;
    }

    .subTitle {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: arame;
        opacity: 0.65;
        font-size: 12px;
    }

    .text {
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: arame;
        font-size: 2.5vw;
        display: block;
        opacity: 0.5;
    }


</style>
