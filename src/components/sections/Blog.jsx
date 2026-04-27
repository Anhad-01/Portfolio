import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PenLine, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { CardSwap } from '../ui/CardSwap.jsx'
import { BLOGPOSTS } from '../../data/content.js'

export function Blog() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BLOGPOSTS.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [isPaused])

  const prev = () => setCurrent((current - 1 + BLOGPOSTS.length) % BLOGPOSTS.length)
  const next = () => setCurrent((current + 1) % BLOGPOSTS.length)

  return (
    <Section id="blog" title="Recent Blogs">
      <div
        className="relative w-full max-w-4xl mx-auto h-[500px] mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CardSwap width={500} height={350} pauseOnHover={true}>
          {BLOGPOSTS.map((post, i) => (
            <Card key={i} className="p-5 h-[280px] flex flex-col w-full bg-[#161b22] border-white/10 shadow-xl overflow-hidden">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 text-white/40 mb-1">
                  <PenLine className="h-3.5 w-3.5" />
                  <span className="text-xs">{post.date}</span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {post.title}
                </h3>
              </div>

              {post.image && (
                <div className="flex-shrink-0 mt-2 rounded-lg overflow-hidden h-[100px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col justify-end flex-1 mt-2">
                <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={post.link.href}
                    className="text-neon-cyan hover:text-neon-violet transition-colors text-xs"
                  >
                    {post.link.label}
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        {BLOGPOSTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-neon-cyan' : 'w-2 bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </Section>
  )
}