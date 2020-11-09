<template>
  <div>
    <div class="flex justify-between mx-4 mt-16 border xl:mx-16">
      <div class="flex">
        <g-link class="flex items-center" to="/">
          <g-image
            width="100"
            src="~/assets/images/squareLogoBgPinkMainGreen.png"
            alt="cherry on tech logo"
          />
        </g-link>
        <div class="border">
          <nav class="flex flex-col">
            <g-link class="leading-8" to="/">Home</g-link>
            <g-link class="leading-8" to="/about/">About Cherry on Tech</g-link>
            <g-link class="leading-8" to="/dictionary/">Dictionary</g-link>
            <g-link class="leading-8" to="/blog/">Blog</g-link>
          </nav>
        </div>
      </div>
      <div class="flex flex-col border">
        <g-image
          width="100"
          src="~/assets/images/cherry--lengua.png"
          alt="cherry on tech logo"
        />
        <a href="mailt:cherryontech@gmail.com">cherryontech@gmail.com</a>
      </div>
    </div>
    <p class="my-8 text-center border">
      Copyright 2020 Cherry on Tech. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
