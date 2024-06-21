import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // other configuration options
  optimizeDeps: {
    include: ['jquery'], // Include jQuery in optimized dependencies
  },
})
