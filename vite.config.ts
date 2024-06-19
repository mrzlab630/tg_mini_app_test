import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://docs.ton.org/develop/dapps/telegram-apps/app-examples

export default defineConfig({
  plugins: [react(), basicSsl()],
    build: {
      outDir: './docs'
    },
  base: './'
});