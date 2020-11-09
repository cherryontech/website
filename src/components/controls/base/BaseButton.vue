<template>
  <button
    class="px-10 py-3 font-sans font-extrabold uppercase border-0 rounded-lg cursor-pointer"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
