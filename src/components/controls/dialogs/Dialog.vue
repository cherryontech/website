<template>
  <div
    class="bg-gray-500 bg-opacity-75 p-12 flex items-center justify-center fixed inset-0"
  >
    <div class="max-w-xl bg-yellow-400 rounded-lg">
      <div class="flex justify-end">
        <BaseButton
          @click="closeDialog()"
          aria-label="Close Newsletter Signup Box"
          class="text-5xl"
          >×</BaseButton
        >
      </div>
      <div class="p-12 lg:p-24 lg:pt-0">
        <h3 class="text-2xl pb-6">
          Ohh.... Yes!
          <br />
          We are so excited to share with you what we are cooking.
        </h3>
        <Mailchimp />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/controls/base/BaseButton.vue";
import Mailchimp from "@/components/external/Mailchimp.vue";

export default {
  components: { BaseButton, Mailchimp },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
