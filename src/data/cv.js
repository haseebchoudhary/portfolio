// Single source of truth for all site content.

export const person = {
  name: 'Haseeb Choudhary',
  role: 'Ruby on Rails Developer | Full Stack Developer',
  location: 'Pakistan',
  languages: 'English and Urdu',
  email: 'haseebch211@gmail.com',
  phone: '+92 303 4730398',
  phoneTel: '+923034730398',
  github: 'haseebchoudhary',
  cvPath: `${import.meta.env.BASE_URL}cv.pdf`,
  photo: `${import.meta.env.BASE_URL}profile/photo.png`,
  photoAlt: 'Portrait of Haseeb Choudhary',
  profileLine: 'Evolving Bits · LexiQamus · BuildLQ',
  profileStack: 'Rails · PostgreSQL · Stimulus · Docker',
  availability: 'Open to full-time roles and freelance projects.',
  revision: 'November 2026',
}

export const hero = {
  fact: 'Pakistan · LexiQamus · BuildLQ · Rails',
  headline: 'Ruby on Rails developer for production web applications.',
  lede: 'I build and maintain production apps across backend architecture, authentication, search, APIs, and responsive frontends—including LexiQamus and the BuildLQ digitization program for Ottoman dictionaries, plus multi-tenant e-commerce. I use AI-assisted tools such as Cursor and Claude with clear prompts, human review, and the same standards as any production change.',
}

// Verified via GitHub search API, November 2026.
export const githubRepos = [
  {
    name: 'BuildLQ',
    owner: 'evolvingbits',
    url: 'https://github.com/evolvingbits/BuildLQ',
    pullsUrl: 'https://github.com/evolvingbits/BuildLQ/pulls/haseebchoudhary',
    pullRequests: 220,
    private: true,
    note: 'Dictionary digitization and editor platform (LQ-Digital workflows, TypeO/TypeL, search).',
  },
  {
    name: 'LexiQamus',
    owner: 'evolvingbits',
    url: 'https://github.com/evolvingbits/LexiQamus',
    pullsUrl: 'https://github.com/evolvingbits/LexiQamus/pulls/haseebchoudhary',
    pullRequests: 23,
    private: true,
    note: 'Production Rails behind lexiqamus.com — search UI, Redhouse, sign-in, PHP integrations.',
  },
  {
    name: 'Stroke-prediction-app',
    owner: 'haseebchoudhary',
    url: 'https://github.com/haseebchoudhary/Stroke-prediction-app',
    commits: 147,
    branches: 28,
    private: true,
    note: 'Final-year project — Django brain CT classification (doctor and admin UI).',
  },
]

export const about = {
  paragraphs: [
    'Ruby on Rails developer with hands-on experience on production web applications, including LexiQamus (Ottoman Turkish linguistic research) and BuildLQ-backed dictionary digitization, plus a multi-tenant e-commerce system. I work comfortably across MVC backends, REST APIs, authentication and authorization, search, and responsive UIs.',
    'I am a Ruby on Rails Developer at Evolving Bits (March 2026 to present), after an internship with the same team (October 2025 to January 2026).',
    'I am completing a BS Software Engineering at Lahore Garrison University in 2026. My final-year project is an AI-based brain stroke detection system built with Django and deep learning.',
    'For day-to-day engineering I use AI-driven tools including Cursor and Claude: scoped tasks, context from our coding rules, and review of every diff before it ships—treating assistants as accelerators, not authors.',
  ],
  facts: [
    ['Title', 'Ruby on Rails Developer | Full Stack Developer'],
    ['Employer', 'Evolving Bits'],
    ['Based in', 'Pakistan'],
    ['Email', person.email],
    ['Phone', person.phone],
    ['GitHub', `github.com/${person.github}`],
  ],
}

const asset = (file) => `${import.meta.env.BASE_URL}projects/${file}`

export const lexiqamusSite = {
  href: 'https://lexiqamus.com/lexiqamus',
  label: 'lexiqamus.com/lexiqamus',
  image: asset('lexiqamus-home.jpg'),
  imageAlt: 'LexiQamus home with Search and Word Decoder tabs for Ottoman Turkish lookup.',
  gallery: [
    {
      src: asset('lexiqamus-home.jpg'),
      alt: 'LexiQamus home page with Search tab, dictionary selector, and Word Decoder.',
    },
    {
      src: asset('lexiqamus-search-results.jpg'),
      alt: 'LexiQamus Ottoman word search results with categorized dictionary matches.',
    },
    {
      src: asset('lexiqamus-redhouse.jpg'),
      alt: 'LexiQamus English Redhouse exact search for elm with Ottoman headwords and definitions.',
    },
    {
      src: asset('lexiqamus-word-decoder.jpg'),
      alt: 'LexiQamus Word Decoder with Ottoman keyboard and letter matching.',
    },
    {
      src: asset('lexiqamus-modal.jpg'),
      alt: 'LexiQamus original dictionary page viewer opened from smart results.',
    },
    {
      src: asset('lexiqamus-modal-hover.jpg'),
      alt: 'LexiQamus page scan with hovered word highlighting in the document modal.',
    },
    {
      src: asset('lexiqamus-dictionary-page.jpg'),
      alt: 'LexiQamus digitized dictionary volume page after selecting a lexicon entry.',
    },
  ],
}

