export const LINKS = {
  email: 'mailto:anhad01mehrotra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anhad-mehrotra',
  github: 'https://github.com/Anhad-01',
  x: 'https://x.com/AnhadMehrotra',
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
    roleLink: 'https://drive.google.com/file/d/1mlvNrzEwaHGTrgHJbtzpaUPzVGzACVwC/view?usp=sharing',
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
    roleLink: 'https://drive.google.com/file/d/1sJS7UolK1zHBNjfaQKpvyUlp66TDA0wX/view?usp=drive_link',
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
    roleLink: 'https://drive.google.com/file/d/1er16JaFSptBfZVLt3RQ25wsEwGU8uFsx/view?usp=drive_link',
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
    title: 'Vision-Language Fusion for Image Captioning',
    desc: 'A hybrid image captioning pipeline combining YOLOv5, Swin Transformer, and Mask R-CNN with enhanced WBF.',
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
    title: 'Semantic Searching for Government Schemes',
    desc: 'A multilingual semantic search system for efficient discovery of government schemes using natural language queries.',
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
    desc: 'An ESP32-based system to collect and forecast environmental data.',
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
    desc: 'A chrome extension for real-time spell and grammar correction.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/SpellIt-Chrome-Extension-for-Spell-and-Grammar-Check',
    },
    tags: [],
    image: '/images/projects/chrome.svg',
  },
  {
    type: 'Project',
    title: 'Upwork Scraping Automation using n8n',
    desc: 'An n8n automation worflow for scraping jobs, ranking them, and storing results in Airtable.',
    highlights: [],
    link: {
      label: 'GitHub',
      href: 'https://github.com/Anhad-01/Upwork-Scraping-Automation-using-n8n',
    },
    tags: [],
    image: '/images/projects/upwork.png',
  }
]

export const ACHIEVEMENTS = [
  {
    type: 'Publication',
    title: 'Design of an Optimal Planning Framework for Cryosurgical Treatment of Brain Tumor using CNN Segmentation of MRI Images',
    time: '2026',
    desc: 'Co-authored research integrating deep learning-based tumor segmentation with optimization algorithms (K-Medoids, GMM, BPA) for cryosurgical planning. Published in Cryobiology (Elsevier).',
    link: {
      label: 'DOI: 10.1016/j.cryobiol.2026.105619',
      href: 'https://doi.org/10.1016/j.cryobiol.2026.105619',
    },
    image: '/images/achievements/cryoprobe3.png',
  },
  {
    type: 'Hackathon',
    title: 'TATA Technologies InnoVent Hackathon',
    time: 'Aug 2025',
    desc: 'Developed an AI-driven battery analytics solution for health monitoring, performance prediction and lifecycle management in EVs .Ranked top 31 out of 2,800+ teams.',
    link: {
      label: 'Battery Analytics Platform (GitHub)',
      href: 'https://github.com/Anhad-01/Digital-Twin-for-Battery-Ageing-Prediction',
    },
    image: '/images/achievements/tata2.png',
  },
  {
    type: 'Hackathon',
    title: 'Hack The Future Hackathon, MoSPI',
    time: 'Mar 2025',
    desc: 'Built a multilingual semantic search app for classifying industries by NIC codes. Integrated voice-to-text, synonym mapping, and intelligent keyword retrieval. Ranked top 20 out of 1000+ teams.',
    link: {
      label: 'NIC Code Semantic Search (GitHub)',
      href: 'https://github.com/Anhad-01/semantic-search-nic.git',
    },
    image: '/images/achievements/hack_the_future.jpeg',
  },
]

export const BLOGPOSTS = [
  {
    title: 'From Vibe Coder to Developer: How to Actually Use Coding Agents',
    excerpt: 'Because "just vibe with it" stops working the moment your app hits production.',
    date: '2026-04-28',
    slug: 'from-vibecoder-to-developer',
    image: '/images/blogs/vibecode.png',
    link: {
      label: 'Read more',
      href: '/blogs/from-vibecoder-to-developer',
    },
    tags: [],
  },
  {
    title: "What College Teaches You and What It Doesn't: The Gap Between College and Live Projects",
    excerpt: 'And how to start closing that gap before your first job',
    date: '2026-04-02',
    slug: 'what-college-teaches-you',
    image: '/images/blogs/college.png',
    link: {
      label: 'Read more',
      href: '/blogs/what-college-teaches-you',
    },
    tags: [],
  },
  {
    title: 'The Hackathon Playbook Nobody Hands You at Registration',
    excerpt: 'What I learned from participating in multiple hackathons and how to make the most of them.',
    date: '2026-03-13',
    slug: 'the-hackathon-playbook',
    image: '/images/blogs/hackathon.png',
    link: {
      label: 'Read more',
      href: '/blogs/the-hackathon-playbook',
    },
    tags: [],
  },
]
