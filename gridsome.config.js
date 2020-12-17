// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const config = require("./src/assets/content/data/config.json")
const infoData = require("./src/assets/content/data/info.json")

const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind(),
]

module.exports = {
  siteName: "Cherry On Tech",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Dictionarypost",
        baseDir: "./content/",
        path: "dictionary/**/*.md",
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
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        baseDir: "./src/assets/content/",
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Bio',
        baseDir: "./src/assets/content/",
        path: 'bio/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/squad/**/*.md",
        typeName: "Squadpost",
        route: "squad/:title",
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
