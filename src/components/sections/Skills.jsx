import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import { OrbitingCircles } from '../ui/OrbitingCircles.jsx'
import { SKILLS } from '../../data/content.js'
import { fadeUp } from '../../lib/motion.js'

export function Skills() {
  const radii = [130, 230, 340]
  const durations = [30, 45, 60]

  return (
    <Section id="skills" eyebrow="Skills" title="Technical Expertise">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative flex h-[800px] w-full items-center justify-center overflow-hidden"
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white/60 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent">
          Tech Stack
        </span>

        {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
          <OrbitingCircles
            key={category}
            className="absolute inset-0"
            radius={radii[categoryIndex]}
            duration={durations[categoryIndex]}
            reverse={categoryIndex % 2 !== 0}
            iconSize={30}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-glow-violet ring-1 ring-white/20 backdrop-blur-md"
                style={{ width: 'max-content', height: 'auto', whiteSpace: 'nowrap' }}
              >
                {skill}
              </div>
            ))}
          </OrbitingCircles>
        ))}
      </motion.div>
    </Section>
  )
}