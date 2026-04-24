'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const DEFAULTS = {
  accentHue: 46,
  denseHeader: false,
  deepMode: false,
}

const TweaksContext = createContext({ tweaks: DEFAULTS, setTweak: () => {} })

export function TweaksProvider({ children }) {
  const [tweaks, setTweaks] = useState(DEFAULTS)

  const setTweak = (key, value) => {
    setTweaks(prev => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    const h = tweaks.accentHue
    document.documentElement.style.setProperty('--brass-400', `oklch(0.74 0.10 ${h})`)
    document.documentElement.style.setProperty('--brass-500', `oklch(0.62 0.09 ${h})`)
    document.documentElement.style.setProperty('--brass-600', `oklch(0.52 0.08 ${h})`)
    document.documentElement.style.setProperty('--brass-100', `oklch(0.93 0.04 ${h})`)
  }, [tweaks.accentHue])

  useEffect(() => {
    if (tweaks.deepMode) {
      document.documentElement.style.setProperty('--bg-cream', '#EEE7D5')
      document.documentElement.style.setProperty('--bg-paper', '#F5EFDF')
    } else {
      document.documentElement.style.setProperty('--bg-cream', '#F5F0E6')
      document.documentElement.style.setProperty('--bg-paper', '#FBF7ED')
    }
  }, [tweaks.deepMode])

  return (
    <TweaksContext.Provider value={{ tweaks, setTweak }}>
      {children}
    </TweaksContext.Provider>
  )
}

export function useTweaksContext() {
  return useContext(TweaksContext)
}
