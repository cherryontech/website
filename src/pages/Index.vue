<template>
  <div class="flex flex-col justify-between min-h-screen">
    <!-- The height of this div must match the height of the header, which is set in the header component -->
    <div class="relative h-20">
      <Header class="absolute" darkMode />
    </div>
    <main
      class="flex flex-col flex-grow bg-pink-500"
    >
      <!-- Intro / Outerspace theme -->
      <!-- Since we want our bg image to come up beneath the header, match the margins to the height of the header -->
      <div class="flex flex-grow px-8 -mt-20 bg-cover bg-outerspace">
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
        <h3 class="max-w-full my-8 mb-2 font-serif leading-tight text-white sm:max-w-sm">
          Get updates about Cherry on Tech. We don't send emails often, but when we do, they're sweet!
        </h3>
        <Mailchimp />

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
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import Mailchimp from "@/components/external/Mailchimp.vue";

export default {
  components: { Header, Footer, Mailchimp },
  metaInfo: {
    title: "Cherry on Tech",
  }
};
</script>
