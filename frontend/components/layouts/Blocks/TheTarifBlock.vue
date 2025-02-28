<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheTarif from "~/components/layouts/Blocks/inner/TheTarif.vue";
import TheInner from "~/components/layouts/TheInner.vue";

const tarifs = [
  {
    title: "Продвижение Услуг",
    price: "5.980₽",
    lastPrice: "14.990₽",
    priceNum: "5980.00",
    services: [
        "Анализ ниши и подбор тарифного плана",
        "Расчет бюджетного плана",
        "Разработка креативов",
        "Настройка кабинета",
        "Запуск тестовых объявлений",
        "Аналитика и оптимизация",
        "<strong>Скидка до конца месяца 50%</strong>",
    ],
  },
  {
    title: "Продвижение Товара",
    price: "20.990₽",
    lastPrice: "23.600₽",
    priceNum: "20990.00",
    isHot: true,
    services: [
      "Анализ ниши",
      "Расчет бюджетного плана",
      "Разработка креативов",
      "Настройка кабинета",
      "Запуск тестовых объявлений",
      "Аналитика и оптимизация",
      "<strong>Скидка до конца месяца 10%</strong>",
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