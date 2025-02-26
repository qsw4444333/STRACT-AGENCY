<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: string
  height?: string
  class?: string
}

const props = defineProps<Props>();

</script>

<template>
  <img class="lazyload"
    :data-src="props.src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"/>
</template>

<style scoped>

</style>