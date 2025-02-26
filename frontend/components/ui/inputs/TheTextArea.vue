<script setup lang="ts">

interface Props {
  label: string
  id: string
  placeholder: string
  name: string
  modelValue?: string
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="input-group">
    <label :for="props.id" v-html="props.label"></label>
    <textarea type="text"
           :id="props.id"
           :placeholder="props.placeholder"
           :name="props.name"
           :value="modelValue"
              @input="handleInput"
              maxlength="1000"></textarea>
  </div>
</template>

<style scoped>
  .input-group {
    @apply relative w-full mb-[10px];

    textarea {
      @apply w-full rounded-[10px] p-[10px] pt-[15px] pb-[15px] h-[120px];
      outline: none;
      border: 1px solid #272727;
      transition: border-color .2s;

      &:focus {
        border-color: #71CF92;
      }
    }

    label {
      font-size: 14px;
      user-select: none;
    }
  }
</style>