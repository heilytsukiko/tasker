import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    modules: {
      // Читаемые имена классов в dev, короткие в prod.
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
  server: {
    port: 5173,
  },
});
