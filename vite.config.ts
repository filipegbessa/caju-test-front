import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { resolve } from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), EnvironmentPlugin('all')],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: ['src/main.tsx', './index.html'],
    },
  },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
