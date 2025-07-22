import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/udaygattu.github.io/' if deploying to a subfolder
}); 