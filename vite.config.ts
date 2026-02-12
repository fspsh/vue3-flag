import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({ 
      rollupTypes: true, 
      outDir: 'dist',
      cleanVueFileName: true
    })
  ],
  build: {
    cssCodeSplit: true,

    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        flags: resolve(__dirname, 'src/flags-entry.ts')
      },
      name: 'vue3-flag',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  }
})