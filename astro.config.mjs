import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
});