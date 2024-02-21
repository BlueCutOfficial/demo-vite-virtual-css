import { defineConfig } from 'vite'
import vitePluginVirtualFile from './plugins/vite-plugin-virtual-file'

export default defineConfig({
  plugins: [vitePluginVirtualFile()],
})