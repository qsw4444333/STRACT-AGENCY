<script setup lang="ts">

interface Props {
  href?: string
  text: string
  class?: string
}

const props = defineProps<Props>();

</script>

<template>
  <a :href="props.href" class="link" :class="props.class">{{props.text}}</a>
</template>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
    transition: color .2s;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      @apply text-[#71CF92];
    }
  }
</style>