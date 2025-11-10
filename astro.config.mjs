import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/static';

export default defineConfig({
  site: 'https://www.kaicex.pro',
  output: 'static',
  adapter: netlify({
    assets: 'dist',
  }),
});
