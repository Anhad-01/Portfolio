import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { BLOGPOSTS } from '../../data/content.js'
import { Footer } from '../sections/Footer.jsx'
import { SocialBar } from '../ui/SocialBar.jsx'

export function BlogPost() {
  const { slug } = useParams()
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)

  const post = BLOGPOSTS.find(p => p.slug === slug)

  useEffect(() => {
    if (!slug) return
    fetch(`/blogs/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('text/html')) throw new Error('Not found')
        return res.text()
      })
      .then(text => {
        if (text.trimStart().startsWith('<!')) throw new Error('Not found')
        setMarkdown(text)
        setLoading(false)
      })
      .catch(() => {
        setMarkdown('# Blog post not found\n\nThe requested blog post could not be loaded.')
        setLoading(false)
      })
  }, [slug])

  // Estimate reading time
  const wordCount = markdown.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <div className="min-h-screen bg-cosmic-void text-white">
      {/* Header bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </nav>

      <SocialBar />

      {/* Blog content */}
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-neon-violet border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Meta info */}
            {post && (
              <div className="mb-10">
                <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {readingTime} min read
                  </span>
                </div>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-xl mb-8 opacity-80"
                  />
                )}
              </div>
            )}

            {/* Markdown content */}
            <article className="blog-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-white mt-12 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-white/90 mt-8 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-white/70 leading-relaxed mb-5 text-base">{children}</p>
                  ),
                  em: ({ children }) => (
                    <em className="text-white/50 italic">{children}</em>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-white/70">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-white/70">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-white/70 leading-relaxed">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-neon-violet/50 pl-5 my-6 text-white/60 italic">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className
                    if (isInline) {
                      return (
                        <code className="bg-white/10 text-neon-cyan px-1.5 py-0.5 rounded text-sm font-mono">
                          {children}
                        </code>
                      )
                    }
                    return (
                      <code className="block bg-white/5 border border-white/10 rounded-lg p-4 my-4 text-sm font-mono text-white/80 overflow-x-auto">
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 my-4 overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  hr: () => (
                    <hr className="border-white/10 my-8" />
                  ),
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noreferrer" className="text-neon-cyan hover:text-neon-violet underline underline-offset-2 transition-colors">
                      {children}
                    </a>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </article>

            {/* Bottom nav */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-neon-cyan transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
