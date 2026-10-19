# Premium 2026 Developer Portfolio

A modern, visually stunning, high-performance developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Redux Toolkit**. Designed with an editorial dark interface (`#080D10`), neon-lime accents (`#B7FF4A`), bold typography (**Space Grotesk** & **Inter**), and a structured 7-panel developer dashboard.

---

## 🚀 Live Tech Stack & Architecture

- **Frontend Core:** React 19, JavaScript (ES6+), Vite v8
- **Styling & Design System:** Tailwind CSS v4, Custom Dark Theme (`#080D10`), Neon Lime (`#B7FF4A`), CSS Grid Patterns
- **State Management:** Redux Toolkit (active navigation scrollspy, skill category filters, real-time search, project modal state, contact form states)
- **Typography:** Space Grotesk (display headings), Inter (clean body text), JetBrains Mono (code snippets & coordinates)
- **Icons & Graphics:** Custom SVG brand marks & Lucide React
- **Deployment Ready:** Vercel-ready with `vercel.json` SPA routing

---

## 📋 Complete Verified Skills Matrix (23 Skills Across 7 Panels)

Every skill displayed in this portfolio strictly reflects your verified CV competencies—with zero unverified additions and zero fabricated proficiency percentages:

| Panel | Category | Included Verified Skills |
|---|---|---|
| **01** | **Programming Languages** | JavaScript, PHP |
| **02** | **Front-End Development** | HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Redux Toolkit |
| **03** | **Back-End Development** | Node.js, Express.js, PHP, Laravel, RESTful APIs, JWT Authentication, WebSockets |
| **04** | **Database Management** | MongoDB, MySQL |
| **05** | **Development Tools** | Git, GitHub, GitLab, Postman, Eloquent ORM, Jira, SourceTree |
| **06** | **CMS & Web Development** | WordPress, Elementor |
| **07** | **SEO & Quality Assurance** | SEO — On-Page SEO, SEO — Off-Page SEO, Manual Testing (QA) |

---

## 🛠️ Getting Started (Local Development)

### 1. Install Dependencies
```bash
cd my-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run ESLint Validation
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Placeholders

All configurable information is located in a single, well-documented file:
**[`src/data/portfolioData.js`](file:///d:/New%20folder/portfolio/my-portfolio/src/data/portfolioData.js)**

### 1. Identity & Contact Information
Edit the `personalInfo` object in `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: "Your Actual Name",
  displayName: "<YourName />",
  roleTitle: "MERN Stack Developer | Full-Stack Web Developer",
  email: "your.real.email@domain.com",
  location: "Your City, Country",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    gitlab: "https://gitlab.com/your-username",
    emailLink: "mailto:your.real.email@domain.com",
  },
  // ...
};
```

### 2. Resume / CV Setup
1. Export your official CV as a PDF file named `resume.pdf`.
2. Place it into the `public/` directory (replace `public/resume.pdf`).
3. The "Download Resume" buttons in the Navbar, Hero Section, and Resume Modal will automatically serve your real PDF file.

### 3. Professional Experience
Update the `experiences` array in `src/data/portfolioData.js` with your exact company names, dates, and CV bullet points:
```javascript
export const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Acme Software Labs",
    location: "City / Remote",
    duration: "June 2024 – Dec 2024",
    // ...
  },
  // ...
];
```

### 4. Project Repositories & Live Demos
Update the `projectsData` array in `src/data/portfolioData.js` with your real GitHub URLs and live demo links.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and set the **Root Directory** to `my-portfolio` (if deploying from parent folder) or root.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**.
The included `vercel.json` ensures all client-side routes and asset delivery work out-of-the-box.
