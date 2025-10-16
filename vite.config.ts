import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	root: '.',
	base: '/',
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@': path.resolve(__dirname, 'src'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@main': path.resolve(__dirname, 'src/main'),
		},
	},
	server: {
		host: true, 
		port: 5173,
		open: true,
	},
	preview: {
		port: 5173,
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
	},

	envPrefix: 'VITE_',
});
