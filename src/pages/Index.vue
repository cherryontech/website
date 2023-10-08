<template>
  <div class="flex flex-col justify-between min-h-screen">
    <!-- The height of this div must match the height of the header, which is set in the header component -->
    <div class="relative h-20">
      <Header class="absolute" darkMode />
    </div>
    <main
      class="flex flex-col flex-grow bg-pink-500"
      @keydown.esc="showDialog = false"
    >
      <!-- Intro / Outerspace theme -->
      <!-- Since we want our bg image to come up beneath the header, match the margins to the height of the header -->
      <div class="flex flex-grow px-8 -mt-20 bg-cover bg-outerspace" :aria-hidden="hideContentAria">
        <div class="flex flex-col items-center w-full mt-20">
          <g-image
            class="max-w-full mt-4 sm:max-w-sm"
            width="800"
            src="~/assets/images/cot-name.png"
            alt="A pair of bright red cherries sit on the top left of block text that reads Cherry on Tech. In the center of the top of the block text rests an anthropomorphized cherry face, smiling brightly in an astronaut helmet."
          />
          <h1
            class="font-serif text-5xl font-bold text-center text-white uppercase sr-only"
          >
           Cherry on Tech - We are a tech squad
          </h1>

          <!-- Newsletter dialog -->
          <BaseButton
            @click="showDialog = true"
            class="block mt-4 bg-gray-100"
            >Keep me updated</BaseButton
          >
          <Dialog v-if="showDialog === true" @close="showDialog = false" />

          <p class="self-start mt-auto font-light text-white lg:ml-16">
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
      <!-- Tech squad benefits grid -->
      <!-- <div class="bg-pink-300">
        Rest of page down here
      </div> -->
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
