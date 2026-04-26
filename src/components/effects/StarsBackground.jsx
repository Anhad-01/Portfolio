import { useMemo } from 'react'
import { cn } from '../../lib/cn'

export function StarsBackground({ count = 40, className }) {
  const stars = useMemo(
    () =>
      [...Array(count)].map((_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        delay: (Math.random() * 3).toFixed(1),
        duration: (Math.random() * 2 + 2).toFixed(1),
      })),
    [count]
  )

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-animate absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}