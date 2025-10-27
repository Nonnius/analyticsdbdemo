import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base must match the repository name when deploying to GitHub Pages
  // so asset URLs are generated with the correct subpath.
  base: '/analyticsdbdemo/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
