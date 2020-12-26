<template>
  <div>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      id="baseSearch"
      type="text"
      :placeholder="placeholderText"
    />
    <img :src="iconSrc" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholderText: {
      type: String,
      default: "",
    },
    iconSrc: {
      type: String,
    },
  },
};
</script>
