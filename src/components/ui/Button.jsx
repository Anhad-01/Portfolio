import { ArrowUpRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 disabled:pointer-events-none'

export function Button({
  as: As = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-white/90 shadow-glowCyan'
      : variant === 'glass'
        ? 'bg-white/8 text-white ring-1 ring-white/14 hover:bg-white/10 hover:ring-white/22 backdrop-blur-xl'
        : 'bg-transparent text-white/80 hover:text-white'

  return (
    <As className={`${base} ${styles} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </As>
  )
}

