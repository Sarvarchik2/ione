export default defineNuxtPlugin((nuxtApp) => {
  type DirEl = HTMLElement & { __revealCleanup?: () => void }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        el.classList.add('in')
        io.unobserve(el)
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' })

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: DirEl, binding) {
      const val = binding.value as any
      const variant = (val && typeof val === 'object' ? val.variant : val) || 'up'
      const delay = (val && typeof val === 'object' ? Number(val.delay) : 0) || 0
      el.classList.add('reveal', `reveal-${variant}`)
      if (delay > 0) el.style.transitionDelay = `${delay}ms`

      io.observe(el)
      el.__revealCleanup = () => io.unobserve(el)
    },
    unmounted(el: DirEl) {
      el.__revealCleanup?.()
    }
  })
})
