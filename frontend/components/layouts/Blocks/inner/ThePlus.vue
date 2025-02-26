<script setup lang="ts">

interface Props {
  content: string
  index: number
  count: number

}

const props = defineProps<Props>();

const z_index = "z-index: " + (props.count - props.index) + ";";
const transform = "transform: translate(" + (props.index * (-30)) + "px, 0);";

const styles = z_index + transform;

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
  <div ref="target"
       class="pluses-block__item fromdown"
       :class="{'pluses-block__item-white': props.index % 2 == 0,
                'pluses-block__item-green': props.index % 2 != 0,
                'todown': is_visible}"
       :style="styles">
    <p v-html="props.content"></p>
  </div>
</template>

<style scoped>
  .pluses-block__item {
    @apply rounded-[50px] w-[280px] text-center;
    border: 1px solid #71CF92;
    padding: 32px 16px 32px 16px;
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1050px) {
      width: fit-content;
    }

    @media screen and (max-width: 862px) {
      transform: translate(0, 0) !important;
    }

    p {
      @apply max-w-[220px] m-auto;

      @media screen and (max-width: 1050px) {
        @apply max-w-full;
      }
    }
  }

  .pluses-block__item-white {
    @apply bg-[#FFF];
  }

  .pluses-block__item-green {
    @apply bg-[#71CF92];

    @media screen and (max-width: 862px) {
      @apply bg-[#FFF];
    }
  }
</style>