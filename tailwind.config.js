const colors = require(`tailwindcss/colors`)
const typography = require(`@tailwindcss/typography`)

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true
  },
  purge: false,
  darkMode: `media`,
  theme: {
    fontFamily: {
      sans: [`Jost`, `sans-serif`],
      mono: [`JetBrains Mono`, `Menlo`],
    },
    colors: {
      transparent: `transparent`,
      ...colors,
    },
    extend: {
      boxShadow: {
        DEFAULT: `0px 32px 40px rgba(31, 33, 46, 0.15), 0px 24px 64px rgba(92, 112, 214, 0.1), 0px 16px 16px rgba(8, 18, 69, 0.1)`,
      },
      fontSize: {
        xxs: `0.625rem`,
      },
      colors: {
        coolGray: {
          1000: `rgba(10,15,25,1)`,
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme(`colors.coolGray.700`),
            a: {
              'color': theme(`colors.pink.500`),
              '&:hover': {
                color: theme(`colors.pink.500`),
              },
            },

            h1: {
              color: theme(`colors.coolGray.700`),
            },
            h2: {
              color: theme(`colors.coolGray.700`),
            },
            h3: {
              color: theme(`colors.coolGray.700`),
            },
            h4: {
              color: theme(`colors.coolGray.700`),
            },
            h5: {
              color: theme(`colors.coolGray.700`),
            },
            h6: {
              color: theme(`colors.coolGray.700`),
            },
            strong: {
              color: theme(`colors.coolGray.700`),
            },
            pre: {
              color: theme(`colors.coolGray.700`),
              backgroundColor: theme(`colors.coolGray.200`),
              fontWeight: theme(`fontWeight.bold`),
            },
            figcaption: {
              color: theme(`colors.coolGray.700`),
            },
            blockquote: {
              color: theme(`colors.coolGray.700`),
            },
          },
        },
        dark: {
          css: {
            color: theme(`colors.coolGray.400`),
            a: {
              'color': theme(`colors.pink.500`),
              '&:hover': {
                color: theme(`colors.pink.500`),
              },
            },

            h1: {
              color: theme(`colors.coolGray.400`),
            },
            h2: {
              color: theme(`colors.coolGray.400`),
            },
            h3: {
              color: theme(`colors.coolGray.400`),
            },
            h4: {
              color: theme(`colors.coolGray.400`),
            },
            h5: {
              color: theme(`colors.coolGray.400`),
            },
            h6: {
              color: theme(`colors.coolGray.400`),
            },
            strong: {
              color: theme(`colors.coolGray.400`),
            },
            pre: {
              color: theme(`colors.coolGray.400`),
              backgroundColor: theme(`colors.coolGray.1000`),
              fontWeight: theme(`fontWeight.bold`),
            },
            figcaption: {
              color: theme(`colors.coolGray.400`),
            },
            blockquote: {
              color: theme(`colors.coolGray.400`),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: [`hover`, `focus`],
      borderRadius: [`hover`, `focus`],
      borderColor: [`hover`, `focus`],
      zIndex: [`hover`, `active`],
      typography: [`dark`],
    },
  },
  plugins: [typography],
}
