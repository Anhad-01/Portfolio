import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SiX } from 'react-icons/si'
import { LINKS } from '../../data/content.js'

export function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
    >
      <motion.a
        href={LINKS.github}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        className="rounded-full bg-white/5 p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <Github className="h-5 w-5" />
      </motion.a>
      <motion.a
        href={LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        className="rounded-full bg-white/5 p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-neon-cyan"
      >
        <Linkedin className="h-5 w-5" />
      </motion.a>
      <motion.a
        href={LINKS.email}
        whileHover={{ scale: 1.1, x: -4 }}
        className="rounded-full bg-white/5 p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-neon-violet"
      >
        <Mail className="h-5 w-5" />
      </motion.a>
      <motion.a
        href={LINKS.x}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, x: -4 }}
        className="rounded-full bg-white/5 p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <SiX className="h-5 w-5" />
      </motion.a>
    </motion.div>
  )
}
