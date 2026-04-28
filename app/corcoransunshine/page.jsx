'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { media, portfolio } from '@/lib/commercialContent'

const SLIDES = [
  { id: 'cover',     section: 'Cover',                tone: 'dark'  },
  { id: 'context',   section: 'The Context',          tone: 'paper' },
  { id: 'offering',  section: 'What We Build',        tone: 'cream' },
  { id: 'transform', section: 'Inputs to Outputs',    tone: 'paper' },
  { id: 'usecases',  section: 'Where It Shows Up',    tone: 'cream' },
  { id: 'pipeline',  section: 'The Pipeline',         tone: 'paper' },
  { id: 'work',      section: 'Selected Work',        tone: 'dark'  },
  { id: 'tiers',     section: 'Engagement Models',    tone: 'cream' },
  { id: 'outcomes',  section: 'The Outcome',          tone: 'dark'  },
  { id: 'next',      section: 'Next Steps',           tone: 'paper' },
]

const PILLARS = [
  {
    num: '01',
    title: 'Cinematic Sales Films',
    body: 'Hero films that translate plans, design intent, and brand direction into a sequence buyers respond to. Built for sales galleries, broker outreach, and digital launch campaigns.',
    deliverables: ['60–90s hero film', '4K master + cutdowns', 'Vertical edits for paid social'],
  },
  {
    num: '02',
    title: 'Photoreal Stills & Suites',
    body: 'Editorial still campaigns that act like first-run residence photography years before the building is finished. Calibrated to the price point you are defending.',
    deliverables: ['Exterior + lifestyle stills', 'Interior residence suites', 'Amenity & lobby story'],
  },
  {
    num: '03',
    title: 'Sales-Ready Visual Strategy',
    body: 'A complete asset system that supports launch, the model residence experience, the offering plan moment, and the in-contract phase, all under one creative direction.',
    deliverables: ['Web + microsite cuts', 'Investor & broker decks', 'In-gallery loops & posters'],
  },
]

const USE_CASES = [
  {
    n: '01',
    title: 'Sales Gallery & Model Residence',
    body: 'In-gallery films and stills that anchor the buyer experience: arrival, terrace views, kitchen detail, primary suite, amenity floors. Calibrated to ticket size.',
  },
  {
    n: '02',
    title: 'Broker Outreach & Co-Broke',
    body: 'A polished, share-ready film and still package brokers can send to qualified buyers, with cutdowns sized for email, mobile, and social.',
  },
  {
    n: '03',
    title: 'Launch Campaign & Microsite',
    body: 'Hero film, stills, and supporting motion built to drive registrations through the launch window, optimized for paid media and earned press placement.',
  },
  {
    n: '04',
    title: 'Capital, JV & Lender Decks',
    body: 'Visual asset packages that support sponsor narratives in capital meetings, refinancing, and recapitalizations—where the asset has to feel inevitable.',
  },
  {
    n: '05',
    title: 'In-Contract Reassurance',
    body: 'Periodic visual updates that maintain confidence through the construction window, reducing fall-out risk and protecting the velocity built at launch.',
  },
  {
    n: '06',
    title: 'Repositioning & Conversions',
    body: 'When a tower needs a refreshed argument: revised finish levels, new amenity programs, updated unit mixes, or a price-defense narrative for the next phase.',
  },
]

const PIPELINE_STEPS = [
  {
    n: '01',
    title: 'Source Intelligence',
    body: 'We absorb CAD, Revit, Rhino, plans, drone clips, brand guidelines, comps, and the offering memo. The asset becomes legible to our team end-to-end.',
    time: 'Week 1',
  },
  {
    n: '02',
    title: 'Sales Strategy',
    body: 'We lock the audience, the conversion moment, and the visual proof needed. Camera moves and scene hierarchy are designed against velocity, not vanity.',
    time: 'Week 1–2',
  },
  {
    n: '03',
    title: 'Render Production',
    body: 'Architecture, materiality, landscape, lighting, signage, and people built scene-by-scene with senior creative direction at every checkpoint.',
    time: 'Week 2–4',
  },
  {
    n: '04',
    title: 'Directed Refinement',
    body: 'Studio review with your team. We refine pacing, sequence, and detail where it matters: model residence, amenity floors, and the buyer arrival sequence.',
    time: 'Week 4–5',
  },
  {
    n: '05',
    title: 'Market Delivery',
    body: 'A complete toolkit: stills, hero film, cutdowns, vertical edits, posters, loops, and presentation-ready exports for sales gallery, broker, web, and paid media.',
    time: 'Week 5–6',
  },
]

