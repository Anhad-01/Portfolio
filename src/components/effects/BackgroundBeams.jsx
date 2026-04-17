import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function BackgroundBeams({ className, count = 5 }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.3, scaleX: 1 }}
          transition={{ duration: 2, delay: i * 0.2 }}
          className="absolute h-[1px] w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
            top: `${20 + i * 15}%`,
            transform: `rotate(${-15 + i * 8}deg)`,
            transformOrigin: 'left center',
          }}
        />
      ))}
    </div>
  )
}