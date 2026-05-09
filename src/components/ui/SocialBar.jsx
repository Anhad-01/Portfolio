import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { SiX } from 'react-icons/si'
import { LINKS } from '../../data/content.js'

const socialLinks = [
  {
    label: 'GitHub',
    href: LINKS.github,
    icon: Github,
    external: true,
    hoverClass: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: LINKS.linkedin,
    icon: Linkedin,
    external: true,
    hoverClass: 'hover:text-neon-cyan',
  },
  {
    label: 'X',
    href: LINKS.x,
    icon: SiX,
    external: true,
    hoverClass: 'hover:text-white',
  },
  {
    label: 'Email',
    href: LINKS.email,
    icon: Mail,
    external: false,
    hoverClass: 'hover:text-neon-violet',
  },
]

export function SocialBar() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) {
        setShowBackToTop(false)
        return
      }

      setShowBackToTop(window.scrollY / scrollable > 0.88)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 hidden flex-col gap-4 sm:flex"
      >
        {socialLinks.map((item) => {
          const Icon = item.icon

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              aria-label={item.label}
              whileHover={{ scale: 1.1, x: -4 }}
              className={`rounded-full bg-white/5 p-3 text-white/60 transition-colors hover:bg-white/10 ${item.hoverClass}`}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          )
        })}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-cosmic-void/90 px-6 py-3 shadow-glass backdrop-blur-xl sm:hidden"
      >
        <div className="mx-auto flex max-w-sm items-center justify-around">
          {socialLinks.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                aria-label={item.label}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white/65 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </motion.footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-neon-cyan text-cosmic-void shadow-glow-cyan transition hover:bg-white sm:bottom-8 sm:right-24"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
