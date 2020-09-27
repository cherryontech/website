// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Cherry On Tech",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/dictionary/**/*.md",
        typeName: "Dictionarypost",
        route: "dictionary/:title",
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
};
