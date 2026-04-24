'use client'

import { useState } from 'react'

const STEPS = [
  { k: 'PROJECT', s: 'Who you are' },
  { k: 'PROGRAM', s: 'What you are building' },
  { k: 'BRIEF',   s: 'How you want it to feel' },
]

const PROGRAMS = ['Mixed-Use', 'Commercial', 'Hospitality', 'Residential Tower', 'Interiors', 'Master Plan']
const TIMELINES = ['72 hours', '1 week', '4 weeks', '3+ months']

export default function StudioPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '', studio: '', email: '',
    program: 'Mixed-Use', scale: 250000, timeline: '4 weeks', brief: '',
  })

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">◆ STUDIO · COMMISSION</div>
            <div className="mono">STEP {step + 1} / 3</div>
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
            {STEPS.map((s, i) => (
              <div key={s.k} onClick={() => setStep(i)} style={{
                padding: '26px 0',
                borderTop: '1px solid var(--rule)',
                cursor: 'pointer',
                opacity: step === i ? 1 : 0.5,
                transition: 'opacity 300ms',
              }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                  <div className="display" style={{ fontSize: '2.2rem', color: step === i ? 'var(--brass-500)' : 'var(--ink-400)' }}>
                    0{i + 1}
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 6, color: step === i ? 'var(--brass-500)' : 'var(--ink-500)' }}>{s.k}</div>
                    <div className="serif-italic" style={{ fontSize: '1.35rem' }}>{s.s}</div>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
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
                      {PROGRAMS.map(p => (
                        <button key={p} className={`chip${form.program === p ? ' active' : ''}`} onClick={() => update('program', p)}>{p}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Scale · gross sq. ft.</label>
                    <input type="range" min={5000} max={2000000} step={5000} value={form.scale} onChange={e => update('scale', parseInt(e.target.value))} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                      <div className="mono" style={{ color: 'var(--ink-400)' }}>5 K</div>
                      <div className="stat-num brass" style={{ fontSize: '1.8rem' }}>{form.scale.toLocaleString()} sf</div>
                      <div className="mono" style={{ color: 'var(--ink-400)' }}>2 M</div>
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Timeline</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {TIMELINES.map(t => (
                        <button key={t} className={`chip${form.timeline === t ? ' active' : ''}`} onClick={() => update('timeline', t)}>{t}</button>
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
                    <textarea
                      value={form.brief}
                      onChange={e => update('brief', e.target.value)}
                      rows={6}
                      placeholder="A tower at golden hour. A couple at the fountain on the plaza. The kind of light that closes a raise…"
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <div style={{ padding: 24, background: 'var(--bg-paper)', border: '1px solid var(--rule)' }}>
                    <div className="eyebrow brass" style={{ marginBottom: 14 }}>SUMMARY</div>
                    <div className="mono" style={{ color: 'var(--ink-700)', lineHeight: 1.8, fontSize: '0.82rem' }}>
                      {form.name || '(name)'} · {form.studio || '(studio)'}<br />
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
                <button className="btn btn-primary" onClick={() => alert('Received. A creative director will respond within 24 hours.')}>
                  Send Commission →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 40px 100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { k: 'STUDIO · MIAMI',    v: '2401 Biscayne Blvd\nMiami, FL 33137',    c: 'HEADQUARTERS' },
              { k: 'STUDIO · NEW YORK', v: '155 Spring Street\nNew York, NY 10012',   c: 'ATELIER' },
              { k: 'STUDIO · LONDON',   v: '42 Berkeley Square\nMayfair, W1J 5AW',    c: 'EMEA' },
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
  )
}
