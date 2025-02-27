<script setup lang="ts">

interface Props {
  title: string
  value: number
  beforeText?: string
  afterText?: string
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
        threshold: 0.35,
      });

  if (target.value) {
    observer.observe(target.value);
  }
});

</script>

<template>
  <div ref="target" class="stat-block fromup" :class="{toup: is_visible}">
    <div class="stat-block__item">
      <div class="stat-block__item-title">
        <p>{{props.title}}</p>
      </div>
      <div class="stat-block__item-value">
        <span>{{props.beforeText}} {{props.value}} {{props.afterText}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .stat-block {
    transition: all .5s ease-in-out;

    @media screen and (max-width: 640px) {
      @apply p-[10px] rounded-[10px];
      flex: 0 0 100%;
    }

    .stat-block__item{
      .stat-block__item-title {
        p {
          font-family: "Poppins-Light", sans-serif;
          font-size: 16px;
        }
      }
      .stat-block__item-value {
        span {
          @apply text-[#71CF92];
          font-family: "Poppins-Bold", sans-serif;
          font-size: 32px;

          @media screen and (max-width: 640px) {
            font-size: 24px;
          }
        }
      }
    }
  }
</style>