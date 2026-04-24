import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media } from '@/lib/commercialContent'

export const metadata = {
  title: 'Commercial Interiors — Sceneset.AI',
}

const interiorScopes = [
  ['Lobby Arrival', 'First-impression sequences that communicate class, confidence, circulation, security, and service.'],
  ['Office Suites', 'Spec suites, executive rooms, lounges, and collaboration settings rendered to justify premium occupancy.'],
  ['Amenity Clubs', 'Pool, fitness, terrace, food and beverage, and event scenes that turn amenities into measurable leasing value.'],
  ['Hospitality Moments', 'Restaurant, bar, guest arrival, wellness, and evening-use scenes directed with cinematic light and intent.'],
]

export default function InteriorsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Interior Visualization</div>
            <div className="mono">FINISH · EXPERIENCE · LEASING · ROI</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1200, marginBottom: 34 }}>
            Make premium space<br />feel worth the <span className="serif-italic hl-brass">premium.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            We render interiors as leasing and sales arguments. Finish quality, light, circulation, density, service, and atmosphere are composed to help tenants, buyers, and owners understand why the space deserves the rate.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 40px 90px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 20, alignItems: 'stretch' }}>
            <MediaFrame
              src={media.gunHillVideo}
              poster={media.gunHillInteriorPoster}
              video
              aspect="16 / 10"
              badge="Interior Motion"
              badgeBrass="Pinnacle Ithaca"
              metaTitle="Leasing interiors built to communicate finish, flow, and daily use"
              metaSub="Motion, material, and atmosphere shaped for commercial conversion"
            />
            <div style={{ display: 'grid', gap: 20 }}>
              <MediaFrame src={media.mahoganyOffice} aspect="4 / 3" badge="Executive Office" />
              <MediaFrame src={media.alewivePool} aspect="4 / 3" badge="Amenity Club" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Interior ROI</div>
              <h2 className="display">Spaces rendered for<br /><span className="serif-italic hl-brass">commitments, not decoration.</span></h2>
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
              Amenities create ROI when prospects can picture how they will be used. We turn pools, lounges, patios, and event spaces into lifestyle proof that supports leasing velocity and pricing confidence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <MediaFrame src={media.alewiveDayVideo} poster={media.alewivePool} video aspect="4 / 5" badge="Daytime Tour" />
            <MediaFrame src={media.alewiveCocktailVideo} poster={media.alewivePool} video aspect="4 / 5" badge="Cocktail Use" style={{ marginTop: 42 }} />
            <MediaFrame src={media.whiteDeerFamily} aspect="4 / 5" badge="Lifestyle Room" />
          </div>
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '120px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 70, alignItems: 'center' }}>
            <div>
              <div className="eyebrow brass" style={{ marginBottom: 28, color: 'var(--brass-400)' }}>03 / Commercial Standard</div>
              <h2 className="display" style={{ marginBottom: 24 }}>Every material choice should help sell the space.</h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                Our interiors are produced with an operator's eye and a marketer's discipline, so the visuals communicate not only what the space looks like, but why it deserves attention, tenancy, and price.
              </p>
              <Link href="/studio" className="btn btn-ghost-light">Scope an Interior Package</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.whiteDeerKitchen} aspect="4 / 5" badge="Kitchen Finish" />
              <MediaFrame src={media.arizonaOutput1} aspect="4 / 5" badge="Hospitality Mood" style={{ marginTop: 48 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
