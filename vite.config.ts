import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @를 src 경로로 설정
    },
  },
  server: {
    port: 3000,
  },
  base: '/week5/',
});
