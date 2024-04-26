import { defineConfig } from 'vite'

export default defineConfig({
    base: '/duckdbwasm-vitebrowser/',
    build: {
      target: "esnext" // Needed so that build can occur with the top-level 'await' statements
    }
  })
