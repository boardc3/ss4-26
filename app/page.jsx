import Link from 'next/link'
import MediaFrame from '@/components/MediaFrame'
import { audiences, media, portfolio, proofStats, services, useCases } from '@/lib/commercialContent'

export const metadata = {
  title: 'Sceneset.AI — Renderings That Drive Sales and Leasing',
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
                Renderings and films built to move real estate decisions
              </div>
              <h1 className="fu fu-2 display">
                Turn plans into<br />
                <span className="serif-italic hl-brass">sales, leases, and ROI.</span>
              </h1>
            </div>
            <div className="fu fu-3" style={{ display: 'grid', gap: 22, paddingBottom: 10 }}>
              <p className="pullquote" style={{ maxWidth: 540 }}>
                SceneSet creates high-end renderings, films, and campaign assets that help developers, brokers, and owners sell the vision, lease the space, justify the price, and convert interest into action.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
                <Link href="/studio" className="btn btn-primary">Scope a High-ROI Package</Link>
                <Link href="/portfolio" className="btn btn-ghost">See the Work</Link>
              </div>
            </div>
          </div>

          <MediaFrame
            src={media.heroVideo}
            poster={media.heroPoster}
            video
            aspect="21 / 9"
            badge="Render Campaign Reel"
            badgeBrass="Strategy + Production"
            metaTitle="Advanced visualization for sales, leasing, capital, entitlements, and launch"
            metaSub="Cinematic renderings, motion, stills, and strategy built around commercial return"
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
              <div className="section-num" style={{ marginBottom: 14 }}>01 / ROI Proposition</div>
              <h2 className="display">We make the sales case<br /><span className="serif-italic hl-brass">visible before delivery.</span></h2>
            </div>
            <p className="pullquote" style={{ maxWidth: 520 }}>
              The best visual assets create economic momentum. They help prospects understand the offer faster, feel the upside sooner, and give teams better material to sell, lease, raise, and negotiate.
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
              <h2 className="display">Premium visuals<br /><span className="serif-italic hl-brass">that work like sales tools.</span></h2>
            </div>
            <Link href="/developments" className="btn btn-ghost">Explore the Offering</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {services.map((service, i) => (
              <Link key={service.title} href={i === 2 ? '/interiors' : '/developments'} className="card card-hover fu" style={{ display: 'block', animationDelay: `${i * 90}ms` }}>
                <MediaFrame src={service.image} aspect="4 / 5" badge={`Service ${service.number}`} />
                <div style={{ padding: '26px 22px 30px' }}>
                  <div className="eyebrow brass" style={{ marginBottom: 12 }}>{service.number}</div>
                  <h3 className="display" style={{ marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ color: 'var(--ink-500)', fontSize: '0.92rem', marginBottom: 22 }}>{service.summary}</p>
                  <div className="btn-text">See Value</div>
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
              <div className="eyebrow brass" style={{ marginBottom: 28, color: 'var(--brass-400)' }}>03 / How ROI Compounds</div>
              <h2 className="display" style={{ marginBottom: 28 }}>
                From a beautiful rendering to a selling system.
              </h2>
              <p className="pullquote" style={{ color: 'var(--ink-300)', fontSize: '1.35rem', marginBottom: 34 }}>
                Our videos are built for the moment after interest is created: the broker follow-up, the tenant pitch, the investor update, the sales conversation, the leasing page, and the buyer who needs to see why the space is worth the premium.
              </p>
              <Link href="/portfolio" className="btn btn-ghost-light">View Proof Points</Link>
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
              <div className="section-num" style={{ marginBottom: 14 }}>04 / Where ROI Shows Up</div>
              <h2 className="display">The right visuals<br /><span className="serif-italic hl-brass">create measurable leverage.</span></h2>
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
              <h2 className="display">Every frame should<br /><span className="serif-italic hl-brass">help close the gap.</span></h2>
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
          <div className="eyebrow brass" style={{ marginBottom: 30 }}>Begin an ROI-Driven Brief</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', marginBottom: 30 }}>
            Give your sales and leasing teams<br />
            <span className="serif-italic hl-brass">the strongest possible story.</span>
          </h2>
          <p className="pullquote" style={{ fontSize: '1.35rem', margin: '0 auto 44px', maxWidth: 700 }}>
            Send the source material, audience, and revenue objective. We will shape the render package around the moments most likely to influence conversion.
          </p>
          <Link href="/studio" className="btn btn-primary" style={{ padding: '18px 36px', fontSize: '0.88rem' }}>
            Start the Brief
          </Link>
        </div>
      </section>
    </div>
  )
}
