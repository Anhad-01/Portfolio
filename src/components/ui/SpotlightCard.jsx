import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function SpotlightCard({ children, className, glowColor = 'violet' }) {
  const ref = useRef(null)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMouseX(e.clientX - rect.left)
    setMouseY(e.clientY - rect.top)
  }

  const glowGradients = {
    violet: 'rgba(139,92,246,0.25)',
    cyan: 'rgba(6,182,212,0.25)',
    magenta: 'rgba(217,70,239,0.25)',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
        'backdrop-blur-xl',
        'border border-white/10',
        'shadow-glass',
        'group',
        className
      )}
    >
      {/* Spotlight gradient on mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowGradients[glowColor]}, transparent 40%)`,
        }}
      />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
