<script setup lang="ts">

import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";

interface Props {
  image: string
  title: string
  content: string
  review: string
  author: string
  published: string
  raiting: number
}

const props = defineProps<Props>();

const target = ref(null);
const is_visible = ref(false);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            is_visible.value = true;
          }
        })
      },
      {
        threshold: 0.35,
      });

  if (target.value) {
    observer.observe(target.value);
  }
});

</script>

<template>
  <div ref="target" :class="{todown: is_visible}" class="review__item fromdown" itemprop="review" itemscope itemtype="http://schema.org/Review">
    <div class="review__item-title">
      <h4 itemprop="name" v-html="props.title"></h4>
    </div>
    <div class="review__item-image">
      <TheLazyImage :src="props.image" alt="" />
    </div>
    <div class="review__item-content">
      <h5>Описание кейса</h5>
      <p v-html="props.content"></p>
    </div>
    <div class="review__item-review">
      <h5>Отзыв клиента</h5>
      <p itemprop="author" class="review-author" v-html="props.author"></p>
      <meta itemprop="datePublished" :content="props.published">
      <div class="raiting" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
        <meta itemprop="worstRating" content = "0">
        <span>Оценка: </span>
        <span itemprop="ratingValue" class="raiting-value">{{props.raiting}}</span>
        <span>из</span>
        <span itemprop="bestRating">10</span>
      </div>
        <p itemprop="reviewBody" v-html="props.review"></p>
    </div>
  </div>
</template>

<style scoped>
  .review__item {
    @apply pb-[16px] mb-[30px];
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1196px) {
      flex: 0 0 calc(50% - 40px);
    }

    @media screen and (max-width: 825px) {
      flex: 0 0 100%;
    }

    .review__item-title {
      @apply mb-[16px];
    }

    .review__item-image {
      @apply w-[580px] mb-[16px] rounded-[10px] relative;
      aspect-ratio: 1.8;

      @media screen and (max-width: 1196px) {
        @apply w-full;
      }

      img {
        @apply w-full h-full rounded-[10px];
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      }
    }

    .review__item-content {
      @apply mb-[16px];

      h5 {
        font-weight: bold;
      }
    }

    .review__item-review {
      h5 {
        font-weight: bold;
      }

      .raiting {
        @apply flex gap-[5px] mb-[10px];

        span {
          @apply block;
        }
      }
    }
  }

  .review-author, .raiting-value {
    color: #71CF92;
    font-weight: bold;
  }
</style>