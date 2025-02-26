<script setup lang="ts">

interface Props {
  title: string
  black?: boolean
  pre?: string
}

const props = defineProps<Props>();

</script>

<template>
  <div class="block-name">
    <h3 :class="props.black ? 'article-black' : 'article-white'" v-html="props.title"></h3>
    <p v-if="props.pre">{{props.pre}}</p>
  </div>
</template>

<style scoped>
  .block-name {
    @apply block w-full mb-[64px];
  }

  h3 {
    @apply block w-full;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #484848;
  }

  .article-black {
    color: #000;
  }

  .article-white {
    color: #FFF;
  }
</style>