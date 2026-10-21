import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/PROJETO_MERCEARIA/",
  plugins: [react()],
  build: { outDir: "dist" },
});
