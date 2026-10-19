import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from './store/portfolioSlice';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsDashboard from './components/SkillsDashboard';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGallery from './components/ProjectGallery';
import AdditionalSkillsSection from './components/AdditionalSkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/common/ProjectModal';
import ResumeModal from './components/ResumeModal';

export const App = () => {
  const dispatch = useDispatch();

  // ScrollSpy using IntersectionObserver to update active navigation state
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'showcase', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection(entry.target.id));
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#080D10] text-[#F4F7F5] selection:bg-[#B7FF4A] selection:text-[#080D10] relative flex flex-col font-sans">
      {/* Sticky Refined Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full" id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsDashboard />
        <ExperienceTimeline />
        <ProjectGallery />
        <AdditionalSkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <ProjectModal />
      <ResumeModal />
    </div>
  );
};

export default App;
