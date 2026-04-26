import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function Card({ children, className }) {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    setRotateX((e.clientY - centerY) / 20)
    setRotateY((e.clientX - centerX) / -20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
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


      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      {/* Content */}
      <div style={{ transform: 'translateZ(30px)' }} className="relative">
        {children}
      </div>
    </motion.div>
  )
}