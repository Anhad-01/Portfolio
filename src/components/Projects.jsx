import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Section } from './ui/Section.jsx'
import { PROJECTS } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'

function useTilt() {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rotY = (px - 0.5) * 10
    const rotX = -(py - 0.5) * 10
    setStyle({
      transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`,
    })
  }

  const onLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)' })

  return { ref, style, onMove, onLeave }
}

function Card({ item }) {
  const tilt = useTilt()
  const tagLine = useMemo(() => item.tags?.slice(0, 4) ?? [], [item.tags])

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/25 via-transparent to-cyan-400/20 blur-xl opacity-40" />
      <motion.div
        ref={tilt.ref}
        onPointerMove={tilt.onMove}
        onPointerLeave={tilt.onLeave}
        style={tilt.style}
        className="relative h-full overflow-hidden rounded-2xl bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-xl transition will-change-transform hover:ring-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-80" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/60">
                {item.type}
              </p>
              <h3 className="mt-3 text-base font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          </div>

          {item.highlights?.length ? (
            <div className="mt-4 grid gap-2">
              {item.highlights.slice(0, 3).map((h) => (
                <div
                  key={h}
                  className="rounded-xl bg-black/25 px-3 py-2 text-xs text-white/75 ring-1 ring-white/10"
                >
                  {h}
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {tagLine.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/7 px-3 py-1 text-[11px] text-white/70 ring-1 ring-white/12"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={item.link?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200/85 hover:text-cyan-200"
            >
              <ExternalLink className="h-4 w-4" />
              {item.link?.label ?? 'Link'}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects & Publications"
      title="Research, products, and prototypes"
      subtitle="Interactive cards with subtle 3D tilt and glow — highlighting outcomes, metrics, and links."
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={stagger(0.12, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      >
        {PROJECTS.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <Card item={item} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

