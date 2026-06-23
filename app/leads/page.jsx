import LeadsExplorer from './LeadsExplorer'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'Qualified Builder Leads | SceneSet.AI',
  description:
    'A ranked, research-backed pipeline of 250 U.S. home builders scored on fit for SceneSet AI cinematic video and multi-finish rendering, with marketing leadership and contact pathways.',
  path: '/leads',
})

export default function LeadsPage() {
  return <LeadsExplorer />
}
