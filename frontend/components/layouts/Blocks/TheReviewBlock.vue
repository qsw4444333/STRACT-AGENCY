<script setup lang="ts">
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheReview from "~/components/layouts/Blocks/inner/TheReview.vue";
import TheLink from "~/components/ui/links/TheLink.vue";

const reviews = [
  {
    image: "static/img/reviews/1.webp",
    title: "Автозапчасти кузовные",
    content: "Ниша: Автозапчасти кузовные<br>Город: Казань<br>Стартовали с полного 0<br>Результат за месяц<br>Клиент доволен, работаем 2 месяц",
    review: "Весьма благодарен Артемию за работу, была большая проблема с лидами, но Артемий и его команда решила, поток заявок увеличился в 2 раза, но при этом живых заявок стало в 3 раза больше, итого имеем в 3 раза больше заявок. Очень благодарен, будем работать дальше",
    author: "ZapAuto",
    published: "2024-10-12",
    raiting: 10,
  },
  {
    image: "static/img/reviews/2.webp",
    title: "Металлические изделия",
    content: "Ниша: Металлические изделия<br>Город: По всей России<br>Результаты на фото",
    review: "",
    author: "ZapAuto",
    published: "2024-11-23",
    raiting: 10,
  },
  {
    image: "static/img/reviews/3.webp",
    title: "Автозапчасти новые",
    content: "Ниша: Автозапчасти новые<br>Город: Москва<br>Результат 31 день на фото, продажи выросли в два раза.",
    review: "Отзыв",
    author: "ZapAuto",
    published: "2024-11-29",
    raiting: 10,
  },
  {
    image: "static/img/reviews/4.webp",
    title: "Автозапчасти кузовные Б/У",
    content: "Ниша: Автозапчасти кузовня Б/У<br>Город: Казань<br>Стартовали с полного 0<br>Результат на фото",
    review: "Отзыв",
    author: "ZapAuto",
    published: "2024-12-05",
    raiting: 10,
  },
  {
    image: "static/img/reviews/5.webp",
    title: "Скупка электрооборудований",
    content: "Ниша: скупка электрооборудований<br>По всей России<br>Была не простая задача cделать массовый постинг по скупке оборудований, на авито запрещено скупать поэтом нам приходилось делать максимальную уникализацию",
    review: "Отзыв",
    author: "ZapAuto",
    published: "2025-01-09",
    raiting: 10,
  },
];

</script>

<template>
  <TheBlock id="review_block" class="review-block">
    <TheBlockName :black=true title="Отзывы и кейсы говорят за нас" class="text-center" />
    <div class="review-block__items">
      <TheReview v-for="review in reviews"
                 :title="review.title"
                 :content="review.content"
                 :image="review.image"
                 :review="review.review"
                 :author="review.author"
                 :published="review.published"
                 :raiting="review.raiting" />
    </div>
    <TheLink class="btn" href="https://t.me/artemiy_arkadyevich" target="_blank" text="Смотреть больше работ" />
  </TheBlock>
</template>

<style>
  .review-block__items {
    @apply flex items-start justify-start gap-[30px] flex-wrap mb-[40px];

    @media screen and (max-width: 1196px) {
      @apply w-full;
    }
  }

  .btn {
    @apply rounded-[6px] bg-[#71CF92] text-[#000] select-none w-[210px] m-auto block text-center;
    flex: 0 0 100%;
    padding: 12px 24px 12px 24px;
    transition: all .3s !important;
    font-family: "Poppins-SemiBold", sans-serif;
    font-size: 14px !important;

    &:hover {
      @apply bg-[#62b37e];
      color: #000 !important;
    }
  }
</style>