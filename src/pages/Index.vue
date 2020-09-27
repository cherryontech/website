<template>
  <main @keydown.esc="showDialog = false" class="wrapper pb-6">
    <div
      :aria-hidden="hideContentAria"
      class="max-w-screen-md my-0 mx-auto px-5 flex flex-col items-center"
    >
      <g-image
        class="pt-10 max-w-screen lg:max-w-lg m-3"
        width="500"
        src="~/assets/images/cot-name.png"
        alt="Coming Soon - Cherry on Tech"
      />

      <h1 class="text-white text-center text-5xl">We are a tech squad</h1>

      <h2 class="text-white text-center text-2xl max-w-sm mb-4">
        We dream, scheme, and support each other in our careers
      </h2>
      <BaseButton @click="showDialog = true" class="bg-gray-100"
        >Stay Updated</BaseButton
      >
      <Dialog v-if="showDialog === true" @close="showDialog = false" />
    </div>
  </main>
</template>

<script>
import BaseButton from "@/components/controls/base/BaseButton.vue";
import Dialog from "@/components/controls/dialogs/Dialog.vue";

export default {
  components: { BaseButton, Dialog },
  metaInfo: {
    title: "Coming soon! Cherry on Tech",
  },
  data() {
    return {
      showDialog: false,
    };
  },
  computed: {
    hideContentAria() {
      return this.showDialog.toString();
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url("../../static/homepage-bg.png");
  background-color: #8878a5;
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
}
</style>