const TIERS = [
  {
    num: 'TIER 01',
    title: 'Single Asset Engagement',
    body: 'Built for a focused launch moment, repositioning, or one priority residence. Tight, premium, designed to ship inside a single phase.',
    price: '$48–$95K',
    priceLabel: 'Per asset · 4–6 weeks',
    items: [
      'One 60–90s cinematic hero film',
      '8–12 photoreal stills (exterior + interior)',
      'Web hero + 3 social cutdowns',
      'Two rounds senior creative review',
    ],
  },
  {
    num: 'TIER 02',
    title: 'Launch Package',
    body: 'The complete launch system. Designed for a tower or development team that needs everything sales, brokers, capital, and press will touch in the first 90 days.',
    price: '$140–$240K',
    priceLabel: 'Per launch · 8–12 weeks',
    items: [
      'Hero film + amenity film + 2 residence films',
      '24–32 stills across exterior, lifestyle, residence',
      'Microsite, deck, gallery, and broker cuts',
      'Senior creative direction throughout launch',
      'In-contract refresh assets included',
    ],
    feature: true,
    tag: 'Recommended',
  },
  {
    num: 'TIER 03',
    title: 'Marketing System Retainer',
    body: 'For developers and marketing groups running multiple assets in market simultaneously. A continuous creative and production system across the portfolio.',
    price: 'From $35K/mo',
    priceLabel: 'Quarterly engagement',
    items: [
      'Dedicated creative + production team',
      'Up to 3 active towers in pipeline',
      'Monthly visual strategy review',
      'Priority 2-business-day brief turnaround',
      'Portfolio-wide visual consistency',
    ],
  },
]

const OUTCOMES = [
  {
    num: '$500M+',
    title: 'Premium value supported',
    body: 'In active sales and listing campaigns where SceneSet visuals are anchoring the buyer experience.',
  },
  {
    num: '2 days',
    title: 'Priority concept window',
    body: 'For time-sensitive launch pushes, repositioning briefs, and last-mile campaign needs.',
  },
  {
    num: '4K+',
    title: 'Asset library per launch',
    body: 'Stills, films, cutdowns, vertical edits, and posters delivered as a single, integrated system.',
  },
  {
    num: <>7<em>×</em></>,
    title: 'Sources fused into one',
    body: 'CAD, plans, drone, brand guidance, comps, deal context, and design references unified.',
  },
]

const NEXT_STEPS = [
  {
    n: '01',
    title: 'Brief & Source Audit',
    body: 'Share a target tower, audience, and the three highest-stakes moments. We respond inside two business days with a scoped recommendation.',
  },
  {
    n: '02',
    title: 'Pilot Asset',
    body: 'A single, high-leverage asset (hero film or residence suite) produced inside four weeks so your team can pressure-test the system live.',
  },
  {
    n: '03',
    title: 'Portfolio Onboarding',
    body: 'On signal, we onboard the portfolio under the retainer model and align the studio against the next 12 months of launches.',
  },
]

const WORK = [
  { ...portfolio[1], featured: true,  src: media.apogeePoster,    label: 'Class-A Tower'      },
  { ...portfolio[3], featured: false, src: media.gunHillVideo,    poster: media.gunHillInteriorPoster, video: true, label: 'Lifestyle Leasing' },
  { ...portfolio[7], featured: false, src: media.whiteDeerPoster, label: 'Luxury Residence'  },
  { ...portfolio[5], featured: false, src: media.mahoganyOffice,  label: 'Executive Interior' },
  { ...portfolio[0], featured: false, src: media.annapolisCourt,  label: 'Mixed-Use Plaza'   },
]

