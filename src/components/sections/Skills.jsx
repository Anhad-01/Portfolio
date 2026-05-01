import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import { Marquee } from '../ui/Marquee.jsx'
import { SiGithub, SiDocker, SiArduino, SiPython, SiLangchain, SiTensorflow, SiScikitlearn, SiReact, SiStreamlit, SiJupyter, SiFastapi, SiCrewai, SiPostgresql, SiMysql, SiComsol, SiN8N } from 'react-icons/si'
import { fadeUp } from '../../lib/motion.js'

const techLogos = [
  { node: <SiGithub size={60} color="#ffffff" />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker size={60} color="#2496Ed" />, title: "Docker", href: "https://docker.com" },
  { node: <SiArduino size={60} color="#00979C" />, title: "Arduino", href: "https://arduino.cc" },
  { node: <SiPython size={60} color="#3776AB" />, title: "Python", href: "https://python.org" },
  { node: <SiLangchain size={60} color="#326CE5" />, title: "LangChain", href: "https://langchain.com" },
  { node: <SiTensorflow size={60} color="#FF6F00" />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiScikitlearn size={60} color="#F7931E" />, title: "Scikit Learn", href: "https://scikit-learn.org" },
  { node: <SiReact size={60} color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiStreamlit size={60} color="#FF4B4B" />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiJupyter size={60} color="#F37626" />, title: "Jupyter", href: "https://jupyter.org" },
  { node: <SiFastapi size={60} color="#009688" />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiCrewai size={60} color="#FF5A1F" />, title: "CrewAI", href: "https://www.crewai.com" },
  { node: <SiPostgresql size={60} color="#4169E1" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql size={60} color="#4479A1" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <span className="text-sm font-bold tracking-normal text-[#FF8C00]">MATLAB</span>, title: "MATLAB", href: "https://www.mathworks.com/products/matlab.html" },
  { node: <SiComsol size={60} color="#368CCB" />, title: "COMSOL", href: "https://www.comsol.com" },
  { node: <SiN8N size={60} color="#EA4B71" />, title: "n8n", href: "https://n8n.io" },
]

const logoRows = [
  techLogos.slice(0, Math.ceil(techLogos.length / 2)),
  techLogos.slice(Math.ceil(techLogos.length / 2)),
]

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full"
      >
        <div className="relative w-full space-y-5 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {logoRows.map((row, rowIndex) => (
            <Marquee
              key={rowIndex}
              pauseOnHover
              reverse={rowIndex === 1}
              duration={rowIndex === 0 ? '48s' : '54s'}
              className="[--gap:3.25rem]"
              aria-label={`Tech stack logos row ${rowIndex + 1}`}
            >
              {row.map((logo) => (
                  <a
                    key={logo.title}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={logo.title}
                    className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-2 text-white/70 transition hover:-translate-y-1 hover:text-white"
                  >
                  <span className="flex h-16 items-center justify-center">{logo.node}</span>
                  <span className="max-w-full px-1 text-center text-xs leading-tight">{logo.title}</span>
                </a>
              ))}
            </Marquee>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
