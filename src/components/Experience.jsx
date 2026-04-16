import { motion } from 'framer-motion'
import { Section } from './ui/Section.jsx'
import { EXPERIENCE } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of impact"
      subtitle="Internships where I built agentic systems, secure pipelines, and performance-focused web experiences."
    >
      <motion.div
        className="relative"
        variants={stagger(0.14, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      >
        <div className="absolute left-4 top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-300/45 via-white/15 to-transparent sm:block" />

        <div className="grid gap-4">
          {EXPERIENCE.map((x, idx) => (
            <motion.div
              key={`${x.org}-${idx}`}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-xl transition hover:bg-white/7 hover:ring-white/18"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-70 transition group-hover:opacity-100" />

              <div className="relative">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="sm:pl-6">
                    <div className="hidden sm:absolute sm:left-[10px] sm:top-8 sm:block sm:h-3 sm:w-3 sm:rounded-full sm:bg-cyan-300/70 sm:shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                    <p className="text-sm font-medium text-white">
                      {x.role}{' '}
                      <span className="text-white/60">
                        @ {x.org}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-white/60">{x.time}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] text-white/70 ring-1 ring-white/12">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-white/75">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

