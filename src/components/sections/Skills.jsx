import { motion } from 'framer-motion'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { Badge } from '../ui/Badge.jsx'
import { SKILLS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'

const categoryColors = {
  Languages: 'violet',
  Libraries: 'cyan',
  'Tools & Web': 'magenta',
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Expertise">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {Object.entries(SKILLS).map(([category, skills]) => (
          <motion.div key={category} variants={fadeUp}>
            <h3 className="mb-4 text-sm font-medium tracking-wider text-white/50 uppercase">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} glowColor={categoryColors[category]}>
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}