import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  // avoid generating source maps in production builds by default
  build: {
    sourcemap: false,
  },
})
