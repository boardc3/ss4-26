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
              AI-powered renderings, films, and visual strategy for commercial, mixed-use, residential, and single-family properties that need to look finished before they are built.
            </p>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>What We Build</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li><Link href="/developments">Render Campaigns</Link></li>
              <li><Link href="/interiors">Interior Visualization</Link></li>
              <li><Link href="/portfolio">Selected Work</Link></li>
              <li><Link href="/process">Strategy Pipeline</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Use Cases</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li>Mixed-use launches</li>
              <li>Office and amenity tours</li>
              <li>Retail repositioning</li>
              <li>Hospitality-led districts</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li><a href="mailto:chris@sceneset.ai">chris@sceneset.ai</a></li>
              <li>Priority AI production briefs</li>
              <li className="mono" style={{ marginTop: 8 }}>RENDERINGS · FILMS · LAUNCH STRATEGY</li>
            </ul>
          </div>
        </div>

        <div className="divider" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px 0 0', alignItems: 'center' }}>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>
            © 2026 SCENESET VISUALIZATION CO.
          </div>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>
            AI PROPERTY RENDERING · MIXED-USE FILMS · RESIDENTIAL VISUALS
          </div>
        </div>
      </div>
    </footer>
  )
}
