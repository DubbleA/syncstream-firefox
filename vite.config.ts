import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "./src",
  // publicDir: "../public",
  plugins: [svelte()],
});
