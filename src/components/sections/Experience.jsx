import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'
import { Section } from '../ui/Section.jsx'
import { StarBorder } from '../ui/StarBorder.jsx'
import { EXPERIENCE } from '../../data/content.js'
import { fadeUp, fadeRight, stagger } from '../../lib/motion.js'

export function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 35%'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section id="experience" title="Work History">
      <motion.div
        ref={containerRef}
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px overflow-hidden bg-white/10">
          <motion.div
            style={{ height }}
            className="w-full rounded-full bg-gradient-to-b from-neon-violet via-neon-cyan to-neon-magenta shadow-glow-cyan"
          />
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div key={`${exp.org}-${index}`} variants={fadeRight} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cosmic-abyss ring-2 ring-neon-cyan shadow-glow-cyan" />

              <StarBorder as="div" color="#06b6d4" className="w-full" contentClassName="p-4 px-6 text-left">
                <div className="flex items-start justify-between gap-4 flex-wrap text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-neon-cyan" />
                      <span className="text-sm text-neon-cyan">{exp.time}</span>
                    </div>
                    {exp.roleLink ? (
                      <a href={exp.roleLink} target="_blank" rel="noopener noreferrer" className="block text-xl font-semibold text-white hover:text-neon-cyan transition-colors">
                        {exp.role}
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    )}
                    {exp.website ? (
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-neon-cyan transition-colors">{exp.org}</a>
                    ) : (
                      <p className="text-white/60">{exp.org}</p>
                    )}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-left">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-neon-violet" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </StarBorder>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
