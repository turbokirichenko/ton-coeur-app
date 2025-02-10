import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

//const base = import.meta.env.VITE_BASE_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/ton-coeur-app'
})
