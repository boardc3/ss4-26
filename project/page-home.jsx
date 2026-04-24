const HomePage = ({ setPage }) => {
  return (
    <div className="page-fade">
      {/* ========== HERO ========== */}
      <section style={{ paddingTop: 110, paddingBottom: 80 }}>
        <div className="container" style={{ padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 48 }}>
            <div>
              <div className="fu fu-1 eyebrow brass" style={{ marginBottom: 32 }}>◆ VISUALIZATION FOR HIGH-END DEVELOPMENT</div>
              <h1 className="fu fu-2 display">
                Your tower,<br/>
                <span className="serif-italic hl-brass">already photographed.</span>
              </h1>
            </div>
            <div className="fu fu-3" style={{ display: 'grid', gap: 20, paddingBottom: 20 }}>
              <p className="pullquote" style={{ maxWidth: 480 }}>
                We render Class-A towers, mixed-use landmarks and interior fit-outs at 8K fidelity — before a single shovel is in the ground.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                <button className="btn btn-primary" onClick={() => setPage('studio')}>Commission a Project →</button>
                <button className="btn btn-ghost" onClick={() => setPage('anthology')}>View Portfolio</button>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="fu fu-4">
            <Img
              src={IMG.heroCommercial}
              aspect="21 / 9"
              badge="SCENE 01"
              badgeBrass="8K · MASTER"
              metaTitle="The Biscayne Collective"
              metaSub="72 STORIES · MIAMI · RENDER PASS 04"
            />
          </div>

          {/* Hero stats rail */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--rule)', marginTop: 32 }}>
            {[
              ['$14B+', 'Development value rendered'],
              ['142', 'Class-A projects delivered'],
              ['72 hr', 'Standard delivery window'],
              ['8192px', 'Master resolution'],
            ].map(([v, k], i) => (
              <div key={k} className="fu" style={{
                animationDelay: `${500 + i*100}ms`,
                padding: '32px 28px',
                borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
              }}>
                <div className="stat-num brass" style={{ fontSize: '2.8rem', marginBottom: 10 }}>{v}</div>
                <div className="mono" style={{ color: 'var(--ink-500)' }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLIENT MARQUEE ========== */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, j) => (
            ['NORTHFIELD CAPITAL', 'HAUS WERK STUDIO', 'SKANSKA USA', 'RELATED GROUP',
             'FOSTER + PARTNERS', 'CBRE DEVELOPMENT', 'TISHMAN SPEYER', 'SHOP ARCHITECTS',
             'HINES INTERNATIONAL', 'ROCKEFELLER GROUP'].map((n, i) => (
              <span key={j + '-' + i} className="marquee-item">{n}</span>
            ))
          ))}
        </div>
      </div>

      {/* ========== WHAT WE RENDER ========== */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 01 — SERVICES</div>
              <h2 className="display">Four disciplines.<br/><span className="serif-italic hl-brass">One studio.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 480 }}>
              From conceptual massing studies to investor-grade marketing reels — every scene built in-house, reviewed by a creative director, signed before it leaves.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { n: '01', t: 'Exterior Towers', s: 'Class-A commercial, mixed-use, hospitality', img: IMG.tower2, cta: 'commercial' },
              { n: '02', t: 'Interior Fit-out', s: 'Lobbies, amenities, unit finishes', img: IMG.lobby1, cta: 'residential' },
              { n: '03', t: 'Site & Masterplan', s: 'Context, massing, urban integration', img: IMG.plaza1, cta: 'commercial' },
              { n: '04', t: 'Motion & Film', s: '4K flythroughs, investor reels, 60 fps', img: IMG.hotel1, cta: 'anthology' },
            ].map((c, i) => (
              <div key={c.n} className="fu card card-hover" style={{ animationDelay: `${i*100}ms`, cursor: 'pointer' }} onClick={() => setPage(c.cta)}>
                <Img src={c.img} aspect="4/5" badge={c.n} ticks={false} />
                <div style={{ padding: '28px 24px 32px' }}>
                  <div className="eyebrow brass" style={{ marginBottom: 14 }}>SERVICE · {c.n}</div>
                  <h3 className="display" style={{ marginBottom: 10 }}>{c.t}</h3>
                  <p style={{ color: 'var(--ink-500)', marginBottom: 24, fontSize: '0.92rem' }}>{c.s}</p>
                  <div className="btn-text" style={{ display: 'inline-block' }}>Explore →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED DEVELOPMENT — editorial split ========== */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 02 — FEATURED</div>
              <h2 className="display">The Biscayne Collective.</h2>
            </div>
            <div className="mono">NORTHFIELD CAPITAL · PHASE III · 2026</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, marginBottom: 20 }}>
            <Img src={IMG.tower1} aspect="4/5" badge="EXTERIOR · DUSK" metaTitle="West Elevation" metaSub="10240 × 5760 · V-RAY GPU" />
            <div style={{ display: 'grid', gap: 20, alignContent: 'start' }}>
              <Img src={IMG.lobby2} aspect="4/3" badge="LOBBY · L01" />
              <Img src={IMG.plaza1} aspect="4/3" badge="PLAZA · 05:42 PM" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
            <div>
              <p className="pullquote" style={{ fontSize: '1.6rem' }}>
                "A 72-story landmark. Rendered across four light states before the steel was ordered."
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {[['72', 'STORIES'], ['1.4M', 'SF GSA'], ['$890M', 'CONSTRUCTION'], ['18', 'RENDER PASSES']].map(([v, k]) => (
                <div key={k}>
                  <div className="stat-num" style={{ fontSize: '2.2rem', marginBottom: 6 }}>{v}</div>
                  <div className="mono" style={{ color: 'var(--ink-500)' }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS — 4 step ========== */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 03 — PROCESS</div>
              <h2 className="display">From CAD<br/>to <span className="serif-italic hl-brass">cinema.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 420 }}>
              A disciplined pipeline — four phases, one creative director per project, no outsourcing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { n: '01', t: 'Ingest', s: 'CAD · Revit · Rhino. 0.02mm tolerance preserved.', img: IMG.plan1 },
              { n: '02', t: 'Compose', s: 'Camera, light, materials — shot-listed by a director.', img: IMG.mat1 },
              { n: '03', t: 'Render', s: '8K master, 32-bit color, 4096 samples per pixel.', img: IMG.site1 },
              { n: '04', t: 'Deliver', s: 'EXR, PNG, 4K video. 72 hours. Unlimited first-round.', img: IMG.tower4 },
            ].map((s, i) => (
              <div key={s.n} className="fu" style={{ animationDelay: `${i*120}ms` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18, paddingBottom: 16, borderBottom: '1px solid var(--rule)' }}>
                  <div className="display" style={{ fontSize: '2.6rem', color: 'var(--brass-500)' }}>{s.n}</div>
                  <div className="mono" style={{ color: 'var(--ink-500)' }}>PHASE {s.n}</div>
                </div>
                <Img src={s.img} aspect="4/3" ticks={false} style={{ marginBottom: 20 }} />
                <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: 10 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '0.92rem' }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL — deep green pause ========== */}
      <section className="bg-deep" style={{ padding: '140px 40px' }}>
        <div className="container-narrow">
          <div className="eyebrow brass" style={{ marginBottom: 40, color: 'var(--brass-400)' }}>◆ CLIENT</div>
          <p className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: 56, color: 'var(--bg-paper)', textWrap: 'pretty' }}>
            "Sceneset renders closed our Series-D raise. The LPs could <span className="serif-italic" style={{ color: 'var(--brass-400)' }}>walk the lobby</span> eighteen months before we broke ground."
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
            <div>
              <div className="serif-italic" style={{ fontSize: '1.4rem', color: 'var(--bg-paper)', marginBottom: 4 }}>Elena Moreau</div>
              <div className="mono" style={{ color: 'var(--ink-300)' }}>MANAGING PARTNER · NORTHFIELD CAPITAL</div>
            </div>
            <div className="mono" style={{ color: 'var(--brass-400)' }}>CASE STUDY 04 →</div>
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO PREVIEW ========== */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ 04 — SELECTED WORK</div>
              <h2 className="display">Recent commissions.</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => setPage('anthology')}>View Full Portfolio →</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            {[
              { src: IMG.tower3, n: 'Hudson North', s: 'NEW YORK · 71 STORIES', col: 'span 7', ar: '16/11' },
              { src: IMG.hotel2, n: 'Rosewood Palisades', s: 'LOS ANGELES · HOSPITALITY', col: 'span 5', ar: '16/11' },
              { src: IMG.int1, n: 'Centurion Plaza L01', s: 'AUSTIN · LOBBY', col: 'span 5', ar: '4/3' },
              { src: IMG.tower5, n: 'Æther West', s: 'SEATTLE · 58 STORIES', col: 'span 7', ar: '4/3' },
            ].map((p, i) => (
              <div key={p.n} className="fu" style={{ gridColumn: p.col, animationDelay: `${i*100}ms` }}>
                <Img src={p.src} aspect={p.ar} metaTitle={p.n} metaSub={p.s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section style={{ padding: '140px 40px', background: 'var(--brass-100)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow brass" style={{ marginBottom: 32 }}>◆ BEGIN A PROJECT</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', marginBottom: 32 }}>
            Render your next <span className="serif-italic hl-brass">landmark.</span>
          </h2>
          <p className="pullquote" style={{ fontSize: '1.4rem', marginBottom: 48, maxWidth: 640, margin: '0 auto 48px' }}>
            Three questions. A creative director responds personally within 24 hours — not a bot, not a form autoreply.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('studio')} style={{ padding: '18px 36px', fontSize: '0.88rem' }}>
            Commission Sceneset →
          </button>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { HomePage });
