import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If deploying to https://<username>.github.io/<repo-name>/,
// set base to '/<repo-name>/'. If deploying to <username>.github.io
// (a "user site" repo), leave base as '/'.
export default defineConfig({
  // base: '/',
  plugins: [vue()],
})
