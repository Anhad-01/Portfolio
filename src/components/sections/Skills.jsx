import { motion } from 'framer-motion'
import { Section } from '../ui/Section.jsx'
import LogoLoop from '../ui/LogoLoop.jsx'
import { SiGithub, SiDocker, SiArduino, SiPython, SiLangchain, SiTensorflow, SiScikitlearn, SiReact, SiStreamlit, SiJupyter } from 'react-icons/si'
import { fadeUp } from '../../lib/motion.js'

const ColoredIcon = ({ icon: Icon, color }) => (
  <Icon style={{ color, fontSize: 'inherit' }} />
)

const techLogos = [
  { node: <ColoredIcon icon={SiGithub} color="#ffffff" />, title: "GitHub", href: "https://github.com" },
  { node: <ColoredIcon icon={SiDocker} color="#2496ED" />, title: "Docker", href: "https://docker.com" },
  { node: <ColoredIcon icon={SiArduino} color="#00979C" />, title: "Arduino", href: "https://arduino.cc" },
  { node: <ColoredIcon icon={SiPython} color="#3776AB" />, title: "Python", href: "https://python.org" },
  { node: <ColoredIcon icon={SiLangchain} color="#000000" />, title: "LangChain", href: "https://langchain.com" },
  { node: <ColoredIcon icon={SiTensorflow} color="#FF6F00" />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <ColoredIcon icon={SiScikitlearn} color="#F7931E" />, title: "Scikit Learn", href: "https://scikit-learn.org" },
  { node: <ColoredIcon icon={SiReact} color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <ColoredIcon icon={SiStreamlit} color="#FF4B4B" />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <ColoredIcon icon={SiJupyter} color="#F37626" />, title: "Jupyter", href: "https://jupyter.org" },
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
            logoHeight={64}
            gap={80}
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