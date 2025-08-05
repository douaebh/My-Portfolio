import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['lucide-vue-next'] // نجبر Vite باش يجهز هاد المكتبة مسبقًا
  },
  build: {
    rollupOptions: {
      external: [] // نحيد أي تجاهل خاطئ
    },
    commonjsOptions: {
      include: [/node_modules/, 'lucide-vue-next'] // باش يسمح بترجمتها فـ build
    }
  }
})
