import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
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

        <p className="text-white/60 text-center max-w-md whitespace-nowrap">
          I'm always open to discussing AI projects, research collaborations, or opportunities in AI engineering.
        </p>

        <motion.a
          href={LINKS.email}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:ring-neon-cyan/50"
        >
          <Mail className="h-4 w-4 text-neon-cyan" />
          Send me an email
        </motion.a>
      </div>
    </Section>
  )
}