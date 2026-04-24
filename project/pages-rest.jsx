const AnthologyPage = ({ setPage }) => {
  const all = [
    { n: 'The Biscayne Collective', cat: 'Commercial', tag: 'Mixed-Use', loc: 'Miami', yr: '2026', img: IMG.tower1 },
    { n: 'Hudson North Tower', cat: 'Commercial', tag: 'Residential Tower', loc: 'New York', yr: '2025', img: IMG.tower3 },
    { n: 'Rosewood Palisades', cat: 'Interiors', tag: 'Hospitality', loc: 'Los Angeles', yr: '2025', img: IMG.hotel2 },
    { n: 'Centurion Plaza', cat: 'Commercial', tag: 'Financial HQ', loc: 'Austin', yr: '2024', img: IMG.tower5 },
    { n: 'Æther West', cat: 'Commercial', tag: 'Mixed-Use', loc: 'Seattle', yr: '2026', img: IMG.tower2 },
    { n: 'Centurion Plaza L01', cat: 'Interiors', tag: 'Lobby', loc: 'Austin', yr: '2024', img: IMG.lobby1 },
    { n: 'Kiawah Preserve', cat: 'Interiors', tag: 'Residence', loc: 'Kiawah Island', yr: '2025', img: IMG.res1 },
    { n: 'Embarcadero One', cat: 'Commercial', tag: 'Civic', loc: 'San Francisco', yr: '2025', img: IMG.tower4 },
    { n: 'Newport Promenade', cat: 'Commercial', tag: 'Retail', loc: 'Newport Beach', yr: '2025', img: IMG.retail1 },
    { n: 'Rosewood PH 4201', cat: 'Interiors', tag: 'Penthouse', loc: 'NoLIta', yr: '2026', img: IMG.res2 },
    { n: 'Marin Landing', cat: 'Interiors', tag: 'Residence', loc: 'Sausalito', yr: '2024', img: IMG.res3 },
    { n: 'Desert Pavilion', cat: 'Interiors', tag: 'Residence', loc: 'Scottsdale', yr: '2026', img: IMG.res4 },
  ];

  const [filter, setFilter] = React.useState('All');
  const [view, setView] = React.useState('grid');
  const cats = ['All', 'Commercial', 'Interiors', '2026', '2025', '2024'];

  const filtered = all.filter(p => {
    if (filter === 'All') return true;
    if (['2026', '2025', '2024'].includes(filter)) return p.yr === filter;
    return p.cat === filter;
  });

  return (
    <div className="page-fade" style={{ paddingTop: 110 }}>
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
              {cats.map(c => (
                <button key={c} className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
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
                    fontSize: '1rem', fontFamily: 'Inter',
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
                const pattern = [
                  { col: 'span 6', ar: '4/3' }, { col: 'span 6', ar: '4/3' },
                  { col: 'span 4', ar: '3/4' }, { col: 'span 4', ar: '3/4' }, { col: 'span 4', ar: '3/4' },
                  { col: 'span 8', ar: '21/9' }, { col: 'span 4', ar: '4/5' },
                  { col: 'span 6', ar: '4/3' }, { col: 'span 6', ar: '4/3' },
                ];
                const pt = pattern[i % pattern.length];
                return (
                  <div key={p.n + i} className="fu" style={{ gridColumn: pt.col, animationDelay: `${i*50}ms`, cursor: 'pointer' }}>
                    <Img
                      src={p.img}
                      aspect={pt.ar}
                      badge={`${p.cat.toUpperCase()} · ${String(i+1).padStart(2, '0')}`}
                      badgeBrass={p.yr}
                      metaTitle={p.n}
                      metaSub={`${p.tag} · ${p.loc}`}
                    />
                  </div>
                );
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
                gap: 24, padding: '20px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'center',
                animationDelay: `${i*40}ms`,
                cursor: 'pointer',
                transition: 'background 200ms',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-paper)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div className="mono">{String(i+1).padStart(2, '0')}</div>
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
  );
};

const TechnicalPage = ({ setPage }) => {
  return (
    <div className="page-fade" style={{ paddingTop: 110 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ PROCESS</div>
            <div className="mono">PIPELINE · NODE MIA-01</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 40 }}>
            Render: 8K.<br/>Precision: <span className="serif-italic hl-brass">0.02mm.</span>
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
            {[
              { k: '01 / INGEST',    v: 'CAD · Revit · Rhino · SketchUp · FBX · USD',   n: '0.02 mm tolerance · hierarchy preserved' },
              { k: '02 / GEOMETRY',  v: 'Retopology · normals cleanup · LOD 0–3',       n: 'Avg 42 M polys · triangulated' },
              { k: '03 / MATERIALS', v: 'PBR · Substance · displacement · SSS',          n: '32 bpc · 16K texture budget' },
              { k: '04 / LIGHTING',  v: 'HDR dome · IES · volumetrics · GI',             n: '4 diurnal presets · atelier pass' },
              { k: '05 / COMPOSE',   v: 'Shot-list · storyboard · director review',      n: 'Creative director per project · in-house' },
              { k: '06 / RENDER',    v: 'V-Ray GPU · Octane · Arnold',                   n: '8192 × 5120 master · 4096 spp' },
              { k: '07 / GRADE',     v: 'ACES · DaVinci · per-scene LUT',                n: '32 bpc cinematic grade' },
              { k: '08 / DELIVER',   v: 'EXR · PNG · TIFF · MP4 · MOV',                  n: '72 hr SLA · unlimited first-round' },
            ].map((r, i) => (
              <div key={r.k} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 1fr',
                gap: 30, padding: '24px 0',
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
              ['8192', 'MASTER PX'], ['4096', 'SAMPLES/PX'], ['42M', 'AVG POLYS'],
              ['32 bpc', 'COLOR DEPTH'], ['72 hr', 'SLA'],
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
              <h2 className="display">Measured,<br/>not <span className="serif-italic hl-brass">claimed.</span></h2>
            </div>
            <div>
              {[
                { label: 'Resolution',       us: 95,  them: 55, ul: '8K',     tl: '4K' },
                { label: 'Color Depth',      us: 100, them: 50, ul: '32bpc',  tl: '16bpc' },
                { label: 'Material Detail',  us: 92,  them: 60, ul: '16K',    tl: '4K' },
                { label: 'Delivery Speed',   us: 88,  them: 42, ul: '72 hr',  tl: '2 wk' },
                { label: 'Creative Director', us: 100, them: 15, ul: 'In-house', tl: 'Outsourced' },
              ].map(r => (
                <div key={r.label} style={{ padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div className="eyebrow">{r.label}</div>
                    <div style={{ display: 'flex', gap: 28 }}>
                      <span className="mono hl-brass">SCENESET · {r.ul}</span>
                      <span className="mono" style={{ color: 'var(--ink-400)' }}>INDUSTRY · {r.tl}</span>
                    </div>
                  </div>
                  <div style={{ height: 3, background: 'var(--bg-stone)', position: 'relative', marginBottom: 4 }}>
                    <div style={{ position: 'absolute', inset: 0, right: `${100-r.us}%`, background: 'var(--brass-500)' }}></div>
                  </div>
                  <div style={{ height: 3, background: 'var(--bg-stone)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, right: `${100-r.them}%`, background: 'var(--ink-300)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', textAlign: 'center' }}>
        <button className="btn btn-primary" onClick={() => setPage('studio')}>Request Spec Sheet →</button>
      </section>
    </div>
  );
};

const StudioPage = ({ setPage }) => {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({ name: '', studio: '', email: '', program: 'Mixed-Use', scale: 250000, timeline: '4 weeks', brief: '' });
  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="page-fade" style={{ paddingTop: 110 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ STUDIO · COMMISSION</div>
            <div className="mono">STEP {step+1} / 3</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1200, marginBottom: 24 }}>
            Begin a <span className="serif-italic hl-brass">commission.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            Three short questions. A creative director responds personally within 24 hours — not a bot, not a form autoreply.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 40px 80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 80 }}>
          {/* Progress rail */}
          <div>
            {[
              { k: 'PROJECT', s: 'Who you are' },
              { k: 'PROGRAM', s: 'What you are building' },
              { k: 'BRIEF',   s: 'How you want it to feel' },
            ].map((s, i) => (
              <div key={s.k} onClick={() => setStep(i)} style={{
                padding: '26px 0',
                borderTop: '1px solid var(--rule)',
                cursor: 'pointer',
                opacity: step === i ? 1 : 0.5,
                transition: 'opacity 300ms',
              }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                  <div className="display" style={{ fontSize: '2.2rem', color: step === i ? 'var(--brass-500)' : 'var(--ink-400)' }}>0{i+1}</div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6, color: step === i ? 'var(--brass-500)' : 'var(--ink-500)' }}>{s.k}</div>
                    <div className="serif-italic" style={{ fontSize: '1.35rem' }}>{s.s}</div>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }}></div>
          </div>

          {/* Form card */}
          <div className="card" style={{ padding: '48px 56px' }}>
            {step === 0 && (
              <div className="fu">
                <div className="eyebrow" style={{ marginBottom: 40 }}>STEP 01 · YOU</div>
                <div style={{ display: 'grid', gap: 36 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Your name</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Alex Reyes" />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Firm · Development co.</label>
                    <input value={form.studio} onChange={e => update('studio', e.target.value)} placeholder="Northfield Capital" />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Email</label>
                    <input value={form.email} onChange={e => update('email', e.target.value)} placeholder="alex@northfield.co" />
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="fu">
                <div className="eyebrow" style={{ marginBottom: 40 }}>STEP 02 · PROGRAM</div>
                <div style={{ display: 'grid', gap: 40 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Program</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {['Mixed-Use', 'Commercial', 'Hospitality', 'Residential Tower', 'Interiors', 'Master Plan'].map(p => (
                        <button key={p} className={`chip ${form.program === p ? 'active' : ''}`} onClick={() => update('program', p)}>{p}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Scale · gross sq. ft.</label>
                    <input type="range" min="5000" max="2000000" step="5000" value={form.scale} onChange={e => update('scale', parseInt(e.target.value))} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                      <div className="mono" style={{ color: 'var(--ink-400)' }}>5 K</div>
                      <div className="stat-num brass" style={{ fontSize: '1.8rem' }}>{form.scale.toLocaleString()} sf</div>
                      <div className="mono" style={{ color: 'var(--ink-400)' }}>2 M</div>
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Timeline</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {['72 hours', '1 week', '4 weeks', '3+ months'].map(t => (
                        <button key={t} className={`chip ${form.timeline === t ? 'active' : ''}`} onClick={() => update('timeline', t)}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="fu">
                <div className="eyebrow" style={{ marginBottom: 40 }}>STEP 03 · BRIEF</div>
                <div style={{ display: 'grid', gap: 32 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>The story you want rendered</label>
                    <textarea value={form.brief} onChange={e => update('brief', e.target.value)} rows={6} placeholder="A tower at golden hour. A couple at the fountain on the plaza. The kind of light that closes a raise…" style={{ resize: 'vertical' }} />
                  </div>
                  <div style={{ padding: 24, background: 'var(--bg-paper)', border: '1px solid var(--rule)' }}>
                    <div className="eyebrow brass" style={{ marginBottom: 14 }}>SUMMARY</div>
                    <div className="mono" style={{ color: 'var(--ink-700)', lineHeight: 1.8, fontSize: '0.82rem' }}>
                      {form.name || '(name)'} · {form.studio || '(studio)'}<br/>
                      {form.program} · {form.scale.toLocaleString()} sf · {form.timeline}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn btn-ghost" onClick={() => setStep(Math.max(0, step - 1))} style={{ opacity: step === 0 ? 0.3 : 1 }}>← Back</button>
              {step < 2 ? (
                <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continue →</button>
              ) : (
                <button className="btn btn-primary" onClick={() => alert('Received. A creative director will respond within 24 hours.')}>Send Commission →</button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 40px 100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { k: 'STUDIO · MIAMI',   v: '2401 Biscayne Blvd\nMiami, FL 33137',       c: 'HEADQUARTERS' },
              { k: 'STUDIO · NEW YORK', v: '155 Spring Street\nNew York, NY 10012',    c: 'ATELIER' },
              { k: 'STUDIO · LONDON',  v: '42 Berkeley Square\nMayfair, W1J 5AW',      c: 'EMEA' },
            ].map(c => (
              <div key={c.k} className="card" style={{ padding: 32 }}>
                <div className="eyebrow brass" style={{ marginBottom: 18 }}>{c.k}</div>
                <div className="serif-italic" style={{ fontSize: '1.25rem', whiteSpace: 'pre-line', marginBottom: 16, lineHeight: 1.4 }}>{c.v}</div>
                <div className="mono">{c.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { AnthologyPage, TechnicalPage, StudioPage });
