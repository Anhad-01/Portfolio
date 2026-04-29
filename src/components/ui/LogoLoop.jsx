import { useEffect, useRef, useState } from 'react'
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
  const animationRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!trackRef.current || logos.length === 0) return

    const track = trackRef.current
    
    track.style.visibility = 'hidden'
    document.body.offsetHeight
    track.style.visibility = 'visible'

    const setPositions = () => {
      const allLogos = track.children
      let totalWidth = 0
      
      for (let i = 0; i < allLogos.length; i++) {
        totalWidth += allLogos[i].offsetWidth + gap
      }
      
      const halfWidth = totalWidth / 2
      
      const x = direction === 'left' ? 0 : -halfWidth
      gsap.set(track, { x })
      
      if (animationRef.current) {
        animationRef.current.kill()
      }
      
      animationRef.current = gsap.to(track, {
        x: direction === 'left' ? -halfWidth : 0,
        duration: halfWidth / speed,
        ease: 'none',
        repeat: -1,
      })

      const handleMouseEnter = () => {
        if (animationRef.current) {
          gsap.to(animationRef.current, { timeScale: 0, overwrite: true })
        }
      }

      const handleMouseLeave = () => {
        if (animationRef.current) {
          gsap.to(animationRef.current, { timeScale: 1, overwrite: true })
        }
      }

      const container = containerRef.current
      container?.addEventListener('mouseenter', handleMouseEnter)
      container?.addEventListener('mouseleave', handleMouseLeave)

      setIsReady(true)
    }

    const timeout = setTimeout(setPositions, 50)
    return () => {
      clearTimeout(timeout)
      if (animationRef.current) animationRef.current.kill()
    }
  }, [logos, speed, direction, gap, hoverSpeed])

  const renderLogo = (logo, index) => {
    const content = logo.src ? (
      <img
        src={logo.src}
        alt={logo.alt || logo.title}
        className="object-contain"
        style={{ height: logoHeight }}
      />
    ) : logo.node ? (
      <div style={{ height: logoHeight, width: logoHeight }} className="flex items-center justify-center">
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

  // Duplicate logos to ensure smooth loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${isReady ? '' : 'invisible'}`}
      style={{ height: logoHeight + 20 }}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
          }}
        />
      )}
      {fadeOut && (
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
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
        {duplicatedLogos.map((logo, index) => renderLogo(logo, index))}
      </div>
    </div>
  )
}
