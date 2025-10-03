export function useSeo(opts: {
  title?: string
  description?: string
  canonicalPath?: string
  image?: string
}) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl?.replace(/\/$/, '') || ''
  const fullUrl = opts.canonicalPath ? `${siteUrl}${opts.canonicalPath}` : undefined
  const image = opts.image || config.public.ogImage || '/favicon.ico'

  useHead({
    title: opts.title,
    meta: [
      opts.description ? { name: 'description', content: opts.description } : {},
      { property: 'og:title', content: opts.title || 'IONE' },
      opts.description ? { property: 'og:description', content: opts.description } : {},
      image ? { property: 'og:image', content: image } : {},
      fullUrl ? { property: 'og:url', content: fullUrl } : {},
      { name: 'twitter:title', content: opts.title || 'IONE' },
      opts.description ? { name: 'twitter:description', content: opts.description } : {},
      image ? { name: 'twitter:image', content: image } : {}
    ].filter(Boolean) as any,
    link: fullUrl ? [{ rel: 'canonical', href: fullUrl }] : []
  })
}
