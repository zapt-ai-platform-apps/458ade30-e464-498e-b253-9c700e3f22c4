import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "zapt-apps",
      project: process.env.VITE_PUBLIC_APP_ID,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    })
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    conditions: ['development', 'browser'],
  },
  optimizeDeps: {
    exclude: ['drizzle-orm']
  }
});