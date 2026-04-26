import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { SpotlightCard } from '../ui/SpotlightCard.jsx'
import { fadeUp, stagger } from '../../lib/motion.js'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Education & Background">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid gap-6 md:grid-cols-2"
      >
        {/* Education Card */}
        <motion.div variants={fadeUp}>
          <SpotlightCard glowColor="violet" className="p-6 h-full">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-neon-violet/20 p-3">
                <GraduationCap className="h-6 w-6 text-neon-violet" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <p className="mt-1 text-sm text-white/60">
                  B.Tech in Information Technology and Mathematical Innovations
                </p>
                <p className="text-sm text-neon-cyan">
                  Cluster Innovation Centre, University of Delhi
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-neon-violet/20 px-3 py-1 text-xs font-medium text-neon-violet">
                    CGPA: 9.64/10
                  </span>
                  <span className="text-xs text-white/40">2022 - 2026</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Quick Facts Card */}
        <motion.div variants={fadeUp}>
          <SpotlightCard glowColor="cyan" className="p-6 h-full">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-neon-cyan/20 p-3">
                <Award className="h-6 w-6 text-neon-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-violet" />
                    Published research in Cryobiology (Elsevier, 2026)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                    Top 31 in TATA Technologies Hackathon (2,800+ teams)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta" />
                    Top 20 in Hack The Future (1,000+ teams)
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Focus Areas */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <SpotlightCard glowColor="magenta" className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-neon-magenta/20 p-3">
                <BookOpen className="h-6 w-6 text-neon-magenta" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
                <p className="mt-3 text-sm text-white/60">
                  Passionate about pushing the boundaries of artificial intelligence and creating
                  impactful solutions through cutting-edge technology.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Deep Learning', 'NLP', 'Computer Vision', 'Agentic AI', 'LLMs', 'Full-Stack Development'].map(
                    (area) => (
                      <span
                        key={area}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>
    </Section>
  )
}