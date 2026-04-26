import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'
import { Section } from '../ui/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { CardSwap } from '../ui/CardSwap.jsx'
import { BLOGPOSTS } from '../../data/content.js'

export function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Recent Posts">
      <div className="relative w-full max-w-4xl mx-auto h-[500px] mt-10">
        <CardSwap width={500} height={350} pauseOnHover={true}>
          {BLOGPOSTS.map((post, i) => (
            <Card key={i} className="p-8 h-[280px] flex flex-col justify-between w-full bg-[#161b22] border-white/10 shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-4">
                  <PenLine className="h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-white/60 text-lg">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={post.link.href}
                  className="text-neon-cyan hover:text-neon-violet transition-colors text-sm"
                >
                  {post.link.label}
                </a>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
      <p className="text-center text-sm text-white/40 mt-4">Click the top card to swap it</p>
    </Section>
  )
}