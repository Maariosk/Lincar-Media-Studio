import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // GitHub Pages
  base: '/Lincar-Media-Studio/',

  server: {
    host: '0.0.0.0',
    port: 5173
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 900
  }
});