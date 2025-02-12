import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [svelte(), basicSsl()],
    envDir: '../deployment/environments/gh-page',
    base: '/ton-coeur-app',
    build: {
      outDir: '../docs',
      emptyOutDir: true, 
    }
  }
})