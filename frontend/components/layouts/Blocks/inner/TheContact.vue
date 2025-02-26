<script setup lang="ts">
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";

interface Props {
  icon: string
  title: string
  content: string
  isLink: boolean
  href?: string
}

const props = defineProps<Props>();

</script>

<template>
  <div v-if="!props.isLink" class="contact-block__item">
    <p v-html="props.title"></p>
    <div class="contact-block__content">
      <div class="contact-block__content-icon">
        <TheLazyImage :src="props.icon" alt="" />
      </div>
      <div class="contact-block__content-content">
        <span v-html="props.content"></span>
      </div>
    </div>
  </div>

  <a v-if="props.isLink" :href="props.href" class="contact-block__item">
    <p v-html="props.title"></p>
    <div class="contact-block__content">
      <div class="contact-block__content-icon">
        <TheLazyImage :src="props.icon" alt="" />
      </div>
      <div class="contact-block__content-content">
        <span v-html="props.content"></span>
      </div>
    </div>
  </a>
</template>

<style scoped>
  .contact-block__item {
    @apply block mb-[20px] w-[240px];
    transition: transform .2s;

    @media screen and (max-width: 949px) {
      @apply mb-[0];
    }

    p {
      font-size: 14px;
      font-weight: normal;

      @media screen and (max-width: 949px) {
        display: none;
      }
    }

    &:hover {
      transform: translateY(-5px);
    }

    .contact-block__content {
      @apply flex items-center justify-between gap-[20px] rounded-[10px] p-[15px];
      border: 1px solid #71CF92;
      box-shadow: 0 4px 4px 0 rgba(113, 207, 146, 1);

      .contact-block__content-icon {
        @apply w-[25px] h-[25px];

        img {
          @apply w-full h-full;
        }
      }

      .contact-block__content-content {
        width: calc(100% - 20px);
        span {
          font-size: 16px;
          user-select: none;
        }
      }
    }
  }
</style>