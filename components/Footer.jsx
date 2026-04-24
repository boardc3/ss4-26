import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-deep">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 60, marginBottom: 80 }}>
          <div>
            <div className="logo" style={{ color: 'var(--bg-paper)', marginBottom: 24 }}>
              <div className="logo-mark" style={{ background: 'var(--brass-400)' }} />
              <div style={{ color: 'var(--bg-paper)' }}>
                Sceneset<span style={{ color: 'var(--brass-400)' }}>.</span>AI
              </div>
            </div>
            <p className="pullquote" style={{ color: 'var(--ink-300)', maxWidth: 420, fontSize: '1.2rem' }}>
              The visualization studio for developers, general contractors, and the architects they commission.
            </p>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Services</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li><Link href="/developments">Developments</Link></li>
              <li><Link href="/interiors">Interior Fit-out</Link></li>
              <li><Link href="/process">Process · Pipeline</Link></li>
              <li><Link href="/portfolio">Full Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Studios</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li>Miami · 2401 Biscayne</li>
              <li>New York · 155 Spring</li>
              <li>London · 42 Berkeley</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li>studio@sceneset.ai</li>
              <li>+1 305 · 0 · 2401</li>
              <li className="mono" style={{ marginTop: 8 }}>MON–FRI · 08–20 ET</li>
            </ul>
          </div>
        </div>

        <div className="divider" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px 0 0', alignItems: 'center' }}>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>
            © 2026 SCENESET VISUALIZATION CO. · EST 2021
          </div>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>
            RENDER · STAGE · PREVIEW · DELIVER
          </div>
        </div>
      </div>
    </footer>
  )
}
