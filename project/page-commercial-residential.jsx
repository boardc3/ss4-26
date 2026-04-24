const CommercialPage = ({ setPage }) => {
  const projects = [
    { name: 'The Biscayne Collective', loc: 'Miami · FL', stories: '72', type: 'Mixed-Use · Class A', value: '$890M', img: IMG.tower1 },
    { name: 'Hudson North Tower', loc: 'New York · NY', stories: '71', type: 'Residential Tower', value: '$1.2B', img: IMG.tower3 },
    { name: 'Centurion Plaza', loc: 'Austin · TX', stories: '48', type: 'Financial · HQ', value: '$620M', img: IMG.tower5 },
    { name: 'Æther West', loc: 'Seattle · WA', stories: '58', type: 'Hospitality · Mixed', value: '$740M', img: IMG.tower2 },
  ];

  return (
    <div className="page-fade" style={{ paddingTop: 110 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ DEVELOPMENTS</div>
            <div className="mono">14 ACTIVE COMMISSIONS · 2024–2026</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 40 }}>
            The city, rendered<br/>before it is <span className="serif-italic hl-brass">poured.</span>
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
            {[['CLIENT', 'Northfield Capital'], ['ARCHITECT', 'HAUS WERK Studio'], ['PROGRAM', 'Mixed-Use · 72F · 1.4M SF'], ['STATUS', 'Pre-construction · 2026']].map(([k, v]) => (
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
              gap: 60, alignItems: 'center',
              padding: '70px 0',
              borderTop: '1px solid var(--rule)',
              animationDelay: `${i*80}ms`,
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <Img src={p.img} aspect="4/3" badge={`0${i+1} / 14`} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>PROJECT · 0{i+1}</div>
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
                <button className="btn btn-ghost" onClick={() => setPage('anthology')}>View Scene →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '140px 40px', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow brass" style={{ marginBottom: 24 }}>◆ COMMISSION</div>
          <h2 className="display" style={{ marginBottom: 40 }}>
            Your tower,<br/><span className="serif-italic hl-brass">already photographed.</span>
          </h2>
          <button className="btn btn-primary" onClick={() => setPage('studio')}>Begin Commercial Project →</button>
        </div>
      </section>
    </div>
  );
};

const ResidentialPage = ({ setPage }) => {
  return (
    <div className="page-fade" style={{ paddingTop: 110 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ INTERIORS · FIT-OUT</div>
            <div className="mono">LOBBIES · AMENITIES · UNITS</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1200, marginBottom: 40 }}>
            Interiors rendered in the light<br/>they will <span className="serif-italic hl-brass">be lived in.</span>
          </h1>
        </div>
      </section>

      {/* Material strip */}
      <section style={{ padding: '20px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { src: IMG.mat1, t: 'Calacatta Dawn', k: 'MARBLE · HONED', c: 'ROSEWOOD · LOBBY' },
              { src: IMG.mat2, t: 'Quartered Oak', k: 'TIMBER · 3mm', c: 'KIAWAH · GREAT ROOM' },
              { src: IMG.mat3, t: 'Patinated Brass', k: 'METAL · HAND-AGED', c: 'CENTURION · PH' },
            ].map((m, i) => (
              <div key={m.t} className="fu" style={{ animationDelay: `${i*120}ms` }}>
                <Img src={m.src} aspect="3/4" badge={m.k} />
                <div style={{ padding: '20px 0' }}>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>{m.c}</div>
                  <div className="serif-italic" style={{ fontSize: '1.6rem' }}>{m.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature */}
      <section style={{ padding: '120px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ FEATURED INTERIOR</div>
              <h2 className="display">Rosewood Palisades<br/>Lobby L01.</h2>
            </div>
            <div className="mono">LOS ANGELES · 2025 · 24 RENDER PASSES</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Img src={IMG.lobby1} aspect="3/4" badge="A · DAWN" />
              <Img src={IMG.lobby2} aspect="3/4" badge="B · GOLDEN" style={{ marginTop: 40 }} />
              <Img src={IMG.int1} aspect="3/4" badge="C · BLUE HOUR" style={{ marginTop: -20 }} />
              <Img src={IMG.int2} aspect="3/4" badge="D · NIGHT" style={{ marginTop: 20 }} />
            </div>
            <div style={{ paddingTop: 20 }}>
              <p className="pullquote" style={{ fontSize: '1.6rem', marginBottom: 28 }}>
                "Four passes — dawn, golden, blue hour, night. The lobby is the same. The light inside is not."
              </p>
              <p style={{ color: 'var(--ink-500)', marginBottom: 40 }}>
                A 9,400sf flagship lobby, rendered across a full diurnal cycle. Every fixture modeled at 0.02mm precision. Every plant in the planter placed by a landscape architect, not by an algorithm.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                {[['9,400', 'SQ. FT.'], ['24', 'RENDER PASSES'], ['4', 'LIGHT STATES'], ['0.02mm', 'PRECISION']].map(([v, k]) => (
                  <div key={k} style={{ borderLeft: '1px solid var(--brass-400)', paddingLeft: 16 }}>
                    <div className="stat-num brass" style={{ fontSize: '1.8rem' }}>{v}</div>
                    <div className="mono" style={{ marginTop: 4, color: 'var(--ink-500)' }}>{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typologies */}
      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>§ TYPOLOGIES</div>
              <h2 className="display">What we render.</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { t: 'Grand Lobbies', c: 'CLASS-A · CIVIC', img: IMG.lobby1 },
              { t: 'Amenity Decks', c: 'POOL · LOUNGE · GYM', img: IMG.hotel1 },
              { t: 'Unit Fit-outs', c: 'PH · SKY · GARDEN', img: IMG.res2 },
              { t: 'Hospitality F&B', c: 'RESTAURANT · BAR', img: IMG.int1 },
            ].map((t, i) => (
              <div key={t.t} className="fu card card-hover" style={{ animationDelay: `${i*80}ms` }}>
                <Img src={t.img} aspect="4/5" ticks={false} />
                <div style={{ padding: '22px 20px' }}>
                  <div className="mono hl-brass" style={{ marginBottom: 10 }}>0{i+1}</div>
                  <div className="serif-italic" style={{ fontSize: '1.4rem', marginBottom: 6 }}>{t.t}</div>
                  <div className="eyebrow">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--brass-100)', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow brass" style={{ marginBottom: 24 }}>◆ FIT-OUT</div>
          <h2 className="display" style={{ marginBottom: 40 }}>Commission an <span className="serif-italic hl-brass">interior.</span></h2>
          <button className="btn btn-primary" onClick={() => setPage('studio')}>Begin a Fit-out →</button>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { CommercialPage, ResidentialPage });
