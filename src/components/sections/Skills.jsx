import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import LogoLoop from '../ui/LogoLoop.jsx'
import { SiGithub, SiDocker, SiArduino, SiPython, SiLangchain, SiTensorflow, SiScikitlearn, SiReact, SiStreamlit, SiJupyter } from 'react-icons/si'
import { fadeUp } from '../../lib/motion.js'

const techLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiArduino />, title: "Arduino", href: "https://arduino.cc" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiLangchain />, title: "LangChain", href: "https://langchain.com" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiScikitlearn />, title: "Scikit Learn", href: "https://scikit-learn.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiStreamlit />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiJupyter />, title: "Jupyter", href: "https://jupyter.org" },
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
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={60}
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