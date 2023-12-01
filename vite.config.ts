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
      "@application": path.resolve(__dirname, "./src/application"),
      "@services": path.resolve(__dirname, "./src/application/config/services"),
      "@redux": path.resolve(__dirname, "./src/application/config/redux"),
      "@sagas": path.resolve(__dirname, "./src/infrastructure/redux-saga"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@context": path.resolve(__dirname, "src/application/config/context"),
      "@hooks": path.resolve(__dirname, "src/app/hooks"),
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
