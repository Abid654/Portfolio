/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * This file contains all configurable information for your portfolio.
 * You can easily update your name, contact details, social links, CV path,
 * professional experience, projects, and skills here.
 *
 * All technical skills are strictly mapped to your verified CV technologies:
 * - Programming Languages: JavaScript, PHP
 * - Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Redux Toolkit
 * - Back-End: Node.js, Express.js, PHP, Laravel, RESTful APIs, JWT Authentication, WebSockets
 * - Databases: MongoDB, MySQL
 * - Tools: Git, GitHub, GitLab, Postman, Eloquent ORM, Jira, SourceTree
 * - CMS: WordPress, Elementor
 * - SEO & QA: On-Page SEO, Off-Page SEO, Manual Testing (QA)
 * =========================================================================
 */

export const personalInfo = {
  // Configurable identity placeholders
  name: "Muhammad Abid",
  displayName: "<Muhammad Abid>",
  roleTitle: "MERN Stack Developer | Full-Stack Web Developer",
  shortRole: "MERN Stack Developer & Full-Stack Web Developer",
  status: "Available for full-time roles & engineering collaborations",
  location: "Singh Pura Lahore",
  email: "mailto:abimas654@gmail.com",
  phone: "0332-9698009",
  
  // Resume configuration
  resumePath: "/resume.pdf", // Place your real resume PDF in the /public folder as resume.pdf
  
  // Social and profile links
  socialLinks: {
    github: "https://github.com/Abid654",
    linkedin: "https://www.linkedin.com/in/mabid96",
    // gitlab: "https://gitlab.com/[YOUR-GITLAB-USERNAME]",
    emailLink: "mailto:abimas654@gmail.com",
  },

  // Hero introduction statement
  heroIntro: "Hello, I'm",
  heroTagline: "I build modern web applications using React.js, Node.js, Express.js, PHP, Laravel, and database-driven technologies.",
  
  // Detailed bio from your actual CV summary
  bio: "I'm a Full-Stack Web Developer with practical experience in MERN Stack and PHP/Laravel development. I build responsive web interfaces, database-driven applications, RESTful APIs, and modern web solutions using JavaScript, React.js, Node.js, Express.js, PHP, Laravel, MongoDB, and MySQL.",
  
  secondaryBio: "I also have experience working with WordPress, Elementor, API testing, version control, manual QA, and SEO fundamentals. My focus is writing clean code, designing resilient architecture, and shipping smooth user experiences.",
};

// "How I Work" principles for the About section
export const howIWork = [
  {
    id: 1,
    title: "Writing Clean & Maintainable Code",
    description: "Structuring modular components in React and standard MVC architecture in Laravel and Express with clean ES6+ patterns.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Building Responsive Interfaces",
    description: "Crafting fluid, mobile-first layouts using Tailwind CSS and semantic HTML5 with strict cross-device visual parity.",
    icon: "Layout",
  },
  {
    id: 3,
    title: "Testing Application Functionality",
    description: "Validating API endpoints via Postman, testing edge cases, and conducting end-to-end user journey verifications.",
    icon: "CheckCircle2",
  },
  {
    id: 4,
    title: "Debugging & Resolving Issues",
    description: "Methodical root-cause investigation using browser devtools, network inspections, server logs, and responsive audits.",
    icon: "Terminal",
  },
  {
    id: 5,
    title: "Creating User-Friendly Experiences",
    description: "Delivering intuitive navigation, clear visual hierarchy, accessible contrast, and snappy page load interactions.",
    icon: "Sparkles",
  },
];

/**
 * 7 TECHNICAL SKILLS PANELS
 * Strictly verified skills from your CV — NO unverified additions, NO fake percentages.
 */
