import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'AI Property Visualization Portfolio | SceneSet.AI',
  description: 'Selected AI-produced commercial, mixed-use, residential, workplace, hospitality, and single-family visualization films and render campaigns by SceneSet.AI.',
  path: '/portfolio',
  image: '/commercial-assets/posters/pratt-4-29-5.jpg',
})

export default function PortfolioLayout({ children }) {
  return children
}
