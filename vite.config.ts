import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    root: '.',
    publicDir: 'public',
    
    resolve: {
      extensions: ['.ts', '.js', '.html', '.css', '.scss']
    },

    plugins: [
      angular({
        tsconfig: './tsconfig.json',
        inlineStylesExtension: 'scss'
      })
    ],

    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: isDev,
      target: 'es2020',
      minify: isDev ? false : 'esbuild',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          main: path.resolve(process.cwd(), 'index.html')
        },
        output: {
          // Optimize chunk splitting
          manualChunks: {
            'angular-core': [
              '@angular/core',
              '@angular/common',
              '@angular/platform-browser',
              '@angular/platform-browser-dynamic'
            ],
            'angular-material': [
              '@angular/material',
              '@angular/cdk',
              '@angular/animations'
            ],
            'angular-forms': [
              '@angular/forms',
              '@angular/router'
            ]
          },
          // Clean output names
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `img/[name].[hash][extname]`;
            } else if (/\.css$/i.test(assetInfo.name)) {
              return `css/[name].[hash][extname]`;
            }
            return `assets/[name].[hash][extname]`;
          }
        }
      }
    },

    server: {
      port: 3000,
      open: false,
      proxy: {
        // Proxy API requests to Express backend
        '/api': {
          target: 'http://localhost:4200',
          changeOrigin: true,
          secure: false
        },
        '/message': {
          target: 'http://localhost:4200',
          changeOrigin: true,
          secure: false
        },
        '/user': {
          target: 'http://localhost:4200',
          changeOrigin: true,
          secure: false
        }
      }
    },

    optimizeDeps: {
      include: [
        '@angular/common',
        '@angular/core',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        'rxjs',
        'rxjs/operators',
        'zone.js'
      ],
      exclude: []
    },

    // Better TypeScript performance
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          useDefineForClassFields: false
        }
      }
    }
  };
});
