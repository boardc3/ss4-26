import PresentationMode from './PresentationMode'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'SceneSet.AI Capabilities Presentation',
  description: 'A full-screen SceneSet.AI capabilities presentation for real estate visualization across commercial, mixed-use, residential, and single-family properties.',
  path: '/corcoransunshine',
  image: '/commercial-assets/posters/pratt-4-29-5.jpg',
})

export default function CorcoranLayout({ children }) {
  return (
    <>
      <PresentationMode />
      {children}
    </>
  )
}
