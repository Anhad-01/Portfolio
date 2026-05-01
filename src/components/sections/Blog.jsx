import { PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { CardSwap } from '../ui/CardSwap.jsx'
import { BLOGPOSTS } from '../../data/content.js'

export function Blog() {
  return (
    <Section id="blog" title="Recent Blogs">
      <div className="relative w-full max-w-5xl mx-auto h-[500px] mt-10">
        <CardSwap width={560} height={350} pauseOnHover={true}>
          {BLOGPOSTS.map((post, i) => (
            <Card key={i} className="p-5 h-[290px] flex flex-col w-full bg-cosmic-abyss border-white/10 shadow-glass overflow-hidden">
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
    </Section>
  )
}
