import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If 5173 is already taken, fail instead of silently jumping to 5174+ (easy to stare at the wrong tab).
  server: {
    port: 5173,
    strictPort: true,
  },
})
