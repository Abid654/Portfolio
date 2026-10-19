import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/TechIcon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080D10] border-t border-[#1A2A38] py-12 text-xs font-mono text-[#8E9CA6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1A2A38]">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <span className="text-base font-bold text-[#F4F7F5] font-display">
              {personalInfo.displayName}
            </span>
            <p className="text-xs text-[#8E9CA6]">
              {personalInfo.roleTitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.emailLink}
              className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Tech Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-[#5B6B77]">
          <div>
            &copy; {currentYear} {personalInfo.name}. All verified CV rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19, Redux Toolkit &amp; Tailwind CSS</span>
            <span className="text-[#B7FF4A]">// 2026 SPEC</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
