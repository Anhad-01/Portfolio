import { cn } from '../../lib/cn'

export function BorderBeam({ children, className, color = 'violet' }) {
  const colors = {
    violet: 'rgba(139,92,246,0.5)',
    cyan: 'rgba(6,182,212,0.5)',
    magenta: 'rgba(217,70,239,0.5)',
  }

  return (
    <div className={cn('relative group', className)}>
      {/* Animated border beam */}
      <div className="absolute -inset-px rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 animate-border-beam"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors[color]}, transparent)`,
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  )
}