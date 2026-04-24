import Link from 'next/link'
import Img from '@/components/Img'
import { IMG } from '@/lib/images'

export const metadata = {
  title: 'Developments — Sceneset.AI',
}

const projects = [
  { name: 'The Biscayne Collective', loc: 'Miami · FL',    stories: '72', type: 'Mixed-Use · Class A',  value: '$890M',  img: IMG.tower1 },
  { name: 'Hudson North Tower',      loc: 'New York · NY', stories: '71', type: 'Residential Tower',    value: '$1.2B',  img: IMG.tower3 },
  { name: 'Centurion Plaza',         loc: 'Austin · TX',   stories: '48', type: 'Financial · HQ',       value: '$620M',  img: IMG.tower5 },
  { name: 'Æther West',              loc: 'Seattle · WA',  stories: '58', type: 'Hospitality · Mixed',  value: '$740M',  img: IMG.tower2 },
]

export default function DevelopmentsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ DEVELOPMENTS</div>
            <div className="mono">14 ACTIVE COMMISSIONS · 2024–2026</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 40 }}>
            The city, rendered<br />before it is <span className="serif-italic hl-brass">poured.</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'end', marginTop: 20 }}>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 640 }}>
              Class-A commercial work is civic work. Our pipeline renders mixed-use landmarks the way a cinematographer frames a city — at golden hour, from the street, from the sky, and from the lobby on a Tuesday afternoon.
            </p>
            <div className="fu fu-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[['$14B+', 'VALUE RENDERED'], ['8K', 'MASTER RES'], ['72 HR', 'SLA']].map(([v, k]) => (
                <div key={k}>
                  <div className="stat-num" style={{ fontSize: '2rem', marginBottom: 6 }}>{v}</div>
                  <div className="mono" style={{ color: 'var(--ink-500)' }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature hero */}
      <section style={{ padding: '40px 40px 60px' }}>
        <div className="container">
          <Img
            src={IMG.heroTower}
            aspect="21/9"
            badgeBrass="FEATURED"
            badge="THE BISCAYNE COLLECTIVE"
            metaTitle="72 Stories · Miami"
            metaSub="PHASE 03 · WEST FACE · DUSK"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 32, paddingTop: 28, borderTop: '1px solid var(--rule)' }}>
            {[
              ['CLIENT',    'Northfield Capital'],
              ['ARCHITECT', 'HAUS WERK Studio'],
              ['PROGRAM',   'Mixed-Use · 72F · 1.4M SF'],
              ['STATUS',    'Pre-construction · 2026'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{k}</div>
                <div style={{ fontSize: '1rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section style={{ padding: '80px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ SELECTED</div>
              <h2 className="display">Landmark projects.</h2>
            </div>
            <div className="mono">14 COMMISSIONS</div>
          </div>

          {projects.map((p, i) => (
            <div key={p.name} className="fu" style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr',
              gap: 60,
              alignItems: 'center',
              padding: '70px 0',
              borderTop: '1px solid var(--rule)',
              animationDelay: `${i * 80}ms`,
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <Img src={p.img} aspect="4/3" badge={`0${i + 1} / 14`} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>PROJECT · 0{i + 1}</div>
                <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', marginBottom: 14 }}>{p.name}</h2>
                <div className="serif-italic" style={{ fontSize: '1.2rem', color: 'var(--ink-500)', marginBottom: 32 }}>
                  {p.loc} · {p.type}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--rule)' }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>STORIES</div>
                    <div className="stat-num brass" style={{ fontSize: '1.8rem' }}>{p.stories}</div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>VALUE</div>
                    <div className="stat-num brass" style={{ fontSize: '1.8rem' }}>{p.value}</div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>RENDER</div>
                    <div className="stat-num" style={{ fontSize: '1.8rem' }}>8K</div>
                  </div>
                </div>
                <Link href="/portfolio" className="btn btn-ghost">View Scene →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '140px 40px', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow brass" style={{ marginBottom: 24 }}>◆ COMMISSION</div>
          <h2 className="display" style={{ marginBottom: 40 }}>
            Your tower,<br /><span className="serif-italic hl-brass">already photographed.</span>
          </h2>
          <Link href="/studio" className="btn btn-primary">Begin Commercial Project →</Link>
        </div>
      </section>
    </div>
  )
}
