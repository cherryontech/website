<template>
  <div class="h-screen">
    <div class="relative flex flex-col items-stretch justify-between">
      <header class="absolute flex items-stretch justify-between w-full h-16">
        <g-link class="flex items-center mx-4 xl:mx-16" to="/">
          <g-image
            width="44"
            src="~/assets/images/squareLogoBgPinkMainGreen.png"
            alt="cherry on tech logo"
          />
        </g-link>
        <nav class="flex items-center flex-grow justify-evenly">
          <g-link class="px-4 py-2 font-bold text-white" to="/">Home</g-link>
          <g-link class="px-4 py-2 font-bold text-white" to="/about/"
            >About</g-link
          >
          <g-link class="px-4 py-2 font-bold text-white" to="/dictionary/"
            >Dictionary</g-link
          >
          <g-link class="px-4 py-2 font-bold text-white" to="/blog/"
            >Blog</g-link
          >
        </nav>
      </header>
      <div class="flex-grow">
        <slot />
      </div>
      <Footer class="border border-pink-400" />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "@/components/navigation/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
nav a.active--exact {
  @apply bg-white;
  @apply text-pink-500;
  @apply rounded-lg;
}
</style>
