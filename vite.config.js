import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: Object.keys(require('./package.json').dependencies),
        },
      },
    },
  },
  plugins: [react()],
  server: {
    port: 1987,
    proxy: {
      '/api': {
        target: 'http://localhost:1992',
      },
      '/auth': {
        target: 'http://localhost:1992',
      },
    },
  },
});
