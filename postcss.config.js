const purgecss = [
  `@fullhuman/postcss-purgecss`,
  {
    content: [
      `./pages/*.js`,
      `./pages/**/*.js`,
      `./components/*.js`,
      `./components/**/*.js`,
    ],

    whitelist: [`html`, `body`],

    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || []

      const innerMatches =
        content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    },
  },
]

module.exports = {
  plugins: [
    `tailwindcss`,
    `autoprefixer`,
    [
      `postcss-preset-env`,
      {
        stage: 1,
        features: {
          'focus-within-pseudo-class': false,
        },
      },
    ],
    process.env.NODE_ENV === `production` ? purgecss : undefined,
  ],
}
