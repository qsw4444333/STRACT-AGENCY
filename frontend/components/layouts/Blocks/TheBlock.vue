<script setup lang="ts">

interface Props {
  class?: string
}

const props = defineProps<Props>();

</script>

<template>
  <section class="block" :class="props.class">
    <slot></slot>
  </section>
</template>

<style scoped>
  .block {
    @apply w-full pt-[70px] mb-[100px] relative;
  }
</style>