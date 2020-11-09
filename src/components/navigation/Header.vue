<template>
  <header
    class="flex items-stretch justify-between w-full border border-pink-100"
  >
    <g-link
      class="flex items-center mx-4 border border-pink-100 xl:mx-16"
      to="/"
    >
      <g-image
        width="44"
        src="~/assets/images/squareLogoBgPinkMainGreen.png"
        alt="cherry on tech logo"
      />
    </g-link>
    <nav
      class="flex items-center flex-grow border border-pink-100 justify-evenly"
    >
      <g-link class="px-4 py-2 font-bold text-white" to="/">Home</g-link>
      <g-link class="px-4 py-2 font-bold text-white" to="/about/">About</g-link>
      <g-link class="px-4 py-2 font-bold text-white" to="/dictionary/"
        >Dictionary</g-link
      >
      <g-link class="px-4 py-2 font-bold text-white" to="/blog/">Blog</g-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
