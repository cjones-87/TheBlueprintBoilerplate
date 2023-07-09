import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      manualChunks: {
        vendor: Object.keys(require('./package.json').dependencies),
      },
    },
  },
  plugins: [react()],
  server: {
    port: 1987,
  },
});
