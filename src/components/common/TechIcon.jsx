export const GithubIcon = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TechIcon = ({ name, className = "w-6 h-6", colored = true }) => {
  const normalized = name.toLowerCase().trim();

  // React.js (Cyan)
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke={colored ? "#61DAFB" : "currentColor"} strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke={colored ? "#61DAFB" : "currentColor"} strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke={colored ? "#61DAFB" : "currentColor"} strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill={colored ? "#61DAFB" : "currentColor"} />
      </svg>
    );
  }

  // JavaScript (Yellow Badge)
  if (normalized === 'javascript' || normalized === 'js' || normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" fill={colored ? "#F7DF1E" : "#1A2632"} />
        <path d="M8 18V13.5C8 12.5 9 12.5 9.5 12.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 13.5C14 13 15 12.5 16.5 12.5C18 12.5 18.5 13.5 18.5 14.5C18.5 16 14.5 16 14.5 17.5C14.5 18.5 15.5 19 16.5 19C17.5 19 18.5 18.2 18.5 17.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // HTML5 (Orange Shield)
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill={colored ? "#E44D26" : "#1A2632"} />
        <path d="M12 4V20.5L17.5 19L19.2 4H12Z" fill={colored ? "#F16529" : "#223344"} />
        <path d="M7 7H17L16.5 11H8L8.5 14H16.2L15.8 17L12 18L8.2 17L8 15H6L6.5 18.5L12 20L17.5 18.5L18.5 7H7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // CSS3 (Blue Shield)
  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill={colored ? "#1572B6" : "#1A2632"} />
        <path d="M12 4V20.5L17.5 19L19.2 4H12Z" fill={colored ? "#33A9DC" : "#223344"} />
        <path d="M17 7H7.5L8 11H16.5L16 14.5L12 15.5L8 14.5L7.8 12.5H5.8L6.2 16.5L12 18L17.8 16.5L18.8 7H17Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS (Cyan Waves)
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6 9C7.5 6.5 10 6.5 11 8C12 9.5 13.5 10.5 15.5 10.5C18 10.5 19.5 8.5 20.5 7C19 9.5 16.5 9.5 15.5 8C14.5 6.5 13 5.5 11 5.5C8.5 5.5 7 7.5 6 9Z" fill={colored ? "#38BDF8" : "currentColor"} />
        <path d="M3.5 15C5 12.5 7.5 12.5 8.5 14C9.5 15.5 11 16.5 13 16.5C15.5 16.5 17 14.5 18 13C16.5 15.5 14 15.5 13 14C12 12.5 10.5 11.5 8.5 11.5C6 11.5 4.5 13.5 3.5 15Z" fill={colored ? "#38BDF8" : "currentColor"} />
      </svg>
    );
  }

  // Redux Toolkit (Purple swirl)
  if (normalized.includes('redux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#764ABC" : "#1A2632"} />
        <path d="M12 6C9 6 6 8.5 6 12C6 15.5 9 18 12 18C15 18 18 15.5 18 12" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js (Green Hexagon)
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill={colored ? "#339933" : "#1A2632"} />
        <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill={colored ? "#53A353" : "#223344"} />
        <path d="M10 10V14L13 15.5V11.5L10 10Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="4" fill={colored ? "#252B30" : "#111A22"} stroke="#3E4A56" />
        <text x="5" y="16" fill="#F4F7F5" fontSize="10" fontWeight="bold" fontFamily="monospace">ex</text>
        <circle cx="18" cy="8" r="1.5" fill="#B7FF4A" />
      </svg>
    );
  }

  // PHP (Purple/Blue Oval)
  if (normalized === 'php' || normalized.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="7" fill={colored ? "#777BB4" : "#1A2632"} />
        <text x="5" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PHP</text>
      </svg>
    );
  }

  // Laravel (Red 3D Layered Logo)
  if (normalized.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 7L12 2L21 7L12 12L3 7Z" fill={colored ? "#FF2D20" : "#1A2632"} />
        <path d="M3 12L12 17L21 12" stroke={colored ? "#FF574D" : "#334455"} strokeWidth="2" strokeLinejoin="round" />
        <path d="M3 17L12 22L21 17" stroke={colored ? "#E01B0E" : "#334455"} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  // MongoDB (Green Leaf)
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 7.5 6 13.5C6 17.5 8.5 20.8 12 22C15.5 20.8 18 17.5 18 13.5C18 7.5 12 2 12 2Z" fill={colored ? "#47A248" : "#1A2632"} />
        <path d="M12 3V21C14.5 19.5 16 16.8 16 13.5C16 8.5 12 3 12 3Z" fill={colored ? "#54B856" : "#223344"} />
      </svg>
    );
  }

  // MySQL (Blue Dolphin Silhouette)
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="4" fill={colored ? "#00758F" : "#111A22"} />
        <text x="4" y="15" fill="#F29111" fontSize="8" fontWeight="bold" fontFamily="sans-serif">MySQL</text>
      </svg>
    );
  }

  // Git (Orange Branch)
  if (normalized === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill={colored ? "#F05032" : "#1A2632"} />
        <circle cx="8" cy="8" r="2" fill="#FFFFFF" />
        <circle cx="8" cy="16" r="2" fill="#FFFFFF" />
        <circle cx="16" cy="12" r="2" fill="#FFFFFF" />
        <path d="M8 10V14" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M10 8H13C14.5 8 16 9.5 16 11V12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // GitHub
  if (normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#24292E" : "#111A22"} stroke="#3F4852" />
        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.03 17.65 15.97 17.17 15.81 16.72C15.64 16.27 15.39 15.86 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.5 7.12 20.96 5.78 20 4.77C20.45 3.54 20.42 2.19 19.91 0.99C19.91 0.99 18.73 0.65 16 2.48C13.7 1.85 11.29 1.85 9 2.48C6.27 0.65 5.09 0.99 5.09 0.99C4.57 2.19 4.54 3.54 5 4.77C4.03 5.78 3.49 7.14 3.5 8.55C3.5 13.98 6.8 15.16 9.94 15.55C9.61 15.89 9.35 16.29 9.19 16.73C9.03 17.18 8.96 17.65 9 18.13V22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.7) translate(5, 5)" />
      </svg>
    );
  }

  // GitLab (Orange Fox)
  if (normalized.includes('gitlab')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22 13L19 3L16 13H8L5 3L2 13L12 21L22 13Z" fill={colored ? "#FC6D26" : "#1A2632"} />
        <path d="M12 21L8 13H16L12 21Z" fill={colored ? "#E24329" : "#223344"} />
      </svg>
    );
  }

  // Postman (Orange Astronaut)
  if (normalized.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#FF6C37" : "#1A2632"} />
        <path d="M8 12L11 15L16 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Gemini API (Google AI 4-pointed Star)
  if (normalized.includes('gemini') || normalized.includes('ai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill={colored ? "#4285F4" : "#B7FF4A"} />
      </svg>
    );
  }

  // JWT / Auth
  if (normalized.includes('jwt') || normalized.includes('auth')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="4" y="9" width="16" height="12" rx="3" fill={colored ? "#9333EA" : "#1A2632"} stroke="#C084FC" strokeWidth="1.5" />
        <path d="M8 9V6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6V9" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="15" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // WebSockets
  if (normalized.includes('websocket') || normalized.includes('socket')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#010101" : "#111A22"} stroke="#334455" />
        <path d="M12 6V18M6 12H18" stroke={colored ? "#B7FF4A" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill={colored ? "#B7FF4A" : "currentColor"} />
      </svg>
    );
  }

  // WordPress
  if (normalized.includes('wordpress')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#21759B" : "#1A2632"} />
        <path d="M5 14L8.5 5.5L11.5 14.5L14.5 7L18.5 15.5" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Elementor
  if (normalized.includes('elementor')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={colored ? "#92003B" : "#1A2632"} />
        <path d="M8 7V17M12 7V17M12 7H16M12 12H16M12 17H16" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }

  // RESTful APIs
  if (normalized.includes('rest') || normalized.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="3" fill={colored ? "#0284C7" : "#1A2632"} />
        <path d="M7 10L10 12L7 14M13 14H17" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }

  // Eloquent ORM
  if (normalized.includes('eloquent')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" fill={colored ? "#FF2D20" : "#1A2632"} />
        <rect x="13" y="13" width="8" height="8" rx="2" fill={colored ? "#FF2D20" : "#1A2632"} />
        <path d="M7 11V15C7 16 8 17 9 17H13" stroke="#FFFFFF" strokeWidth="1.75" />
      </svg>
    );
  }

  // Jira
  if (normalized.includes('jira')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill={colored ? "#0052CC" : "#1A2632"} />
        <path d="M12 4L6 10L12 16L18 10L12 4Z" fill="#FFFFFF" />
        <path d="M12 9L9 12L12 15L15 12L12 9Z" fill="#2684FF" />
      </svg>
    );
  }

  // SourceTree
  if (normalized.includes('sourcetree')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill={colored ? "#205081" : "#1A2632"} />
        <circle cx="12" cy="16" r="2.5" fill="#FFFFFF" />
        <circle cx="7" cy="8" r="2" fill="#FFFFFF" />
        <circle cx="17" cy="8" r="2" fill="#FFFFFF" />
        <path d="M7 10V12C7 14 12 14 12 14M17 10V12C17 14 12 14 12 14" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // SEO
  if (normalized.includes('seo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke={colored ? "#10B981" : "currentColor"} strokeWidth="2" />
        <path d="M20 20L16 16" stroke={colored ? "#10B981" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 11L10 13L14 9" stroke={colored ? "#10B981" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Manual QA / Testing
  if (normalized.includes('qa') || normalized.includes('test') || normalized.includes('manual')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6V12C4 17 7.5 21.5 12 22C16.5 21.5 20 17 20 12V6L12 2Z" fill={colored ? "#059669" : "#1A2632"} stroke="#34D399" strokeWidth="1.5" />
        <path d="M9 12L11 14L15 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={colored ? "#B7FF4A" : "currentColor"} strokeWidth="2">
      <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default TechIcon;
