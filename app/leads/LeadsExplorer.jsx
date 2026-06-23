'use client'

import { Fragment, useMemo, useState } from 'react'
import { leads, leadsMeta } from '@/lib/leadsData'

/* ------------------------------------------------------------------ */
/* helpers                                                            */
/* ------------------------------------------------------------------ */
const fmt = (n) => (n == null ? '—' : Number(n).toLocaleString('en-US'))
const money = (n) => (n == null ? '—' : '$' + Number(n).toLocaleString('en-US'))

const TIER_COLORS = {
  'Tier 1 — Priority': { bg: 'rgba(196,162,103,0.18)', bd: '#C4A267', fg: '#8B6F3E' },
  'Tier 2 — Strong': { bg: 'rgba(74,99,84,0.16)', bd: '#4A6354', fg: '#2D3D35' },
  'Tier 3 — Qualified': { bg: 'rgba(107,100,88,0.12)', bd: '#8F877A', fg: '#3D3A33' },
  'Tier 4 — Watch': { bg: 'rgba(107,100,88,0.06)', bd: '#B8AF9F', fg: '#6B6458' },
}
const CONF_COLORS = {
  Verified: { bg: 'rgba(74,99,84,0.16)', fg: '#2D3D35', label: 'Verified' },
  Reported: { bg: 'rgba(196,162,103,0.18)', fg: '#8B6F3E', label: 'Reported' },
  Pathway: { bg: 'rgba(107,100,88,0.10)', fg: '#6B6458', label: 'Find via pathway' },
}
const SCORE_PARTS = [
  ['customization', 'Customization', 30, '#8B6F3E'],
  ['volume', 'Volume', 20, '#A3864A'],
  ['price', 'Price', 15, '#C4A267'],
  ['footprint', 'Footprint', 12, '#4A6354'],
  ['digital', 'Digital', 12, '#87A093'],
  ['presale', 'Pre-sale', 11, '#6B6458'],
]

const uniq = (arr) => Array.from(new Set(arr)).filter(Boolean).sort()

