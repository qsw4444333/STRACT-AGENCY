<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";
import TheStat from "~/components/layouts/Blocks/inner/TheStat.vue";

function getAgeWord(age: number): string {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `лет`;
  }

  if (lastDigit === 1) {
    return `год`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `года`;
  }

  return `лет`;
}

interface Props {
  h1: string
  h2: string
  years: number
  count: number
  clients: number
  image_bg: string
  image_src: string
}

const props = defineProps<Props>();
const image_bg = "background-image: url(" + "static/img/" + props.image_bg + ");";
const image_src = "static/img/" + props.image_src;

const stats = [
  {
    title: "Работаем на авито",
    value: props.years,
    afterText: getAgeWord(props.years)
  },
  {
    title: "Создано объявлений",
    value: props.count,
    beforeText: ">",
    afterText: "тыс",
  },
  {
    title: "Довольных клиентов",
    value: props.clients
  }
];

</script>

<template>
  <TheBlock class="main-block">
    <div class="block__left">
      <h1 class="marked">{{props.h1}}</h1>
      <h2 v-html="props.h2"></h2>
      <div class="stats">
        <TheStat v-for="stat in stats"
                 :title="stat.title"
                 :value="stat.value"
                 :afterText="stat.afterText ? stat.afterText : ''"
                 :beforeText="stat.beforeText ? stat.beforeText : ''" ></TheStat>
      </div>
    </div>
    <div class="block__right" :style="image_bg">
      <TheLazyImage :src="image_src" alt="Рукопожатие - наше доверие к вам" width="100%" />
    </div>
  </TheBlock>
</template>

<style scoped>
  .main-block {
    @apply w-full flex justify-between items-center gap-[30px];
    flex-wrap: wrap-reverse;
    padding-bottom: 200px;
    height: calc(100vh - 100px);

    @media screen and (max-width: 1026px) {
      @apply justify-center;
      height: fit-content;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  .block__left {
    flex: 0 0 55%;

    @media screen and (max-width: 1196px) {
      flex: 0 0 65%;
    }

    @media screen and (max-width: 1026px) {
      flex: 0 0 90%;
    }

    @media screen and (max-width: 640px) {
      @apply text-center;
    }
  }

  .block__right {
    @apply h-full relative flex items-center justify-center;
    flex: 0 0 calc(35% - 30px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media screen and (max-width: 1026px) {
      flex: 0 0 100%;
    }

    img {
      width: 100%;
      aspect-ratio: 1;

      @media screen and (max-width: 1026px) {
        width: 300px;
      }
    }
  }

  .stats {
    @apply flex items-start justify-between text-center mt-[30px];

    @media screen and (max-width: 1026px) {
      width: 600px;

      @media screen and (max-width: 640px) {
        @apply justify-center w-full flex-wrap;
      }
    }
  }

  .marked {
    @apply flex items-center relative;
    width: fit-content;

    @media screen and (max-width: 640px) {
      @apply block w-full;
    }

    &::after {
      content: "";
      display: inline-block;
      width: 47px;
      height: 47px;
      background-image: url(../../static/img/mark.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      @media screen and (max-width: 735px) {
        display: none;
      }
    }
  }
</style>