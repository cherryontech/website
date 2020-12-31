<template>
  <div class="w-full">
    <label for="baseInput" :class="{ 'sr-only': hideLabel }">
      {{ label }}
    </label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      id="baseInput"
      type="text"
      :placeholder="placeholderText"
      class="rounded pl-5 w-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    placeholderText: {
      type: String,
      default: "",
    },
  },
};
</script>
