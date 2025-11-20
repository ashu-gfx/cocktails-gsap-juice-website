import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
   base: "/cocktails-gsap-juice-website/",

    server: {
    // middleware to rewrite URLs so dev server works under subpath
    middlewareMode: false,
    fs: {
      allow: ["."],
    },
  },

  preview: {
    port: 5173,
    strictPort: true,
  },
  
})



