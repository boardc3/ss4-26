'use client'

import { useEffect } from 'react'

export default function PresentationMode() {
  useEffect(() => {
    document.body.dataset.presentation = 'corcoran'
    return () => {
      delete document.body.dataset.presentation
    }
  }, [])

  return null
}
