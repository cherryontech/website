<template>
  <div>
    <label for="baseInput" v-if="label">
      {{ label }}
    </label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      id="baseInput"
      type="text"
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
      default: "",
    },
  },
};
</script>