export const experience = [
  {
    period: 'March 2026 to present',
    role: 'Ruby on Rails Developer',
    org: 'Evolving Bits',
    project: 'LexiQamus',
    projectUrl: lexiqamusSite.href,
    points: [
      'Develop and maintain LexiQamus 3.0 — a Rails dictionary and linguistic research platform — including BuildLQ-related digitization flows (source pages, smart results, citations).',
      'Own authentication, advanced search, Word Decoder, Redhouse search, CMS and admin, and API integrations on the production stack.',
      'Contribute on evolvingbits/BuildLQ (220 pull requests) and evolvingbits/LexiQamus (23 pull requests).',
      'Use Cursor and Claude for research spikes, refactors, and documentation drafts; every change is reviewed and tested like hand-written code.',
    ],
  },
  {
    period: 'October 2025 to January 2026',
    role: 'Ruby on Rails Intern',
    org: 'Evolving Bits',
    project: 'Multi-tenant e-commerce platform',
    projectUrl: null,
    points: [
      'Built a Shopify-style multi-tenant e-commerce platform in Rails with subdomain-based tenant isolation.',
      'Delivered role-based admin and seller dashboards for products, orders, inventory, and sales metrics with a responsive Bootstrap UI.',
    ],
  },
]

export const education = [
  {
    period: '2026',
    title: 'BS Software Engineering',
    place: 'Lahore Garrison University',
    note: 'Final-year project: AI-Based Brain Stroke Detection System.',
  },
  {
    period: '2022',
    title: 'FSc Pre-Engineering',
    place: 'Punjab Group of Colleges, Sialkot',
    note: '',
  },
]

export const skills = [
  {
    group: 'Languages and frameworks',
    items: ['Ruby', 'Ruby on Rails', 'Laravel', 'Django', 'JavaScript', 'React.js'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'HTML and CSS', 'Bootstrap 5', 'ERB', 'Stimulus'],
  },
  {
    group: 'Databases and tools',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'Git and GitHub', 'REST APIs'],
  },
  {
    group: 'AI-assisted development',
    items: [
      'Cursor',
      'Claude',
      'Structured prompting and context',
      'Diff review before merge',
    ],
  },
  {
    group: 'AI and ML (project work)',
    items: ['PyTorch', 'DenseNet-121', 'ConvNeXt-Base', 'Swin Transformer'],
  },
  {
    group: 'Core competencies',
    items: [
      'Full-stack development',
      'MVC architecture',
      'Authentication and authorization',
      'Multi-tenant applications',
      'Debugging and performance',
    ],
  },
]

export const projects = [
  {
    id: 'lexiqamus',
    name: 'LexiQamus & BuildLQ',
    summary: 'Production Rails platform and dictionary digitization for Ottoman Turkish.',
    kind: 'Professional work at Evolving Bits · private GitHub',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Docker', 'Stimulus', 'ERB', 'PHP integrations'],
    context:
      'LexiQamus is the live product at lexiqamus.com. BuildLQ is the digitization program behind LQ-Digital standards: preserved links to original scans, verified data, and smart parsing (entries, sub-entries, related words). I contribute on employer private repositories.',
    built: [
      'Search, English Redhouse, Word Decoder, original-page viewer, and citation flows shown in the gallery.',
      'Authentication, CMS and admin, and API integrations on the production Rails stack.',
      'BuildLQ-facing features connecting categorized results to digitized dictionary volumes.',
      'Docker-based dev and GitHub workflow with feature branches and reviewed merges.',
    ],
    link: { label: lexiqamusSite.label, href: lexiqamusSite.href },
    contributions: githubRepos.filter((r) => r.owner === 'evolvingbits'),
    gallery: lexiqamusSite.gallery,
  },
  {
    id: 'stroke-ai',
    name: 'AI-Based Brain Stroke Detection System',
    summary: 'Multi-modal brain CT classification for Normal, Ischemic, and Hemorrhagic cases.',
    kind: 'Final-year project · GitHub',
    stack: ['Django', 'PostgreSQL', 'PyTorch', 'DenseNet-121', 'ConvNeXt-Base', 'Swin Transformer'],
    context:
      'Final-year project: a Django application that classifies brain CT scans using deep learning, with doctor and admin workflows. Source is on GitHub with phased feature branches.',
    built: [
      'Ensemble of DenseNet-121, ConvNeXt-Base, and Swin Transformer (95.2% accuracy) plus a Random Forest clinical model.',
      'Full Django app with doctor and admin roles, patient management, CT upload, and diagnosis history.',
    ],
    link: {
      label: 'github.com/haseebchoudhary/Stroke-prediction-app',
      href: 'https://github.com/haseebchoudhary/Stroke-prediction-app',
    },
    repoStats: { commits: 147, branches: 28, private: true },
    diagram: 'CT upload → preprocessing → ensemble + clinical model → diagnosis label → Django app',
  },
  {
    id: 'analytics-dashboard',
    name: 'E-commerce Analytics Dashboard',
    summary: 'Admin and seller dashboards for multi-store revenue, orders, and inventory.',
    kind: 'Rails project',
    stack: ['Ruby on Rails', 'Bootstrap 5', 'Stimulus', 'PostgreSQL'],
    context:
      'Dashboards for isolated stores from the Evolving Bits intern multi-tenant platform.',
    built: [
      'Admin and seller dashboards tracking revenue, orders, and inventory across isolated stores.',
      'Low-stock alerts and role-based views built with Bootstrap 5 and Stimulus.',
    ],
    link: null,
    diagram: 'Store data → Rails → dashboards → admin / seller roles',
  },
]
