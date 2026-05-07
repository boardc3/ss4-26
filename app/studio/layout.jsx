import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'Start a Property Visualization Brief | SceneSet.AI',
  description: 'Send SceneSet.AI an AI-powered visualization brief for mixed-use, commercial, residential, single-family, workplace, hospitality, multifamily, or adaptive reuse launch assets.',
  path: '/studio',
  image: '/commercial-assets/posters/apogee-4.21.1.jpg',
})

export default function StudioLayout({ children }) {
  return children
}
