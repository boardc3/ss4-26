import ResponsiveVideo from './ResponsiveVideo'

export default function MediaFrame({
  src,
  poster,
  alt = '',
  badge,
  badgeBrass,
  metaTitle,
  metaSub,
  aspect = '16 / 9',
  video = false,
  className = '',
  style = {},
  priority = false,
  children,
}) {
  return (
    <div className={`img-frame ${className}`} style={{ aspectRatio: aspect, ...style }}>
      {video ? (
        <ResponsiveVideo src={src} poster={poster} title={alt || metaTitle || badge} priority={priority} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" />
      )}
      <span className="tick tl" />
      <span className="tick tr" />
      <span className="tick bl" />
      <span className="tick br" />
      {(badge || badgeBrass) && (
        <div className="img-badge">
          {badge && <span>{badge}</span>}
          {badgeBrass && <span className="brass">{badgeBrass}</span>}
        </div>
      )}
      {metaTitle && (
        <div className="img-meta">
          <div className="serif-italic" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: 4 }}>
            {metaTitle}
          </div>
          {metaSub && <div className="mono" style={{ color: 'rgba(255,255,255,0.75)' }}>{metaSub}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
