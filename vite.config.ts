import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, allowedHosts: ["velocity-hcdp.onrender.com"],
    strictPort: true,
    port: 8000,
    }, 
})
