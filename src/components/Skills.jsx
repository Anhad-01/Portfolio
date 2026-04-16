import { motion } from 'framer-motion'
import { Section } from './ui/Section.jsx'
import { SKILLS } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'

function Pill({ children, delay = 0 }) {
  return (
    <motion.span
      variants={fadeUp}
      transition={{ delay }}
      className="inline-flex items-center rounded-full bg-white/7 px-3 py-1.5 text-xs text-white/75 ring-1 ring-white/12 shadow-[0_0_0_1px_rgba(34,211,238,0.12),_0_0_18px_rgba(34,211,238,0.08)] backdrop-blur-xl"
    >
      {children}
    </motion.span>
  )
}

export function Skills() {
  const groups = Object.entries(SKILLS)

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical stack"
      subtitle="A toolkit optimized for building intelligent systems, shipping reliable pipelines, and crafting modern web experiences."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {groups.map(([group, items], gi) => (
          <div
            key={group}
            className="relative overflow-hidden rounded-2xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10" />
            <div className="relative">
              <p className="text-sm font-medium text-white">{group}</p>
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                variants={stagger(0.06, 0.02)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              >
                {items.map((s, i) => (
                  <motion.div
                    key={s}
                    className={i % 7 === 0 ? 'animate-float' : ''}
                    style={{
                      animationDelay: `${(i % 6) * 0.25 + gi * 0.1}s`,
                    }}
                  >
                    <Pill delay={0.0}>{s}</Pill>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

