// ============================================================
// EDIT THIS FILE to update your portfolio content.
// Everything the site displays lives here.
// ============================================================

export const profile = {
  name: 'Luis Flores',
  fullName: 'Luis Alberto Flores Cavazos',
  role: 'Software Engineer',
  tagline:
    'I build full-stack applications that solve real problems — React and TypeScript on the front end, Python and SQL behind them, Firebase and Supabase in the cloud. Software Engineering graduate, IEST Anáhuac, Class of 2025.',
  about: [
    `I'm a software engineer from Tampico, Mexico, with a Bachelor's degree
     in Software Engineering from IEST Anáhuac (Class of 2025). I work
     across the stack: building responsive interfaces with React and
     TypeScript, writing Python and SQL for automation and data, and
     shipping on cloud platforms like Firebase and Supabase.`,
    `I've already put that to work in industry. As an IT assistant at Carnes
     Victoria, I automated server backups with Python and SQL scripts —
     cutting manual effort by 20% and improving reliability — and managed
     B2B sales orders end to end in the company's ERP, coordinating with
     Logistics and Finance to keep pricing, taxes, and inventory accurate.`,
    `My range goes beyond the web: I've built predictive models from raw CSV
     data with Python, developed iOS interfaces in SwiftUI, and turned
     datasets into Power BI dashboards. I work in Scrum teams, learn new
     tools quickly, and communicate clearly in Spanish and English (C1).`,
    `I'm currently open to software engineering roles where I can ship
     products that matter. If that sounds like your team, let's talk.`,
  ],
  email: 'luisflcvz01@gmail.com',
  phone: '+52 833 104 6049',
  location: 'Tampico, Mexico',
  languages: 'Spanish (native) · English (C1)',
  github: 'https://github.com/luisflorescvz01',
  linkedin: 'https://www.linkedin.com/in/luis-flores-42b586278/',
}

export type Skill = {
  name: string
  /** URL of a small logo shown to the left of the name (optional) */
  icon?: string
  /** Set true for dark logos that need inverting on the dark theme */
  invertOnDark?: boolean
}

export type SkillGroup = {
  title: string
  skills: Skill[]
}

// Logos served from the devicon CDN: https://devicon.dev
const devicon = (slug: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: devicon('python') },
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'SQL (MySQL)', icon: devicon('mysql') },
      { name: 'Swift', icon: devicon('swift') },
      { name: 'HTML & CSS', icon: devicon('html5') },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: devicon('react') },
      { name: 'SwiftUI', icon: devicon('swift') },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', icon: devicon('git') },
      { name: 'Firebase', icon: devicon('firebase') },
      { name: 'Supabase', icon: devicon('supabase') },
      { name: 'Power BI' },
    ],
  },
  {
    title: 'Practices & Soft Skills',
    skills: [
      { name: 'Scrum & Agile Development' },
      { name: 'Analytical Thinking' },
      { name: 'Teamwork & Communication' },
      { name: 'Problem Solving' },
      { name: 'Adaptability' },
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: Skill[]
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Inventory Management System',
    description:
      'Inventory management system that handles product registration and real-time tracking of items inside a refrigerator, built with React, Supabase, and a custom API.',
    tech: [
      { name: 'React', icon: devicon('react') },
      { name: 'Supabase', icon: devicon('supabase') },
      { name: 'REST API' },
    ],
    repoUrl: 'https://github.com/your-username/inventory-system', // TODO
  },
  {
    title: 'Flores Travel Agency',
    description:
      'A travel agency web application for browsing destinations and managing bookings. Built as a React single-page app with a Firebase backend and a localStorage fallback for offline development.',
    tech: [
      { name: 'React', icon: devicon('react') },
      { name: 'Firebase', icon: devicon('firebase') },
      { name: 'JavaScript', icon: devicon('javascript') },
    ],
    repoUrl: 'https://github.com/your-username/flores-travel-agency', // TODO
  },
  {
    title: 'Graphic Design Student Portfolio',
    description:
      'A portfolio website for a graphic design student, focused on front-end architecture, UI implementation, and responsive design.',
    tech: [
      { name: 'React', icon: devicon('react') },
      { name: 'HTML & CSS', icon: devicon('html5') },
      { name: 'Responsive Design' },
    ],
    repoUrl: 'https://github.com/your-username/design-portfolio', // TODO
  },
  {
    title: 'Predictive Modeling with Python',
    description:
      'Processed CSV datasets in Python to build predictive models using linear and multiple regression, and organized the data into dimensions with Power BI for analysis and reporting.',
    tech: [
      { name: 'Python', icon: devicon('python') },
      { name: 'Power BI' },
      { name: 'Data Analysis' },
    ],
    repoUrl: 'https://github.com/your-username/predictive-models', // TODO
  },
]
