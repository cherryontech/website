<template>
  <div class="h-screen">
    <div class="flex flex-col items-stretch justify-between h-full">
      <header class="flex items-stretch justify-between h-16 bg-purple-900">
        <g-link class="flex items-center px-4 xl:px-16" to="/">
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
        </nav>
      </header>
      <div class="flex-grow p-6">
        <slot />
      </div>
      <div>
        Footer
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

<style scoped>
nav a.active--exact {
  @apply bg-white;
  @apply text-pink-500;
  @apply rounded-lg;
}
</style>
