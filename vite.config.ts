import path from 'node:path';
import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		root: '.',
		publicDir: 'public',

		define: {
			ngDevMode: isDev,
		},

		resolve: {
			extensions: ['.ts', '.js', '.html', '.css', '.scss'],
		},

		plugins: [
			angular({
				tsconfig: './tsconfig.json',
				inlineStylesExtension: 'scss',
				jit: true, // Enable JIT compilation for production
			}),
		],

		build: {
			outDir: 'dist',
			emptyOutDir: true,
			sourcemap: false, // Disabled to avoid sourcemap warnings after formatting
			target: 'es2020',
			minify: isDev ? false : 'esbuild',
			chunkSizeWarningLimit: 2000, // Increased for Angular Material apps
			rollupOptions: {
				input: {
					main: path.resolve(process.cwd(), 'index.html'),
				},
				output: {
					// Optimize chunk splitting
					manualChunks: (id) => {
						// Angular core packages
						if (id.includes('@angular/core') || id.includes('@angular/common')) {
							return 'angular-core';
						}
						// Angular platform
						if (
							id.includes('@angular/platform-browser') ||
							id.includes('@angular/platform-browser-dynamic')
						) {
							return 'angular-platform';
						}
						// Angular forms and router
						if (id.includes('@angular/forms') || id.includes('@angular/router')) {
							return 'angular-forms';
						}
						// Angular animations
						if (id.includes('@angular/animations') || id.includes('@angular/cdk/a11y')) {
							return 'angular-animations';
						}
						// Angular Material - split into multiple chunks
						if (id.includes('@angular/material')) {
							// Large Material modules get their own chunks
							if (id.includes('table') || id.includes('paginator') || id.includes('sort')) {
								return 'material-table';
							}
							if (id.includes('dialog') || id.includes('snack-bar') || id.includes('bottom-sheet')) {
								return 'material-overlay';
							}
							if (id.includes('datepicker') || id.includes('moment-adapter')) {
								return 'material-datepicker';
							}
							// Everything else goes to material-core
							return 'material-core';
						}
						// Angular CDK
						if (id.includes('@angular/cdk')) {
							return 'angular-cdk';
						}
						// RxJS
						if (id.includes('rxjs')) {
							return 'rxjs';
						}
						// jQuery
						if (id.includes('jquery')) {
							return 'vendor-jquery';
						}
						// Other large vendor packages
						if (id.includes('node_modules')) {
							return 'vendor';
						}
					},
					// Clean output names
					entryFileNames: 'js/[name].[hash].js',
					chunkFileNames: 'js/[name].[hash].js',
					assetFileNames: (assetInfo) => {
						const info = assetInfo.name.split('.');
						const _ext = info[info.length - 1];
						if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
							return `img/[name].[hash][extname]`;
						} else if (/\.css$/i.test(assetInfo.name)) {
							return `css/[name].[hash][extname]`;
						}
						return `assets/[name].[hash][extname]`;
					},
				},
			},
		},

		server: {
			port: 3000,
			open: false,
			proxy: {
				// Proxy API requests to Express backend
				'/api': {
					target: 'http://localhost:4200',
					changeOrigin: true,
					secure: false,
				},
				'/message': {
					target: 'http://localhost:4200',
					changeOrigin: true,
					secure: false,
				},
				'/user': {
					target: 'http://localhost:4200',
					changeOrigin: true,
					secure: false,
				},
			},
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
				'zone.js',
			],
			exclude: [],
		},

		// Better TypeScript performance
		esbuild: {
			tsconfigRaw: {
				compilerOptions: {
					useDefineForClassFields: false,
				},
			},
		},
	};
});
