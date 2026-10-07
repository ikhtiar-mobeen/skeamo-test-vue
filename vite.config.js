import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vite defaults to 5173 and does not read PORT on its own. The workspace
// exposes one port and passes PORT=3000, so without this the app starts and
// the preview pane stays empty.
export default defineConfig({
  plugins: [vue()],
  server: { port: Number(process.env.PORT) || 3000, host: true },
});
