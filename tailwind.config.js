/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {//se especifican: class="font-sans", class="font-headig"
      heading: ["Montserrat", "sans-serif"],
      sans: ["Open Sans"]
    },
    container: {
      padding: '2rem',
    },
  },
  variants: {},
  plugins: []
};
