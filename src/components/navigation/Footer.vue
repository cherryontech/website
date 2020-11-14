<template>
  <div>
    <div class="flex justify-between mx-4 mt-16 xl:mx-16">
      <div class="flex">
        <g-link class="flex items-center" to="/">
          <g-image
            width="100"
            src="~/assets/images/squareLogoBgPinkMainGreen.png"
            alt="cherry on tech logo"
          />
        </g-link>
        <nav class="flex flex-col">
          <g-link class="leading-8" to="/">Home</g-link>
          <g-link class="leading-8" to="/about/">About Cherry on Tech</g-link>
          <g-link class="leading-8" to="/dictionary/">Dictionary</g-link>
          <g-link class="leading-8" to="/blog/">Blog</g-link>
        </nav>
      </div>
      <div class="flex flex-col">
        <g-image
          width="100"
          src="~/assets/images/cherry--lengua.png"
          alt="cherry on tech logo"
        />
        <a href="mailt:cherryontech@gmail.com">cherryontech@gmail.com</a>
      </div>
    </div>
    <p class="mt-16 mb-20 text-sm text-center">
      Copyright 2020 Cherry on Tech. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
