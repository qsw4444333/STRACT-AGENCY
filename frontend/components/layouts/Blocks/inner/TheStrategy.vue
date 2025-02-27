<script setup lang="ts">
import TheImage from "~/components/ui/img/TheImage.vue";

interface Props {
  num: number
  title: string
  content: string
  icon: string
}

const props = defineProps<Props>();
const icon = "static/img/icons/" + props.icon;

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
  <div ref="target" :class="{toup: is_visible}" class="strategy fromup">
    <div class="strategy__num">
      <span v-html="props.num + 1"></span>
    </div>
    <div class="strategy__icon">
      <TheImage :src="icon" :alt="props.title" :width=40 :height=40 />
    </div>
    <div class="strategy__title">
      <h4 v-html="props.title"></h4>
    </div>
    <div class="strategy__content">
      <p v-html="props.content"></p>
    </div>
  </div>
</template>

<style scoped>
  .strategy {
    @apply relative mb-[120px] flex items-center flex-wrap justify-center w-[365px];
    transition: all .5s ease-in-out;

    @media screen and (max-width: 804px) {
      @apply w-[95%] mb-[20px];
      max-width: 365px;
    }

    .strategy__num {
      @apply absolute;
      top: 0;
      left: 0;

      span {
        @apply text-[#FFF];
        font-size: 64px;
        font-weight: bold;
      }
    }

    .strategy__icon {
      @apply bg-[#71CF92] w-[108px] h-[108px] rounded-[50%] mb-[14px] flex items-center justify-center;
    }

    .strategy__title {
      @apply w-full mb-[18px] text-center;

      h4 {
        @apply text-[#FFF];
      }
    }

    .strategy__content {
      @apply text-[#FFF] text-center;

      p {
        @apply h-[100px];
        font-size: 16px;

        @media screen and (max-width: 804px) {
          height: fit-content;
        }
      }
    }
  }
</style>