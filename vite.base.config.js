// vite.base.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/components/Button/ButtonBase.js',
      formats: ['es'],
      fileName: () => 'ButtonBase.js',
    },
    outDir: 'dist/vanilla',
  },
});
