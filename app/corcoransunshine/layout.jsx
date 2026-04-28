'use client'

import { useEffect } from 'react'

export default function CorcoranLayout({ children }) {
  useEffect(() => {
    document.body.dataset.presentation = 'corcoran'
    return () => {
      delete document.body.dataset.presentation
    }
  }, [])

  return <>{children}</>
}
