import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-cosmic-void/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/40"
          >
            © {new Date().getFullYear()} Anhad Mehrotra
          </motion.p>
        </div>
      </div>
    </footer>
  )
}