export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Front-End" },
    { id: "backend", name: "Back-End" },
    { id: "database", name: "Databases" },
    { id: "tools", name: "Dev Tools" },
    { id: "cms", name: "CMS & Web" },
    { id: "seo-qa", name: "SEO & QA" },
  ],
  panels: [
    {
      id: "languages",
      panelNumber: "01",
      panelTitle: "Programming Languages",
      description: "Core languages used for building full-stack logic, client scripts, and backend architectures.",
      skills: [
        {
          name: "JavaScript",
          category: "languages",
          tag: "Core Language",
          context: "Dynamic client scripting, asynchronous programming, DOM manipulation & Node runtime execution.",
        },
        {
          name: "PHP",
          category: "languages",
          tag: "Server-Side",
          context: "Server-side scripting, object-oriented backend programming, and dynamic web application logic.",
        },
      ],
    },
    {
      id: "frontend",
      panelNumber: "02",
      panelTitle: "Front-End Development",
      description: "Creating responsive, interactive user interfaces with modern reactive paradigms and clean styling.",
      skills: [
        {
          name: "HTML5",
          category: "frontend",
          tag: "Semantic Markup",
          context: "Accessible document architecture, SEO-friendly layout structure, and standard web forms.",
        },
        {
          name: "CSS3",
          category: "frontend",
          tag: "Modern Styling",
          context: "Flexbox, CSS Grid layouts, media queries, keyframe animations, and custom UI components.",
        },
        {
          name: "JavaScript (ES6+)",
          category: "frontend",
          tag: "Modern Syntax",
          context: "Destructuring, async/await, arrow functions, promises, modules, and ES6+ standards.",
        },
        {
          name: "React.js",
          category: "frontend",
          tag: "UI Library",
          context: "Component-driven architecture, custom hooks, state lifecycles, and high-performance virtual DOM.",
        },
        {
          name: "Tailwind CSS",
          category: "frontend",
          tag: "Utility-First CSS",
          context: "Rapid design system implementation, responsive utility classes, and custom aesthetic theming.",
        },
        {
          name: "Redux Toolkit",
          category: "frontend",
          tag: "State Management",
          context: "Centralized predictable store, slices, action dispatchers, and global UI data coordination.",
        },
      ],
    },
    {
      id: "backend",
      panelNumber: "03",
      panelTitle: "Back-End Development",
      description: "Building robust servers, business logic layers, secure authentication, and real-time events.",
      skills: [
        {
          name: "Node.js",
          category: "backend",
          tag: "Runtime",
          context: "Event-driven asynchronous backend execution, package management, and microservice workflows.",
        },
        {
          name: "Express.js",
          category: "backend",
          tag: "Server Framework",
          context: "Middleware chaining, routing pipelines, request validation, and API controllers.",
        },
        {
          name: "PHP",
          category: "backend",
          tag: "Web Backend",
          context: "Session handling, OOP controllers, server-side data processing, and integration pipelines.",
        },
        {
          name: "Laravel",
          category: "backend",
          tag: "PHP Framework",
          context: "MVC architecture, Artisan CLI, route providers, migration pipelines, and Blade templating.",
        },
        {
          name: "RESTful APIs",
          category: "backend",
          tag: "API Architecture",
          context: "REST principles, standardized HTTP status codes, structured JSON responses, and CRUD endpoints.",
        },
        {
          name: "JWT Authentication",
          category: "backend",
          tag: "Security & Auth",
          context: "Stateless authorization tokens, secure cookie handling, role validation, and route guards.",
        },
        {
          name: "WebSockets",
          category: "backend",
          tag: "Real-Time Comm",
          context: "Bi-directional event protocols, real-time message broadcasting, and live client updates.",
        },
      ],
    },
    {
      id: "database",
      panelNumber: "04",
      panelTitle: "Database Management",
      description: "Structuring, indexing, and maintaining relational and non-relational database models.",
      skills: [
        {
          name: "MongoDB",
          category: "database",
          tag: "NoSQL Database",
          context: "Document-oriented storage, schema validation with Mongoose, indexing, and aggregation pipelines.",
        },
        {
          name: "MySQL",
          category: "database",
          tag: "Relational RDBMS",
          context: "Normalized schema design, foreign keys, table joins, transactions, and optimized SQL queries.",
        },
      ],
    },
    {
      id: "tools",
      panelNumber: "05",
      panelTitle: "Development Tools & Technologies",
      description: "Version control, API validation tools, ORM layers, and collaborative team platforms.",
      skills: [
        {
          name: "Git",
          category: "tools",
          tag: "Version Control",
          context: "Branching strategies, conflict resolution, atomic commits, rebasing, and repository maintenance.",
        },
        {
          name: "GitHub",
          category: "tools",
          tag: "Code Collaboration",
          context: "Pull requests, code reviews, issue tracking, CI workflows, and remote repository management.",
        },
        {
          name: "GitLab",
          category: "tools",
          tag: "DevOps & Repos",
          context: "Repository pipelines, enterprise branch management, and collaborative issue boards.",
        },
        {
          name: "Postman",
          category: "tools",
          tag: "API Testing",
          context: "Endpoint testing, automated environment variables, payload validation, and request documentation.",
        },
        {
          name: "Eloquent ORM",
          category: "tools",
          tag: "Database ORM",
          context: "Active record modeling, relationship mapping (1:1, 1:N, M:N), eager loading, and query scopes.",
        },
        {
          name: "Jira",
          category: "tools",
          tag: "Agile Workflow",
          context: "Sprint tracking, ticket prioritization, bug lifecycle management, and team status reporting.",
        },
        {
          name: "SourceTree",
          category: "tools",
          tag: "Git GUI Client",
          context: "Visual branch tracking, graphical diff comparisons, stash management, and commit trees.",
        },
      ],
    },
    {
      id: "cms",
      panelNumber: "06",
      panelTitle: "CMS and Website Development",
      description: "Delivering client-friendly content management systems and responsive page designs.",
      skills: [
        {
          name: "WordPress",
          category: "cms",
          tag: "Content Management",
          context: "Theme customization, plugin setup, site migrations, custom posts, and administration.",
        },
        {
          name: "Elementor",
          category: "cms",
          tag: "Visual Builder",
          context: "Responsive template design, customized page layouts, dynamic hooks, and visual branding.",
        },
      ],
    },
    {
      id: "seo-qa",
      panelNumber: "07",
      panelTitle: "SEO and Quality Assurance",
      description: "Optimizing visibility for search engines and ensuring functional reliability before release.",
      skills: [
        {
          name: "SEO — On-Page SEO",
          category: "seo-qa",
          tag: "Search Optimization",
          context: "Meta tags, semantic headings, Open Graph protocols, URL structure, and image alt optimization.",
        },
        {
          name: "SEO — Off-Page SEO",
          category: "seo-qa",
          tag: "Domain Authority",
          context: "Backlink structure fundamentals, site authority signals, and search console monitoring.",
        },
        {
          name: "Manual Testing (QA)",
          category: "seo-qa",
          tag: "Quality Assurance",
          context: "Functional validation, test case execution, cross-browser compatibility, and bug reporting.",
        },
      ],
    },
  ],
};

