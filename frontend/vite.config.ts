import million from "million/compiler";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  css:{
    modules:{
      localsConvention: 'camelCase',
      scopeBehaviour:'local',    
    }
  },
  plugins: [
    million.vite({ auto: true }), 
    react()
  ],
  resolve: {
    alias: {
      '@assets':'/src/assets',
      '@components':'/src/components',
      '@pages': '/src/pages',
      '@models': '/src/models',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@libs':'/src/libs',
      '@store':'/src/store',
    },
  },
});