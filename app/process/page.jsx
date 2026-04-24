import Link from 'next/link'

export const metadata = {
  title: 'Process — Sceneset.AI',
}

const pipeline = [
  { k: '01 / INGEST',    v: 'CAD · Revit · Rhino · SketchUp · FBX · USD',  n: '0.02 mm tolerance · hierarchy preserved' },
  { k: '02 / GEOMETRY',  v: 'Retopology · normals cleanup · LOD 0–3',       n: 'Avg 42 M polys · triangulated' },
  { k: '03 / MATERIALS', v: 'PBR · Substance · displacement · SSS',          n: '32 bpc · 16K texture budget' },
  { k: '04 / LIGHTING',  v: 'HDR dome · IES · volumetrics · GI',             n: '4 diurnal presets · atelier pass' },
  { k: '05 / COMPOSE',   v: 'Shot-list · storyboard · director review',      n: 'Creative director per project · in-house' },
  { k: '06 / RENDER',    v: 'V-Ray GPU · Octane · Arnold',                   n: '8192 × 5120 master · 4096 spp' },
  { k: '07 / GRADE',     v: 'ACES · DaVinci · per-scene LUT',                n: '32 bpc cinematic grade' },
  { k: '08 / DELIVER',   v: 'EXR · PNG · TIFF · MP4 · MOV',                  n: '72 hr SLA · unlimited first-round' },
]

const benchmarks = [
  { label: 'Resolution',        us: 95,  them: 55, ul: '8K',       tl: '4K' },
  { label: 'Color Depth',       us: 100, them: 50, ul: '32bpc',    tl: '16bpc' },
  { label: 'Material Detail',   us: 92,  them: 60, ul: '16K',      tl: '4K' },
  { label: 'Delivery Speed',    us: 88,  them: 42, ul: '72 hr',    tl: '2 wk' },
  { label: 'Creative Director', us: 100, them: 15, ul: 'In-house', tl: 'Outsourced' },
]

export default function ProcessPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ PROCESS</div>
            <div className="mono">PIPELINE · NODE MIA-01</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 40 }}>
            Render: 8K.<br />Precision: <span className="serif-italic hl-brass">0.02mm.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 700 }}>
            A disciplined pipeline, audited by the numbers. Everything on this page is measurable — and measured on every commission.
          </p>
        </div>
      </section>

      {/* Pipeline spec */}
      <section style={{ padding: '60px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 01 — PIPELINE</div>
              <h2 className="display">Eight phases, end to end.</h2>
            </div>
          </div>

          <div className="card-soft" style={{ padding: '20px 40px' }}>
            {pipeline.map((r, i) => (
              <div key={r.k} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 1fr',
                gap: 30,
                padding: '24px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              }}>
                <div className="mono hl-brass">{r.k}</div>
                <div style={{ fontSize: '1rem' }}>{r.v}</div>
                <div className="mono" style={{ color: 'var(--ink-500)' }}>{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
            {[
              ['8192',  'MASTER PX'],
              ['4096',  'SAMPLES/PX'],
              ['42M',   'AVG POLYS'],
              ['32 bpc','COLOR DEPTH'],
              ['72 hr', 'SLA'],
            ].map(([v, k]) => (
              <div key={k} className="card" style={{ padding: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{k}</div>
                <div className="stat-num brass" style={{ fontSize: '2.6rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section style={{ padding: '100px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 02 — BENCHMARK</div>
              <h2 className="display">Measured,<br />not <span className="serif-italic hl-brass">claimed.</span></h2>
            </div>
            <div>
              {benchmarks.map(r => (
                <div key={r.label} style={{ padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div className="eyebrow">{r.label}</div>
                    <div style={{ display: 'flex', gap: 28 }}>
                      <span className="mono hl-brass">SCENESET · {r.ul}</span>
                      <span className="mono" style={{ color: 'var(--ink-400)' }}>INDUSTRY · {r.tl}</span>
                    </div>
                  </div>
                  <div style={{ height: 3, background: 'var(--bg-stone)', position: 'relative', marginBottom: 4 }}>
                    <div style={{ position: 'absolute', inset: 0, right: `${100 - r.us}%`, background: 'var(--brass-500)' }} />
                  </div>
                  <div style={{ height: 3, background: 'var(--bg-stone)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, right: `${100 - r.them}%`, background: 'var(--ink-300)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', textAlign: 'center' }}>
        <Link href="/studio" className="btn btn-primary">Request Spec Sheet →</Link>
      </section>
    </div>
  )
}
