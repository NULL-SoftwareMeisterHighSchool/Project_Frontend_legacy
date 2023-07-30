import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@apis": resolve(__dirname, "src/apis"),
      "@assets": resolve(__dirname, "src/assets"),
      "@atoms": resolve(__dirname, "src/atoms"),
      "@components": resolve(__dirname, "src/components"),
      "@constants": resolve(__dirname, "src/constants"),
      "@fixtures": resolve(__dirname, "src/fixtures"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@pages": resolve(__dirname, "src/pages"),
      "@styles": resolve(__dirname, "src/styles"),
      "@types": resolve(__dirname, "src/types"),
      "@utils": resolve(__dirname, "src/utils"),
      "@layouts": resolve(__dirname, "src/layouts"),
    },
  },
  build: {
    rollupOptions: {
      external: ['@toast-ui/editor', '@toast-ui/editor/dist/toastui-editor.css'],
    },
  },
  optimizeDeps: {
    include: ['@toast-ui/react-editor'],
  },
});
