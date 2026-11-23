
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const attachedAssetsDir = fs.existsSync(path.resolve(import.meta.dirname, 'attached_assets'))
  ? path.resolve(import.meta.dirname, 'attached_assets')
  : path.resolve(import.meta.dirname, '..', '..', 'attached_assets');

export default defineConfig({
  base: '/sushma_digital/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': attachedAssetsDir,
    },
    dedupe: ['react', 'react-dom'],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-framework': ['react', 'react-dom', 'wouter'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-slot', '@radix-ui/react-toast'],
          'vendor-query': ['@tanstack/react-query'],
        },
      },
    },
  },

  server: {
    port: 5173,
    host: '0.0.0.0',
  },

  preview: {
    port: 5173,
    host: '0.0.0.0',
  },
});
