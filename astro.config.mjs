import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www2.thelittlewitch.com.au',
  base: '/',
  build: {
    outDir: './dist'
  }
});