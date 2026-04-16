import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from './Container.jsx'
import { fadeUp, stagger } from '../../lib/motion.js'

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })

  return (
    <section id={id} className={`relative py-14 sm:py-20 ${className}`}>
      <Container className={containerClassName}>
        <motion.div
          ref={ref}
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {(eyebrow || title || subtitle) && (
            <div className="mb-8">
              {eyebrow && (
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-medium tracking-[0.22em] text-white/60"
                >
                  {eyebrow}
                </motion.p>
              )}
              {title && (
                <motion.h2
                  variants={fadeUp}
                  className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                  <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    {title}
                  </span>
                </motion.h2>
              )}
              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          )}
          <motion.div variants={fadeUp}>{children}</motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

