import { cn } from '../../lib/cn'

export function GridPattern({ className, size = 40, lineColor = 'rgba(255,255,255,0.03)' }) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}