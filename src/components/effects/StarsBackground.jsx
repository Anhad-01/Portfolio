import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function StarsBackground({ count = 150, className }) {
  const stars = useMemo(
    () =>
      [...Array(count)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 3,
      })),
    [count]
  )

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}