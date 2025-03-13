// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: "/Allie-Rusume-Builder-2.0",
//   server: {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//     mimeTypes: {
//       ".otf": "font/otf",
//       ".ttf": "font/ttf",
//     },
//   },
// });












// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [react()],
//     base: "/Allie-Rusume-Builder-2.0",
//     define: {
//       'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY),
//     },
//     build: {
//       rollupOptions: {
//         output: {
//           manualChunks: undefined,
//         },
//       },
//     },
//   };
// });






import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Allie-Rusume-Builder-2.0",
  define: {
  
    'import.meta.env.VITE_OPENAI_API_KEY': '""',
  },
});

