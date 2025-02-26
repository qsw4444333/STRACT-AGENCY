<script setup lang="ts">

interface Props {
  src: string
  alt: string
  width: number
  height: number
  class?: string
}

const props = defineProps<Props>();

</script>

<template>
  <img :src="props.src"
       :alt="props.alt"
       :width="props.width"
       :height="props.height"
       :class="props.class" >
</template>

<style scoped>

</style>