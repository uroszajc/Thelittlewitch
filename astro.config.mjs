import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thelittlewitch.com.au',
  base: '/',
  build: {
    outDir: './dist'
  }
});