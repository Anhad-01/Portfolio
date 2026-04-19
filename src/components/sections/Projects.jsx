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
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-xl ${
              index === 0
                ? 'md:col-span-2 md:row-span-2'
                : index === 1
                ? 'md:col-span-2'
                : 'md:col-span-1'
            }`}
          >
            <BorderBeam
              color={index % 3 === 0 ? 'violet' : index % 3 === 1 ? 'cyan' : 'magenta'}
              className="h-full w-full"
            >
              <Card
                glowColor={index % 3 === 0 ? 'violet' : index % 3 === 1 ? 'cyan' : 'magenta'}
                className="h-full p-5 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
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

                <h3 className="text-lg font-semibold text-white leading-tight line-clamp-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 flex-1 line-clamp-3">
                  {project.desc}
                </p>

                {project.highlights && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
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