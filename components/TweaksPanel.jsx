'use client'

import { useState } from 'react'
import { useTweaksContext } from '@/contexts/TweaksContext'

export default function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const { tweaks, setTweak } = useTweaksContext()

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 20, right: 20, zIndex: 200,
          width: 40, height: 40,
          background: 'var(--ink-900)', color: 'var(--bg-paper)',
          border: 'none', borderRadius: '50%',
          fontSize: 16, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.6, transition: 'opacity 200ms',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
        title="Design tweaks"
      >
        ⚙
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: 70, right: 20, zIndex: 200,
          width: 280, background: 'rgba(250,249,247,0.95)',
          backdropFilter: 'blur(24px)',
          border: '0.5px solid rgba(255,255,255,0.6)',
          borderRadius: 14,
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          padding: '16px 18px',
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          color: 'var(--ink-900)',
        }}>
          <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 16, letterSpacing: '0.02em' }}>
            Design Tweaks
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, color: 'var(--ink-500)' }}>
                <span>Brass hue</span>
                <span>{tweaks.accentHue}°</span>
              </div>
              <input
                type="range"
                min={20} max={80} step={1}
                value={tweaks.accentHue}
                onChange={e => setTweak('accentHue', Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--ink-500)' }}>Warmer cream</span>
              <button
                onClick={() => setTweak('deepMode', !tweaks.deepMode)}
                style={{
                  width: 32, height: 18, borderRadius: 999, border: 'none',
                  background: tweaks.deepMode ? '#34c759' : 'rgba(0,0,0,0.15)',
                  position: 'relative', cursor: 'pointer', transition: 'background 150ms',
                }}
              >
                <span style={{
                  position: 'absolute', top: 2, left: 2, width: 14, height: 14,
                  borderRadius: '50%', background: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
                  transition: 'transform 150ms',
                  transform: tweaks.deepMode ? 'translateX(14px)' : 'none',
                  display: 'block',
                }} />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--ink-500)' }}>Dense header</span>
              <button
                onClick={() => setTweak('denseHeader', !tweaks.denseHeader)}
                style={{
                  width: 32, height: 18, borderRadius: 999, border: 'none',
                  background: tweaks.denseHeader ? '#34c759' : 'rgba(0,0,0,0.15)',
                  position: 'relative', cursor: 'pointer', transition: 'background 150ms',
                }}
              >
                <span style={{
                  position: 'absolute', top: 2, left: 2, width: 14, height: 14,
                  borderRadius: '50%', background: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
                  transition: 'transform 150ms',
                  transform: tweaks.denseHeader ? 'translateX(14px)' : 'none',
                  display: 'block',
                }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
