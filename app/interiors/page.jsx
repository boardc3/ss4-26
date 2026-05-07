import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media } from '@/lib/commercialContent'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'AI Interior Visualization | SceneSet.AI',
  description: 'AI-powered interior renderings and films for lobbies, workplace suites, homes, retail interiors, hospitality spaces, amenity clubs, and mixed-use launch campaigns.',
  path: '/interiors',
  image: '/commercial-assets/posters/BKT-4-16-1.jpg',
})

const interiorScopes = [
  ['Lobby Arrival', 'AI-assisted first-impression sequences that communicate class, confidence, circulation, security, and service.'],
  ['Office & Home Suites', 'Spec suites, private rooms, lounges, kitchens, and collaboration settings rendered with cinematic finish quality.'],
  ['Amenity Clubs', 'Pool, fitness, terrace, food and beverage, and event scenes generated and refined to make the experience feel active.'],
  ['Hospitality Moments', 'Restaurant, bar, guest arrival, wellness, and evening-use scenes directed with cinematic light, AI iteration, and intent.'],
]

export default function InteriorsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">AI Interior Visualization</div>
            <div className="mono">AI · FINISH · EXPERIENCE · LAUNCH</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1200, marginBottom: 34 }}>
            Make premium space<br />feel worth the <span className="serif-italic hl-brass">premium.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            We use cutting-edge AI and senior art direction to render interiors as sales, leasing, and design arguments. Finish quality, light, circulation, service, and atmosphere are composed so tenants, buyers, and owners understand why the space feels exceptional.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 40px 90px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 20, alignItems: 'stretch' }}>
            <MediaFrame
              src={media.bktVideo}
              poster={media.bktPoster}
              video
              aspect="16 / 10"
              badge="Interior Motion"
              badgeBrass="Workplace"
              metaTitle="Leasing interiors built to communicate finish, flow, and daily use"
              metaSub="Motion, material, and atmosphere shaped with AI-assisted production"
            />
            <div style={{ display: 'grid', gap: 20 }}>
              <MediaFrame src={media.mulhollandVideo} poster={media.mulhollandPoster} video aspect="4 / 3" badge="Residential Amenity" />
              <MediaFrame src={media.psVideo} poster={media.psPoster} video aspect="4 / 3" badge="Retail Interior" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Interior Use Cases</div>
              <h2 className="display">Spaces rendered with AI<br /><span className="serif-italic hl-brass">for commitments, not decoration.</span></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {interiorScopes.map(([title, text], i) => (
              <div key={title} className="card card-hover fu" style={{ padding: 28, animationDelay: `${i * 80}ms` }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>0{i + 1}</div>
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
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Amenity Value</div>
              <h2 className="display">Show the experience<br /><span className="serif-italic hl-brass">that supports the rate.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 500 }}>
              Amenities matter when prospects can picture how they will be used. We turn pools, lounges, patios, lobbies, and event spaces into clear experience proof using AI speed, cinematic lighting, and careful final polish.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <MediaFrame src={media.prattVideo} poster={media.prattPoster} video aspect="4 / 5" badge="Daytime District" />
            <MediaFrame src={media.mulhollandVideo} poster={media.mulhollandPoster} video aspect="4 / 5" badge="Lifestyle Sequence" style={{ marginTop: 42 }} />
            <MediaFrame src={media.apogeeVideo} poster={media.apogeePoster} video aspect="4 / 5" badge="Arrival Mood" />
          </div>
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '120px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 70, alignItems: 'center' }}>
            <div>
              <div className="eyebrow brass" style={{ marginBottom: 28, color: 'var(--brass-400)' }}>03 / AI Production Standard</div>
              <h2 className="display" style={{ marginBottom: 24 }}>Every material choice should feel deliberately produced.</h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                Our interiors are produced with AI-enabled iteration, an operator's eye, and a marketer's discipline, so the visuals communicate not only what the space looks like, but why it deserves attention, tenancy, and price.
              </p>
              <Link href="/studio" className="btn btn-ghost-light">Scope an Interior Package</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.psVideo} poster={media.psPoster} video aspect="4 / 5" badge="Retail Finish" />
              <MediaFrame src={media.bktVideo} poster={media.bktPoster} video aspect="4 / 5" badge="Workplace Mood" style={{ marginTop: 48 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
