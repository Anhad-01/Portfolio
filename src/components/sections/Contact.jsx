import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SiX } from 'react-icons/si'
import { Section } from '../ui/Section.jsx'
import { LINKS } from '../../data/content.js'
import PixelBlast from '../effects/PixelBlast.jsx'

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="relative flex flex-col items-center gap-6">
        {/* Hidden PixelBlast - kept for future use */}
        <div className="hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl rounded-xl border border-white/10 bg-cosmic-abyss/80 p-6 text-center shadow-glass backdrop-blur-xl"
        >
          <p className="text-white/60">
            I'm always open to discussing AI projects, research collaborations, or opportunities in AI engineering.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            {[
              { href: LINKS.email, label: 'Email', icon: Mail },
              { href: LINKS.github, label: 'GitHub', icon: Github },
              { href: LINKS.linkedin, label: 'LinkedIn', icon: Linkedin },
            ].map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-neon-cyan/50"
                >
                  <Icon className="h-4 w-4 text-neon-cyan" />
                  {item.label}
                </a>
              )
            })}
            <a
              href={LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-neon-cyan/50"
            >
              <SiX className="h-4 w-4 text-neon-cyan" />
              X
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
