import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Achievements } from './components/Achievements.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-ink-950 text-white">
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
          </div>

          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

