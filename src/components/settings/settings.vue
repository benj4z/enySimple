<template>
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
        <div class="scroll-content">
            <h2 class="title">
                Технические<br> характеристики
            </h2>
            <div class="settings-table">
                <div class="tableRow">
                    <div class="item">
                        <div class="left">Наименование параметров, размерность</div>
                        <div class="right">Норма</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">Класс точности вырезаемых деталей по ГОСТ14792-80</div>
                        <div class="right">П1110/К2220</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">Показатели  назначения  на машину   класс точности   1, соответствует</div>
                        <div class="right">ГОСТ5614-74.</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Точность вычерчивания контура
                        </div>
                        <div class="right">±0,15мм</div>
                    </div>
                    <div class="item">
                        <div class="left">Отклонение размеров вычерченного контура</div>
                        <div class="right">±0,1мм</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">Максимальные размеры раскраиваемого листа:</div>
                    </div>
                    <div class="item">
                        <div class="left">Длина</div>
                        <div class="right">3000,6000</div>
                    </div>
                    <div class="item">
                        <div class="left">Ширина</div>
                        <div class="right">1500,2000</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон толщин разрезаемых металлов при плазменной резке, мм.
                        </div>
                        <div class="right">в зависимости от выбранного источника</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон толщин разрезаемых металлов при газокислородной резке
                        </div>
                        <div class="right">10-200мм</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон рабочих скоростей перемещения резаков, мм/мин
                        </div>
                        <div class="right">50 ÷ 20000</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Наибольшая (маршевая) скорость перемещения инструмента
                        </div>
                        <div class="right">20 000мм/мин</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Величина вертикального перемещения резаков, мм
                        </div>
                        <div class="right">250</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">Размеры зоны обработк:</div>
                    </div>
                    <div class="item">
                        <div class="left">Длина</div>
                        <div class="right">10 000мм</div>
                    </div>
                    <div class="item">
                        <div class="left">Ширина</div>
                        <div class="right">6 000мм</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон толщин разрезаемых металлов при плазменной резке (с края)
                        </div>
                        <div class="right">40(80)мм</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон толщин разрезаемых металлов при газокислородной резке
                        </div>
                        <div class="right">10-200мм</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Диапазон регулирования скорости перемещения инструмента
                        </div>
                        <div class="right">50-18 000мм/мин</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Наибольшая (маршевая) скорость перемещения инструмента
                        </div>
                        <div class="right">18 000мм/мин</div>
                    </div>
                </div>
                <div class="tableRow">
                    <div class="item">
                        <div class="left">
                            Величина вертикального перемещения инструмента, не менее
                        </div>
                        <div class="right">250мм</div>
                    </div>
                </div>
            </div>
      </div>
    </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue';

export default {
  name: 'settings',
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
    .scroll-area {
        position: absolute;
        top: 50%;
        left: 6%;
        transform: translateY(-50%);
        width: 92%;
        height: 80%;
    }

    .scroll-content {
      width: 97%;
    }

/*    .settings-table {
        .tableRow {
            :nth-child(1) {
                text-transform: uppercase;
            }
        }
    }*/

    .tableRow {
        padding: 20px 60px;
        background-color: #000;
        color: #fff;
        &:nth-child(2n) {
            background-color: #fff;
            color: #000;
        }

        .item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            letter-spacing: 2px;
            font-weight: 600;

            &:last-child {
                padding: 0;
            }
        }

        .right {
            width: 150px;
        }
    }

    .title {
        color: #fff;
        margin-left: 60px;
        font-family: arame;
        font-size: 2.5vw;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
    }

    @media (max-width: 469px) {
      .scroll-area {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        width: 88%;
        height: 80%;
      }

      .scroll-content {
        width: 94%;
      }

      .tableRow {
        padding: 20px;
      }

      .item div {
        flex: 1;
      }

      .title {
        color: #fff;
        margin-left: 20px;
        font-family: arame;
        font-size: 6.5vw;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
      }

      .tableRow .right {
        text-align: right;
      }
    }

</style>
