import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media, pipeline } from '@/lib/commercialContent'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'AI Property Visualization Process | SceneSet.AI',
  description: 'An AI-powered property visualization pipeline for turning plans, CAD, drone footage, brand references, and launch goals into films, stills, and campaign assets.',
  path: '/process',
  image: '/commercial-assets/posters/apogee-4.21.1.jpg',
})

const deliverables = [
  ['Hero Film', 'A concise AI-powered visual argument for the launch site, sales gallery, broker presentation, investor room, and campaign.'],
  ['Cutdowns', 'Short-form edits generated from the strongest moments for paid media, follow-up, buyer nurture, stakeholder updates, and social proof.'],
  ['Still Campaign', 'Hero stills, detail crops, posters, thumbnails, and print-ready imagery built from the strongest AI-refined frames.'],
  ['Use-Case Copy', 'Positioning language that connects the visuals to sales, leasing, capital, tenant, buyer, civic, owner, and design value.'],
]

export default function ProcessPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 50px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">How SceneSet Works</div>
            <div className="mono">AI TOOLING · DIRECTION · FILMS · LAUNCH SYSTEMS</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 36 }}>
            Cutting-edge AI production,<br />guided by real estate judgment.
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 760 }}>
            We pair cutting-edge AI, best-in-class rendering, motion tools, and real estate marketing judgment, then decide which visuals best support commercial, mixed-use, residential, hospitality, capital, and launch moments.
          </p>
        </div>
      </section>

      <section style={{ padding: '30px 40px 90px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 20 }}>
            <MediaFrame src={media.heroVideo} poster={media.heroPoster} video aspect="16 / 9" badge="Production System" badgeBrass="Commercial" />
            <div style={{ display: 'grid', gap: 20 }}>
              <MediaFrame src={media.bktVideo} poster={media.bktPoster} video aspect="4 / 3" badge="Workplace" />
              <MediaFrame src={media.psVideo} poster={media.psPoster} video aspect="4 / 3" badge="Public Realm" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Production Method</div>
              <h2 className="display">From raw inputs<br /><span className="serif-italic hl-brass">to AI-powered output.</span></h2>
            </div>
          </div>
          <div className="card-soft" style={{ padding: '18px 38px' }}>
            {pipeline.map(([phase, description], i) => (
              <div key={phase} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 34,
                padding: '26px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              }}>
                <div className="mono hl-brass">{phase}</div>
                <div style={{ fontSize: '1.05rem', color: 'var(--ink-700)' }}>{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Deliverables</div>
              <h2 className="display">Assets built with AI<br /><span className="serif-italic hl-brass">for the channels that close.</span></h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {deliverables.map(([title, text], i) => (
              <div key={title} className="card fu" style={{ padding: 30, animationDelay: `${i * 80}ms` }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>0{i + 1}</div>
                <h3 className="display" style={{ marginBottom: 14 }}>{title}</h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '0.94rem' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '120px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div className="eyebrow brass" style={{ marginBottom: 26, color: 'var(--brass-400)' }}>03 / Source Intelligence</div>
              <h2 className="display" style={{ marginBottom: 24 }}>We extract value from whatever you have.</h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 32 }}>
                CAD files, screenshots, drone clips, floorplans, old renders, or a half-formed deck can all become usable source. Our process identifies the strongest story inside the material, uses AI to explore production options quickly, and renders it at the level the market expects.
              </p>
              <Link href="/studio" className="btn btn-ghost-light">Send Your Source</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.prattVideo} poster={media.prattPoster} video aspect="4 / 5" badge="Mixed-Use Input" />
              <MediaFrame src={media.mulhollandVideo} poster={media.mulhollandPoster} video aspect="4 / 5" badge="Campaign Output" style={{ marginTop: 46 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