function Cover() {
  return (
    <div className="deck-cover">
      <div className="hyper-grid" />
      <div className="deck-cover-video" aria-hidden>
        <video src={media.heroVideo} poster={media.heroPoster} autoPlay muted loop playsInline />
      </div>

      <div className="deck-cover-top">
        <div className="ss">Sceneset<span>.</span>AI</div>
        <div className="cs-mark serif-italic">A Capabilities Presentation</div>
        <div className="doc-id">DOC · CS-2026-Q2</div>
      </div>

      <div className="deck-cover-mid">
        <div className="kicker deck-fade" style={{ '--d': 100 }}>The unbuilt, made undeniable.</div>
        <h1 className="deck-fade" style={{ '--d': 220 }}>
          Cinematic visuals built<br />
          for the way <em>luxury sells.</em>
        </h1>
        <div className="for-line deck-fade" style={{ '--d': 380 }}>
          Prepared for <strong>Corcoran Sunshine Marketing Group</strong>
        </div>
      </div>

      <div className="deck-cover-foot">
        <div>RENDERINGS · FILMS · ROI STRATEGY</div>
        <div className="badge">PRESS → TO BEGIN</div>
        <div>VOL. 01 · APRIL 2026</div>
      </div>
    </div>
  )
}

function ContentSlide({ section, num, total, children, header, lede, dark = false }) {
  return (
    <div className="deck-slide-inner">
      <div className="deck-meta">
        <div className="deck-cobrand">
          <span>Sceneset.AI</span>
          <span className="pipe" />
          <span className="cs">for Corcoran Sunshine</span>
        </div>
        <div className="deck-num">
          <strong>{String(num).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')} &nbsp;·&nbsp; {section}
        </div>
      </div>

      {(header || lede) && (
        <div style={{ marginBottom: 'clamp(34px, 4vw, 56px)' }}>
          {header && <h2 className="deck-headline deck-fade" style={{ '--d': 80 }}>{header}</h2>}
          {lede && <p className="deck-lede deck-fade" style={{ '--d': 220, marginTop: 22 }}>{lede}</p>}
        </div>
      )}

      {children}
    </div>
  )
}

function ContextSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>The luxury condo isn't sold by <span className="accent">photography</span><br />— it's sold by <span className="accent">imagination.</span></>}
      lede="Buyers commit to towers that don't yet exist. Brokers pitch terraces, sightlines, and primary suites that are still drawings on a page. The marketing has to do the work of the building, twelve months before the building can. SceneSet exists to make that easier — and more inevitable."
    >
      <div className="deck-grid-2" style={{ marginTop: 12 }}>
        <div className="deck-fade" style={{ '--d': 360 }}>
          <div className="deck-stack">
            <div style={{ paddingLeft: 22, borderLeft: '2px solid var(--brass-500)' }}>
              <div className="eyebrow brass" style={{ marginBottom: 10 }}>The Brief Today</div>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink-700)', lineHeight: 1.55, maxWidth: 560 }}>
                Selling unbuilt luxury at premium price-per-foot, against assets that are already photographed and already standing.
              </p>
            </div>
            <div style={{ paddingLeft: 22, borderLeft: '2px solid var(--green-500)' }}>
              <div className="eyebrow green" style={{ marginBottom: 10, color: 'var(--green-500)' }}>What We Add</div>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink-700)', lineHeight: 1.55, maxWidth: 560 }}>
                Visual proof that closes the gap between the offering plan and the finished residence — built to support velocity, pricing, and the broker conversation.
              </p>
            </div>
          </div>
        </div>
        <div className="deck-fade" style={{ '--d': 480 }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', border: '1px solid var(--rule)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={media.apogeePoster} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span className="tick tl" /><span className="tick tr" /><span className="tick bl" /><span className="tick br" />
            <div style={{ position: 'absolute', bottom: 16, left: 16, padding: '8px 12px', background: 'rgba(20, 32, 26, 0.78)', color: 'var(--bg-paper)', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Class-A Tower · Concept Phase
            </div>
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

function OfferingSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>Three production tracks,<br /><span className="accent">one creative direction.</span></>}
      lede="Every Corcoran Sunshine launch will use these in different mixes. The system is the same: senior creative direction, photoreal output, and visuals built around the way buyers actually decide."
    >
      <div className="deck-grid-3">
        {PILLARS.map((p, i) => (
          <div key={p.num} className="pillar deck-fade" style={{ '--d': 320 + i * 110 }}>
            <div className="num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <div className="deliverables">
              {p.deliverables.map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

function TransformSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>From floorplate to <span className="accent">finished sale,</span><br />in one studio.</>}
      lede="We work backwards from the buyer experience. Whatever you have today — early massing, plans, brand guidance, comps — becomes a calibrated visual system designed against your sales objective."
    >
      <div className="io-stage">
        <div className="io-side deck-fade" style={{ '--d': 320 }}>
          <h4>Inputs You Provide</h4>
          <h3>Source Material</h3>
          <div className="io-input-list">
            <span>CAD · Revit · Rhino files</span>
            <span>Floorplans & elevations</span>
            <span>Drone clips & site footage</span>
            <span>Brand guidelines & comps</span>
            <span>Offering memo & target audience</span>
            <span>Design narrative & FF&E direction</span>
          </div>
        </div>

        <div className="io-arrow deck-fade" style={{ '--d': 480 }}>
          <span>SceneSet</span>
          <div className="line" />
          <div className="pulse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
          <div className="line" />
          <span>4–6 Weeks</span>
        </div>

        <div className="io-side deck-fade" style={{ '--d': 600 }}>
          <h4>Outputs You Receive</h4>
          <h3>Sales-Ready System</h3>
          <div className="io-output-frame">
            <video src={media.gunHillVideo} poster={media.gunHillInteriorPoster} autoPlay muted loop playsInline />
            <div className="scan" />
            <div className="corner tl" />
            <div className="corner br" />
            <div className="label">Hero Film · 4K Master</div>
          </div>
          <div className="io-input-list" style={{ marginTop: 14 }}>
            <span>Hero film + cutdowns</span>
            <span>Photoreal stills (4K+)</span>
            <span>Microsite, deck, gallery loops</span>
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

function UseCasesSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>Where these visuals do the <span className="accent">heaviest lifting.</span></>}
      lede="Every Corcoran Sunshine engagement spans a buyer journey that begins in paid media and ends in a contract signing. Our assets are calibrated to perform at every step."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, flex: 1 }}>
        {USE_CASES.map((u, i) => (
          <div key={u.n} className="usecase deck-fade" style={{ '--d': 280 + i * 90 }}>
            <div className="uc-num">{u.n}</div>
            <div>
              <h4>{u.title}</h4>
              <p>{u.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

function PipelineSlide(props) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setActive(a => (a + 1) % PIPELINE_STEPS.length), 3200)
    return () => clearInterval(i)
  }, [])

  return (
    <ContentSlide
      {...props}
      header={<>A <span className="accent">six-week</span> production cadence.</>}
      lede="Predictable, sequenced, and built to align with your launch calendar. Hover or click any step to dwell on it — or let the deck advance on its own."
    >
      <div className="pipeline-row">
        {PIPELINE_STEPS.map((s, i) => (
          <div
            key={s.n}
            className={`pipe-step deck-fade${i === active ? ' active' : ''}`}
            style={{ '--d': 280 + i * 80 }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <div className="pipe-num">{s.n}</div>
            <h5>{s.title}</h5>
            <p>{s.body}</p>
            <div className="pipe-time">{s.time}</div>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

function WorkSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>Selected work, calibrated to <span className="accent">premium tickets.</span></>}
      lede="A glance at projects in the studio's portfolio. Each was delivered as a complete sales and capital toolkit — not a one-off rendering job."
    >
      <div className="work-mosaic">
        {WORK.map((w, i) => (
          <div key={w.name} className={`work-tile deck-fade${w.featured ? ' feature' : ''}`} style={{ '--d': 280 + i * 90 }}>
            {w.video ? (
              <video src={w.src} poster={w.poster} autoPlay muted loop playsInline />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={w.src} alt={w.name} loading="lazy" />
            )}
            <span className="tag">{w.label}</span>
            <div className="meta">
              <div className="name">{w.name}</div>
              <div className="sub">{w.tag} · {w.location}</div>
            </div>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

function TiersSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>Three ways to <span className="accent">engage the studio.</span></>}
      lede="Pricing assumes Corcoran Sunshine's typical asset profile: luxury condominium, full-floor or duplex residences, ticket sizes from $5M to $40M+. Every engagement starts with a no-fee scoping conversation."
    >
      <div className="deck-grid-3">
        {TIERS.map((t, i) => (
          <div key={t.num} className={`tier deck-fade${t.feature ? ' is-feature' : ''}`} style={{ '--d': 280 + i * 110 }}>
            {t.tag && <span className="tier-tag">{t.tag}</span>}
            <div className="tier-num">{t.num}</div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <div className="price">
              {t.price}
              <em>{t.priceLabel}</em>
            </div>
            <ul>
              {t.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </ContentSlide>
  )
}

function OutcomesSlide(props) {
  return (
    <ContentSlide
      {...props}
      header={<>What <span className="accent">success looks like.</span></>}
      lede="Outcomes from active SceneSet engagements supporting premium real estate sales and listing campaigns."
      dark
    >
      <div className="kpi-grid">
        {OUTCOMES.map((k, i) => (
          <div key={k.title} className="kpi deck-fade" style={{ '--d': 320 + i * 100 }}>
            <div className="kpi-num">{k.num}</div>
            <h5>{k.title}</h5>
            <p>{k.body}</p>
          </div>
        ))}
      </div>

      <div className="deck-fade" style={{ '--d': 760, marginTop: 36, padding: '26px 30px', background: 'rgba(196, 162, 103, 0.1)', border: '1px solid rgba(196, 162, 103, 0.3)' }}>
        <div className="eyebrow brass" style={{ marginBottom: 12 }}>What developers tell us</div>
        <p className="pullquote" style={{ color: 'rgba(251, 247, 237, 0.9)', fontSize: '1.4rem', maxWidth: 1100 }}>
          "We sold the building before the model residence opened. The film was the model residence for the first ninety days."
        </p>
        <div className="mono" style={{ marginTop: 12, color: 'rgba(251, 247, 237, 0.6)' }}>
          MANAGING PARTNER · 280-UNIT LUXURY TOWER · 2025 LAUNCH
        </div>
      </div>
    </ContentSlide>
  )
}

function NextStepsSlide(props) {
  return (
    <ContentSlide {...props}>
      <div className="deck-cta">
        <div className="deck-cta-inner">
          <div className="deck-cta-eyebrow deck-fade" style={{ '--d': 80 }}>Begin with a single tower</div>
          <h2 className="deck-cta-title deck-fade" style={{ '--d': 200 }}>
            Let's build the visual<br />
            argument for the <em>next launch.</em>
          </h2>
          <p className="deck-lede deck-fade" style={{ '--d': 320, margin: '0 auto', maxWidth: 720 }}>
            The fastest way to evaluate the studio is to put a real launch through it. Send the next priority tower, the audience, and the moment that matters most — we'll respond with a scope inside two business days.
          </p>

          <div className="deck-cta-list">
            {NEXT_STEPS.map((s, i) => (
              <div key={s.n} className="step deck-fade" style={{ '--d': 460 + i * 100 }}>
                <div className="n">STEP {s.n}</div>
                <h5>{s.title}</h5>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="deck-fade" style={{ '--d': 800, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 14 }}>
            <a href="mailto:studio@sceneset.ai?subject=Corcoran%20Sunshine%20%C2%B7%20Capabilities%20Brief" className="btn btn-primary" style={{ padding: '18px 30px', fontSize: '0.86rem' }}>
              Send the Brief
            </a>
            <a href="/studio" className="btn btn-ghost" style={{ padding: '18px 30px', fontSize: '0.86rem' }}>
              Schedule a Studio Call
            </a>
          </div>

          <div className="deck-fade mono" style={{ '--d': 920, marginTop: 38, color: 'var(--ink-500)' }}>
            studio@sceneset.ai &nbsp;·&nbsp; +1 (212) 555 — 0118 &nbsp;·&nbsp; PRIORITY TURNAROUND: 2 BUSINESS DAYS
          </div>
        </div>
      </div>
    </ContentSlide>
  )
}

export default function CorcoranPresentation() {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(-1)
  const total = SLIDES.length

  const goTo = useCallback((next) => {
    setIndex(curr => {
      if (next === curr || next < 0 || next >= total) return curr
      setLeaving(curr)
      window.setTimeout(() => setLeaving(-1), 720)
      return next
    })
  }, [total])

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
      else if (e.key === 'Home') { goTo(0) }
      else if (e.key === 'End')  { goTo(total - 1) }
      else if (/^[1-9]$/.test(e.key)) { goTo(Math.min(parseInt(e.key, 10) - 1, total - 1)) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, total])

  const currentTone = SLIDES[index].tone
  const onDark = currentTone === 'dark'

  useEffect(() => {
    if (onDark) document.body.classList.add('deck-on-dark')
    else document.body.classList.remove('deck-on-dark')
  }, [onDark])

  const slidesRender = useMemo(() => SLIDES.map((s, i) => {
    const slideProps = {
      section: s.section,
      num: i + 1,
      total,
    }
    let body = null
    if (s.id === 'cover') body = <Cover />
    else if (s.id === 'context')   body = <ContextSlide   {...slideProps} />
    else if (s.id === 'offering')  body = <OfferingSlide  {...slideProps} />
    else if (s.id === 'transform') body = <TransformSlide {...slideProps} />
    else if (s.id === 'usecases')  body = <UseCasesSlide  {...slideProps} />
    else if (s.id === 'pipeline')  body = <PipelineSlide  {...slideProps} />
    else if (s.id === 'work')      body = <WorkSlide      {...slideProps} />
    else if (s.id === 'tiers')     body = <TiersSlide     {...slideProps} />
    else if (s.id === 'outcomes')  body = <OutcomesSlide  {...slideProps} />
    else if (s.id === 'next')      body = <NextStepsSlide {...slideProps} />

    const cls = [
      'deck-slide',
      i === index ? 'is-active' : '',
      i === leaving ? 'is-leaving' : '',
      s.tone === 'dark'  ? 'is-dark'  : '',
      s.tone === 'paper' ? 'is-paper' : '',
      s.tone === 'cream' ? '' : '',
    ].filter(Boolean).join(' ')

    return (
      <div key={s.id} className={cls} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${total}: ${s.section}`}>
        {body}
      </div>
    )
  }), [index, leaving, total])

  return (
    <div className="deck">
      <div className="deck-stage">
        {slidesRender}
      </div>

      <div className={`deck-progress${onDark ? ' on-dark' : ''}`} role="tablist" aria-label="Slide progress">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`pip${i === index ? ' is-active' : ''}${i < index ? ' is-past' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${s.section}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>

      <div className={`deck-controls${onDark ? ' on-dark' : ''}`}>
        <button className="deck-btn" onClick={prev} disabled={index === 0} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="deck-counter">
          <strong>{String(index + 1).padStart(2, '0')}</strong> &nbsp;/&nbsp; {String(total).padStart(2, '0')} &nbsp;·&nbsp; {SLIDES[index].section}
        </div>

        <button className="deck-btn" onClick={next} disabled={index === total - 1} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M5 12h14M13 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="deck-hint">
        <span className="key">←</span>
        <span className="key">→</span>
        <span>navigate</span>
      </div>
    </div>
  )
}
