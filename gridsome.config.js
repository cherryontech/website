// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: "Cherry On Tech",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/dictionary/**/*.md",
        typeName: "Dictionarypost",
        route: "dictionary/entry/:title",
        remark: {
          // remark options
          plugins: [
            [
              "@noxify/gridsome-plugin-remark-embed",
              {
                enabledProviders: ["Youtube", "Twitter", "Gist"],
              },
            ],
          ],
        },
      },
    },
  ],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },
};
