<script setup lang="ts">

interface Props {
  type: string
  title: string
}

const props = defineProps<Props>();

</script>

<template>
  <button :type="props.type">{{props.title}}</button>
</template>

<style scoped>
  button {
    @apply rounded-[6px] bg-[#71CF92] text-[#000] select-none cursor-pointer;
    padding: 16px 32px 16px 32px;
    transition: background-color .2s;
    font-family: "Poppins-SemiBold", sans-serif;

    &:hover {
      @apply bg-[#62b37e];
    }
  }
</style>