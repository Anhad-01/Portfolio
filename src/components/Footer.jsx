import { Github, Linkedin, Mail } from 'lucide-react'
import { Container } from './ui/Container.jsx'
import { LINKS } from '../data/content.js'

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Anhad Mehrotra</p>
          <p className="mt-1 text-xs text-white/60">
            AI Engineer & Developer • New Delhi, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={LINKS.email}
            className="inline-flex items-center gap-2 rounded-xl bg-white/6 px-3 py-2 text-xs text-white/75 ring-1 ring-white/12 hover:bg-white/8"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/6 px-3 py-2 text-xs text-white/75 ring-1 ring-white/12 hover:bg-white/8"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/6 px-3 py-2 text-xs text-white/75 ring-1 ring-white/12 hover:bg-white/8"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  )
}

