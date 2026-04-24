'use client'

import { useState } from 'react'
import Img from '@/components/Img'
import { IMG } from '@/lib/images'

const ALL = [
  { n: 'The Biscayne Collective', cat: 'Commercial', tag: 'Mixed-Use',        loc: 'Miami',          yr: '2026', img: IMG.tower1 },
  { n: 'Hudson North Tower',      cat: 'Commercial', tag: 'Residential Tower', loc: 'New York',       yr: '2025', img: IMG.tower3 },
  { n: 'Rosewood Palisades',      cat: 'Interiors',  tag: 'Hospitality',       loc: 'Los Angeles',    yr: '2025', img: IMG.hotel2 },
  { n: 'Centurion Plaza',         cat: 'Commercial', tag: 'Financial HQ',      loc: 'Austin',         yr: '2024', img: IMG.tower5 },
  { n: 'Æther West',              cat: 'Commercial', tag: 'Mixed-Use',         loc: 'Seattle',        yr: '2026', img: IMG.tower2 },
  { n: 'Centurion Plaza L01',     cat: 'Interiors',  tag: 'Lobby',             loc: 'Austin',         yr: '2024', img: IMG.lobby1 },
  { n: 'Kiawah Preserve',         cat: 'Interiors',  tag: 'Residence',         loc: 'Kiawah Island',  yr: '2025', img: IMG.res1 },
  { n: 'Embarcadero One',         cat: 'Commercial', tag: 'Civic',             loc: 'San Francisco',  yr: '2025', img: IMG.tower4 },
  { n: 'Newport Promenade',       cat: 'Commercial', tag: 'Retail',            loc: 'Newport Beach',  yr: '2025', img: IMG.retail1 },
  { n: 'Rosewood PH 4201',        cat: 'Interiors',  tag: 'Penthouse',         loc: 'NoLIta',         yr: '2026', img: IMG.res2 },
  { n: 'Marin Landing',           cat: 'Interiors',  tag: 'Residence',         loc: 'Sausalito',      yr: '2024', img: IMG.res3 },
  { n: 'Desert Pavilion',         cat: 'Interiors',  tag: 'Residence',         loc: 'Scottsdale',     yr: '2026', img: IMG.res4 },
]

const CATS = ['All', 'Commercial', 'Interiors', '2026', '2025', '2024']

const GRID_PATTERN = [
  { col: 'span 6', ar: '4/3' }, { col: 'span 6', ar: '4/3' },
  { col: 'span 4', ar: '3/4' }, { col: 'span 4', ar: '3/4' }, { col: 'span 4', ar: '3/4' },
  { col: 'span 8', ar: '21/9' }, { col: 'span 4', ar: '4/5' },
  { col: 'span 6', ar: '4/3' }, { col: 'span 6', ar: '4/3' },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('grid')

  const filtered = ALL.filter(p => {
    if (filter === 'All') return true
    if (['2026', '2025', '2024'].includes(filter)) return p.yr === filter
    return p.cat === filter
  })

  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ PORTFOLIO</div>
            <div className="mono">VOL. III · 142 COMMISSIONS</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <h1 className="fu fu-1 display">The <span className="serif-italic hl-brass">Portfolio.</span></h1>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 520 }}>
              Four years of commissioned visualization work. Filter by program, scroll the volume end to end.
            </p>
          </div>

          {/* Filter bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, paddingBottom: 24, borderBottom: '1px solid var(--rule)' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {CATS.map(c => (
                <button key={c} className={`chip${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <div className="mono">{filtered.length} SCENES</div>
              <div style={{ display: 'flex', gap: 4, border: '1px solid var(--rule-strong)', padding: 2 }}>
                {[['grid', '▦'], ['list', '≡']].map(([v, icon]) => (
                  <button key={v} onClick={() => setView(v)} style={{
                    padding: '6px 14px',
                    background: view === v ? 'var(--ink-900)' : 'transparent',
                    color: view === v ? 'var(--bg-paper)' : 'var(--ink-700)',
                    border: 'none', cursor: 'pointer',
                    fontSize: '1rem', fontFamily: 'var(--font-sans)',
                  }}>{icon}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {view === 'grid' && (
        <section style={{ padding: '40px 40px 80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              {filtered.map((p, i) => {
                const pt = GRID_PATTERN[i % GRID_PATTERN.length]
                return (
                  <div key={p.n + i} className="fu" style={{ gridColumn: pt.col, animationDelay: `${i * 50}ms`, cursor: 'pointer' }}>
                    <Img
                      src={p.img}
                      aspect={pt.ar}
                      badge={`${p.cat.toUpperCase()} · ${String(i + 1).padStart(2, '0')}`}
                      badgeBrass={p.yr}
                      metaTitle={p.n}
                      metaSub={`${p.tag} · ${p.loc}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {view === 'list' && (
        <section style={{ padding: '20px 40px 80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '60px 2.4fr 1fr 1fr 1fr 1fr 80px', gap: 24, padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
              {['#', 'PROJECT', 'CATEGORY', 'TYPE', 'LOCATION', 'YEAR', ''].map(h => (
                <div key={h} className="eyebrow">{h}</div>
              ))}
            </div>
            {filtered.map((p, i) => (
              <div key={p.n + i} className="fu" style={{
                display: 'grid',
                gridTemplateColumns: '60px 2.4fr 1fr 1fr 1fr 1fr 80px',
                gap: 24,
                padding: '20px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'center',
                animationDelay: `${i * 40}ms`,
                cursor: 'pointer',
                transition: 'background 200ms',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-paper)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div className="mono">{String(i + 1).padStart(2, '0')}</div>
                <div className="serif-italic" style={{ fontSize: '1.35rem' }}>{p.n}</div>
                <div style={{ color: 'var(--ink-500)', fontSize: '0.9rem' }}>{p.cat}</div>
                <div style={{ color: 'var(--ink-500)', fontSize: '0.9rem' }}>{p.tag}</div>
                <div style={{ color: 'var(--ink-500)', fontSize: '0.9rem' }}>{p.loc}</div>
                <div className="mono hl-brass">{p.yr}</div>
                <div className="mono hl-brass" style={{ textAlign: 'right' }}>→</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
