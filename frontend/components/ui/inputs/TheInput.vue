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

const formatPhoneNumber = (value: string): string => {
  const cleaned = ('' + value).replace(/\D/g, '');
  const match = cleaned.match(/^(7|8)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  if (match) {
    return `+7 (${match[2] ? match[2] : ''}${match[3] ? `)-${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;
  }

  return '';
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const cleanedValue = target.value.replace(/\D/g, '');
  const formattedValue = formatPhoneNumber(cleanedValue);
  target.value = formattedValue;
  emit('update:modelValue', formattedValue);
};

</script>

<template>
  <div class="input-group">
    <label :for="props.id" v-html="props.label"></label>
    <input type="text"
           :id="props.id"
           :placeholder="props.placeholder"
           :name="props.name"
           :value="modelValue"
           @input="handleInput"
           maxlength="18"
           minlength="18">
  </div>
</template>

<style scoped>
  .input-group {
    @apply relative w-full mb-[10px];

    input {
      @apply w-full rounded-[10px] p-[10px] pt-[15px] pb-[15px];
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