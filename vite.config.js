import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 替换为你的 GitHub 仓库名
  build: {
    outDir: 'dist',
  },
})