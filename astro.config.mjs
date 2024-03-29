import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel/serverless';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://averydavis.me',
  integrations: [mdx(), sitemap(), tailwind(), react(), solidJs()],
  output: 'server',
  adapter: vercelServerless()
});