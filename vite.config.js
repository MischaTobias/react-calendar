import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const HugeLibraries = [
            "@mui",
            "react-datepicker",
            "date-fns",
            "@swc",
          ]; // modify as required based on libraries in use
          if (
            HugeLibraries.some((libName) =>
              id.includes(`node_modules/${libName}`)
            )
          ) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
