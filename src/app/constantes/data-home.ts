export const skills = {
  languages: [
    { name: 'Spanish', level: 100, color: 'from-red-500 to-yellow-500' },
    { name: 'English', level: 85, color: 'from-blue-500 to-purple-500' },
    { name: 'French', level: 70, color: 'from-green-500 to-blue-500' },
  ],
  technical: [
    { name: 'JavaScript', level: 95, icon: '⚡' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'Angular', level: 88, icon: '🅰️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Unity', level: 80, icon: '🎮' },
  ],
  soft: [
    'Critical Thinking',
    'Communication Skills',
    'Adaptability and Flexibility',
    'Problem-Solving',
    'Curiosity and Initiative',
    'Teamwork',
    'Ethics and Responsibility',
  ],
};

export const experiences = [
  {
    title: 'Custom Software Engineering',
    period: 'Marzo 2023 - Now',
    company: 'Freelance',
    achievements: [
      'Implemented new critical workflows in the application, optimizing processes by 20% and reducing response times',
      'Designed and implemented an intuitive user interface that increased user satisfaction by 18%, according to feedback surveys',
      'Developed and implemented a demo version without backend requests for new users',
    ],
    technologies: ['Angular', 'Ionic', 'PrimeNg', 'RxJS', 'Cordova', 'Scrum'],
  },
  {
    title: 'Intership Software Developer',
    period: 'Septiembre 2022 - Marzo 2023',
    company: 'Tech Company',
    achievements: [
      'Implemented mock data for REST requests (to streamline development processes)',
      'Proactively resolved errors and performed constant updates to ensure optimal application performance',
    ],
    technologies: ['Angular', 'Ionic', 'PrimeNg', 'RxJS', 'Cordova', 'Scrum'],
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with React and Node.js.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'Web Development',
    github: 'https://github.com/christian-reyes/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
    date: '2024',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: [
      'Angular',
      'TypeScript',
      'Firebase',
      'RxJS',
      'Angular Material',
    ],
    category: 'Web Development',
    github: 'https://github.com/christian-reyes/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    featured: true,
    date: '2023',
  },
  {
    title: 'Unity 3D Game',
    description:
      'An immersive 3D adventure game with custom physics, AI enemies, and interactive environments. Features include inventory system and quest mechanics.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Unity', 'C#', 'Blender', 'Photoshop'],
    category: 'Game Development',
    github: 'https://github.com/christian-reyes/unity-game',
    demo: 'https://unity-game-demo.itch.io',
    featured: false,
    date: '2023',
  },
  {
    title: 'Mobile Banking App',
    description:
      'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Ionic', 'Angular', 'Cordova', 'Firebase', 'Chart.js'],
    category: 'Mobile Development',
    github: 'https://github.com/christian-reyes/banking-app',
    demo: 'https://banking-app-demo.netlify.app',
    featured: true,
    date: '2023',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'An intelligent chat assistant powered by machine learning, capable of natural language processing and context-aware responses.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'Python', 'OpenAI API', 'FastAPI', 'WebSocket'],
    category: 'AI/ML',
    github: 'https://github.com/christian-reyes/ai-assistant',
    demo: 'https://ai-assistant-demo.vercel.app',
    featured: false,
    date: '2024',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance. Built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    github: 'https://github.com/christian-reyes/portfolio',
    demo: 'https://christian-reyes.dev',
    featured: false,
    date: '2024',
  },
];

export const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'Game Development',
  'AI/ML',
];
