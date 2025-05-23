import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'static',
  adapter: netlify(),
});