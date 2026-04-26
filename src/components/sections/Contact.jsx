import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { BackgroundBeams } from '../effects/BackgroundBeams.jsx'
import { LINKS } from '../../data/content.js'
import { fadeUp } from '../../lib/motion.js'
import PixelBlast from '../effects/PixelBlast.jsx'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: LINKS.email,
    color: 'violet',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: LINKS.linkedin,
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: LINKS.github,
    color: 'magenta',
  },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect">
      <div className="relative">
        {/* PixelBlast background */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#ffffff"
            patternScale={2}
            patternDensity={0.2}
            pixelSizeJitter={0}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            speed={0.5}
            edgeFade={0.25}
            transparent={true}
            autoPauseOffscreen={false}
          />
        </div>

        {/* Background Beams */}
        <BackgroundBeams className="opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Card glowColor="violet" className="max-w-xl mx-auto p-8 text-center relative">
            {/* Solid background to block PixelBlast behind the card */}
            <div className="absolute inset-0 bg-cosmic-abyss/95 rounded-xl" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex rounded-full bg-neon-violet/20 p-4 mb-6 relative"
            >
              <Mail className="h-8 w-8 text-neon-violet" />
            </motion.div>

            <h3 className="text-2xl font-semibold text-white relative">Get in Touch</h3>
            <p className="mt-4 text-white/60 relative">
              I'm always open to discussing AI projects, research collaborations,
              or opportunities in AI engineering.
            </p>

            <div className="mt-8 flex flex-col gap-4 relative">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 rounded-lg bg-white/5 px-6 py-4 text-left transition-all hover:bg-white/10 relative ${
                    link.color === 'violet'
                      ? 'hover:ring-neon-violet/50'
                      : link.color === 'cyan'
                      ? 'hover:ring-neon-cyan/50'
                      : 'hover:ring-neon-magenta/50'
                  } hover:ring-1`}
                >
                  <link.icon
                    className={`h-5 w-5 ${
                      link.color === 'violet'
                        ? 'text-neon-violet'
                        : link.color === 'cyan'
                        ? 'text-neon-cyan'
                        : 'text-neon-magenta'
                    }`}
                  />
                  <span className="flex-1 font-medium text-white/80">{link.label}</span>
                  <ExternalLink className="h-4 w-4 text-white/30" />
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}