import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 모든 IP 주소에서 접속 허용
    port: 3000,     // 구름IDE의 기본 포트 3000으로 설정
    watch: {
      usePolling: true, // WSL 또는 일부 가상 환경에서 파일 변경 감지가 안될 때 유용
    },
    // 새로 추가할 설정
    allowedHosts: [
      '.goorm.io', // 구름IDE 도메인 전체를 허용합니다.
      'minecraft-style-armo-wwfya.run.goorm.io' // 특정 호스트를 명시적으로 추가합니다.
    ],
  },
});