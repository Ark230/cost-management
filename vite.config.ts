// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@sagas": path.resolve(__dirname, "./src/infrastructure/redux-saga"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
  define: {
    "process.env": {},
  },
  build: {
    sourcemap: true,
  },
});
