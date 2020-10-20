<template>
  <Frontpage>
    <main @keydown.esc="showDialog = false" class="h-full pb-6 wrapper">
      <div class="pb-12 bg-cover bg-outerspace">
        <div
          :aria-hidden="hideContentAria"
          class="flex flex-col items-center px-5 mx-auto my-0"
        >
          <g-image
            class="pt-10 m-3 max-w-screen lg:max-w-lg"
            width="500"
            src="~/assets/images/cot-name.png"
            alt="Coming Soon - Cherry on Tech"
          />

          <h1
            class="font-serif text-5xl font-bold text-center text-white uppercase"
          >
            We are a tech squad
          </h1>

          <h2
            class="max-w-sm mb-4 text-2xl text-center text-white font-orbitron"
          >
            We dream, scheme, and support each other in our careers
          </h2>
          <BaseButton
            @click="showDialog = true"
            class="font-sans font-extrabold uppercase bg-gray-100"
            >Keep me updated</BaseButton
          >
          <Dialog v-if="showDialog === true" @close="showDialog = false" />
          <div class="w-full mt-20">
            <p class="font-light text-gray-500">
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
      </div>
    </main>
  </Frontpage>
</template>

<script>
import BaseButton from "@/components/controls/base/BaseButton.vue";
import Dialog from "@/components/controls/dialogs/Dialog.vue";
import Frontpage from "@/layouts/Frontpage.vue";

export default {
  components: { Frontpage, BaseButton, Dialog },
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
