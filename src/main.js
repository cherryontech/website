// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import VueGtag from "vue-gtag";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueGtag, {
  config: { id: "G-6P9YW352WJ" }
});
}

// Require our fonts globally
require("typeface-nunito");
require("typeface-nunito-sans");
require("typeface-orbitron");
