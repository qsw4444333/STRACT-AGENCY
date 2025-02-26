<script setup lang="ts">
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheReview from "~/components/layouts/Blocks/inner/TheReview.vue";
import TheLink from "~/components/ui/links/TheLink.vue";

const reviews = [
  {
    image: "static/img/reviews/1.png",
    title: "Название кейса",
    content: "Описание",
    review: "Отзыв",
    author: "Author",
    published: "2024-10-12",
    raiting: 10,
  },
  {
    image: "static/img/reviews/1.png",
    title: "Название кейса",
    content: "Описание",
    review: "Отзыв",
    author: "Author",
    published: "2024-10-12",
    raiting: 10,
  },
  {
    image: "static/img/reviews/1.png",
    title: "Название кейса",
    content: "Описание",
    review: "Отзыв",
    author: "Author",
    published: "2024-10-12",
    raiting: 10,
  },
  {
    image: "static/img/reviews/1.png",
    title: "Название кейса",
    content: "Описание",
    review: "Отзыв",
    author: "Author",
    published: "2024-10-12",
    raiting: 10,
  },
  {
    image: "static/img/reviews/1.png",
    title: "Название кейса",
    content: "Описание",
    review: "Отзыв",
    author: "ZapAuto",
    published: "2024-10-12",
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
    <TheLink class="btn" href="https://t.me/trfficArtemiyArkadyvich" target="_blank" text="Смотреть больше работ" />
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