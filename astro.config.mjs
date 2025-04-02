import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/static'; // Ensure you're using the static adapter

export default defineConfig({
  output: 'static',
  adapter: netlify({
    assets: 'dist', // Specify the directory for static assets
  }),
});
