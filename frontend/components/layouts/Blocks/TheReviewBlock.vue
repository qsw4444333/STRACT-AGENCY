<script setup lang="ts">
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheReview from "~/components/layouts/Blocks/inner/TheReview.vue";
import TheLink from "~/components/ui/links/TheLink.vue";

const reviews = [
  {
    image: "static/img/reviews/3.webp",
    title: "Металлические изделия",
    content: "Ниша: Металлические изделия<br>Город: По всей России<br>Результаты на фото",
    review: "Артемий грамотно подошел к решению нашей проблемы с клиентами, все объяснил и помог, большое спасибо!",
    author: "МоссМетал",
    published: "2024-11-23",
    raiting: 10,
  },
  {
    image: "static/img/reviews/2.webp",
    title: "Автозапчасти новые",
    content: "Ниша: Автозапчасти новые<br>Город: Москва<br>Результат 31 день на фото, продажи выросли в два раза.",
    review: "Отличное агенство, будем сотрудничать в будущем!",
    author: "MG Parts",
    published: "2024-11-29",
    raiting: 10,
  },
  {
    image: "static/img/reviews/4.webp",
    title: "Автозапчасти кузовные Б/У",
    content: "Ниша: Автозапчасти кузовня Б/У<br>Город: Казань<br>Стартовали с полного 0<br>Результат на фото",
    review: "Большое спасибо, Артемий помог нам сделать x3 офлайн заявок и x2 онлайн, рекомендуем!",
    author: "ZapAuto / RS Auto",
    published: "2024-12-05",
    raiting: 10,
  },
  {
    image: "static/img/reviews/5.webp",
    title: "Скупка электрооборудования",
    content: "Ниша: скупка электрооборудований<br>По всей России<br>Была не простая задача cделать массовый постинг по скупке оборудований, на авито запрещено скупать поэтом нам приходилось делать максимальную уникализацию",
    review: "Получили большое количество новых клиентов, STRACT - команда профессиональных авитологов, рекомендую",
    author: "Скупка электрооборудования",
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