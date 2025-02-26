<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";
import TheFormPhone from "~/components/ui/form/TheFormPhone.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";


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
  <TheBlock class="offer-block">
    <TheBlockName title="Получите обратный звонок в 1 клик" :black=true pre="Мы свяжемся с вами в течении часа, после нажатия на отправить" />
    <div class="offer-block__inner">
      <div ref="target" class="offer-block__left fromleft" :class="{toright: is_visible}">
        <TheLazyImage src="static/img/girl-phone.svg" alt="STRACT AGENCY оставьте заявку, мы откликнемся в течении суток" />
      </div>
      <div class="offer-block__right">
        <TheFormPhone />
      </div>
    </div>
  </TheBlock>
</template>

<style scoped>
  .offer-block {
    .offer-block__inner {
      @apply flex items-start justify-between flex-wrap gap-[10px];
      flex-wrap: wrap;

      @media screen and (max-width: 790px) {
        @apply justify-start;
      }

      @media screen and (max-width: 550px) {
        @apply justify-center;
      }
    }

    .offer-block__left {
      flex: 0 0 calc(50% - 10px);
      transition: all .4s ease-in-out;

      img {
        width: 100%;
        aspect-ratio: 1.857;
        min-width: 270px;
      }
    }

    .offer-block__right {
      flex: 0 0 50%;

      @media screen and (max-width: 790px) {
        flex: 0 0 100%;

        form {
          max-width: 500px;

          @media screen and (max-width: 650px) {
            max-width: 100%;
          }
        }
      }
    }
  }
</style>