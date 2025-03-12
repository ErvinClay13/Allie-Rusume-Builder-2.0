import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Allie-Rusume-Builder-2.0",
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
