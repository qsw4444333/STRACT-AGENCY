<script setup lang="ts">

</script>

<template>
  <div class="inner">
    <slot></slot>
  </div>
</template>

<style>
  .inner {
    @apply w-[1196px] m-auto;

    @media screen and (max-width: 1196px) {
      @apply w-[1000px];
    }

    @media screen and (max-width: 1050px) {
      @apply w-[95%];
    }
  }
</style>