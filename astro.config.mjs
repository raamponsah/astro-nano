import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
export default defineConfig({
  site: "https://raphaelamponsah.com",
  integrations: [mdx(), sitemap(), tailwind()],
  outDir: 'dist',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  output: "server"
});