import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import LogoLoop from '../ui/LogoLoop.jsx'
import { SiGithub, SiDocker, SiArduino, SiPython, SiLangchain, SiTensorflow, SiScikitlearn, SiReact, SiStreamlit, SiJupyter } from 'react-icons/si'
import { fadeUp } from '../../lib/motion.js'

const techLogos = [
  { node: <SiGithub size={40} color="#ffffff" />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker size={40} color="#2496ED" />, title: "Docker", href: "https://docker.com" },
  { node: <SiArduino size={40} color="#00979C" />, title: "Arduino", href: "https://arduino.cc" },
  { node: <SiPython size={40} color="#3776AB" />, title: "Python", href: "https://python.org" },
  { node: <SiLangchain size={40} color="#326CE5" />, title: "LangChain", href: "https://langchain.com" },
  { node: <SiTensorflow size={40} color="#FF6F00" />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiScikitlearn size={40} color="#F7931E" />, title: "Scikit Learn", href: "https://scikit-learn.org" },
  { node: <SiReact size={40} color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiStreamlit size={40} color="#FF4B4B" />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiJupyter size={40} color="#F37626" />, title: "Jupyter", href: "https://jupyter.org" },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full -mx-4"
      >
        <div className="w-[calc(100%+2rem)] overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={56}
            gap={70}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#120F17"
            ariaLabel="Tech stack logos"
          />
        </div>
      </motion.div>
    </Section>
  )
}