export default function vitePluginVirtualFile() {

  const resolvedVirtualStyleId = '@my-vite-app/vstyle-resolved.css?direct'

  return {
    name: 'vite-plugin-virtual-file',
    resolveId(id) {
      if (id.includes('@my-vite-app/vstyle.css')) {
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