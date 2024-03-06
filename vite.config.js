// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Other Vite configuration options...
  server: {
    // Configure MIME types
    mimeTypes: {
      // Add or modify the MIME type for JavaScript files
      ".js": "application/javascript",
    },
  },
});
