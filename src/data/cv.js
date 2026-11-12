// Single source of truth for all site content.
// Update this file and every section follows.

export const person = {
  name: 'Haseeb Choudhary',
  role: 'Ruby on Rails and full-stack developer',
  location: 'Pakistan',
  languages: 'English and Urdu',
  // TODO: replace the three placeholders below with your real details.
  email: 'hello@your-domain.com',
  whatsapp: '923000000000', // digits only, country code first
  whatsappDisplay: '+92 300 0000000',
  github: 'haseebchoudhary',
  // Put your PDF at public/cv.pdf
  cvPath: '/cv.pdf',
  availability: 'Open to full-time roles and freelance projects.',
  revision: 'November 2026',
}

export const hero = {
  headline: 'Rails and full-stack engineer building dependable web platforms.',
  lede: 'I build production applications with Ruby on Rails, React and Stimulus. My current work is LexiQamus, a digitization and linguistic analysis platform for Ottoman Turkish dictionaries, used by university partners.',
}

export const about = {
  paragraphs: [
    'I am a software engineer based in Pakistan and a Ruby on Rails Developer at Evolving Bits. I joined the LexiQamus team as an intern in October 2025 and moved into a full-time role in March 2026.',
    'My work covers frontend implementation, performance and accessibility improvements, and research and documentation for the AI pipelines behind the platform. I also wrote the Rails and Stimulus coding standards that the team now uses as its reference.',
    'I am completing a BSSE at Lahore Garrison University in 2026. My final-year project applied deep learning to stroke diagnosis from brain CT scans.',
  ],
  facts: [
    ['Discipline', 'Web application engineering'],
    ['Employer', 'Evolving Bits'],
    ['Based in', 'Pakistan'],
    ['Languages', 'English and Urdu'],
    ['Status', 'Open to full-time and freelance work'],
    ['Revision', 'November 2026'],
  ],
}

export const experience = [
  {
    period: 'March 2026 to present',
    role: 'Ruby on Rails Developer',
    org: 'Evolving Bits',
    project: 'LexiQamus',
    points: [
      'Fixed the Highlight stage update path by removing N+1 queries and repeated image processing, and by batching writes in a single transaction.',
      'Leading WCAG 2.1 AA accessibility work on the static sidebar pages: keyboard navigation, focus states, semantic HTML and colour contrast, driven by university licence requirements.',
      'Built a keyboard implementation for Ottoman and Arabic input that reads physical key codes, so operating system layouts no longer intercept keystrokes.',
      'Researching AI-assisted column detection for scanned dictionary pages with vision models, an OCR replacement, and a CAPTCHA alternative based on Cloudflare Turnstile.',
    ],
  },
  {
    period: 'October 2025 to January 2026',
    role: 'Intern',
    org: 'Evolving Bits',
    project: 'LexiQamus',
    points: [
      'Built the dictionary selector, result page category pills and jump-to-section navigation.',
      'Shipped admin panel features, including the redesigned Dictionaries index table and Reports tab navigation.',
    ],
  },
]

export const education = [
  {
    period: '2022 to 2026',
    title: 'BS Software Engineering',
    place: 'Lahore Garrison University',
    note: 'Batch FA-22, graduating 2026. Final-year project: Stroke Diagnosis AI System.',
  },
  {
    period: 'Completed 2022',
    title: 'FSc Pre-Engineering',
    place: 'Punjab Group of Colleges, Sialkot',
    note: '',
  },
]

export const skills = [
  {
    group: 'Backend',
    items: ['Ruby', 'Ruby on Rails 7', 'Devise', 'Pundit', 'Sidekiq', 'ActionCable', 'PostgreSQL', 'Redis', 'Python', 'Django'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Stimulus JS', 'JavaScript (ES6)', 'ERB', 'HTML and CSS', 'WCAG 2.1 AA accessibility', 'Vite'],
  },
  {
    group: 'Data and AI',
    items: ['PyTorch', 'scikit-learn', 'Gemini and OpenAI vision APIs', 'Prompt engineering', 'Hadoop and Spark'],
  },
  {
    group: 'Practice',
    items: ['Git', 'Coding standards', 'Technical R&D write-ups', 'Ticket-driven delivery', 'Multi-tenant architecture'],
  },
]

export const projects = [
  {
    id: 'lexiqamus',
    name: 'LexiQamus',
    summary: 'Digitization and linguistic analysis platform for Ottoman Turkish dictionaries.',
    kind: 'Professional work at Evolving Bits',
    stack: ['Ruby on Rails', 'Stimulus JS', 'ERB', 'Gemini and OpenAI vision models'],
    context:
      'Scanned dictionary pages have to be divided into columns, read and analysed word by word before scholars can search them. The platform has institutional university partners, whose licences set accessibility requirements.',
    built: [
      'Performance fixes in the Highlight stage and a custom Ottoman keyboard layer.',
      'Dictionary selector, result page navigation, morphological analysis icons and admin panel tables.',
      'Research and cost-versus-accuracy documentation for AI polygon detection on scanned pages.',
      'WCAG 2.1 AA accessibility improvements across static pages.',
    ],
    link: { label: 'lab.lexiqamus.com', href: 'https://lab.lexiqamus.com' },
  },
  {
    id: 'stroke-ai',
    name: 'Stroke Diagnosis AI System',
    summary: 'Brain CT analysis using an ensemble of deep learning models.',
    kind: 'Final-year project, built with a teammate',
    stack: ['Django', 'PyTorch', 'Swin Transformer', 'DenseNet', 'CNN', 'PostgreSQL'],
    context:
      'A web application that classifies brain CT scans for stroke, trained on a public Kaggle dataset and served through Django.',
    built: [
      'An ensemble that combines Swin Transformer, DenseNet and CNN models.',
      'A Django application with PostgreSQL storage around the model.',
      'Project documentation, a presentation script and a viva question bank.',
    ],
    link: null,
  },
  {
    id: 'analytics-dashboard',
    name: 'Live E-commerce Analytics Dashboard',
    summary: 'Real-time, multi-tenant analytics for online stores.',
    kind: 'Portfolio project, in development',
    stack: ['Ruby on Rails 7', 'React', 'ActionCable', 'Sidekiq', 'PostgreSQL', 'Redis'],
    context:
      'A Rails backend with ERB and Stimulus for administration and a React front end for the live dashboard. Updates reach the browser over ActionCable.',
    built: [
      'Architecture, design specification and a 43-ticket backlog written before implementation.',
      'Database schema design for multi-tenant data.',
      'Security checklist and coding rules used as context for AI-assisted development.',
    ],
    link: null,
  },
]
