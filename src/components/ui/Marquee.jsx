import { cn } from '../../lib/cn.js'

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = '28s',
}) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:2.5rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={{ '--duration': duration }}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            vertical
              ? 'animate-marquee-vertical flex-col'
              : 'animate-marquee flex-row',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]'
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
