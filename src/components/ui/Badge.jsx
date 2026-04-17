import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function Badge({ children, variant = 'default', glowColor = 'violet', className }) {
  const glowColors = {
    violet:
      'shadow-[0_0_12px_rgba(139,92,246,0.5),inset_0_0_0_1px_rgba(139,92,246,0.2)]',
    cyan:
      'shadow-[0_0_12px_rgba(6,182,212,0.5),inset_0_0_0_1px_rgba(6,182,212,0.2)]',
    magenta:
      'shadow-[0_0_12px_rgba(217,70,239,0.5),inset_0_0_0_1px_rgba(217,70,239,0.2)]',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium',
        'bg-glass-gradient backdrop-blur-xl',
        'border border-white/10',
        'transition-all duration-300',
        glowColors[glowColor],
        className
      )}
    >
      {children}
    </motion.span>
  )
}