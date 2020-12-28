<template>
  <div class="rounded bg-gray-400 p-5 h-1 w-1/4 flex flex-row">
    <BaseInput
      v-on="$listeners"
      :value="value"
      :label="label"
      hideLabel
      :placeholderText="placeholderText"
    />
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
