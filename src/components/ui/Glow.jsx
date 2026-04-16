import { useEffect, useRef } from 'react'

export function Glow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      el.style.setProperty('--x', `${x}%`)
      el.style.setProperty('--y', `${y}%`)
      el.style.setProperty('--x2', `${Math.min(95, x + 28)}%`)
      el.style.setProperty('--y2', `${Math.min(95, y + 38)}%`)
    }

    window.addEventListener('pointermove', handler, { passive: true })
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-glow opacity-95"
    />
  )
}

