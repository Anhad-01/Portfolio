import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { LINKS } from '../../data/content.js'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-cosmic-void/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/40"
          >
            © {new Date().getFullYear()} Anhad Mehrotra. Built with{' '}
            <Heart className="inline h-3.5 w-3.5 text-neon-magenta" /> and React.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-neon-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={LINKS.email}
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-neon-violet"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}