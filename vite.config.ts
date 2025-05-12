import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/week5/',  // 경로 수정
  server: {
    port: 3000,
  },
});
