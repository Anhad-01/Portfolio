import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function AuroraBackground({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
      className={cn(
        'absolute inset-0 overflow-hidden animate-aurora',
        className
      )}
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.3), transparent),
          radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6,182,212,0.2), transparent),
          radial-gradient(ellipse 50% 30% at 0% 50%, rgba(217,70,239,0.15), transparent)
        `,
      }}
    />
  )
}