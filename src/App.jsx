import { AnimatePresence, motion } from 'framer-motion'
import { CosmicBackground } from './components/effects/CosmicBackground.jsx'
import { Navigation } from './components/sections/Navigation.jsx'
import { ScrollProgress } from './components/sections/ScrollProgress.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { About } from './components/sections/About.jsx'
import { Skills } from './components/sections/Skills.jsx'
import { Experience } from './components/sections/Experience.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Achievements } from './components/sections/Achievements.jsx'
import { Blog } from './components/sections/Blog.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { Footer } from './components/sections/Footer.jsx'
import { SocialBar } from './components/ui/SocialBar.jsx'


export default function App() {
  return (
    <div className="min-h-screen bg-cosmic-void text-white">
      <CosmicBackground />
      <ScrollProgress />
      <Navigation />
      <SocialBar />

      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="page-content"
        >
          <Hero />

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neon-violet/5 to-transparent" />

            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Blog />
            <div className="relative py-6 sm:py-12" />
            <Contact />
            <Footer />
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}