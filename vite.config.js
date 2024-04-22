import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // For finding assets / main dir
  build: {
    minify: "terser",
  },
});
