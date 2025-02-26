<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import ThePlus from "~/components/layouts/Blocks/inner/ThePlus.vue";

const pluses_block = [
  {
    content: 'Сталкивались с блокировкой рекламных объявлений?',
  },
  {
    content: 'Необходимо повысить конверсию заказов?',
  },
  {
    content: 'Хотите cэкономить своё время и нервы',
  },
  {
    content: 'Ваши объявления не эффективны',
  },
];

</script>

<template>
  <TheBlock class="pluses-block">
    <TheBlockName title="Мы нужны вам, если" :black=true  />
      <div class="pluses-block__inner">
        <ThePlus v-for="(plus, index) in pluses_block"
                 :content="plus.content"
                 :index="index"
                 :count="pluses_block.length"/>
      </div>
    </TheBlock>
</template>

<style scoped>
  .pluses-block {
    @apply pt-[0] flex-wrap;

    .pluses-block__inner {
      @apply flex items-center justify-start;

      @media screen and (max-width: 862px) {
        @apply flex-wrap;
      }
    }
  }

  h3 {
    @apply mb-[20px];
  }
</style>