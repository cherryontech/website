<template>
  <div
    class="flex flex-col justify-between min-h-screen border-4 border-pink-400"
  >
    <div class="relative h-16">
      <Header class="absolute" darkMode />
    </div>
    <main
      class="flex flex-col flex-grow bg-pink-500"
      @keydown.esc="showDialog = false"
    >
      <!-- Intro / Outerspace theme -->
      <div class="-mt-16 bg-cover bg-outerspace" :aria-hidden="hideContentAria">
        <div class="mt-16">
          <g-image
            class="m-auto max-w-screen lg:max-w-lg"
            width="500"
            src="~/assets/images/cot-name.png"
            alt="Coming Soon - Cherry on Tech"
          />
          <h1
            class="font-serif text-5xl font-bold text-center text-white uppercase"
          >
            We are a tech squad
          </h1>

          <!-- Newsletter dialog -->
          <BaseButton
            @click="showDialog = true"
            class="block m-auto bg-gray-100"
            >Keep me updated</BaseButton
          >
          <Dialog v-if="showDialog === true" @close="showDialog = false" />

          <p class="mt-24 font-light text-gray-500 lg:ml-16">
            Photo by
            <a
              target="_blank"
              href="https://unsplash.com/@andyjh07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >Andy Holmes</a
            >
            on
            <a
              href="https://unsplash.com/@andyjh07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >Unsplash</a
            >
          </p>
        </div>
      </div>
      <div class="bg-pink-300">
        Rest of page down here
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import BaseButton from "@/components/controls/base/BaseButton.vue";
import Dialog from "@/components/controls/dialogs/Dialog.vue";
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  components: { BaseButton, Dialog, Header, Footer },
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
