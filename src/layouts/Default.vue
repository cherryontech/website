<template>
  <div class="h-screen">
    <div class="flex flex-col items-stretch justify-between h-full">
      <Header />
      <div class="flex-grow">
        <slot name="hero"/>
        <div class="p-6">
          <slot />
        </div>
      </div>
      <div>
        <Footer />
      </div>
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
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style scoped>
nav a.active--exact {
  @apply bg-white;
  @apply text-pink-500;
  @apply rounded-lg;
}
</style>
