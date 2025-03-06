import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'quill',
    '@emoji-mart/react',
    '@emoji-mart/data',
    'highlight.js'
  ],
  treeshake: true,
  minify: true,
}); 