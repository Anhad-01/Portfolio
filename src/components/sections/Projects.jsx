import { motion } from 'framer-motion'
import { ExternalLink, FileText, Code2 } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { BentoGrid, BentoCard } from '../ui/BentoGrid.jsx'
import { PROJECTS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work">
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <BentoGrid className="lg:grid-rows-3">
          {PROJECTS.map((project, index) => (
            <BentoCard
              key={project.title}
              name={project.title}
              className={
                index === 0 || index === 3
                  ? "lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-1 lg:row-span-1"
              }
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-white/[0.01] pointer-events-none" />
              }
              Icon={project.type === 'Publication' ? FileText : Code2}
              description={project.desc}
              href={project.link.href}
              cta={project.link.label}
            >
              <div className="absolute bottom-16 left-6 right-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </motion.div>
    </Section>
  )
}