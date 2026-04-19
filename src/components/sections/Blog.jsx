import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, PenLine } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { BLOGPOSTS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'

export function Blog() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % BLOGPOSTS.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + BLOGPOSTS.length) % BLOGPOSTS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <Section id="blog" eyebrow="Blog" title="Recent Posts">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Card glowColor="violet" className="p-8 min-h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-white/40 mb-4">
                    <PenLine className="h-4 w-4" />
                    <span className="text-sm">{BLOGPOSTS[current].date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {BLOGPOSTS[current].title}
                  </h3>
                  <p className="text-white/60 text-lg">{BLOGPOSTS[current].excerpt}</p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-wrap gap-2">
                    {BLOGPOSTS[current].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={BLOGPOSTS[current].link.href}
                    className="text-neon-cyan hover:text-neon-violet transition-colors text-sm"
                  >
                    {BLOGPOSTS[current].link.label}
                  </a>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Previous blog"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Next blog"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {BLOGPOSTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-neon-violet'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to blog ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}