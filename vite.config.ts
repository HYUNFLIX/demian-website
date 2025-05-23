// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 서브디렉토리에 맞춰 자원을 불러오기 위한 설정
  base: '/demian-website/',
});
