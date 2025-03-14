import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    laravel({
      input: [`resources/css/app.css`, `resources/js/app.js`],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    vueDevTools(),
  ],
  server: {
    hmr: {
      host: `log.test`,
    },
  },
  // build: {
  //   watch: {
  //     include: [`resources/**`],
  //   },
  // },
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, `tailwind.config.js`),
      '@': `/resources/js`,
    },
  },
})
