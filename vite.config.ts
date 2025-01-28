import tailwindcss from "@tailwindcss/vite";
import webfontDownload from "vite-plugin-webfont-dl";

import { defineConfig } from "vite";
export default defineConfig({
  plugins: [tailwindcss(), webfontDownload()],
});
