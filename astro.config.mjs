import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "my-site-h1zeo7roq-raamponsahs-projects.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  output: "server"
});