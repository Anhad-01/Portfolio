import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function Card({ children, className, glowColor = 'violet' }) {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    setRotateX((e.clientY - centerY) / 20)
    setRotateY((e.clientX - centerX) / -20)
    setMouseX(e.clientX - rect.left)
    setMouseY(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
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
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
        'backdrop-blur-xl',
        'border border-white/10',
        'shadow-glass',
        'transition-transform duration-200',
        'group',
        className
      )}
    >
      {/* Spotlight gradient on mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${glowGradients[glowColor]}, transparent 40%)`,
        }}
      />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      {/* Content */}
      <div style={{ transform: 'translateZ(30px)' }} className="relative">
        {children}
      </div>
    </motion.div>
  )
}