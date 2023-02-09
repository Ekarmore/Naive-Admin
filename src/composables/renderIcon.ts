export function useRenderIcon(icon: string) {
  return () => h('i', { class: `${icon}` })
}
