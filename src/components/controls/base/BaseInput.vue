<template>
  <div>
    <label for="baseInput" :class="{ 'sr-only': hideLabel }">
      {{ label }}
    </label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      id="baseInput"
      type="text"
      :placeholder="placeholderText"
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
