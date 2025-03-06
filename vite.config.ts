import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactQuillV2',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'quill', '@emoji-mart/react', '@emoji-mart/data', 'highlight.js'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          quill: 'Quill',
          '@emoji-mart/react': 'EmojiMart',
          '@emoji-mart/data': 'EmojiData',
          'highlight.js': 'hljs',
        },
      },
    },
  },
}) 