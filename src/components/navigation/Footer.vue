<template>
  <div>
    <div
      class="grid gap-6 mx-4 mt-16 sm:gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:mx-16"
    >
      <!-- Lettermark -->
      <div class="flex">
        <g-link class="flex items-center" to="/">
          <g-image
            width="100"
            src="~/assets/images/squareLogoBgPinkMainGreen.png"
            alt="cherry on tech logo"
          />
        </g-link>
      </div>

      <!-- Nav -->
      <nav class="flex flex-col">
        <g-link class="font-semibold leading-10" to="/">Home</g-link>
        <g-link class="font-semibold leading-10" to="/about/"
          >About Cherry on Tech</g-link
        >
        <g-link class="font-semibold leading-10" to="/dictionary/"
          >Dictionary</g-link
        >
        <g-link class="font-semibold leading-10" to="/blog/">Blog</g-link>
      </nav>

      <!-- Middle free text -->
      <div class="flex flex-col justify-end">
        <a class="font-light leading-10" href="https://guides.github.com/"
          >Learn about Github</a
        >
        <g-link class="font-light leading-10" href="/dictionary/"
          >Our favorite resources</g-link
        >
      </div>

      <!-- Avatar and Contact -->
      <div class="flex flex-col lg:col-start-5">
        <g-image
          width="100"
          src="~/assets/images/cherry--lengua.png"
          alt="cherry on tech logo"
        />
        <a href="mailt:cherryontech@gmail.com">cherryontech@gmail.com</a>
      </div>
    </div>
    <p class="my-4 text-sm text-center md:mb-20 md:mt-16">
      Copyright 2020 Cherry on Tech. All rights reserved.
    </p>
  </div>
</template>