/* ------------------------------------------------------------------ */
/* component                                                          */
/* ------------------------------------------------------------------ */
export default function LeadsExplorer() {
  const [q, setQ] = useState('')
  const [region, setRegion] = useState('All')
  const [type, setType] = useState('All')
  const [tier, setTier] = useState('All')
  const [conf, setConf] = useState('All')
  const [sortKey, setSortKey] = useState('rank_overall')
  const [sortDir, setSortDir] = useState('asc')
  const [open, setOpen] = useState(null)

  const regions = useMemo(() => ['All', ...uniq(leads.map((l) => l.region))], [])
  const types = useMemo(() => ['All', ...uniq(leads.map((l) => l.product_type))], [])
  const tiers = useMemo(() => ['All', ...uniq(leads.map((l) => l.fit_tier))], [])

  const filtered = useMemo(() => {
    let rows = leads.filter((l) => {
      if (region !== 'All' && l.region !== region) return false
      if (type !== 'All' && l.product_type !== type) return false
      if (tier !== 'All' && l.fit_tier !== tier) return false
      if (conf === 'Named' && !(l.contact_confidence === 'Verified' || l.contact_confidence === 'Reported'))
        return false
      if (q.trim()) {
        const s = q.toLowerCase()
        const hay = (l.name + ' ' + l.hq_state + ' ' + l.product_type + ' ' + l.contact_name).toLowerCase()
        if (!hay.includes(s)) return false
      }
      return true
    })
    const dir = sortDir === 'asc' ? 1 : -1
    rows = [...rows].sort((a, b) => {
      let av = a[sortKey]
      let bv = b[sortKey]
      if (sortKey === 'name') return dir * String(av).localeCompare(String(bv))
      av = av == null ? -1 : av
      bv = bv == null ? -1 : bv
      return dir * (av - bv)
    })
    return rows
  }, [q, region, type, tier, conf, sortKey, sortDir])

  const setSort = (k, defaultDir = 'desc') => {
    if (sortKey === k) setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    else {
      setSortKey(k)
      setSortDir(defaultDir)
    }
  }

  const reset = () => {
    setQ(''); setRegion('All'); setType('All'); setTier('All'); setConf('All')
    setSortKey('rank_overall'); setSortDir('asc')
  }

  const named = leads.filter((l) => l.contact_confidence === 'Verified' || l.contact_confidence === 'Reported').length
  const t1 = leads.filter((l) => l.fit_tier === 'Tier 1 — Priority').length

  const arrow = (k) => (sortKey === k ? (sortDir === 'asc' ? ' ↑' : ' ↓') : '')

  return (
    <div className="page-fade leads">
      {/* ---------------- hero ---------------- */}
      <section className="lead-hero">
        <div className="container">
          <div className="lead-hero-top">
            <div className="eyebrow brass">Sales Intelligence · Pipeline</div>
            <div className="mono">QUALIFY · RANK · REACH</div>
          </div>
          <h1 className="display lead-title">
            250 home builders, ranked by how much<br />
            <span className="serif-italic hl-brass">SceneSet adds to their sale.</span>
          </h1>
          <p className="lead-lede">
            A research-backed pipeline of U.S. home builders that sell options and customization — the buyers who
            gain the most from cinematic floorplan films and every-room, every-finish rendering. Each builder is
            scored on a six-factor fit model, with marketing leadership and a contact pathway attached.
          </p>

          <div className="lead-stats">
            {[
              [fmt(leadsMeta.count), 'qualified builders'],
              [String(t1), 'Tier 1 priority targets'],
              [String(named), 'named marketing leaders'],
              ['6', 'factor fit score'],
            ].map(([v, k]) => (
              <div key={k} className="lead-stat">
                <div className="stat-num brass">{v}</div>
                <div className="mono">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- methodology ---------------- */}
      <section className="lead-method">
        <div className="container">
          <div className="lead-method-head">
            <div className="section-num">01 / Scoring Model</div>
            <h2 className="display">
              Weighted for the thing that matters: <span className="hl-brass">options.</span>
            </h2>
            <p className="lead-method-sub">
              More structural and finish options mean more renders, more floorplan films, and more finish flips —
              so customization carries the most weight, exactly the profile that made Foxlane Homes a fit.
            </p>
          </div>
          <div className="lead-method-grid">
            {SCORE_PARTS.map(([key, label, max, color]) => (
              <div key={key} className="lead-mcard">
                <div className="lead-mcard-top">
                  <span className="lead-dot" style={{ background: color }} />
                  <span className="lead-mpts">{max}</span>
                </div>
                <div className="lead-mlabel">{label}</div>
                <div className="lead-mdesc">{leadsMeta.model[key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- controls ---------------- */}
      <section className="lead-body">
        <div className="container">
          <div className="lead-controls">
            <input
              className="lead-search"
              placeholder="Search builder, state, contact…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Select label="Region" value={region} setValue={setRegion} options={regions} />
            <Select label="Product type" value={type} setValue={setType} options={types} />
            <Select label="Tier" value={tier} setValue={setTier} options={tiers} />
            <Select label="Contact" value={conf} setValue={setConf} options={['All', 'Named']} />
            <button className="lead-reset" onClick={reset}>Reset</button>
          </div>

          <div className="lead-count mono">
            Showing <strong>{filtered.length}</strong> of {leads.length} builders
            <span className="lead-sortnote"> · sorted by {sortKey.replace('_', ' ')}{sortDir === 'asc' ? ' ↑' : ' ↓'}</span>
          </div>

          {/* ---------------- table ---------------- */}
          <div className="lead-table-wrap">
            <table className="lead-table">
              <thead>
                <tr>
                  <th className="c-rank" onClick={() => setSort('rank_overall', 'asc')}>#{arrow('rank_overall')}</th>
                  <th className="c-name" onClick={() => setSort('name', 'asc')}>Builder{arrow('name')}</th>
                  <th className="c-score" onClick={() => setSort('fit_score')}>Fit{arrow('fit_score')}</th>
                  <th className="c-type">Product type</th>
                  <th className="c-geo">HQ / Region</th>
                  <th className="c-num" onClick={() => setSort('closings_2025')}>Closings ’25{arrow('closings_2025')}</th>
                  <th className="c-num" onClick={() => setSort('avg_selling_price')}>Avg price{arrow('avg_selling_price')}</th>
                  <th className="c-contact">Marketing lead</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => {
                  const tc = TIER_COLORS[l.fit_tier]
                  const cc = CONF_COLORS[l.contact_confidence] || CONF_COLORS.Pathway
                  const isOpen = open === l.rank_overall
                  return (
                    <Fragment key={l.rank_overall}>
                      <tr
                        className={'lead-row' + (isOpen ? ' open' : '')}
                        onClick={() => setOpen(isOpen ? null : l.rank_overall)}
                      >
                        <td className="c-rank">{l.rank_overall}</td>
                        <td className="c-name">
                          <div className="lead-bname">{l.name}</div>
                          <div className="lead-bsub mono">
                            {l.source_list}{l.source_rank ? ` #${l.source_rank}` : ''}{l.public ? ' · Public' : ''}
                          </div>
                        </td>
                        <td className="c-score">
                          <span className="lead-scorenum" style={{ color: tc.fg }}>{l.fit_score}</span>
                          <span className="lead-tier" style={{ background: tc.bg, color: tc.fg, borderColor: tc.bd }}>
                            {l.fit_tier.split(' — ')[0]}
                          </span>
                        </td>
                        <td className="c-type">{l.product_type}</td>
                        <td className="c-geo">
                          <span className="lead-state">{l.hq_state || '—'}</span>
                          <span className="lead-region mono">{l.region}</span>
                        </td>
                        <td className="c-num">{fmt(l.closings_2025)}</td>
                        <td className="c-num">{money(l.avg_selling_price)}</td>
                        <td className="c-contact">
                          {l.contact_name ? (
                            <div className="lead-cname">{l.contact_name}</div>
                          ) : (
                            <div className="lead-cname muted">Research target</div>
                          )}
                          <div className="lead-ctitle">{l.contact_title}</div>
                          <span className="lead-conf" style={{ background: cc.bg, color: cc.fg }}>{cc.label}</span>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="lead-detail-row">
                          <td colSpan={8}>
                            <div className="lead-detail">
                              <div className="lead-detail-col">
                                <div className="lead-dlabel mono">Fit score breakdown — {l.fit_score}/100</div>
                                <div className="lead-bar">
                                  {SCORE_PARTS.map(([key, label, max, color]) => (
                                    <div
                                      key={key}
                                      className="lead-bar-seg"
                                      style={{ width: (l.scores[key] / 100) * 100 + '%', background: color }}
                                      title={`${label}: ${l.scores[key]} / ${max}`}
                                    />
                                  ))}
                                </div>
                                <div className="lead-legend">
                                  {SCORE_PARTS.map(([key, label, max, color]) => (
                                    <span key={key} className="lead-leg">
                                      <span className="lead-dot sm" style={{ background: color }} />
                                      {label} <strong>{l.scores[key]}</strong>/{max}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="lead-detail-col narrow">
                                <div className="lead-dlabel mono">Why it qualifies</div>
                                <p className="lead-why">{whyText(l)}</p>
                              </div>

                              <div className="lead-detail-col narrow">
                                <div className="lead-dlabel mono">Outreach</div>
                                <div className="lead-links">
                                  {l.website && (
                                    <a href={'https://' + l.website} target="_blank" rel="noreferrer" className="lead-link">
                                      ↗ {l.website}
                                    </a>
                                  )}
                                  <a href={l.linkedin_search} target="_blank" rel="noreferrer" className="lead-link">
                                    ↗ LinkedIn — find marketing
                                  </a>
                                  <a href={l.find_url} target="_blank" rel="noreferrer" className="lead-link">
                                    ↗ Verify head of marketing
                                  </a>
                                  {l.contact_source && (
                                    <a href={l.contact_source} target="_blank" rel="noreferrer" className="lead-link">
                                      ↗ Contact source
                                    </a>
                                  )}
                                  {l.builder_profile_url && (
                                    <a href={l.builder_profile_url} target="_blank" rel="noreferrer" className="lead-link">
                                      ↗ Builder Magazine profile
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
            {filtered.length === 0 && <div className="lead-empty">No builders match these filters.</div>}
          </div>

          <p className="lead-foot mono">
            Sources: {leadsMeta.sources.join(' · ')}. Marketing contacts marked “Verified” come from company
            investor-relations pages or press releases; “Reported” come from professional profiles and should be
            confirmed before outreach; “Find via pathway” rows include a direct LinkedIn and search link to
            identify the current marketing lead. Generated {leadsMeta.generated}.
          </p>
        </div>
      </section>

      <style jsx>{styles}</style>
    </div>
  )
}

/* small select sub-component */
function Select({ label, value, setValue, options }) {
  return (
    <label className="lead-select">
      <span className="mono">{label}</span>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

/* generate a short qualification rationale */
function whyText(l) {
  const bits = []
  if (l.type_key.startsWith('custom') || l.type_key.startsWith('luxury'))
    bits.push('every home is configured to order, so each plan can be rendered across multiple finishes and structural options')
  else if (l.type_key === 'moveup_studio')
    bits.push('runs a design studio with deep finish and option menus — ideal for finish-flip rendering and floorplan films')
  else if (l.type_key === 'active_adult')
    bits.push('sells a lifestyle and amenities to pre-construction buyers — SceneSet’s lifestyle-film sweet spot')
  else
    bits.push('offers structural and finish options buyers personalize before build')
  if (l.closings_2025 >= 3000) bits.push(`high volume (${fmt(l.closings_2025)} closings in 2025) means many communities and floorplans to produce`)
  else if (l.closings_2025 >= 800) bits.push(`steady volume (${fmt(l.closings_2025)} closings) with a recurring launch pipeline`)
  if (l.avg_selling_price && l.avg_selling_price >= 600000) bits.push(`premium average price (${money(l.avg_selling_price)}) supports a real visual-marketing budget`)
  return bits.join('; ') + '.'
}

/* ------------------------------------------------------------------ */
/* styles                                                             */
/* ------------------------------------------------------------------ */
const styles = `
.leads { background: var(--bg-paper); }

/* hero */
.lead-hero { background: var(--bg-deep); color: var(--bg-paper); padding: 92px 40px 70px; }
.lead-hero-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:34px; }
.lead-hero-top .mono { color: var(--brass-400); font-size:.68rem; letter-spacing:.16em; }
.lead-title { font-size: clamp(2.1rem, 4.6vw, 4rem); line-height:1.04; margin-bottom:26px; }
.lead-title .serif-italic { font-style:italic; }
.lead-lede { max-width: 760px; color: var(--ink-300); font-size:1.06rem; line-height:1.65; }
.lead-stats { display:grid; grid-template-columns: repeat(4,1fr); gap:24px; margin-top:52px;
  border-top:1px solid rgba(255,255,255,.14); padding-top:30px; }
.lead-stat .stat-num { font-size:2.4rem; margin-bottom:4px; }
.lead-stat .mono { color: var(--ink-300); font-size:.7rem; letter-spacing:.12em; text-transform:uppercase; }

/* methodology */
.lead-method { padding: 70px 40px 50px; border-bottom:1px solid var(--rule); }
.lead-method-head { max-width: 820px; margin-bottom:38px; }
.lead-method-head .display { font-size: clamp(1.6rem,3vw,2.5rem); margin:12px 0 16px; }
.lead-method-sub { color: var(--ink-500); font-size:1rem; line-height:1.6; }
.lead-method-grid { display:grid; grid-template-columns: repeat(6,1fr); gap:14px; }
.lead-mcard { border:1px solid var(--rule); padding:18px 16px; background: var(--bg-card); border-radius:3px; }
.lead-mcard-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
.lead-dot { width:11px; height:11px; border-radius:50%; display:inline-block; }
.lead-dot.sm { width:8px; height:8px; margin-right:5px; }
.lead-mpts { font-family: var(--font-display); font-size:1.5rem; color: var(--ink-900); }
.lead-mlabel { font-weight:600; font-size:.92rem; margin-bottom:7px; color: var(--ink-900); }
.lead-mdesc { font-size:.74rem; color: var(--ink-500); line-height:1.45; }

/* controls */
.lead-body { padding: 40px 40px 90px; }
.lead-controls { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; margin-bottom:16px; }
.lead-search { flex:1 1 280px; min-width:220px; padding:11px 14px; border:1px solid var(--rule-strong);
  background: var(--bg-card); font-family: var(--font-sans); font-size:.9rem; border-radius:3px; color: var(--ink-900); }
.lead-search:focus { outline:none; border-color: var(--brass-500); }
.lead-select { display:flex; flex-direction:column; gap:5px; }
.lead-select .mono { font-size:.62rem; letter-spacing:.13em; text-transform:uppercase; color: var(--ink-400); }
.lead-select select { padding:10px 12px; border:1px solid var(--rule-strong); background: var(--bg-card);
  font-family: var(--font-sans); font-size:.85rem; border-radius:3px; color: var(--ink-900); cursor:pointer; min-width:130px; }
.lead-reset { padding:10px 16px; border:1px solid var(--ink-900); background:transparent; color: var(--ink-900);
  font-family: var(--font-mono); font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; border-radius:3px; }
.lead-reset:hover { background: var(--ink-900); color: var(--bg-paper); }
.lead-count { color: var(--ink-500); font-size:.74rem; letter-spacing:.05em; margin-bottom:14px; }
.lead-count strong { color: var(--ink-900); }
.lead-sortnote { color: var(--ink-400); text-transform:capitalize; }

/* table */
.lead-table-wrap { overflow-x:auto; border:1px solid var(--rule); border-radius:4px; background: var(--bg-card); }
.lead-table { width:100%; border-collapse:collapse; min-width:920px; }
.lead-table thead th { position:sticky; top:0; background: var(--bg-stone); z-index:2;
  font-family: var(--font-mono); font-size:.62rem; letter-spacing:.1em; text-transform:uppercase;
  color: var(--ink-700); text-align:left; padding:13px 14px; border-bottom:1px solid var(--rule-strong);
  cursor:pointer; white-space:nowrap; user-select:none; }
.lead-table thead th.c-type, .lead-table thead th.c-geo, .lead-table thead th.c-contact { cursor:default; }
.lead-row { border-bottom:1px solid var(--rule); cursor:pointer; transition: background .12s; }
.lead-row:hover { background: var(--bg-paper); }
.lead-row.open { background: var(--bg-paper); }
.lead-table td { padding:12px 14px; vertical-align:top; font-size:.86rem; color: var(--ink-700); }
.c-rank { width:42px; font-family: var(--font-mono); color: var(--ink-400); font-size:.8rem; }
.lead-bname { font-weight:600; color: var(--ink-900); font-size:.94rem; line-height:1.2; }
.lead-bsub { font-size:.62rem; color: var(--ink-400); margin-top:3px; letter-spacing:.04em; }
.c-score { white-space:nowrap; }
.lead-scorenum { font-family: var(--font-display); font-size:1.35rem; margin-right:8px; }
.lead-tier { display:inline-block; font-family: var(--font-mono); font-size:.58rem; letter-spacing:.06em;
  padding:2px 7px; border-radius:20px; border:1px solid; vertical-align:middle; }
.lead-state { font-weight:600; color: var(--ink-900); }
.lead-region { display:block; font-size:.62rem; color: var(--ink-400); margin-top:2px; }
.c-num { font-family: var(--font-mono); font-size:.82rem; white-space:nowrap; }
.lead-cname { font-weight:600; color: var(--ink-900); font-size:.84rem; }
.lead-cname.muted { color: var(--ink-400); font-weight:500; }
.lead-ctitle { font-size:.7rem; color: var(--ink-500); margin:2px 0 5px; }
.lead-conf { display:inline-block; font-family: var(--font-mono); font-size:.56rem; letter-spacing:.05em;
  padding:2px 7px; border-radius:20px; }

/* detail */
.lead-detail-row td { background: var(--bg-paper); border-bottom:1px solid var(--rule-strong); }
.lead-detail { display:grid; grid-template-columns: 1.4fr 1fr 0.9fr; gap:36px; padding:6px 6px 14px; }
.lead-dlabel { font-size:.6rem; letter-spacing:.12em; text-transform:uppercase; color: var(--ink-400); margin-bottom:12px; }
.lead-bar { display:flex; height:14px; width:100%; border-radius:3px; overflow:hidden; background: var(--bg-stone); }
.lead-bar-seg { height:100%; }
.lead-legend { display:flex; flex-wrap:wrap; gap:12px 16px; margin-top:14px; }
.lead-leg { font-size:.68rem; color: var(--ink-500); display:flex; align-items:center; }
.lead-leg strong { color: var(--ink-900); margin:0 2px 0 3px; }
.lead-why { font-size:.82rem; color: var(--ink-700); line-height:1.55; }
.lead-links { display:flex; flex-direction:column; gap:7px; }
.lead-link { font-size:.76rem; color: var(--brass-600); text-decoration:none; }
.lead-link:hover { color: var(--ink-900); text-decoration:underline; }
.lead-empty { padding:40px; text-align:center; color: var(--ink-400); font-size:.9rem; }
.lead-foot { margin-top:20px; font-size:.66rem; color: var(--ink-400); line-height:1.6; letter-spacing:.02em; max-width:1000px; }

@media (max-width: 900px) {
  .lead-method-grid { grid-template-columns: repeat(2,1fr); }
  .lead-stats { grid-template-columns: repeat(2,1fr); }
  .lead-detail { grid-template-columns: 1fr; gap:20px; }
  .lead-hero, .lead-method, .lead-body { padding-left:20px; padding-right:20px; }
}
`
