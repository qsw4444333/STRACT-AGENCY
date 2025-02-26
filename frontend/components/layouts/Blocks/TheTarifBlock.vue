<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheTarif from "~/components/layouts/Blocks/inner/TheTarif.vue";
import TheInner from "~/components/layouts/TheInner.vue";

const tarifs = [
  {
    title: "Тестовый период 2 недели",
    price: "14.999₽",
    lastPrice: "20.999₽",
    priceNum: "14999.00",
    services: [
        "Анализ ниши и подбор тарифного плана",
        "Оформление страницы магазина или публичного профиля",
        "Создание конверсионного текста для ваших объявлений",
        "Подбор ключевых слов для формирования заголовков объявлений",
        "Ежедневная публикация объявлений"
    ],
  },
  {
    title: "Базовый",
    price: "29.750₽",
    lastPrice: "37.899₽",
    priceNum: "29750.00",
    isHot: true,
    services: [
      "<strong>Всё из 1го тарифа</strong>",
      "Формирование маркетинговой стратегии и настройка рекламных кампаний",
      "Отчёты о результатах работы еженедельно",
      "Проектный менеджер",
      "Инфографика обложек объявлений, всего до 5 обложек"
    ],
  },
  {
    title: "Базовый",
    price: "14.999₽",
    lastPrice: "20.999₽",
    priceNum: "14999.00",
    services: [
      "Анализ ниши и подбор тарифного плана",
      "Оформление страницы магазина или публичного профиля",
      "Создание конверсионного текста для ваших объявлений",
      "Подбор ключевых слов для формирования заголовков объявлений",
      "Ежедневная публикация объявлений"
    ],
  },
];

</script>

<template>
  <TheBlock id="tarif_block" class="tarif-block" itemscope itemtype="https://schema.org/Service">
    <TheInner>
      <meta itemprop="serviceType" content="Продвижение на авито" />
      <TheBlockName title="Тарифы" :black=true class="text-center" />
      <div class="tarif-block__items">
        <TheTarif v-for="tarif in tarifs"
                  :title="tarif.title"
                  :price="tarif.price"
                  :lastPrice="tarif.lastPrice"
                  :services="tarif.services"
                  :isHot="tarif.isHot ? tarif.isHot : false"
                  :priceNum="tarif.priceNum" />
      </div>
    </TheInner>
  </TheBlock>
</template>

<style scoped>
  .tarif-block {
    background-image: url(../../static/img/bg-square-2.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 1920px;
    background-attachment: fixed;
    padding-bottom: 70px;
    margin: auto;
    border-radius: 10px;

    @media screen and (max-width: 360px) {
      background-image: url(../../static/img/bg-square-3.png);
    }
  }

  .tarif-block__items {
    @apply flex gap-[80px];

    @media screen and (max-width: 1196px) {
      @apply flex-wrap justify-center;
    }
  }
</style>