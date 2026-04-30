// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// User/organization GitHub Pages site → repo must be `<username>.github.io`
// and the deployed URL is the root, so `base` stays "/".
export default defineConfig({
  site: "https://utkarshtyagi23.github.io",
  base: "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
