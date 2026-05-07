'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

function getMobileSource(src) {
  if (!src || !src.includes('/optimized/')) return null
  return src.replace('/optimized/', '/optimized/mobile/')
}

export default function ResponsiveVideo({
  src,
  poster,
  title,
  className,
  style,
  priority = false,
}) {
  const ref = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const mobileSrc = useMemo(() => getMobileSource(src), [src])

  useEffect(() => {
    if (priority || shouldLoad || !ref.current) return undefined

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '500px 0px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [priority, shouldLoad])

  useEffect(() => {
    if (!shouldLoad || !ref.current) return

    ref.current.load()
    ref.current.play().catch(() => {})
  }, [shouldLoad])

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      aria-label={title}
    >
      {shouldLoad && mobileSrc && <source src={mobileSrc} media="(max-width: 760px)" type="video/mp4" />}
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  )
}
