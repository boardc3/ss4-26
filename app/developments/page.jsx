import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media, services, useCases } from '@/lib/commercialContent'

export const metadata = {
  title: 'Commercial Development Visualization — Sceneset.AI',
}

const packages = [
  ['Launch Film', 'A hero narrative for website, investor room, sales gallery, and broker outreach.'],
  ['Leasing Stills', 'Exterior arrival, storefront, lobby, suite, amenity, and day-to-night moments.'],
  ['Investor Deck Assets', 'Clean visual proof for pro formas, memoranda, capital partner updates, and board meetings.'],
  ['Entitlement Support', 'Pedestrian-scale public realm scenes that clarify activation, traffic, access, and neighborhood value.'],
]

export default function DevelopmentsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Development</div>
            <div className="mono">CAPITAL · LEASING · ENTITLEMENTS · LAUNCH</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1180, marginBottom: 40 }}>
            Render the district,<br />not just the <span className="serif-italic hl-brass">building.</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'end' }}>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 680 }}>
              Commercial value is made at the threshold: the sidewalk, the lobby, the suite, the terrace, the restaurant, the event, the evening return. SceneSet builds that full sequence.
            </p>
            <div className="fu fu-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
              {[['4+', 'buyer audiences'], ['7', 'asset sources'], ['1', 'unified campaign']].map(([v, k]) => (
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
            metaTitle="A commercial place-making story built around arrival, frontage, dining, and gathering"
            metaSub="Source assets pulled into SS426 from Annapolis"
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
              <div className="section-num" style={{ marginBottom: 14 }}>01 / What We Package</div>
              <h2 className="display">Commercial campaigns<br /><span className="serif-italic hl-brass">with a sales job.</span></h2>
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
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Commercial Services</div>
              <h2 className="display">From source files<br />to <span className="serif-italic hl-brass">market belief.</span></h2>
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
                <Link href="/studio" className="btn btn-ghost">Scope This Package</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '110px 40px' }}>
        <div className="container">
          <div className="section-head" style={{ borderBottomColor: 'rgba(255,255,255,0.14)' }}>
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>03 / Use Cases</div>
              <h2 className="display">Why commercial teams<br /><span className="serif-italic" style={{ color: 'var(--brass-400)' }}>commission SceneSet.</span></h2>
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
            Build the case for the asset<br /><span className="serif-italic hl-brass">before the asset exists.</span>
          </h2>
          <Link href="/studio" className="btn btn-primary">Begin Commercial Brief</Link>
        </div>
      </section>
    </div>
  )
}
