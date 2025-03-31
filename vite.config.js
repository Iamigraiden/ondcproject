import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'https://ondc.alyajewels.com/'
    // "proxy": "https://ondc.alyajewels.com/",
  // "homepage": "https://ondc.alyajewels.com/",
})
