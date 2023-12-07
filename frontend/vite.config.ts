import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext"
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@css": path.resolve(__dirname, "./src/css"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@apps-types": path.resolve(__dirname, "./src/types/apps-types.d.ts"),
      "@categories-types": path.resolve(__dirname, "./src/types/categories-types.d.ts"),
      "@types": path.resolve(__dirname, "./src/types/types.d.ts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    }
  }
})