/**
 * PROFESSIONAL EXPERIENCE
 * Clear editable placeholders for verified roles and dates
 */
export const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Seebiz",
    location: "Jail Road Lahore",
    duration: "[ACTUAL DATES — e.g. June 2024 – Dec 2024]",
    type: "Internship / Full-Stack Developer",
    badge: "Verified Role Placeholder",
    responsibilities: [
      "Engineered responsive user interfaces with React.js and Tailwind CSS, improving load speed and device responsiveness.",
      "Developed and integrated RESTful APIs using Node.js and Express.js with robust error-handling middleware.",
      "Implemented secure JWT (JSON Web Token) authentication and protected routes for authenticated user flows.",
      "Structured MongoDB schemas using Mongoose, handling data validation, querying, and indexing.",
      "Collaborated using Git, GitHub, and Jira in an agile development environment with regular pull request reviews.",
    ],
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Authentication", "Git", "Postman"],
  },
  {
    id: 2,
    role: "[Full Stack Developer (PHP/LARAVEL)",
    company: "[1st 4 Connect]",
    location: "[Gulberg Lahore]",
    duration: "[ACTUAL DATES — e.g. Jan 2024 – May 2024]",
    type: "ASE. Full Stack Engineer",
    badge: "Verified Role Placeholder",
    responsibilities: [
      "Built database-driven web applications and dynamic business modules utilizing PHP and Laravel framework.",
      "Designed and optimized relational MySQL databases, managing table schemas and relationships via Eloquent ORM.",
      "Tested and validated RESTful API endpoints using Postman to verify payload integrity and response codes.",
      // "Customized WordPress and Elementor layouts according to project specifications and client design requirements.",
      "Conducted manual QA testing, functional checks, and cross-browser inspections to catch defects before production.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Eloquent ORM", "RESTful APIs", "Postman", "GitLab", "Manual Testing (QA)"],
  },
];

