import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    mimeTypes: {
      ".otf": "font/otf",
      ".ttf": "font/ttf",
    },
  },
});
