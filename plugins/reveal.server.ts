export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding) {
      const val: any = binding.value
      const variant = (val && typeof val === 'object' ? val.variant : val) || 'up'
      const delay = (val && typeof val === 'object' ? Number(val.delay) : 0) || 0
      const cls = `reveal reveal-${variant}`
      const style = delay > 0 ? `transition-delay:${delay}ms` : undefined
      return { class: cls, style }
    }
  })
})
