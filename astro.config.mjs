import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ==============================================
// GitHub Pages Configuration Guide
// ==============================================
//
// For ROOT deployment (athallarizky.github.io):
//   site: 'https://athallarizky.github.io/'
//   base: '' (or undefined)
//
// For PROJECT deployment (athallarizky.github.io/blog):
//   site: 'https://athallarizky.github.io/'
//   base: '/blog'
//
// Modify these values below based on your deployment type.
// ==============================================

const IS_ROOT_DEPLOYMENT = true; // Change to false for project deployment

export default defineConfig({
  site: IS_ROOT_DEPLOYMENT
    ? 'https://athallarizky.github.io/'
    : 'https://athallarizky.github.io/',
  base: IS_ROOT_DEPLOYMENT ? '' : '/blog',

  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll define our own base styles
    }),
  ],

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },

  // Vite configuration
  vite: {
    build: {
      // Optimize for GitHub Pages
      rollupOptions: {
        output: {
          // Ensure consistent file naming
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
  },
});
