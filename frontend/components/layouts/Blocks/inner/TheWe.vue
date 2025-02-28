<script setup lang="ts">
import TheImage from "~/components/ui/img/TheImage.vue";

interface Props {
  title: string
  icon: string
  content: string
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
        threshold: 0.5,
      });

  if (target.value) {
    observer.observe(target.value);
  }
});

</script>

<template>
  <div class="we-block__item fromdown" ref="target" :class="{todown: is_visible}">
    <div class="we-block__item-left">
      <div class="we-block__left-icon">
        <TheImage :src="props.icon" alt="" :width=48 :height=48 />
      </div>
    </div>
    <div class="we-block__item-right">
      <h4 v-html="props.title"></h4>
      <p v-html="props.content"></p>
    </div>
  </div>
</template>

<style scoped>
  .we-block__item {
    @apply flex items-start justify-start
    h-[200px] gap-[10px] w-[380px] mb-[30px] sticky bg-[#FFF] pt-[10px] pb-[10px] rounded-[10px];
    top: 100px;
    transition: all .4s ease-in-out;

    @media (max-width: 900px) {
      @apply w-[95%]
    }

    .we-block__item-left {
      @apply w-[75px] p-[10px] rounded-[10px] h-[100%] relative block;
      overflow: visible;
      border: 1px solid #71CF92;
      box-shadow: 0 4px 4px 0 rgba(113, 207, 146, 1);

      .we-block__left-icon {
        @apply flex justify-center;
      }

      img {
        width: 45px;
        height: 45px;
      }
    }

    .we-block__item-right {
      @apply text-center;

      p {
        max-width: 250px;
      }
    }
  }
</style>