/**
 * FEATURED PROJECTS GALLERY
 * Projects categorized strictly by CV categories:
 * - Full-Stack Applications
 * - React Applications
 * - Laravel Applications
 * - WordPress Websites
 * - API-Based Applications
 */
export const projectsData = [
  {
    id: "proj-1",
    name: "Full-Stack MERN Collaboration Hub",
    type: "Full-Stack Applications",
    categoryKey: "fullstack",
    isFeatured: true,
    tagline: "Database-driven real-time collaborative workspace platform with JWT security",
    description: "A complete MERN stack web application engineered with React.js, Node.js, Express.js, and MongoDB. Features secure token-based user authentication, role-based dashboards, and live updates via WebSockets.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Authentication", "WebSockets"],
    keyFeatures: [
      "JWT-authenticated user sessions with automated token refresh & protected route navigation.",
      "MongoDB database layer modeled with Mongoose schemas and relational document references.",
      "Real-time bidirectional event broadcasting powered by WebSockets.",
      "Fully responsive dashboard interface built with Tailwind CSS and modular React architecture.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[PROJECT-REPO-NAME]",
    liveUrl: "https://[YOUR-DEMO-URL].com",
    previewVisual: "workspace-dashboard",
    details: {
      problem: "Teams require a consolidated, responsive workspace to manage dynamic project data with instantaneous multi-user updates and secure access control.",
      solution: "Architected a decoupled MERN application with an Express REST API backend and a responsive React client, utilizing WebSockets for real-time state sync.",
      architecture: [
        "Frontend: React.js with functional components, custom hooks, and Tailwind CSS responsive grid.",
        "Backend: Express.js server on Node.js handling RESTful CRUD routes and WebSocket connections.",
        "Security: JWT tokens stored securely with bcrypt password hashing and header validation.",
        "Database: MongoDB with indexed query collections for high performance.",
      ],
    },
  },
  {
    id: "proj-2",
    name: "Laravel & MySQL Enterprise Portal",
    type: "Laravel Applications",
    categoryKey: "laravel",
    isFeatured: true,
    tagline: "Relational database management system with Eloquent ORM and automated reporting",
    description: "An enterprise-grade web application built using PHP, Laravel, and MySQL. Features complex relational data modeling, custom Eloquent relationships, automated validation, and clean RESTful API integration.",
    techStack: ["PHP", "Laravel", "MySQL", "Eloquent ORM", "RESTful APIs", "Tailwind CSS"],
    keyFeatures: [
      "Relational MySQL schema design with foreign key constraints and transactional integrity.",
      "Eloquent ORM modeling for multi-tier relationships (One-to-Many, Many-to-Many) with eager loading.",
      "RESTful API endpoints tested and verified via Postman for third-party client integration.",
      "Role-based access management with Laravel middleware and clean Blade / frontend templates.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[LARAVEL-REPO-NAME]",
    liveUrl: "https://[YOUR-LARAVEL-DEMO].com",
    previewVisual: "database-portal",
    details: {
      problem: "Managing complex transactional records required a reliable, relational backend with strict schema enforcement and high query efficiency.",
      solution: "Leveraged Laravel's MVC architecture and MySQL to build a robust data management engine with Eloquent optimization to prevent N+1 query bottlenecks.",
      architecture: [
        "Backend: PHP 8.x + Laravel framework utilizing Artisan migrations and service layers.",
        "Database: MySQL normalized tables with index optimization on high-traffic columns.",
        "Testing: Postman collection validation for all RESTful API endpoints.",
      ],
    },
  },
  {
    id: "proj-3",
    name: "Interactive React & Redux Analytics Suite",
    type: "React Applications",
    categoryKey: "react",
    isFeatured: false,
    tagline: "High-performance reactive frontend with centralized state management",
    description: "A fast, responsive web application built with React.js and Redux Toolkit. Features dynamic filtering, complex state coordination, and seamless data visualization with custom Tailwind CSS interfaces.",
    techStack: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
    keyFeatures: [
      "Centralized state handling using Redux Toolkit slices, reducers, and predictable action dispatches.",
      "Multi-criteria filtering and instant client-side search across extensive datasets.",
      "Fully responsive design system adhering strictly to mobile-first UI/UX standards.",
      "Modular, reusable component structure with zero unnecessary re-renders.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[REACT-REDUX-REPO]",
    liveUrl: "https://[YOUR-REACT-DEMO].com",
    previewVisual: "analytics-ui",
    details: {
      problem: "Complex interactive client interfaces often suffer from prop-drilling and state synchronization issues across deeply nested UI trees.",
      solution: "Implemented Redux Toolkit to provide single-source-of-truth state, coupled with optimized React hooks for granular component updates.",
      architecture: [
        "Store: Redux Toolkit slice architecture with immutable state transitions.",
        "UI: Custom Tailwind CSS design tokens matching modern 2026 dark developer aesthetics.",
      ],
    },
  },
  {
    id: "proj-4",
    name: "Real-Time WebSocket Messaging System",
    type: "API-Based Applications",
    categoryKey: "api",
    isFeatured: false,
    tagline: "Low-latency bidirectional event communication engine with Node & Express",
    description: "A real-time messaging and notification service engineered with Node.js, Express.js, and WebSockets. Provides instant message broadcast, live user presence indicators, and RESTful backup history endpoints.",
    techStack: ["Node.js", "Express.js", "WebSockets", "JavaScript (ES6+)", "RESTful APIs", "Postman"],
    keyFeatures: [
      "Persistent WebSocket channels for instant bidirectional event delivery.",
      "RESTful API fallback routes with structured JSON error handling and HTTP status codes.",
      "Extensive Postman test collection verifying headers, payloads, and response times.",
      "Connection heartbeat and automatic client reconnection handling.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[WEBSOCKET-API-REPO]",
    liveUrl: "https://[YOUR-API-DEMO].com",
    previewVisual: "websocket-feed",
    details: {
      problem: "Polling standard REST endpoints for live events introduces unacceptable latency and server overhead.",
      solution: "Built a full duplex WebSocket engine paired with Express.js REST endpoints for message persistence and retrieval.",
      architecture: [
        "Protocol: WebSocket server integrated with Node.js HTTP server instance.",
        "Testing: Complete Postman test suite covering authorization headers and payload contracts.",
      ],
    },
  },
  {
    id: "proj-5",
    name: "Custom WordPress & Elementor Brand Platform",
    type: "WordPress Websites",
    categoryKey: "wordpress",
    isFeatured: false,
    tagline: "Client-tailored responsive CMS build with on-page SEO optimization",
    description: "A tailored commercial website crafted with WordPress and Elementor. Engineered with custom styling, responsive layouts, fast page load speeds, and comprehensive On-Page SEO meta architecture.",
    techStack: ["WordPress", "Elementor", "PHP", "SEO — On-Page SEO", "Manual Testing (QA)"],
    keyFeatures: [
      "Custom responsive layout tailored for mobile, tablet, and desktop viewports using Elementor.",
      "Structured On-Page SEO implementation with semantic headings, Open Graph tags, and schema.",
      "Rigorous manual QA testing across Chrome, Firefox, Safari, and mobile browsers.",
      "Client-friendly administrative backend enabling intuitive content updates.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[WORDPRESS-PROJECT]",
    liveUrl: "https://[YOUR-WORDPRESS-DEMO].com",
    previewVisual: "wordpress-site",
    details: {
      problem: "Clients need an easily manageable CMS without sacrificing bespoke design quality or search engine visibility.",
      solution: "Created an optimized WordPress setup leveraging Elementor for visual editing while enforcing clean code hygiene, performance caching, and on-page SEO.",
      architecture: [
        "CMS: WordPress core with custom template hooks and lightweight theme structure.",
        "SEO: Semantic heading hierarchy, image compression, and meta tag optimization.",
      ],
    },
  },
  {
    id: "proj-6",
    name: "Secure RESTful Authentication & QA Service",
    type: "API-Based Applications",
    categoryKey: "api",
    isFeatured: false,
    tagline: "Stateless JWT authentication backend with automated QA validation pipelines",
    description: "A specialized backend security microservice designed with Node.js, Express, and JWT. Includes protected endpoint testing suites in Postman and rigorous manual QA testing matrices for edge-case coverage.",
    techStack: ["Node.js", "Express.js", "JWT Authentication", "RESTful APIs", "Postman", "Manual Testing (QA)"],
    keyFeatures: [
      "Secure token generation, verification middleware, and granular permission checking.",
      "Complete Postman test runner executing environment collections and assertions.",
      "Manual QA testing checklist verifying input validation, SQL/NoSQL injection safety, and status codes.",
      "Standardized REST response schemas with consistent error and success wrappers.",
    ],
    githubUrl: "https://github.com/[YOUR-USERNAME]/[AUTH-QA-REPO]",
    liveUrl: "https://[YOUR-AUTH-DEMO].com",
    previewVisual: "auth-service",
    details: {
      problem: "Application security requires uncompromising token validation, protected route enforcement, and thorough QA verification of all status codes.",
      solution: "Constructed an isolated authentication service with end-to-end Postman verification scripts and QA test checklists.",
      architecture: [
        "Auth: JSON Web Tokens with HMAC-SHA256 signature and cryptographic expiry.",
        "QA: Test matrices covering 200, 201, 400, 401, 403, 404, and 500 status responses.",
      ],
    },
  },
];

/**
 * ADDITIONAL SKILLS SHOWCASE
 * Dedicated, deep-dive section covering:
 * - WordPress and Elementor
 * - SEO (On-Page & Off-Page)
 * - Manual Testing (QA)
 * - Tools & Team Collaboration (Git, GitHub, GitLab, SourceTree, Jira, Postman)
 */
export const additionalSkillsCards = [
  {
    id: "cms-elementor",
    title: "WordPress & Elementor",
    badge: "CMS & Web Development",
    icon: "LayoutTemplate",
    summary: "Building, customizing, and maintaining content-driven websites with client-friendly management and tailored styling.",
    highlights: [
      "Theme customization & child theme overrides using PHP and CSS3",
      "Pixel-perfect responsive page layouts using Elementor Pro builder",
      "Dynamic data binding, contact form integrations & plugin configuration",
      "Fast page load optimization and cross-browser visual consistency",
    ],
  },
  {
    id: "seo-specialization",
    title: "SEO — On-Page & Off-Page",
    badge: "Search Engine Optimization",
    icon: "SearchCheck",
    summary: "Applying fundamental search engine optimization principles to maximize organic visibility and search indexing.",
    highlights: [
      "On-Page SEO: Semantic HTML5 hierarchy (H1-H6), meta descriptions & title tags",
      "Open Graph & Twitter Card metadata for rich social sharing previews",
      "Off-Page SEO: Understanding domain authority factors and clean URL architecture",
      "Performance optimization for Core Web Vitals and mobile-friendly audits",
    ],
  },
  {
    id: "manual-qa",
    title: "Manual Testing (QA)",
    badge: "Quality Assurance",
    icon: "ShieldAlert",
    summary: "Systematic manual testing, functional checks, bug identification, and quality verification across software lifecycles.",
    highlights: [
      "Functional UI testing and validation across desktop and mobile screens",
      "Edge-case testing on forms, authentication flows, and data entry inputs",
      "API payload testing and response status code verification via Postman",
      "Detailed bug reproduction steps, documentation, and defect tracking in Jira",
    ],
  },
  {
    id: "tools-collaboration",
    title: "Tools & Team Collaboration",
    badge: "Version Control & Workflow",
    icon: "GitBranch",
    summary: "Industry-standard development workflows, version control systems, and collaborative agile platforms.",
    highlights: [
      "Git & GitHub: Branching models, pull requests, merge conflict resolution",
      "GitLab: Pipeline tracking and enterprise project management",
      "SourceTree: Visual Git staging, commit graphs, and branch monitoring",
      "Jira & Postman: Agile sprint task tracking and comprehensive API validation",
    ],
  },
];

