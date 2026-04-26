import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { Section } from '../ui/Section.jsx'
import { StarBorder } from '../ui/StarBorder.jsx'
import { ACHIEVEMENTS } from '../../data/content.js'

export function Achievements() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ACHIEVEMENTS.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [isPaused])

  const prev = () => setCurrent((current - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length)
  const next = () => setCurrent((current + 1) % ACHIEVEMENTS.length)

  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & Awards">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <StarBorder
              as="div"
              color={current % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
              className="w-full"
            >
              <div className="flex items-start gap-4 text-left">
                <div
                  className={`rounded-lg ${
                    current % 2 === 0 ? 'bg-neon-violet/20' : 'bg-neon-cyan/20'
                  } p-3 shrink-0`}
                >
                  {current === 0 ? (
                    <BookOpen
                      className={`h-6 w-6 ${
                        current === 0 ? 'text-neon-violet' : 'text-neon-cyan'
                      }`}
                    />
                  ) : (
                    <Trophy
                      className={`h-6 w-6 ${
                        current % 2 === 0 ? 'text-neon-violet' : 'text-neon-cyan'
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/50">{ACHIEVEMENTS[current].time}</span>
                  </div>
                  <h3 className={`mt-1 font-semibold text-white ${current === 0 ? 'text-base' : 'text-lg'}`}>
                    {ACHIEVEMENTS[current].title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{ACHIEVEMENTS[current].desc}</p>

                  <motion.a
                    href={ACHIEVEMENTS[current].link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
                  >
                    {ACHIEVEMENTS[current].link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </motion.a>
                </div>
              </div>
            </StarBorder>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          {ACHIEVEMENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'w-8 bg-neon-cyan' : 'w-2 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </Section>
  )
}