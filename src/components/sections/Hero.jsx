import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { TypewriterEffect } from '../effects/TypewriterEffect.jsx'
import { FloatingTechIcons } from '../effects/FloatingTechIcons.jsx'
import { LINKS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'
import Particles from '../effects/Particles.jsx'

const TYPED_WORDS = [
  'AI Engineer',
  'Deep Learning Developer',
  'Computer Vision Specialist',
  'Full-Stack AI Builder',
]

export function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <Container className="relative z-10 py-20 sm:py-32">
        <motion.div
          variants={stagger(0.12, 0.06)}
          initial="hidden"
          animate="show"
        >
          {/* Location badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-xs text-white/75 ring-1 ring-white/12 backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-neon-cyan" />
              <span>New Delhi, India</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
              <span className="text-neon-violet">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            variants={fadeUp}
            className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              Anhad Mehrotra
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUp}
            className="mt-4 text-xl font-medium sm:text-2xl"
          >
            <TypewriterEffect words={TYPED_WORDS} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-white/60"
          >
            Building intelligent systems through Deep Learning, Computer Vision,
            and innovative web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href={LINKS.resume}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-violet to-neon-cyan px-6 py-3 text-sm font-medium text-white shadow-glow-violet transition-shadow hover:shadow-glow-cyan"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>

            <motion.a
              href={LINKS.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white/80 ring-1 ring-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:ring-neon-cyan/50"
            >
              <Mail className="h-4 w-4 text-neon-cyan" />
              Contact Me
            </motion.a>

            <motion.a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white/80 ring-1 ring-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:ring-white/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>

            <motion.a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white/80 ring-1 ring-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:ring-neon-cyan/50"
            >
              <Linkedin className="h-4 w-4 text-neon-cyan" />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div variants={fadeUp} className="mt-16">
            <FloatingTechIcons />
          </motion.div>
        </motion.div>
      </Container>
    </header>
  )
}