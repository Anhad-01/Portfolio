import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { CardSwap } from '../ui/CardSwap.jsx'
import { BLOGPOSTS } from '../../data/content.js'

export function Blog() {
  const cardStackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stackVersion, setStackVersion] = useState(0)
  const [initialStackIndex, setInitialStackIndex] = useState(0)

  const goPrev = () => {
    cardStackRef.current?.prev()
  }

  const goNext = () => {
    cardStackRef.current?.next()
  }

  const goTo = (index) => {
    setActiveIndex(index)
    setInitialStackIndex(index)
    setStackVersion((version) => version + 1)
  }

  return (
    <Section id="blog" title="Recent Blogs">
      <div className="relative w-full max-w-5xl mx-auto h-[580px] mt-24">
        <CardSwap
          key={stackVersion}
          ref={cardStackRef}
          width={560}
          height={350}
          pauseOnHover={true}
          initialIndex={initialStackIndex}
          onActiveIndexChange={setActiveIndex}
        >
          {BLOGPOSTS.map((post) => (
            <Card key={post.slug} className="p-5 h-[290px] flex flex-col w-full bg-cosmic-abyss border-white/10 shadow-glass overflow-hidden">
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

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-cosmic-void/80 px-4 py-3 shadow-glass backdrop-blur-xl">
          <button
            type="button"
            onClick={goPrev}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Previous blog"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {BLOGPOSTS.map((post, index) => (
              <button
                key={post.slug}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-neon-cyan'
                    : 'w-2.5 bg-white/25 hover:bg-white/45'
                }`}
                aria-label={`Show blog ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Next blog"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  )
}
