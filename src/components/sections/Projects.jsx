import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import MagicBento from '../ui/MagicBento.jsx'
import { PROJECTS } from '../../data/content.js'
import { stagger } from '../../lib/motion.js'

export function Projects() {
  // Transform PROJECTS data into the format MagicBento expects
  const bentoCards = PROJECTS.map((project) => ({
    color: '#0D1B2F',
    title: project.title,
    description: project.desc,
    image: project.image || '',
    href: project.link.href,
    highlights: project.highlights,
  }))

  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <MagicBento
          cards={bentoCards}
          textAutoHide={true}
          enableStars={false}
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={0}
          glowColor="78, 163, 255"
          disableAnimations={false}
        />
      </motion.div>
    </Section>
  )
}