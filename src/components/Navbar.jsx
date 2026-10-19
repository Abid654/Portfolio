import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setActiveSection, 
  toggleMobileMenu, 
  setMobileMenuOpen, 
  openResumeModal 
} from '../store/portfolioSlice';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Download } from 'lucide-react';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeSection, isMobileMenuOpen } = useSelector((state) => state.portfolio);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll distance to apply background glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'showcase', label: 'Specialization' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    dispatch(setActiveSection(id));
    dispatch(setMobileMenuOpen(false));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D10]/90 backdrop-blur-md border-b border-[#1A2A38] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#B7FF4A] rounded px-1"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#101A22] border border-[#1A2A38] flex items-center justify-center text-[#B7FF4A] group-hover:border-[#B7FF4A] transition-colors">
              <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
            </div>
            <span className="font-mono text-base font-bold tracking-tight text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors">
              {personalInfo.displayName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0C141A]/80 border border-[#1A2A38] rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium font-mono rounded-full transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'text-[#080D10] bg-[#B7FF4A] font-semibold shadow-[0_0_12px_rgba(183,255,74,0.3)]'
                      : 'text-[#8E9CA6] hover:text-[#F4F7F5] hover:bg-[#14222D]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => dispatch(openResumeModal())}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#101A22] text-[#F4F7F5] border border-[#1A2A38] hover:border-[#B7FF4A] hover:text-[#B7FF4A] transition-all duration-200 cursor-pointer hover:shadow-[0_0_15px_rgba(183,255,74,0.15)]"
              aria-label="Open resume download modal"
            >
              <Download className="w-3.5 h-3.5 text-[#B7FF4A]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#080D10]/98 border-b border-[#1A2A38] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 text-xs font-mono rounded-lg text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#B7FF4A] text-[#080D10] font-bold'
                      : 'bg-[#101A22] text-[#8E9CA6] hover:text-[#F4F7F5] border border-[#1A2A38]'
                  }`}
                >
                  <span className="text-[#5B6B77] mr-1.5">//</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#1A2A38] flex flex-col gap-2">
            <button
              onClick={() => {
                dispatch(setMobileMenuOpen(false));
                dispatch(openResumeModal());
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#B7FF4A] text-[#080D10] font-display font-semibold text-xs tracking-wider uppercase cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume / CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
