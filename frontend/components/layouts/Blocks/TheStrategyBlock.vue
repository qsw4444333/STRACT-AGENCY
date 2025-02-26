<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheStrategy from "~/components/layouts/Blocks/inner/TheStrategy.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheInner from "~/components/layouts/TheInner.vue";

const strategies_block = [
  {
    title: "Анализируем рынок",
    content: "Изучаем продукт и маркетинговую тактику конкурентов. Выстраиваем основные направления работы, выявляем УТП и определяем стратегию",
    icon: "eye.svg"
  },
  {
    title: "Анализируем рынок",
    content: "Изучаем продукт и маркетинговую тактику конкурентов. Выстраиваем основные направления работы, выявляем УТП и определяем стратегию",
    icon: "eye.svg"
  },
  {
    title: "Анализируем рынок",
    content: "Изучаем продукт и маркетинговую тактику конкурентов. Выстраиваем основные направления работы, выявляем УТП и определяем стратегию",
    icon: "eye.svg"
  },
  {
    title: "Анализируем рынок",
    content: "Изучаем продукт и маркетинговую тактику конкурентов. Выстраиваем основные направления работы, выявляем УТП и определяем стратегию",
    icon: "eye.svg"
  },
  {
    title: "Анализируем рынок",
    content: "Изучаем продукт и маркетинговую тактику конкурентов. Выстраиваем основные направления работы, выявляем УТП и определяем стратегию",
    icon: "eye.svg"
  }
];

</script>

<template>
  <TheBlock class="strategy-block">
      <TheInner>
        <TheBlockName title="Смотрите как строится наша стратегия" class="text-center" />
        <TheStrategy v-for="(strategy, index) in strategies_block"
                     :title="strategy.title"
                     :content="strategy.content"
                     :num=index
                     :icon="strategy.icon" />
      </TheInner>
  </TheBlock>
</template>

<style scoped>
  .strategy-block {
    @apply w-full bg-[#272727] pt-[75px] pb-[75px];

    .inner {
      @apply flex justify-center items-center flex-wrap gap-[30px];

      @media screen and (max-width: 804px){
        @apply gap-[10px];
      }
    }
  }
</style>