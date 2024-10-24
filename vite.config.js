import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // in kBs, adjust as needed
  },
});
