import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from './ui/Section.jsx'
import { ACHIEVEMENTS } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Proof in the rankings"
      subtitle="Competitive results that reflect execution under constraints, collaboration, and technical depth."
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={stagger(0.12, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      >
        {ACHIEVEMENTS.map((a) => (
          <motion.div
            key={a.title}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{a.title}</p>
                  <p className="mt-1 text-xs text-white/60">{a.time}</p>
                </div>
                <div className="rounded-xl bg-white/8 p-2 ring-1 ring-white/12">
                  <Trophy className="h-5 w-5 text-cyan-200/85" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {a.desc}
              </p>
              {a.link?.href ? (
                <a
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-cyan-200/85 hover:text-cyan-200"
                >
                  {a.link.label}
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

