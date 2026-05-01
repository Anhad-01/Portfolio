import { motion } from 'framer-motion'
import { Mail, MapPin, Download } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { TypewriterEffect } from '../effects/TypewriterEffect.jsx'
import { FloatingTechIcons } from '../effects/FloatingTechIcons.jsx'
import { LINKS } from '../../data/content.js'
import { fadeUp, stagger } from '../../lib/motion.js'
import Particles from '../effects/Particles.jsx'

const TYPED_WORDS = [
  'Agentic AI Expert',
  'Automations Specialist',
  'Full-Stack Developer',
]

export function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Particles background */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          particleColors={["#7FBFFF", "#A7D8FF", "#EAF2FF"]}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <Container className="relative z-10 py-24 sm:py-40">
        <motion.div
          variants={stagger(0.12, 0.06)}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            className="pointer-events-none absolute right-8 top-10 hidden lg:block"
          >
            <div className="relative h-72 w-72 rounded-full border border-white/15 bg-white/[0.04] p-2 shadow-glass">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/25 via-transparent to-neon-violet/25 blur-xl" />
              <img
                src="/images/profile/profile3.png"
                alt="Anhad Mehrotra"
                className="relative h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Location badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-xs text-white/75 ring-1 ring-white/12 backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-neon-cyan" />
              <span>New Delhi, India</span>
              <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
              {/* <span className="text-neon-violet">Available for opportunities</span> */}
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
          {/* <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-white/60 whitespace-nowrap"
          >
            Building intelligent systems through Agentic AI, NLP,
            and innovative web technologies.
          </motion.p> */}


          {/* Description */}
          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-xl space-y-2 text-white/65"
          >
            {[
              'Passionate about Artificial Intelligence, Machine Learning, Computer Vision, and NLP.',
              'Experienced in deep learning pipelines, semantic search, image segmentation, IoT, and Agentic AI systems.',
              'Always excited to collaborate on projects that apply AI to real-world challenges and push the boundaries of research.',
            ].map((line) => (
              <p key={line} className="flex gap-3 leading-7">
                <span className="mt-0.5 shrink-0 text-neon-cyan">&gt;</span>
                <span>{line}</span>
              </p>
            ))}
          </motion.div>

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
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:ring-neon-violet/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.a
              href={LINKS.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-6 py-3 text-sm font-semibold text-cosmic-void transition-all hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Floating tech icons */}
          {/* <motion.div variants={fadeUp} className="mt-16">
            <FloatingTechIcons />
          </motion.div> */}
        </motion.div>
      </Container>
    </header>
  )
}
