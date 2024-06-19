import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicTitlePlugin from './dynamicTitlePlugin.ts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicTitlePlugin()
  ],
  base: './'
})
