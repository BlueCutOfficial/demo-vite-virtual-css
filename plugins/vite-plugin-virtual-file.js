export default function vitePluginVirtualFile() {
  const virtualHelloId = '@my-vite-app/hello'
  const resolvedVirtualHelloId = 'virtual:hello'

  const virtualStyleId = '@my-vite-app/style.css'
  const resolvedVirtualStyleId = 'virtual:style.css'

  return {
    name: 'vite-plugin-virtual-file',
    resolveId(id) {
      if (id === virtualHelloId) {
        return resolvedVirtualHelloId
      }
      if (id === virtualStyleId) {
        return resolvedVirtualStyleId
      }
    },
    load(id) {
      if (id === resolvedVirtualHelloId) {
        return `export const msg = "hello from virtual module"`
      }
      if (id === resolvedVirtualStyleId) {
        return `h2 { color: blue; padding: 40px; }`
      }
      return null
    },
    transform(code, id) {
      if (id === resolvedVirtualStyleId) {
        return code;
      }
    },
  }
}