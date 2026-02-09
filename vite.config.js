import { defineConfig } from 'vite';

export default defineConfig({
    // Use relative base path to ensure assets work in subdirectories (like GitHub Pages project sites)
    base: './',
    build: {
        outDir: 'dist',
    }
});
