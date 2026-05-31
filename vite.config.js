import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base relativa en build → funciona en GitHub Pages (usuario.github.io/repo)
// y también en dominio propio o raíz, sin tener que codificar el nombre del repo.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
