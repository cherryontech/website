const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ["Nunito\\ Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Nunito", ...defaultTheme.fontFamily.serif],
    },
  },
};
