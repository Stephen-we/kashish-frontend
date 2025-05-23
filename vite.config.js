import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Kashish-Enterprises-Railing/', // 👈 IMPORTANT for GitHub Pages
});
