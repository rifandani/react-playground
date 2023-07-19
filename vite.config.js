import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import veauryVitePlugins from 'veaury/vite/index.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    // When the type of veauryVitePlugins is set to react,
    // only jsx in .vue file will be parsed with vue jsx,
    // jsx in other files will be parsed with react jsx
    veauryVitePlugins({
      type: 'react',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...},
      // Configuration of @vitejs/plugin-vue-jsx
      // vueJsxOptions: {...}
    }),
  ],
});
