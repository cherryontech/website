<template>
  <button
    class="
      px-10 py-3 rounded-lg border-0
      min-w-24
      font-bold cursor-pointer
      transition-background-color transition-speed-normal transition-timing-function-cubic
    "
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
