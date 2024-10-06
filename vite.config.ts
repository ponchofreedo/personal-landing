import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      defaultImport: 'component'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
      '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
      '@global': fileURLToPath(new URL('./src/components/global', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/components/layout', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/components/svg', import.meta.url))
    }
  }
})
