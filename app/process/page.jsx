import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { media, pipeline } from '@/lib/commercialContent'

export const metadata = {
  title: 'Commercial Visualization Pipeline — Sceneset.AI',
}

const deliverables = [
  ['Hero Film', '60-90 second commercial narrative for the launch site, investor room, and broker presentations.'],
  ['Cutdowns', 'Short-form social, paid media, leasing follow-up, and stakeholder update edits.'],
  ['Still Campaign', 'Hero stills, detail crops, posters, thumbnails, and print-ready deck imagery.'],
  ['Use-Case Copy', 'Positioning language that explains the asset through capital, tenant, buyer, and civic lenses.'],
]

export default function ProcessPage() {
  return (
    <div className="page-fade" style={{ paddingTop: 30 }}>
      <section style={{ padding: '80px 40px 50px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
            <div className="eyebrow brass">Commercial Pipeline</div>
            <div className="mono">SOURCE · STRATEGY · SCENE · MOTION · DELIVERY</div>
          </div>
          <h1 className="fu fu-1 display" style={{ maxWidth: 1100, marginBottom: 36 }}>
            A launch system,<br />not a render queue.
          </h1>
          <p className="fu fu-2 pullquote" style={{ maxWidth: 760 }}>
            The process starts with deal intent. Every frame is mapped to a commercial job: raise confidence, pre-lease space, clarify approvals, or reposition value.
          </p>
        </div>
      </section>

      <section style={{ padding: '30px 40px 90px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 20 }}>
            <MediaFrame src={media.heroVideo} poster={media.heroPoster} video aspect="16 / 9" badge="Motion System" badgeBrass="Commercial" />
            <div style={{ display: 'grid', gap: 20 }}>
              <MediaFrame src={media.bktPoster} aspect="4 / 3" badge="Workplace" />
              <MediaFrame src={media.annapolisPlaza} aspect="4 / 3" badge="Public Realm" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '110px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Pipeline</div>
              <h2 className="display">Five phases from<br /><span className="serif-italic hl-brass">source to campaign.</span></h2>
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
              <h2 className="display">Everything needed<br /><span className="serif-italic hl-brass">to go to market.</span></h2>
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
              <div className="eyebrow brass" style={{ marginBottom: 26, color: 'var(--brass-400)' }}>03 / Source Agnostic</div>
              <h2 className="display" style={{ marginBottom: 24 }}>Plans, videos, screenshots, stills, or almost nothing.</h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 32 }}>
                SceneSet 10-1 case studies prove the pipeline can turn sparse inputs into persuasive output. For commercial real estate, that means faster path from messy materials to a polished market story.
              </p>
              <Link href="/studio" className="btn btn-ghost-light">Send Source Materials</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.whiteDeerExterior} aspect="4 / 5" badge="Sparse Input" />
              <MediaFrame src={media.whiteDeerVideo} poster={media.whiteDeerPoster} video aspect="4 / 5" badge="Campaign Output" style={{ marginTop: 46 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
