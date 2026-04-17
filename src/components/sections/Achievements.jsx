import { motion } from 'framer-motion'
import { Trophy, ExternalLink } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { ACHIEVEMENTS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & Awards">
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid gap-6 md:grid-cols-2"
      >
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div key={`${achievement.title}-${index}`} variants={fadeUp}>
            <Card
              glowColor={index % 2 === 0 ? 'violet' : 'cyan'}
              className="p-6 h-full"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`rounded-lg ${
                    index % 2 === 0 ? 'bg-neon-violet/20' : 'bg-neon-cyan/20'
                  } p-3 shrink-0`}
                >
                  <Trophy
                    className={`h-6 w-6 ${
                      index % 2 === 0 ? 'text-neon-violet' : 'text-neon-cyan'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/50">{achievement.time}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{achievement.desc}</p>

                  <motion.a
                    href={achievement.link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
                  >
                    {achievement.link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}