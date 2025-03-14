import vue from 'eslint-plugin-vue'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ),
  {
    plugins: {
      vue,
      'simple-import-sort': simpleImportSort,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        route: 'readonly',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],

      'quotes': ['error', 'backtick'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak': 'off',

      'vue/max-attributes-per-line': [
        'error',
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
  },
  skipFormatting,
]
