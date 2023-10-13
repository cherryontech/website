<template>
  <div
    class="flex flex-row items-center justify-between h-1 max-w-xs p-5 bg-pink-600 rounded"
  >
    <BaseInput
      v-on="$listeners"
      :value="value"
      :label="label"
      hideLabel
      :placeholderText="placeholderText"
    />
    <font-awesome :icon="['fas', 'search']" class="ml-5" />
  </div>
</template>

<script>
import BaseInput from "@/components/controls/base/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Search",
    },
    placeholderText: {
      type: String,
      default: "Enter a search term",
    },
  },
};
</script>
