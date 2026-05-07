'use client'

import { useState } from 'react'
import MediaFrame from '@/components/MediaFrame'
import { media } from '@/lib/commercialContent'

const steps = [
  { key: 'Asset', label: 'What property story needs to be shown?' },
  { key: 'Audience', label: 'Who needs to act?' },
  { key: 'Materials', label: 'What can we build from?' },
]

const programs = ['Mixed-Use', 'Class-A Office', 'Retail District', 'Hospitality', 'Multifamily', 'Adaptive Reuse']
const audiences = ['Capital Partners', 'Anchor Tenants', 'Premium Office Users', 'Municipal Review', 'Brokerage Pipeline', 'Public Launch']
const timelines = ['48 hours', '1 week', '2-4 weeks', 'Launch calendar TBD']

export default function StudioPage() {
  const [step, setStep] = useState(0)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const submitBrief = async () => {
    setSubmitStatus(null)

    if (!form.name || !form.email) {
      setSubmitStatus({ type: 'error', message: 'Please add your name and email before submitting.' })
      setStep(0)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'The inquiry could not be sent.')
      }

      setSubmitStatus({ type: 'success', message: 'Brief sent. We will follow up at the email you provided.' })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message || 'Something went wrong. Please email chris@sceneset.ai.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Property Render Brief</div>
            <div className="mono">STEP {step + 1} / 3</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1180, marginBottom: 24 }}>
            Start with the use case,<br />then build the <span className="serif-italic hl-brass">visual system.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            Tell us what kind of property you are launching, who needs to understand it, and what source material exists. We will use cutting-edge AI, rendering, and studio direction to translate it into films, stills, and presentation assets for the channels that matter.
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
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>01 / Asset + Launch Objective</div>
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
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Asset / address / launch goal</label>
                    <input value={form.address} onChange={event => update('address', event.target.value)} placeholder="Pratt District, 000 Main Street" />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="fu">
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>02 / Decision Audience</div>
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
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Primary conversion audience</label>
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
                <div className="eyebrow brass" style={{ marginBottom: 36 }}>03 / Source + Desired AI Output</div>
                <div style={{ display: 'grid', gap: 28 }}>
                  <div>
                    <label className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>What do you have, and what needs to happen?</label>
                    <textarea
                      value={form.materials}
                      onChange={event => update('materials', event.target.value)}
                      rows={7}
                      placeholder="CAD, Revit, drone footage, stills, floorplans, old renders, tenant mix, current deck, target buyer or tenant, launch channel, deadline, brand references, examples of the production quality you want..."
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
                <button className="btn btn-primary" onClick={submitBrief} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Render Brief'}
                </button>
              )}
            </div>
            {submitStatus && (
              <div
                className="mono"
                style={{
                  marginTop: 18,
                  color: submitStatus.type === 'success' ? 'var(--green-500)' : '#9B3A2E',
                  lineHeight: 1.6,
                }}
              >
                {submitStatus.message}
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <MediaFrame src={media.prattVideo} poster={media.prattPoster} video aspect="4 / 5" badge="Mixed-Use" />
            <MediaFrame src={media.apogeeVideo} poster={media.apogeePoster} video aspect="4 / 5" badge="Capital" />
          </div>
        </div>
      </section>
    </div>
  )
}
