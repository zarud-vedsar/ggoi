import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ggoi/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // or any port you like
    open: true,
  }
});
