export const LINKS = {
  email: 'mailto:anhad01mehrotra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anhad-mehrotra',
  github: 'https://github.com/Anhad-01',
  resume: '/Anhad_Mehrotra_Resume.pdf',
}

export const SKILLS = {
  Languages: ['Python', 'C', 'Java', 'SQL'],
  Libraries: [
    'NumPy',
    'Pandas',
    'SciPy',
    'scikit-learn',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'OpenCV',
    'NLTK',
    'FAISS',
    'Sentence Transformers',
    'LangChain',
    'CrewAI',
  ],
  'Tools & Web': [
    'GitHub',
    'Docker',
    'Jupyter',
    'Colab',
    'Power BI',
    'MATLAB',
    'Arduino',
    'COMSOL Multiphysics',
    'FastAPI',
    'HTML',
    'CSS',
    'React.js',
    'Streamlit',
    'WordPress',
  ],
}

export const EXPERIENCE = [
  {
    role: 'AI Engineer Intern',
    org: 'Edxso',
    website: 'https://www.edxso.com/',
    time: 'Feb – Apr 2026',
    bullets: [
      'Developed an AI-powered educational assessment platform with RBAC to evaluate question papers against the National Curriculum Framework.',
      'Built and deployed a generative AI application for automated creation of product marketing visuals, supporting single and batch processing workflows.',
      'Contributed to the development of a scalable question bank system that evaluates user-submitted questions against defined competencies',
    ],
  },
  {
    role: 'AI/ML Intern',
    org: 'National e-Governance Division, Ministry of Electronics & IT',
    website: 'https://negd.gov.in/',
    time: 'Jun – Aug 2025',
    bullets: [
      'Built an Agentic AI powered course recommender using hybrid filtering and semantic search.',
      'Developed multilingual semantic search and feature enhancements for the myscheme portal and mobile app.',
      'Researched AI security threats, governance frameworks, and operational measures like API security and red teaming.',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'Craving For Gaming',
    website: 'https://cravingforgaming.in/',
    time: 'Sep 2024 – Feb 2025',
    bullets: [
      'Optimized website performance and improved UX using HTML/CSS & on-page SEO techniques',
      'Reduced page load time, improved keyword ranking across 5+ product segments.',
      'Supported product listing revamp that improved user engagement by 18%.',
    ],
  },
]

export const PROJECTS = [
  {
    type: 'Project',
    title: 'LLM-based Opinion Dynamics Simulation',
    desc: 'Multi-agent simulation framework to study opinion dynamics in social systems.',
    highlights: [],
    link: {
      label: 'Github',
      href: 'https://github.com/Anhad-01/LLM-Opinion-Dynamics-Simulation',
    },
    tags: [],
    image: '/images/projects/llm.png',
  },
  {
    type: 'Project',
    title: 'Nanoparticle Toxicity Prediction Using Deep Learning',
    desc: 'Custom DNN for cross-dataset nanotox prediction, benchmarked against RF baseline.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/Toxicity-Prediction-of-Nanoparticles',
    },
    tags: [],
    image: '/images/projects/nanotox.png',
  },
  {
    type: 'Project',
    title: 'Vision-Language Fusion for Image Captioning',
    desc: 'Developed a hybrid image captioning pipeline combining YOLOv5, Swin Transformer, and Mask R-CNN with enhanced WBF.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/Vision-Language-Fusion-for-Advanced-Image-Captioning',
    },
    tags: [],
    image: '/images/projects/vision.png',
  },
  {
    type: 'Project',
    title: 'Semantic Searching for Government Schemes',
    desc: 'Built a multilingual semantic search system for efficient discovery of government schemes using natural language queries.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/Semantic-Searching-for-Government-Schemes',
    },
    tags: [],
    image: '/images/projects/scheme.png',
  },
  {
    type: 'Project',
    title: 'IoT-based Air & Sound Monitoring and Forecasting',
    desc: 'Developed an ESP32-based system to collect and forecast environmental data.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/Air-Sound-Monitoring-Prediction.git',
    },
    tags: [],
    image: '/images/projects/iot.png',
  },
  {
    type: 'Project',
    title: 'Chrome Extension for Spell and Grammar Checking',
    desc: 'Developed a chrome extension for real-time spell and grammar correction.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/SpellIt-Chrome-Extension-for-Spell-and-Grammar-Check',
    },
    tags: [],
    image: '/images/projects/chrome.svg',
  }
]

export const ACHIEVEMENTS = [
  {
    title: 'Design of an Optimal Planning Framework for Cryosurgical Treatment of Brain Tumor using CNN Segmentation of MRI Images',
    time: '2026',
    desc: 'Co-authored research integrating deep learning-based tumor segmentation with optimization algorithms (K-Medoids, GMM, BPA) for cryosurgical planning. Published in Cryobiology (Elsevier).',
    link: {
      label: 'DOI: 10.1016/j.cryobiol.2026.105619',
      href: 'https://doi.org/10.1016/j.cryobiol.2026.105619',
    },
  },
  {
    title: 'TATA Technologies InnoVent Hackathon',
    time: 'Aug 2025',
    desc: 'Developed an AI-driven battery analytics solution for health monitoring, performance prediction and lifecycle management in EVs .Ranked top 31 out of 2,800+ teams.',
    link: {
      label: 'Battery Analytics Platform (GitHub)',
      href: 'https://github.com/Anhad-01/Digital-Twin-for-Battery-Ageing-Prediction',
    },
  },
  {
    title: 'Hack The Future Hackathon, MoSPI',
    time: 'Mar 2025',
    desc: 'Built a multilingual semantic search app for classifying industries by NIC codes. Integrated voice-to-text, synonym mapping, and intelligent keyword retrieval. Ranked top 20 out of 1000+ teams.',
    link: {
      label: 'NIC Code Semantic Search (GitHub)',
      href: 'https://github.com/Anhad-01/semantic-search-nic.git',
    },
  },
]

export const BLOGPOSTS = [
  {
    title: 'From Vibe Coder to Developer: How to Actually Use Coding Agents',
    excerpt: 'Because "just vibe with it" stops working the moment your app hits production.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nCurabitur pretium tincidunt lacus. Ut nulla elementum interdum. Maecenas quis hendrerit velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    date: '2026-04-28',
    link: {
      label: 'Read more',
      href: '#',
    },
    tags: [],
  },
  {
    title: "What College Teaches You and What It Doesn't: The Gap Between College and Live Projects",
    excerpt: 'And how to start closing that gap before your first job',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nIn hac habitasse platea dictumst. Mauris et diam eget libero sodales lobortis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verutit lamOREM ipsum.',
    date: '2026-04-02',
    link: {
      label: 'Read more',
      href: '#',
    },
    tags: [],
  },
  {
    title: 'From Clueless to Podium: A Practical Hackathon Survival Guide',
    excerpt: 'What I learned from participating in multiple hackathons and how to make the most of them.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut provident eius officiat.',
    date: '2026-03-13',
    link: {
      label: 'Read more',
      href: '#',
    },
    tags: [],
  },
]

