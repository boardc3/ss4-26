'use client'

import { useState } from 'react'
import MediaFrame from '@/components/MediaFrame'
import { portfolio } from '@/lib/commercialContent'

const filters = ['All', 'Commercial', 'Workplace', 'Mixed-Use', 'Hospitality']
const gridPattern = [
  { col: 'span 7', ar: '16 / 10' },
  { col: 'span 5', ar: '16 / 10' },
  { col: 'span 4', ar: '4 / 5' },
  { col: 'span 4', ar: '4 / 5' },
  { col: 'span 4', ar: '4 / 5' },
  { col: 'span 6', ar: '16 / 10' },
  { col: 'span 6', ar: '16 / 10' },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('grid')

  const filtered = portfolio.filter(project => filter === 'All' || project.category === filter)

  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Selected Work</div>
            <div className="mono">PROPERTY FILMS · MIXED-USE · RESIDENTIAL ASSETS</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 60, alignItems: 'end', marginBottom: 52 }}>
            <h1 className="fu fu-1 display">AI-produced work<br /><span className="serif-italic hl-brass">aligned for launch.</span></h1>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 540 }}>
              Each project turns limited source material into full-bleed motion, poster frames, deck-ready crops, and launch visuals through cutting-edge AI production and final studio polish.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, paddingBottom: 24, borderBottom: '1px solid var(--rule)' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {filters.map(item => (
                <button key={item} className={`chip${filter === item ? ' active' : ''}`} onClick={() => setFilter(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <div className="mono">{filtered.length} ASSETS</div>
              <div style={{ display: 'flex', gap: 4, border: '1px solid var(--rule-strong)', padding: 2 }}>
                {[
                  ['grid', 'Grid'],
                  ['list', 'List'],
                ].map(([value, label]) => (
                  <button key={value} onClick={() => setView(value)} style={{
                    padding: '7px 12px',
                    background: view === value ? 'var(--ink-900)' : 'transparent',
                    color: view === value ? 'var(--bg-paper)' : 'var(--ink-700)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {view === 'grid' && (
        <section style={{ padding: '40px 40px 90px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              {filtered.map((project, i) => {
                const pattern = gridPattern[i % gridPattern.length]
                return (
                  <div key={project.name} className="fu" style={{ gridColumn: pattern.col, animationDelay: `${i * 55}ms` }}>
                    <MediaFrame
                      src={project.video || project.image}
                      poster={project.image}
                      video={Boolean(project.video)}
                      aspect={pattern.ar}
                      badge={project.category}
                      badgeBrass={project.year}
                      metaTitle={project.name}
                      metaSub={`${project.tag} · ${project.location}`}
                    />
                    <p style={{ color: 'var(--ink-500)', marginTop: 14, maxWidth: 640 }}>{project.result}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {view === 'list' && (
        <section style={{ padding: '30px 40px 90px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '52px 1.7fr 1fr 1fr 1fr 2fr', gap: 22, padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
              {['#', 'Project', 'Category', 'Type', 'Year', 'Launch Use'].map(item => (
                <div key={item} className="eyebrow">{item}</div>
              ))}
            </div>
            {filtered.map((project, i) => (
              <div key={project.name} className="fu" style={{
                display: 'grid',
                gridTemplateColumns: '52px 1.7fr 1fr 1fr 1fr 2fr',
                gap: 22,
                padding: '22px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'center',
                animationDelay: `${i * 40}ms`,
              }}>
                <div className="mono">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="serif-italic" style={{ fontSize: '1.35rem' }}>{project.name}</div>
                  <div className="mono" style={{ marginTop: 4 }}>{project.location}</div>
                </div>
                <div style={{ color: 'var(--ink-500)' }}>{project.category}</div>
                <div style={{ color: 'var(--ink-500)' }}>{project.tag}</div>
                <div className="mono hl-brass">{project.year}</div>
                <div style={{ color: 'var(--ink-500)', fontSize: '0.92rem' }}>{project.result}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
