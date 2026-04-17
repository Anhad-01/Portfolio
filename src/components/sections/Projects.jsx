import { motion } from 'framer-motion'
import { ExternalLink, FileText, Code2 } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { BorderBeam } from '../ui/BorderBeam.jsx'
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
        className="grid gap-6 md:grid-cols-2"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={`${project.title}-${index}`} variants={fadeUp}>
            <BorderBeam color={index % 3 === 0 ? 'violet' : index % 3 === 1 ? 'cyan' : 'magenta'}>
              <Card
                glowColor={index % 3 === 0 ? 'violet' : index % 3 === 1 ? 'cyan' : 'magenta'}
                className="p-6 h-full flex flex-col"
              >
                {/* Type badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      project.type === 'Publication'
                        ? 'bg-neon-magenta/20 text-neon-magenta'
                        : 'bg-neon-violet/20 text-neon-violet'
                    }`}
                  >
                    {project.type === 'Publication' ? (
                      <FileText className="h-3 w-3" />
                    ) : (
                      <Code2 className="h-3 w-3" />
                    )}
                    {project.type}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-lg font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 flex-1">{project.desc}</p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
                >
                  {project.link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </Card>
            </BorderBeam>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}