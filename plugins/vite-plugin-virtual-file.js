export default function vitePluginVirtualFile() {

  const virtualStyleId = '@my-vite-app/vstyle.css'
  const resolvedVirtualStyleId = '@my-vite-app/vstyle-resolved.css?direct'

  return {
    name: 'vite-plugin-virtual-file',
    resolveId(id) {
      if (id.includes(virtualStyleId)) {
        return resolvedVirtualStyleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualStyleId) {
        return `h2 { color: blue; padding: 40px; }`
      }
      return null
    },
  }
}