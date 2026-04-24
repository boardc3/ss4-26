import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media } from '@/lib/commercialContent'

export const metadata = {
  title: 'Commercial Interiors — Sceneset.AI',
}

const interiorScopes = [
  ['Lobby Arrival', 'First-impression sequences that sell security, hospitality, circulation, and material confidence.'],
  ['Office Suites', 'Executive suites, spec suites, conference rooms, lounges, and flexible work environments.'],
  ['Amenity Clubs', 'Pool, fitness, terrace, food and beverage, events, and resident or tenant programming.'],
  ['Hospitality Moments', 'Restaurant, bar, guest arrival, wellness, and evening-use scenes with cinematic light.'],
]

export default function InteriorsPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Interiors</div>
            <div className="mono">LOBBY · SUITE · AMENITY · HOSPITALITY</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1200, marginBottom: 34 }}>
            Render the experience<br />that gets tenants to <span className="serif-italic hl-brass">say yes.</span>
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 720 }}>
            Premium commercial interiors need to feel operational: arrival, staff, seating, lighting, hospitality, work, service, and social energy.
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
              metaTitle="Leasing interiors with camera movement, light, and inhabitation"
              metaSub="Pulled from Pinnacle-Ithaca"
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
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Interior Scope</div>
              <h2 className="display">Spaces that make<br /><span className="serif-italic hl-brass">leasing tangible.</span></h2>
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
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Amenity Story</div>
              <h2 className="display">Sell what happens<br /><span className="serif-italic hl-brass">after move-in.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 500 }}>
              Alewive source motion was pulled into SS426 to show how amenity spaces can become hospitality-grade leasing material.
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
              <h2 className="display" style={{ marginBottom: 24 }}>From texture to tenant fit.</h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                The goal is not decoration. It is to help a decision maker understand finish level, service culture, density, atmosphere, and future occupancy.
              </p>
              <Link href="/studio" className="btn btn-ghost-light">Brief an Interior Package</Link>
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
