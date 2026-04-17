import { cn } from '../../lib/cn'
import { StarsBackground } from './StarsBackground'
import { AuroraBackground } from './AuroraBackground'
import { GridPattern } from './GridPattern'

export function CosmicBackground({ className }) {
  return (
    <div className={cn('fixed inset-0 -z-10 overflow-hidden bg-cosmic-void', className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_50%)]" />

      {/* Aurora layers */}
      <AuroraBackground className="opacity-30" />

      {/* Stars */}
      <StarsBackground count={150} />

      {/* Grid overlay */}
      <GridPattern className="opacity-50" size={60} lineColor="rgba(139,92,246,0.05)" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cosmic-void to-transparent" />
    </div>
  )
}