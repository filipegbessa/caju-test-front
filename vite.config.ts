import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: true, // Adiciona map de fonte para debug
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.tsx'),
      },
    },
  },
  server: {
    port: 3001,
  },
  envDir: '.',
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
