<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";
import TheFormPhoneText from "~/components/ui/form/TheFormPhoneText.vue";

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
        threshold: 0.2,
      });

  if (target.value) {
    observer.observe(target.value);
  }
});
</script>

<template>
  <TheBlock id="tarif_offer" class="secondOffer-block">
    <TheBlockName title="Получите бесплатную консультацию в 3 клика"
                  pre="Свяжемся с вами в ближайшее время после оставления заявки"
                  :black=true
                  style="margin-bottom: 0;" />
    <div class="secondOffer-block__inner">
      <div class="secondOffer-block__left">
        <TheFormPhoneText />
      </div>
      <div ref="target" class="secondOffer-block__right fromdown" :class="{todown: is_visible}">
        <TheLazyImage src="static/img/man-phone.svg" alt="" />
      </div>
    </div>
  </TheBlock>
</template>

<style scoped>
  .secondOffer-block {
    .secondOffer-block__inner {
      @apply flex items-center justify-between;
      flex-wrap: wrap-reverse;

      @media screen and (max-width: 790px) {
          @apply justify-start;
      }

      @media screen and (max-width: 550px) {
        @apply justify-center;
      }
    }

    img {
      width: 445px;
      aspect-ratio: 1;
    }

    .secondOffer-block__left {
      @media screen and (max-width: 1196px) {
        flex: 0 0 40%;
      }

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

    .secondOffer-block__right {
      width: 445px;
      height: 445px;
      transition: all .4s ease-in-out;

      @media screen and (max-width: 790px) {
        width: 300px;
        height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        min-width: 270px;
      }
    }
  }
</style>