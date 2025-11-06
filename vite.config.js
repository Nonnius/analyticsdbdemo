import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Use a dynamic base so the app can be deployed to GitHub Pages
// (where it lives under /analyticsdbdemo/) and to platforms like
// Vercel where it should be served from the root (/).
const base = process.env.VERCEL ? '/' : '/analyticsdbdemo/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss()
  ],
  // avoid generating source maps in production builds by default
  build: {
    sourcemap: false,
  },
})
