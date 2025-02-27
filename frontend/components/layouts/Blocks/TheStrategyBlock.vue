<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheStrategy from "~/components/layouts/Blocks/inner/TheStrategy.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheInner from "~/components/layouts/TheInner.vue";

const strategies_block = [
  {
    title: "Анализ",
    content: "Анализ рынка и конкурентов.",
    icon: "eye.svg"
  },
  {
    title: "Расчет бюджета",
    content: "Рассчитаем, сколько денег будет уходить на рекламу в месяц.",
    icon: "calc.svg"
  },
  {
    title: "Разработка креативов",
    content: "Фото, описание, баннеры, прайс-лист, ключевые запросы.",
    icon: "palitra.svg"
  },
  {
    title: "Настройка кабинета",
    content: "Закупка отзывов, если нужна, выбор тарифа, заполнение описания профиля.",
    icon: "settings.svg"
  },
  {
    title: "Запуск тестовых объявлений",
    content: "1-2 объявления для большего понимания рынка и услуг продвижения.",
    icon: "play.svg"
  },
  {
    title: "Аналитика и оптимизация",
    content: "Отслеживание ваших объявлений в выдаче, просмотр статистики ваших объявлений и выявление ошибок или недочетов в них, оптимизация рекламной кампании.",
    icon: "analytic.svg"
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