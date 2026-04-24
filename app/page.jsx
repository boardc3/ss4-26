import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { audiences, media, portfolio, proofStats, services, useCases } from '@/lib/commercialContent'

export const metadata = {
  title: 'Sceneset.AI — Commercial Real Estate Visualization',
}

export default function HomePage() {
  const featured = portfolio.slice(0, 4)

  return (
    <div className="page-fade">
      <section style={{ paddingTop: 30, paddingBottom: 90 }}>
        <div className="container" style={{ padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'end', marginBottom: 42 }}>
            <div>
              <div className="fu fu-1 eyebrow brass" style={{ marginBottom: 28 }}>
                Commercial real estate visualization for capital, leasing, and launch
              </div>
              <h1 className="fu fu-2 display">
                Make the asset feel<br />
                <span className="serif-italic hl-brass">investable before it opens.</span>
              </h1>
            </div>
            <div className="fu fu-3" style={{ display: 'grid', gap: 22, paddingBottom: 10 }}>
              <p className="pullquote" style={{ maxWidth: 540 }}>
                SceneSet turns plans, rough source media, and market positioning into cinematic campaigns for high-end commercial real estate.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
                <Link href="/studio" className="btn btn-primary">Build a Launch Brief</Link>
                <Link href="/portfolio" className="btn btn-ghost">See Commercial Work</Link>
              </div>
            </div>
          </div>

          <MediaFrame
            src={media.heroVideo}
            poster={media.heroPoster}
            video
            aspect="21 / 9"
            badge="Commercial Launch Reel"
            badgeBrass="Motion + Stills"
            metaTitle="Retail, workplace, hospitality, residential tower, and mixed-use campaigns"
            metaSub="Sourced from SceneSet 10-1, SS videos, Annapolis, Pinnacle Ithaca, Alewive, and White Deer"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--rule)', marginTop: 32 }}>
            {proofStats.map(([value, label], i) => (
              <div key={label} className="fu" style={{
                animationDelay: `${500 + i * 90}ms`,
                padding: '30px 26px',
                borderRight: i < proofStats.length - 1 ? '1px solid var(--rule)' : 'none',
              }}>
                <div className="stat-num brass" style={{ fontSize: '2.45rem', marginBottom: 10 }}>{value}</div>
                <div className="mono" style={{ color: 'var(--ink-500)', lineHeight: 1.6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, j) =>
            ['CAPITAL RAISE', 'PRE-LEASING', 'MIXED-USE', 'CLASS-A OFFICE', 'RETAIL DISTRICT',
              'HOSPITALITY', 'ENTITLEMENTS', 'BROKER DECKS', 'LAUNCH FILMS', 'INVESTOR WEBSITES'].map((n, i) => (
              <span key={`${j}-${i}`} className="marquee-item">{n}</span>
            ))
          )}
        </div>
      </div>

      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>01 / Strategy</div>
              <h2 className="display">Built for the people<br /><span className="serif-italic hl-brass">who move the deal.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 520 }}>
              High-end commercial buyers do not just need a rendering. They need confidence in the place, the audience, the use, and the upside.
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
              <div className="section-num" style={{ marginBottom: 14 }}>02 / Commercial Toolkit</div>
              <h2 className="display">One campaign.<br /><span className="serif-italic hl-brass">Many deal moments.</span></h2>
            </div>
            <Link href="/developments" className="btn btn-ghost">Explore Commercial Services</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {services.map((service, i) => (
              <Link key={service.title} href={i === 2 ? '/interiors' : '/developments'} className="card card-hover fu" style={{ display: 'block', animationDelay: `${i * 90}ms` }}>
                <MediaFrame src={service.image} aspect="4 / 5" badge={`Service ${service.number}`} />
                <div style={{ padding: '26px 22px 30px' }}>
                  <div className="eyebrow brass" style={{ marginBottom: 12 }}>{service.number}</div>
                  <h3 className="display" style={{ marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ color: 'var(--ink-500)', fontSize: '0.92rem', marginBottom: 22 }}>{service.summary}</p>
                  <div className="btn-text">Open Scope</div>
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
              <div className="eyebrow brass" style={{ marginBottom: 28, color: 'var(--brass-400)' }}>03 / Featured Use Case</div>
              <h2 className="display" style={{ marginBottom: 28 }}>
                From an apartment building to an entire market story.
              </h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                The Gun Hill / Pinnacle Ithaca work reframes a building as a lifestyle system: interiors, Cornell proximity, waterfalls, dining, lake access, and neighborhood energy.
              </p>
              <Link href="/portfolio" className="btn btn-ghost-light">View Case Work</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MediaFrame src={media.gunHillVideo} poster={media.gunHillInteriorPoster} video aspect="4 / 5" badge="Interior Film" />
              <MediaFrame src={media.pinnacleOutput1} aspect="4 / 5" badge="Lifestyle Context" style={{ marginTop: 46 }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-num" style={{ marginBottom: 14 }}>04 / Use Cases</div>
              <h2 className="display">Where the assets<br /><span className="serif-italic hl-brass">create leverage.</span></h2>
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
              <h2 className="display">Commercial scenes<br /><span className="serif-italic hl-brass">with a job to do.</span></h2>
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
          <div className="eyebrow brass" style={{ marginBottom: 30 }}>Begin a Commercial Brief</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', marginBottom: 30 }}>
            Give the next investor, tenant, or buyer<br />
            <span className="serif-italic hl-brass">something specific to believe.</span>
          </h2>
          <p className="pullquote" style={{ fontSize: '1.35rem', margin: '0 auto 44px', maxWidth: 700 }}>
            Send the address, program, source materials, and deadline. SceneSet will shape the highest-leverage commercial package.
          </p>
          <Link href="/studio" className="btn btn-primary" style={{ padding: '18px 36px', fontSize: '0.88rem' }}>
            Start the Brief
          </Link>
        </div>
      </section>
    </div>
  )
}
