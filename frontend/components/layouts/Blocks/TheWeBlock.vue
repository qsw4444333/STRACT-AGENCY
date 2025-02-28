<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheWe from "~/components/layouts/Blocks/inner/TheWe.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";

const we_blocks = [
  {
    title: "Эффективность",
    content: "За время работы с нами, вы станете лидером в своей нише",
    icon: "static/img/icons/molnya.webp"
  },
  {
    title: "Сохранность",
    content: "Вся проделанная работа на вашем профиле останется на всегда с вами",
    icon: "static/img/icons/folder-open.webp"
  },
  {
    title: "Прибыль",
    content: "Ваша прибыль вырастит минимум в два раза",
    icon: "static/img/icons/money.webp"
  },
];

</script>

<template>
  <TheBlock class="we-block">
    <TheBlockName class="text-center" :black=true
                  title="Возникли проблемы при продвижении на Авито? Или просто не знаете, с чего начать, и не хотите ошибиться? Тогда <span style='color: #71CF92;'>доверьте все это нам!</span>" />
    <div class="we-block__inner">
      <div class="we-block__left">
        <TheWe v-for="we in we_blocks"
               :title="we.title"
               :content="we.content"
               :icon="we.icon" />
      </div>
      <div class="we-block__right">
        <TheLazyImage src="static/img/rocket.svg"
                      alt=""
                      width="100%"/>
      </div>
    </div>
  </TheBlock>
</template>

<style scoped>
  .we-block {
    .we-block__inner {
      @apply flex items-start justify-between flex-wrap-reverse;

      @media (max-width: 900px) {
        @apply justify-center;
      }

      .we-block__left {
        flex: 0 0 40%;

        @media (max-width: 900px) {
          @apply mt-[30px];

          flex: 0 0 100%;
        }
      }

      .we-block__right {
        flex: 0 0 55%;

        img {
          width: 100%;
          aspect-ratio: 1;
        }
      }
    }
  }
</style>