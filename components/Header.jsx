'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTweaksContext } from '@/contexts/TweaksContext'

const NAV = [
  { href: '/',             label: 'Strategy' },
  { href: '/developments', label: 'Commercial' },
  { href: '/interiors',    label: 'Interiors' },
  { href: '/portfolio',    label: 'Work' },
  { href: '/process',      label: 'Pipeline' },
  { href: '/studio',       label: 'Brief' },
]

export default function Header() {
  const pathname = usePathname()
  const { tweaks } = useTweaksContext()

  return (
    <header className={`header${tweaks.denseHeader ? ' dense' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="logo">
          <div className="logo-mark" />
          <div>Sceneset<span style={{ color: 'var(--brass-500)' }}>.</span>AI</div>
        </Link>

        <nav className="main-nav">
          <ul>
            {NAV.map(n => (
              <li key={n.href}>
                <Link href={n.href} className={pathname === n.href ? 'active' : ''}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div className="mono" style={{ color: 'var(--ink-500)', fontSize: '0.68rem' }}>
            SALES · LEASING · ROI
          </div>
          <Link href="/studio" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '0.72rem' }}>
            Scope ROI
          </Link>
        </div>
      </div>
    </header>
  )
}
