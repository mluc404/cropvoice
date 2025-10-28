import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


const isGH = process.env.GITHUB_ACTIONS === 'true'

const repoBase = '/cropvoice/'

export default defineConfig({
  plugins: [react()],
  base: isGH ? repoBase : '/',
})
