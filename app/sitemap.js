import { siteUrl } from '@/lib/seo'

const routes = [
  '',
  '/developments',
  '/interiors',
  '/portfolio',
  '/process',
  '/studio',
]

export default function sitemap() {
  return routes.map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
