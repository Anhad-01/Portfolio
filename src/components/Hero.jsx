import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import { Container } from './ui/Container.jsx'
import { Glow } from './ui/Glow.jsx'
import { LINKS } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <Glow />

      <div className="absolute inset-0 -z-20 opacity-[0.7] [background-size:48px_48px] bg-grid" />
      <div className="absolute inset-x-0 top-[-220px] -z-20 mx-auto h-[520px] w-[820px] rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute right-[-240px] top-[120px] -z-20 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />

      <Container className="relative py-16 sm:py-24">
        <motion.div
          variants={stagger(0.12, 0.06)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs text-white/75 ring-1 ring-white/12 backdrop-blur-xl">
            <MapPin className="h-3.5 w-3.5 text-cyan-300/80" />
            <span>New Delhi, India</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
            <span className="text-white/60">AI Engineer & Developer</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              Anhad Mehrotra
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
          >
            Building intelligent systems through Deep Learning, Computer Vision,
            and innovative web technologies.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={LINKS.resume}
              variant="primary"
              className="w-full sm:w-auto"
              download
            >
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </span>
            </Button>

            <Button
              href={LINKS.email}
              variant="glass"
              className="w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-200/85" />
                Contact Me
              </span>
            </Button>

            <Button
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              variant="glass"
              className="w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            </Button>

            <Button
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="glass"
              className="w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </span>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 rounded-2xl bg-white/6 p-5 ring-1 ring-white/12 backdrop-blur-xl sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.22em] text-white/60">
                  Focus
                </p>
                <p className="mt-2 text-sm text-white/80">
                  AI • Deep Learning • Computer Vision • Web Development
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-indigo-500/20 p-[1px]">
                <div className="relative rounded-xl bg-black/40 px-4 py-3 text-sm text-white/80">
                  <div className="absolute inset-y-0 left-0 w-28 -translate-x-16 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-sm animate-shimmer" />
                  <span className="relative">
                    Futuristic glass UI with subtle glow + motion
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  )
}

