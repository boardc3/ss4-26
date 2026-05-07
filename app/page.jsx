import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import ResponsiveVideo from '@/components/ResponsiveVideo'
import { audiences, media, portfolio, proofStats, services, useCases } from '@/lib/commercialContent'
import { pageSeo } from '@/lib/seo'

export const metadata = pageSeo({
  title: 'SceneSet.AI | Property Visualization for Commercial, Mixed-Use and Residential',
  description: 'AI-powered renderings, launch films, and campaign assets for commercial, mixed-use, residential, single-family, hospitality, and real estate teams.',
  path: '/',
})

export default function HomePage() {
  const featured = portfolio.slice(0, 4)

  return (
    <div className="page-fade">
      <section className="hyper-hero">
        <div className="hyper-glow hyper-glow-a" />
        <div className="hyper-glow hyper-glow-b" />
        <div className="hyper-grid" />

        <div className="container hyper-hero-inner">
          <div className="hyper-copy">
            <div className="fu fu-1 eyebrow brass hyper-kicker">
              AI-powered property launch visuals
            </div>
            <h1 className="fu fu-2 display hyper-title">
              Show the property<br />
              <span className="serif-italic">before it exists.</span>
            </h1>
            <p className="fu fu-3 hyper-lede">
              SceneSet uses cutting-edge AI, advanced rendering, and senior creative direction to turn plans, decks, drone clips, and rough design direction into cinematic films, stills, and launch assets for commercial, mixed-use, residential, and single-family properties.
            </p>
            <div className="fu fu-4 hyper-actions">
              <Link href="/studio" className="btn btn-brass">Start a Brief</Link>
              <Link href="/portfolio" className="btn btn-ghost-light">View the Work</Link>
            </div>
          </div>

          <div className="fu fu-3 hyper-stage" aria-label="AI-powered real estate visualization system">
            <div className="hyper-frame hyper-frame-main">
              <ResponsiveVideo src={media.heroVideo} poster={media.heroPoster} title="Pratt District mixed-use visualization film" priority />
              <div className="hyper-scan" />
              <div className="hyper-caption">
                <span>SceneSet HyperFrames</span>
                <strong>Best-in-world visual production built from source material, AI systems, and studio direction.</strong>
              </div>
            </div>

            <div className="hyper-value-strip">
              <span>Retail frontage</span>
              <span>Office amenity</span>
              <span>Mixed-use story</span>
            </div>
          </div>
        </div>

        <div className="container hyper-proof">
          {proofStats.map(([value, label], i) => (
            <div key={label} className="hyper-proof-card fu" style={{ animationDelay: `${560 + i * 90}ms` }}>
              <div className="hyper-proof-value">{value}</div>
              <div className="mono">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, j) =>
            ['SALES VELOCITY', 'PRE-LEASING', 'BROKER CAMPAIGNS', 'CLASS-A OFFICE', 'RETAIL DISTRICT',
              'HOSPITALITY', 'ENTITLEMENTS', 'CAPITAL DECKS', 'RENDER FILMS', 'LAUNCH WEBSITES'].map((n, i) => (
              <span key={`${j}-${i}`} className="marquee-item">{n}</span>
            ))
          )}
        </div>
      </div>

      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Use Cases</div>
              <h2 className="display">Built for the properties<br /><span className="serif-italic hl-brass">people need to believe in.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 520 }}>
              Real estate visualization needs more than a pretty rendering. It needs AI-enabled speed, cinematic quality, clear architecture, emotional atmosphere, and the confidence that the finished property will feel real.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {audiences.map((item, i) => (
              <div key={item.title} className="card card-hover fu" style={{ padding: 28, animationDelay: `${i * 80}ms` }}>
                <div className="mono hl-brass" style={{ marginBottom: 18 }}>0{i + 1}</div>
                <h3 className="display" style={{ marginBottom: 14 }}>{item.title}</h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '0.94rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>02 / What We Create</div>
              <h2 className="display">Premium AI production<br /><span className="serif-italic hl-brass">aligned to launch channels.</span></h2>
            </div>
            <Link href="/developments" className="btn btn-ghost">Explore the Offering</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {services.map((service, i) => (
              <Link key={service.title} href={i === 2 ? '/interiors' : '/developments'} className="card card-hover fu" style={{ display: 'block', animationDelay: `${i * 90}ms` }}>
                <MediaFrame src={service.video} poster={service.image} video aspect="4 / 5" badge={`Service ${service.number}`} />
                <div style={{ padding: '26px 22px 30px' }}>
                  <div className="eyebrow brass" style={{ marginBottom: 12 }}>{service.number}</div>
                  <h3 className="display" style={{ marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ color: 'var(--ink-500)', fontSize: '0.92rem', marginBottom: 22 }}>{service.summary}</p>
                  <div className="btn-text">Explore Scope</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep" style={{ padding: '130px 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.4fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="eyebrow brass" style={{ marginBottom: 28, color: 'var(--brass-400)' }}>03 / Campaign System</div>
              <h2 className="display" style={{ marginBottom: 28 }}>
                From one AI-powered hero film to a full launch toolkit.
              </h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                Each clip is built through an AI-accelerated production workflow, then directed and refined so the strongest frames become posters, thumbnails, deck slides, social cutdowns, leasing page loops, and broker follow-up material.
              </p>
              <Link href="/portfolio" className="btn btn-ghost-light">Open Work Index</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.bktVideo} poster={media.bktPoster} video aspect="4 / 5" badge="Workplace Film" />
              <MediaFrame src={media.prattVideo} poster={media.prattPoster} video aspect="4 / 5" badge="Mixed-Use Context" style={{ marginTop: 46 }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>04 / Use-Case Scenarios</div>
              <h2 className="display">The right visuals<br /><span className="serif-italic hl-brass">make the use case obvious.</span></h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {useCases.map((item, i) => (
              <div key={item.title} className="card-soft fu" style={{ padding: 34, animationDelay: `${i * 80}ms` }}>
                <div className="mono hl-brass" style={{ marginBottom: 16 }}>USE CASE 0{i + 1}</div>
                <h3 className="display" style={{ marginBottom: 24 }}>{item.title}</h3>
                <div style={{ display: 'grid', gap: 18 }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 8 }}>Input</div>
                    <p style={{ color: 'var(--ink-500)' }}>{item.from}</p>
                  </div>
                  <div>
                    <div className="eyebrow brass" style={{ marginBottom: 8 }}>Output</div>
                    <p>{item.to}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--bg-paper)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>05 / Selected Work</div>
              <h2 className="display">Every frame should<br /><span className="serif-italic hl-brass">feel impossible to fake.</span></h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">Full Work Index</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            {featured.map((project, i) => (
              <div key={project.name} className="fu" style={{ gridColumn: i < 2 ? 'span 6' : 'span 6', animationDelay: `${i * 80}ms` }}>
                <MediaFrame
                  src={project.video || project.image}
                  poster={project.image}
                  video={Boolean(project.video)}
                  aspect="16 / 10"
                  badge={project.category}
                  badgeBrass={project.year}
                  metaTitle={project.name}
                  metaSub={`${project.tag} · ${project.location}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 40px', background: 'var(--brass-100)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow brass" style={{ marginBottom: 30 }}>Begin a Brief</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', marginBottom: 30 }}>
            Give your property team<br />
            <span className="serif-italic hl-brass">a launch package that feels finished.</span>
          </h2>
          <p className="pullquote" style={{ fontSize: '1.35rem', margin: '0 auto 44px', maxWidth: 700 }}>
            Send the source material, audience, use case, and launch channel. We will shape the visuals with AI-powered production and studio direction around the scenes your market needs to understand first.
          </p>
          <Link href="/studio" className="btn btn-primary" style={{ padding: '18px 36px', fontSize: '0.88rem' }}>
            Start the Brief
          </Link>
        </div>
      </section>
    </div>
  )
}
