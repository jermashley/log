const colors = require(`tailwindcss/colors`)

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,s
  },
  purge: [],
  darkMode: `media`,
  theme: {
    fontFamily: {
      sans: [`Jost`, `sans-serif`],
    },
    colors: {
      transparent: `transparent`,
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: [`hover`, `focus`],
      borderRadius: [`hover`, `focus`],
      borderColor: [`hover`, `focus`],
      zIndex: [`hover`, `active`],
    },
  },
  plugins: [],
}
