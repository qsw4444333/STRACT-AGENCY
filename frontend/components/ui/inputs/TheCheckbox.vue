<script setup lang="ts">

interface Props {
  label: string
  id: string
}

const props = defineProps<Props>();

</script>

<template>
  <div class="input-group">
    <input type="checkbox" :id="props.id" checked/>
    <label :for="id">{{props.label}}</label>
  </div>
</template>

<style scoped>
  .input-group {
    @apply flex items-center gap-[10px] mb-[10px];
    height: 40px;

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    label {
      @apply block;
      font-size: 12px;
    }

    input + label {
      @apply block flex items-center gap-[10px] select-none cursor-pointer relative;
      padding-left: 30px;
      height: 1.5em;
      color: #000;

      &::before {
        @apply absolute rounded-[5px];
        content: '';
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        padding: 5px;
        border: 1px solid #ccc;
        transition: border-color .2s;
      }

      &:hover {
        &::before {
          border-color: #71CF92;
        }
      }
    }

    input:checked + label::before {
      border-color: #71CF92;
      background-image: url(../../static/img/icons/check-mark.svg);
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>