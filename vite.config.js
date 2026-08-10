import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

// 原有 Doxygen 文档目录（近4000个HTML文件，不复制到public，通过中间件直接服务）
const DOC_DIR = path.resolve(__dirname, 'c3dlabs.ru/doc')
const PDF_DIR = path.resolve(__dirname)

// 自定义中间件：将 /api-docs/* 映射到 c3dlabs.ru/doc/
function serveDoxygenDocs() {
  return {
    name: 'serve-doxygen-docs',
    configureServer(server) {
      server.middlewares.use('/api-docs', (req, res, next) => {
        try {
          let urlPath = decodeURIComponent(req.url.split('?')[0])
          if (urlPath === '/' || urlPath === '') urlPath = '/index.html'
          const filePath = path.join(DOC_DIR, urlPath)
          // 安全检查：防止路径遍历
          if (!filePath.startsWith(DOC_DIR)) {
            res.statusCode = 403
            res.end('Forbidden')
            return
          }
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase()
            const mimeMap = {
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
              '.ttf': 'font/ttf'
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
      server.middlewares.use('/pdf', (req, res, next) => {
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
  plugins: [vue(), serveDoxygenDocs()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['.']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router']
        }
      }
    }
  }
})
