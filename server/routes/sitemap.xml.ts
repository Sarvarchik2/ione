export default defineEventHandler((_event) => {
  const config = useRuntimeConfig()
  const siteUrl = (config.public.siteUrl || '').replace(/\/$/, '')

  const urls = [
    '/',
    '/contact'
  ]

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((p) => {
      const loc = siteUrl ? `${siteUrl}${p}` : p
      return `<url><loc>${loc}</loc></url>`
    }),
    '</urlset>'
  ]

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
})
