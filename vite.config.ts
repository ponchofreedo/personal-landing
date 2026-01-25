import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    svgLoader({
      defaultImport: 'component'
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@scss/_vars.scss" as *; @use "@scss/_helpers.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/css', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
      '@global': fileURLToPath(new URL('./src/components/global', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/components/layout', import.meta.url)),
      '@pdf': fileURLToPath(new URL('./src/assets/pdf', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/components/svg', import.meta.url)),
      '@util': fileURLToPath(new URL('./src/components/util', import.meta.url))
    }
  }
})
