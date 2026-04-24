// Header + Footer chrome — warm bright commercial edition
const NAV = [
  { key: 'home',        label: 'Overview' },
  { key: 'commercial',  label: 'Developments' },
  { key: 'residential', label: 'Interiors' },
  { key: 'technical',   label: 'Process' },
  { key: 'anthology',   label: 'Portfolio' },
  { key: 'studio',      label: 'Studio' },
];

const Header = ({ page, setPage, dense }) => {
  return (
    <header className={`header ${dense ? 'dense' : ''}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-mark"></div>
          <div>Sceneset<span style={{ color: 'var(--brass-500)' }}>.</span>AI</div>
        </div>
        <nav className="main-nav">
          <ul>
            {NAV.map(n => (
              <li key={n.key}>
                <a className={page === n.key ? 'active' : ''} onClick={() => setPage(n.key)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div className="mono" style={{ color: 'var(--ink-500)', fontSize: '0.68rem' }}>MIA · NYC · LON</div>
          <button className="btn btn-primary" onClick={() => setPage('studio')} style={{ padding: '10px 18px', fontSize: '0.72rem' }}>
            Commission
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ setPage }) => {
  return (
    <footer className="footer-deep">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 60, marginBottom: 80 }}>
          <div>
            <div className="logo" style={{ color: 'var(--bg-paper)', marginBottom: 24 }}>
              <div className="logo-mark" style={{ background: 'var(--brass-400)' }}></div>
              <div style={{ color: 'var(--bg-paper)' }}>Sceneset<span style={{ color: 'var(--brass-400)' }}>.</span>AI</div>
            </div>
            <p className="pullquote" style={{ color: 'var(--ink-300)', maxWidth: 420, fontSize: '1.2rem' }}>
              The visualization studio for developers, general contractors, and the architects they commission.
            </p>
          </div>
          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Services</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li><a onClick={() => setPage('commercial')}>Developments</a></li>
              <li><a onClick={() => setPage('residential')}>Interior Fit-out</a></li>
              <li><a onClick={() => setPage('technical')}>Process · Pipeline</a></li>
              <li><a onClick={() => setPage('anthology')}>Full Portfolio</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Studios</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li>Miami · 2401 Biscayne</li>
              <li>New York · 155 Spring</li>
              <li>London · 42 Berkeley</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow cream" style={{ marginBottom: 20, color: 'var(--brass-400)' }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              <li>studio@sceneset.ai</li>
              <li>+1 305 · 0 · 2401</li>
              <li className="mono" style={{ marginTop: 8 }}>MON–FRI · 08–20 ET</li>
            </ul>
          </div>
        </div>
        <div className="divider" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '32px 0 0', alignItems: 'center' }}>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>© 2026 SCENESET VISUALIZATION CO. · EST 2021</div>
          <div className="mono" style={{ color: 'var(--ink-300)' }}>RENDER · STAGE · PREVIEW · DELIVER</div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Header, Footer });
