import { cn } from '../../lib/cn.js'

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-white/5',
        className
      )}
      {...props}
    />
  )
}

export function SectionSkeleton() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <Skeleton className="h-6 w-32 mb-2" />
      <Skeleton className="h-10 w-64 mb-12" />
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 rounded-xl">
      <Skeleton className="h-6 w-24 mb-4" />
      <Skeleton className="h-8 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  )
}