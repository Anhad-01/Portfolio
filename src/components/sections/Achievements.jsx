import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { Section } from '../ui/Section.jsx'
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
  const orderedAchievements = ACHIEVEMENTS.map((achievement, index) => ({
    ...achievement,
    originalIndex: index,
  })).sort((a, b) => {
    if (a.originalIndex === current) return -1
    if (b.originalIndex === current) return 1
    return 0
  })

  return (
    <Section id="achievements" title="Recognition & Awards">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45 }}
            className="flex w-full gap-5 overflow-hidden py-2"
          >
            {orderedAchievements.map((achievement, index) => (
              <article
                key={achievement.title}
                className={`relative flex min-h-[24rem] shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-cosmic-abyss text-left shadow-glass transition-all duration-500 ${
                  index === 0
                    ? 'w-[82%] md:w-[48%] opacity-100'
                    : 'w-[72%] md:w-[32%] opacity-55'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/15 via-white/[0.04] to-neon-violet/10" />
                <div className="absolute inset-x-5 top-5 h-40 rounded-xl border border-dashed border-white/15 bg-cosmic-void/70">
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.24em] text-white/30">
                    Image
                  </div>
                </div>
                <div className="relative z-10 p-5 pt-52">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-neon-cyan/20 p-3 shrink-0">
                      {achievement.originalIndex === 0 ? (
                        <BookOpen className="h-5 w-5 text-neon-cyan" />
                      ) : (
                        <Trophy className="h-5 w-5 text-neon-cyan" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/20 text-neon-cyan">
                        {achievement.type}
                      </span>
                      <span className="ml-2 text-xs text-white/50">{achievement.time}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">{achievement.desc}</p>
                  <motion.a
                    href={achievement.link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
                  >
                    {achievement.link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </motion.a>
                </div>
              </article>
            ))}
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
