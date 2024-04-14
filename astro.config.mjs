import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio2-b39.pages.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: cloudflare()
});