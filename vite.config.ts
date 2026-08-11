import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 原有 Doxygen 文档目录（近4000个HTML文件，不复制到public，通过中间件直接服务）
const DOC_DIR = path.resolve(__dirname, 'c3dlabs.ru/doc')
const PDF_DIR = path.resolve(__dirname)

// 自定义中间件：将 /api-docs/* 映射到 c3dlabs.ru/doc/
function serveDoxygenDocs() {
  return {
    name: 'serve-doxygen-docs',
    configureServer(server: any) {
      server.middlewares.use('/api-docs', (req: any, res: any, next: any) => {
        try {
          let urlPath = decodeURIComponent(req.url.split('?')[0])
          if (urlPath === '/' || urlPath === '') urlPath = '/index.html'
          const filePath = path.join(DOC_DIR, urlPath)
          if (!filePath.startsWith(DOC_DIR)) {
            res.statusCode = 403
            res.end('Forbidden')
            return
          }
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase()
            const mimeMap: Record<string, string> = {
              '.html': 'text/html; charset=utf-8',
              '.css': 'text/css; charset=utf-8',
              '.js': 'application/javascript; charset=utf-8',
              '.json': 'application/json; charset=utf-8',
              '.svg': 'image/svg+xml',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.gif': 'image/gif',
              '.ico': 'image/x-icon',
              '.woff': 'font/woff',
              '.woff2': 'font/woff2',
              '.ttf': 'font/ttf',
              '.wasm': 'application/wasm'
            }
            res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream')
            fs.createReadStream(filePath).pipe(res)
          } else {
            next()
          }
        } catch (e) {
          next()
        }
      })
      // PDF 手册服务
      server.middlewares.use('/pdf', (req: any, res: any, next: any) => {
        try {
          const urlPath = decodeURIComponent(req.url.split('?')[0])
          const filePath = path.join(PDF_DIR, urlPath)
          if (filePath.startsWith(PDF_DIR) && fs.existsSync(filePath) && fs.statSync(filePath).isFile() && filePath.endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'inline')
            fs.createReadStream(filePath).pipe(res)
          } else {
            next()
          }
        } catch (e) {
          next()
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), wasm(), topLevelAwait(), serveDoxygenDocs()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@kernel': fileURLToPath(new URL('./src/kernel', import.meta.url))
    }
  },
  server: {
    port: 5180,
    open: true,
    fs: {
      allow: ['.']
    }
  },
  optimizeDeps: {
    exclude: ['opencascade.js']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['opencascade.js'],
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          babylon: ['@babylonjs/core']
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/kernel/**/*.ts']
    }
  }
})
