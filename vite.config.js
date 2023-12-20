import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/countdown",
  plugins: [react()],
  // other configurations
  build: {
    outDir: "build",
    rollupOptions: {
      input: "/src/main.jsx",
    },
  },
});
