<script setup lang="ts">
import TheImage from "~/components/ui/img/TheImage.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";

interface Props {
  tg: string
  whatsapp: string
  vk: string
  avito: string
}

const props = defineProps<Props>();

</script>

<template>
  <div class="social-parent-block">
    <p>Напишите нам</p>
    <div class="socials-block">
      <a :href="props.tg" target="_blank" class="social">
        <TheLazyImage src="static/img/logo-tg.svg" alt="STRACT AGENCY tg" />
      </a>
      <a :href="props.whatsapp" target="_blank" class="social">
        <TheLazyImage src="static/img/logo-whatsapp.svg" alt="STRACT AGENCY whatsapp" />
      </a>
      <a :href="props.vk" target="_blank" class="social">
        <TheLazyImage src="static/img/logo-vk.svg" alt="STRACT AGENCY vk" />
      </a>
      <a :href="props.avito" target="_blank" class="social">
        <TheLazyImage src="static/img/logo-avito.svg" alt="STRACT AGENCY avito" />
      </a>
    </div>
  </div>
</template>

<style scoped>
  p {
    @apply block mb-[15px];
    font-size: 14px;

    @media screen and (max-width: 949px) {
      display: none;
    }
  }

  .social-parent-block {
    @media screen and (max-width: 949px) {
      @apply mt-[20px] flex justify-center;
      flex: 0 0 100%;
    }
  }


  .socials-block {
    @apply flex gap-[15px] items-center justify-start;

    .social {
      height: 39px;

      @media screen and (max-width: 949px) {
        @apply h-[24px];
      }

      img {
        height: 100%;
        width: auto;
      }
    }
  }
</style>