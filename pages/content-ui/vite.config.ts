import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { makeEntryPointPlugin, watchRebuildPlugin } from '@chrome-extension-boilerplate/hmr';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

export default defineConfig({
  resolve: {
    alias: {
      '@src': srcDir,
    },
  },
  base: '',
  plugins: [react(), isDev && watchRebuildPlugin({ refresh: true }), isDev && makeEntryPointPlugin()],
  publicDir: resolve(rootDir, 'public'),
  build: {
    lib: {
      entry: resolve(srcDir, 'index.tsx'),
      name: 'contentUI',
      formats: ['iife'],
      fileName: 'index',
    },
    outDir: resolve(rootDir, '..', '..', 'dist', 'content-ui'),
    sourcemap: isDev,
    minify: isProduction,
    reportCompressedSize: isProduction,
    emptyOutDir: !isDev,
    rollupOptions: {
      external: ['chrome'],
    },
  },
  define: {
    'process.env.NODE_ENV': isDev ? `"development"` : `"production"`,
  },
});
