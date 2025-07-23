import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 구름IDE 환경에서는 0.0.0.0 설정이 필요할 수 있습니다.
    port: 5173,      // 현재 사용하려는 포트
    hmr: {
      clientPort: 5173,
    },
    // 👇 이 부분을 추가하거나 수정합니다.
    allowedHosts: [
      'reactvite-jbrys.run.goorm.io', // 구름IDE에서 제공하는 도메인
      // 'localhost', // 필요하다면 localhost도 추가
      // '127.0.0.1', // 필요하다면 127.0.0.1도 추가
    ],
  },
});