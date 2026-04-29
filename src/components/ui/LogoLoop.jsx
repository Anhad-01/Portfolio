import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LogoLoop({
  logos = [],
  speed = 50,
  direction = 'left',
  logoHeight = 60,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logos',
}) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    if (!trackRef.current || logos.length === 0) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth / 2

    const x = direction === 'left' ? 0 : -totalWidth

    gsap.set(track, { x })

    const tween = gsap.to(track, {
      x: direction === 'left' ? -totalWidth : 0,
      duration: totalWidth / speed,
      ease: 'none',
      repeat: -1,
    })

    const handleMouseEnter = () => {
      if (hoverSpeed > 0) {
        tween.timeScale(0)
      }
    }

    const handleMouseLeave = () => {
      if (hoverSpeed > 0) {
        tween.timeScale(1)
      }
    }

    const container = containerRef.current
    container?.addEventListener('mouseenter', handleMouseEnter)
    container?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      tween.kill()
      container?.removeEventListener('mouseenter', handleMouseEnter)
      container?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [logos, speed, direction, hoverSpeed])

  const renderLogo = (logo, index) => {
    const content = logo.src ? (
      <img
        src={logo.src}
        alt={logo.alt || logo.title}
        className="object-contain"
        style={{ height: logoHeight }}
      />
    ) : logo.node ? (
      <div style={{ height: logoHeight }} className="flex items-center justify-center text-white">
        {logo.node}
      </div>
    ) : (
      <div
        style={{ height: logoHeight }}
        className="flex items-center justify-center text-white font-medium"
      >
        {logo.title}
      </div>
    )

    return (
      <a
        key={index}
        href={logo.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-shrink-0 transition-transform ${scaleOnHover ? 'hover:scale-110' : ''}`}
        style={{ marginRight: gap }}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      ref={containerRef}
      style={{ height: logoHeight + 20, position: 'relative', overflow: 'hidden' }}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10"
          style={{
            background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
          }}
        />
      )}
      {fadeOut && (
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10"
          style={{
            background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
          }}
        />
      )}
      <div
        ref={trackRef}
        className="flex absolute top-1/2 -translate-y-1/2"
        style={{ width: 'max-content' }}
      >
        {[...logos, ...logos].map((logo, index) => renderLogo(logo, index))}
      </div>
    </div>
  )
}