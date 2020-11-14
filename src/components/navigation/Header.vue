<template>
  <header class="flex items-stretch justify-between w-full h-20">
    <g-link class="flex items-center mx-4 xl:mx-16" to="/">
      <g-image
        width="44"
        src="~/assets/images/squareLogoBgPinkMainGreen.png"
        alt="cherry on tech logo"
      />
    </g-link>
    <nav class="flex items-center flex-grow justify-evenly">
      <g-link
        class="px-4 py-2 font-bold"
        :class="{
          'text-white darkMode': darkMode,
          'text-purple-900': !darkMode,
        }"
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        >{{ link.title }}</g-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { url: "/", title: "Home" },
        { url: "/about/", title: "About" },
        { url: "/dictionary/", title: "Dictionary" },
        { url: "/blog/", title: "Blog" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.active--exact {
  @apply text-pink-600;
  @apply underline;
  @apply rounded-lg;
}
.darkMode.active--exact {
  @apply bg-white;
}
</style>
