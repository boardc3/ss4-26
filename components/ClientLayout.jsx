'use client'

import { TweaksProvider } from '@/contexts/TweaksContext'
import Header from './Header'
import TweaksPanel from './TweaksPanel'

export default function ClientLayout({ children }) {
  return (
    <TweaksProvider>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {children}
      </main>
      <TweaksPanel />
    </TweaksProvider>
  )
}
