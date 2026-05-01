import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import { BentoGrid, BentoCard } from '../ui/BentoGrid.jsx'
import { PROJECTS } from '../../data/content.js'
import { stagger } from '../../lib/motion.js'

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <BentoGrid className="auto-rows-[18rem] grid-cols-1 md:grid-cols-6">
          {PROJECTS.map((project, index) => (
            <BentoCard
              key={project.title}
              name={project.title}
              description={project.desc}
              href={project.link.href}
              cta={project.link.label}
              className={
                index === 0 || index === 3
                  ? 'md:col-span-4'
                  : 'md:col-span-2'
              }
              background={
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover opacity-45 transition duration-500 group-hover:opacity-60"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-void via-cosmic-abyss/75 to-transparent" />
                </div>
              }
            />
          ))}
        </BentoGrid>
      </motion.div>
    </Section>
  )
}
