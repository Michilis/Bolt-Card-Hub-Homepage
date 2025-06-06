import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: parseInt(process.env.VITE_DEV_PORT || '5176'),
    host: true,
  },
  preview: {
    port: parseInt(process.env.VITE_DEV_PORT || '5176'),
    host: true,
  },
  // Better asset handling for proxy environments
  build: {
    assetsInlineLimit: 0, // Disable inlining to avoid issues with proxied assets
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
          utils: ['marked', 'qrcode', 'prismjs'],
        },
      },
    },
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: false,
  },
  // Handle base URL automatically
  base: './',
});
