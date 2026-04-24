'use client'

import { useState } from 'react'
import MediaFrame from '@/components/MediaFrame'
import { media } from '@/lib/commercialContent'

const steps = [
  { key: 'Asset', label: 'What are we selling?' },
  { key: 'Audience', label: 'Who needs to believe?' },
  { key: 'Materials', label: 'What source exists?' },
]

const programs = ['Mixed-Use', 'Class-A Office', 'Retail District', 'Hospitality', 'Multifamily', 'Adaptive Reuse']
const audiences = ['Capital Partners', 'Anchor Tenants', 'Premium Office Users', 'Municipal Review', 'Brokerage Pipeline', 'Public Launch']
const timelines = ['48 hours', '1 week', '2-4 weeks', 'Launch calendar TBD']

export default function StudioPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    address: '',
    program: 'Mixed-Use',
    audience: 'Capital Partners',
    timeline: '2-4 weeks',
    materials: '',
  })

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Brief</div>
            <div className="mono">STEP {step + 1} / 3</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1180, marginBottom: 24 }}>
            Start with the deal,<br />then build the <span className="serif-italic hl-brass">visual system.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            A commercial brief should tell us the asset, the audience, the source material, and the moment this package needs to win.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 40px 90px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.25fr 0.75fr', gap: 42, alignItems: 'start' }}>
          <div>
            {steps.map((item, i) => (
              <div key={item.key} onClick={() => setStep(i)} style={{
                padding: '26px 0',
                borderTop: '1px solid var(--rule)',
                cursor: 'pointer',
                opacity: step === i ? 1 : 0.48,
                transition: 'opacity 240ms',
              }}>
                <div className="display" style={{ fontSize: '2.15rem', color: step === i ? 'var(--brass-500)' : 'var(--ink-400)' }}>
                  0{i + 1}
                </div>
                <div className="eyebrow" style={{ margin: '8px 0 6px', color: step === i ? 'var(--brass-500)' : 'var(--ink-500)' }}>{item.key}</div>
                <div className="serif-italic" style={{ fontSize: '1.25rem' }}>{item.label}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>

          <div className="card" style={{ padding: '44px 50px' }}>
            {step === 0 && (
              <div className="fu">
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>01 / Asset</div>
                <div style={{ display: 'grid', gap: 30 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Your name</label>
                    <input value={form.name} onChange={event => update('name', event.target.value)} placeholder="Alex Reyes" />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Company / advisory team</label>
                    <input value={form.company} onChange={event => update('company', event.target.value)} placeholder="Northfield Capital" />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Email</label>
                    <input value={form.email} onChange={event => update('email', event.target.value)} placeholder="alex@company.com" />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Asset / address</label>
                    <input value={form.address} onChange={event => update('address', event.target.value)} placeholder="Annapolis Plaza, 000 Main Street" />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="fu">
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>02 / Audience</div>
                <div style={{ display: 'grid', gap: 34 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Program</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {programs.map(item => (
                        <button key={item} className={`chip${form.program === item ? ' active' : ''}`} onClick={() => update('program', item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Primary audience</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {audiences.map(item => (
                        <button key={item} className={`chip${form.audience === item ? ' active' : ''}`} onClick={() => update('audience', item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Timeline</label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {timelines.map(item => (
                        <button key={item} className={`chip${form.timeline === item ? ' active' : ''}`} onClick={() => update('timeline', item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="fu">
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>03 / Source Materials</div>
                <div style={{ display: 'grid', gap: 28 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>What do you have?</label>
                    <textarea
                      value={form.materials}
                      onChange={event => update('materials', event.target.value)}
                      rows={7}
                      placeholder="CAD, Revit, drone footage, stills, floorplans, old renders, tenant mix, deck, deadline, brand references..."
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <div style={{ padding: 24, background: 'var(--bg-paper)', border: '1px solid var(--rule)' }}>
                    <div className="eyebrow brass" style={{ marginBottom: 14 }}>Brief Snapshot</div>
                    <div className="mono" style={{ color: 'var(--ink-700)', lineHeight: 1.85, fontSize: '0.82rem' }}>
                      {form.name || '(name)'} · {form.company || '(company)'}<br />
                      {form.address || '(asset / address)'}<br />
                      {form.program} · {form.audience} · {form.timeline}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginTop: 46, paddingTop: 28, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', gap: 16 }}>
              <button className="btn btn-ghost" onClick={() => setStep(Math.max(0, step - 1))} style={{ opacity: step === 0 ? 0.35 : 1 }}>Back</button>
              {step < 2 ? (
                <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continue</button>
              ) : (
                <button className="btn btn-primary" onClick={() => alert('Commercial brief captured. A SceneSet director will follow up with scope and next steps.')}>
                  Submit Commercial Brief
                </button>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <MediaFrame src={media.annapolisCourt} aspect="4 / 5" badge="Retail" />
            <MediaFrame src={media.apogeePoster} aspect="4 / 5" badge="Capital" />
          </div>
        </div>
      </section>
    </div>
  )
}
