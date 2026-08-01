import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Works at any path: "/" locally & on Vercel/Netlify, "/<repo>/" on GitHub
  // Pages (the deploy workflow sets VITE_BASE automatically).
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // keep the heavy three.js / R3F stack in its own lazy chunk
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1100,
  },
});
