module.exports = {
  plugins: [
    `@tailwindcss/jit`,
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
  ],
}
