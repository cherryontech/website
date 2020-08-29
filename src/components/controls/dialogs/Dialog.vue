<template>
  <div
    class="bg-gray-500 bg-opacity-75 p-12 flex items-center justify-center fixed inset-0"
  >
    <div class="max-w-xl bg-yellow-400  rounded-lg">
      <div class="flex justify-end">
        <BaseButton @click="$emit('close')">Close</BaseButton>
      </div>
      <div class="p-12 lg:p-24">
        <h1>
          Ohh.... Yes!
          <br />
          We are so excited to share with you what we are cooking.
        </h1>
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
};
</script>
