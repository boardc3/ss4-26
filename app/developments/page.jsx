import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media, services, useCases } from '@/lib/commercialContent'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'Development and Property Visualization | SceneSet.AI',
  description: 'AI-powered render campaigns and launch films for mixed-use developments, commercial assets, residential projects, single-family homes, workplace assets, and public realm storytelling.',
  path: '/developments',
  image: '/commercial-assets/posters/pratt-4-29-5.jpg',
})

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
            <div className="eyebrow brass">Development and Property Visualization</div>
            <div className="mono">AI · RENDER · POSITION · PROVE</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1180, marginBottom: 40 }}>
            Build the visual case<br />for faster <span className="serif-italic hl-brass">sales and leases.</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'end' }}>
            <p className="fu fu-2 pullquote" style={{ maxWidth: 680 }}>
              We combine cutting-edge AI, advanced rendering workflows, senior creative judgment, and production guidance to show the asset in the moments that matter: street arrival, buyer fit, tenant fit, public realm, amenities, capital presentations, and launch.
            </p>
            <div className="fu fu-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
              {[['AI-led', 'production workflow'], ['5', 'film assets'], ['1', 'cohesive launch story']].map(([v, k]) => (
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
            src={media.prattVideo}
            poster={media.prattPoster}
            video
            aspect="21 / 9"
            badge="Pratt District"
            badgeBrass="Mixed-Use"
            metaTitle="A mixed-use destination translated into a clear launch film"
            metaSub="Arrival, frontage, street life, residential entries, and public realm rendered as one place"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 22 }}>
            <MediaFrame src={media.psVideo} poster={media.psPoster} video aspect="4 / 3" badge="Retail Walk" />
            <MediaFrame src={media.bktVideo} poster={media.bktPoster} video aspect="4 / 3" badge="Office Amenity" />
            <MediaFrame src={media.mulhollandVideo} poster={media.mulhollandPoster} video aspect="4 / 3" badge="Lifestyle Context" />
            <MediaFrame src={media.apogeeVideo} poster={media.apogeePoster} video aspect="4 / 3" badge="Tower Launch" />
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / What We Build</div>
              <h2 className="display">AI-built assets<br /><span className="serif-italic hl-brass">designed to sell.</span></h2>
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
              <h2 className="display">From technical inputs<br />to <span className="serif-italic hl-brass">world-class output.</span></h2>
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
                <MediaFrame src={service.video} poster={service.image} video aspect="16 / 10" badge={`0${i + 1}`} badgeBrass="Commercial" />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>SERVICE · {service.number}</div>
                <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', marginBottom: 20 }}>{service.title}</h2>
                <p className="pullquote" style={{ fontSize: '1.35rem', marginBottom: 26 }}>{service.summary}</p>
                <Link href="/studio" className="btn btn-ghost">Start a Brief</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '110px 40px' }}>
        <div className="container">
          <div className="section-head" style={{ borderBottomColor: 'rgba(255,255,255,0.14)' }}>
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>03 / Production Advantage</div>
              <h2 className="display">Why AI-powered visuals<br /><span className="serif-italic" style={{ color: 'var(--brass-400)' }}>change the conversation.</span></h2>
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
          <div className="eyebrow brass" style={{ marginBottom: 24 }}>Project Brief</div>
          <h2 className="display" style={{ marginBottom: 36 }}>
            Give sales and leasing teams the proof<br /><span className="serif-italic hl-brass">they cannot get from plans alone.</span>
          </h2>
          <Link href="/studio" className="btn btn-primary">Begin the Brief</Link>
        </div>
      </section>
    </div>
  )
}
