<template>
  <div>
    <div
      class="flex flex-wrap items-start justify-between gap-6 mx-4 mt-16 xl:mx-16"
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
      <nav class="flex flex-col" aria-label="Footer navigation">
        <g-link class="font-semibold leading-10" to="/">Home</g-link>
        <g-link class="font-semibold leading-10" to="/dictionary/"
          >Dictionary</g-link
        >
      </nav>

      <!-- Avatar and Contact -->
      <div class="flex flex-col">
        <g-image
          width="100"
          src="~/assets/images/cherry--lengua.png"
          alt="Cartoon drawing of a blushing, anthropomorphized cherry with big sparkly eyes. The cherry's tongue is blepping a little."
        />
        <a href="mailt:cherryontech@gmail.com">cherryontech@gmail.com</a>
      </div>
    </div>
    <div class="my-4 text-sm text-center md:mb-20 md:mt-16">
      <p>
        Copyright 2023 Cherry on Tech. All rights reserved.
      </p>
      <p>
        Galaxy photo by
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
</template>
