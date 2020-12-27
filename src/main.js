// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.scss')

import VueGtag from "vue-gtag";
import DefaultLayout from "~/layouts/Default.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faSearch)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(VueGtag, {
  config: { id: "G-6P9YW352WJ" }
});
}

// Require our fonts globally
require("typeface-nunito");
require("typeface-nunito-sans");
require("typeface-orbitron");
