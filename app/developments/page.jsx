import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media, services, useCases } from '@/lib/commercialContent'

export const metadata = {
  title: 'Commercial Development Visualization — Sceneset.AI',
}

const packages = [
  ['Launch Film', 'A polished visual thesis for the asset: what it is, who it is for, and why buyers, tenants, and brokers should act.'],
  ['Leasing Stills', 'High-fidelity scenes that support tenant outreach, broker follow-up, rate strategy, and pre-leasing before delivery.'],
  ['Sales Deck Assets', 'Strategic visual proof for owner presentations, buyer conversations, leasing decks, partner updates, and capital memoranda.'],
  ['Entitlement Support', 'Pedestrian-scale scenes that reduce ambiguity around activation, access, scale, light, and neighborhood benefit.'],
]

export default function DevelopmentsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Development Visualization</div>
            <div className="mono">RENDER · POSITION · PROVE · CONVERT</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1180, marginBottom: 40 }}>
            Build the visual case<br />for faster <span className="serif-italic hl-brass">sales and leases.</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'end' }}>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 680 }}>
              We combine advanced rendering workflows, senior creative judgment, and data-informed production guidance to show the asset in the moments that influence revenue: buyer interest, tenant conviction, broker follow-up, pricing, approvals, and launch.
            </p>
            <div className="fu fu-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
              {[['4+', 'revenue audiences'], ['7', 'source libraries'], ['1', 'ROI-focused story']].map(([v, k]) => (
                <div key={k}>
                  <div className="stat-num brass" style={{ fontSize: '2rem', marginBottom: 6 }}>{v}</div>
                  <div className="mono" style={{ color: 'var(--ink-500)' }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 40px 80px' }}>
        <div className="container">
          <MediaFrame
            src={media.annapolisCourt}
            aspect="21 / 9"
            badge="Annapolis Plaza"
            badgeBrass="Retail District"
            metaTitle="A retail destination translated into sales, leasing, and tenant demand"
            metaSub="Arrival, frontage, social energy, and place-making rendered for commercial conversion"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 22 }}>
            <MediaFrame src={media.annapolisEntry} aspect="4 / 3" badge="Retail Entry" />
            <MediaFrame src={media.annapolisPlaza} aspect="4 / 3" badge="Plaza Approach" />
            <MediaFrame src={media.annapolisTerrace} aspect="4 / 3" badge="Upper Terrace" />
            <MediaFrame src={media.apogeePoster} aspect="4 / 3" badge="Tower Launch" />
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / What We Build</div>
              <h2 className="display">Commercial assets<br /><span className="serif-italic hl-brass">designed to sell.</span></h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {packages.map(([title, text], i) => (
              <div key={title} className="card fu" style={{ padding: 30, animationDelay: `${i * 80}ms` }}>
                <div className="mono hl-brass" style={{ marginBottom: 18 }}>PACKAGE 0{i + 1}</div>
                <h3 className="display" style={{ marginBottom: 14 }}>{title}</h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '0.94rem' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Our Method</div>
              <h2 className="display">From technical inputs<br />to <span className="serif-italic hl-brass">revenue momentum.</span></h2>
            </div>
          </div>

          {services.map((service, i) => (
            <div key={service.title} className="fu" style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1.35fr 1fr' : '1fr 1.35fr',
              gap: 56,
              alignItems: 'center',
              padding: '60px 0',
              borderTop: '1px solid var(--rule)',
              animationDelay: `${i * 80}ms`,
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <MediaFrame src={service.image} aspect="16 / 10" badge={`0${i + 1}`} badgeBrass="Commercial" />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>SERVICE · {service.number}</div>
                <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', marginBottom: 20 }}>{service.title}</h2>
                <p className="pullquote" style={{ fontSize: '1.35rem', marginBottom: 26 }}>{service.summary}</p>
                <Link href="/studio" className="btn btn-ghost">Scope the ROI</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '110px 40px' }}>
        <div className="container">
          <div className="section-head" style={{ borderBottomColor: 'rgba(255,255,255,0.14)' }}>
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>03 / Commercial Return</div>
              <h2 className="display">Why stronger visuals<br /><span className="serif-italic" style={{ color: 'var(--brass-400)' }}>help close business.</span></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {useCases.map((item, i) => (
              <div key={item.title} className="fu" style={{ padding: 30, border: '1px solid rgba(255,255,255,0.14)', animationDelay: `${i * 80}ms` }}>
                <div className="mono" style={{ color: 'var(--brass-400)', marginBottom: 16 }}>0{i + 1}</div>
                <h3 className="display" style={{ marginBottom: 18 }}>{item.title}</h3>
                <p style={{ color: 'var(--ink-300)' }}>{item.to}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '130px 40px', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="eyebrow brass" style={{ marginBottom: 24 }}>Commercial Brief</div>
          <h2 className="display" style={{ marginBottom: 36 }}>
            Give sales and leasing teams the proof<br /><span className="serif-italic hl-brass">they cannot get from plans alone.</span>
          </h2>
          <Link href="/studio" className="btn btn-primary">Begin the Brief</Link>
        </div>
      </section>
    </div>
  )
}
