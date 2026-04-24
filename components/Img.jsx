export default function Img({
  src,
  alt = '',
  badge,
  badgeDark,
  badgeBrass,
  metaTitle,
  metaSub,
  aspect,
  play,
  className = '',
  style = {},
  children,
  ticks = true,
}) {
  return (
    <div className={`img-frame ${className}`} style={{ aspectRatio: aspect, ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      {ticks && (
        <>
          <span className="tick tl" />
          <span className="tick tr" />
          <span className="tick bl" />
          <span className="tick br" />
        </>
      )}
      {(badge || badgeDark || badgeBrass) && (
        <div className="img-badge">
          {badge && <span>{badge}</span>}
          {badgeDark && <span className="dark">{badgeDark}</span>}
          {badgeBrass && <span className="brass">{badgeBrass}</span>}
        </div>
      )}
      {play && <div className="play-icon" />}
      {metaTitle && (
        <div className="img-meta">
          <div className="serif-italic" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: 4 }}>
            {metaTitle}
          </div>
          {metaSub && (
            <div className="mono" style={{ color: 'rgba(255,255,255,0.75)' }}>{metaSub}</div>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
