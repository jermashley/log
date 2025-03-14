module.exports = {
  extends: [`eslint:recommended`, `plugin:vue/vue3-recommended`, `prettier`],
  plugins: [`vue`, `simple-import-sort`, `prettier`],
  rules: {
    'prettier/prettier': [`error`, {}, { usePrettierrc: true }],
    'quotes': [`error`, `backtick`],
    'simple-import-sort/exports': `error`,
    'simple-import-sort/imports': `error`,
    'vue/multi-word-component-names': `off`,
    'vue/first-attribute-linebreak': `off`,
    'vue/max-attributes-per-line': [
      `error`,
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
  env: {
    node: true,
  },
  globals: {
    route: `readonly`,
  },
}
