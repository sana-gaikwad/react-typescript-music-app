import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    proxy: {
      "/api/festivals": {
        target: "https://eacp.energyaustralia.com.au",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/festivals/, "/codingtest/api/v1/festivals"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Configure alias
    },
  },
  test: {
    coverage: {
      provider: "v8",
      include: ["**/utils/*.{js,ts,jsx,tsx,vue}"],
      exclude: ["**/utils/index.{js,ts,jsx,tsx,vue}"],
    },
  },
})
