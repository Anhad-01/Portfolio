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
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!trackRef.current || logos.length === 0) return

    const track = trackRef.current
    
    const setPositions = () => {
      const cloneCount = 3
      const totalLogos = logos.length * cloneCount
      const firstSetWidth = track.scrollWidth / cloneCount
      
      const x = direction === 'left' ? 0 : -firstSetWidth
      gsap.set(track, { x })

      const animate = () => {
        const currentX = gsap.getProperty(track, 'x')
        const targetX = direction === 'left' ? -firstSetWidth : 0
        
        if (Math.abs(currentX - targetX) < 1) {
          gsap.set(track, { x: direction === 'left' ? 0 : -firstSetWidth })
        }
        
        gsap.to(track, {
          x: targetX,
          duration: firstSetWidth / speed,
          ease: 'none',
          repeat: -1,
        })
      }

      animate()

      const handleMouseEnter = () => {
        gsap.globalTimeline.pause()
      }

      const handleMouseLeave = () => {
        gsap.globalTimeline.resume()
      }

      const container = containerRef.current
      container?.addEventListener('mouseenter', handleMouseEnter)
      container?.addEventListener('mouseleave', handleMouseLeave)

      setIsReady(true)

      return () => {
        gsap.killTweensOf(track)
        container?.removeEventListener('mouseenter', handleMouseEnter)
        container?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    const timeout = setTimeout(setPositions, 100)
    return () => clearTimeout(timeout)
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