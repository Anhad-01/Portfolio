import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Code2, Layers, Zap } from 'lucide-react'
import { cn } from '../../lib/cn'

const techItems = [
  { icon: Brain, label: 'AI/ML', color: 'text-neon-violet' },
  { icon: Cpu, label: 'Deep Learning', color: 'text-neon-cyan' },
  { icon: Database, label: 'Data Science', color: 'text-neon-magenta' },
  { icon: Code2, label: 'Full-Stack', color: 'text-neon-violet' },
  { icon: Layers, label: 'Computer Vision', color: 'text-neon-cyan' },
  { icon: Zap, label: 'NLP/LLMs', color: 'text-neon-magenta' },
]

export function FloatingTechIcons({ className }) {
  return (
    <div className={cn('flex flex-wrap gap-4 justify-center', className)}>
      {techItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <item.icon className={cn('w-5 h-5', item.color)} />
          <span className="text-sm text-white/70">{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}