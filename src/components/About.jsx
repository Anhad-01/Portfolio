import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import { Section } from './ui/Section.jsx'
import { fadeUp, stagger } from '../lib/motion.js'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Education & trajectory"
      subtitle="A high-velocity blend of mathematical innovation, applied AI, and product-minded web development."
    >
      <motion.div variants={stagger(0.1, 0.02)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20% 0px -20% 0px' }}>
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10" />
          <div className="relative">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl bg-white/8 p-2 ring-1 ring-white/12">
                <GraduationCap className="h-5 w-5 text-cyan-200/85" />
              </div>
              <div>
                <p className="text-white/85">
                  Pursuing a <span className="text-white">B.Tech</span> in{' '}
                  <span className="text-white">
                    Information Technology and Mathematical Innovations
                  </span>{' '}
                  at{' '}
                  <span className="text-white">
                    Cluster Innovation Centre, University of Delhi
                  </span>{' '}
                  <span className="text-white/60">(Nov 2022 – Present)</span>.
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-white/70 ring-1 ring-white/12">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-300/80" />
                    <span>Current CGPA</span>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-b from-white/14 to-white/6 p-[1px]">
                    <div className="rounded-2xl bg-black/35 px-4 py-3 text-center">
                      <p className="text-xs text-white/60">CGPA</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        9.64
                        <span className="text-base font-medium text-white/60">
                          /10
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      k: 'AI Engineering',
                      v: 'Modeling, evaluation, and deployment paths.',
                    },
                    {
                      k: 'Deep Learning',
                      v: 'Vision, language, and agentic pipelines.',
                    },
                    {
                      k: 'Web Systems',
                      v: 'Fast, animated, UX-driven interfaces.',
                    },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-xl bg-white/6 p-4 ring-1 ring-white/10"
                    >
                      <p className="text-sm font-medium text-white">{x.k}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/65">
                        {x.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

