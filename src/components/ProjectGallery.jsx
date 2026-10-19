import { useSelector, useDispatch } from 'react-redux';
import { setProjectsFilter } from '../store/portfolioSlice';
import { projectsData } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import ProjectCard from './ProjectCard';

export const ProjectGallery = () => {
  const dispatch = useDispatch();
  const { projectsFilter } = useSelector((state) => state.portfolio);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'react', label: 'React Apps' },
    { id: 'laravel', label: 'Laravel Apps' },
    { id: 'wordpress', label: 'WordPress Sites' },
    { id: 'api', label: 'API-Based Apps' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (projectsFilter === 'all') return true;
    return proj.categoryKey === projectsFilter;
  });

  // Separate wide featured vs grid items for visual rhythm
  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const regularProjects = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#0A1218] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="04"
          category="FEATURED PROJECTS"
          title="Engineered Web Solutions & Case Studies."
          subtitle="A curated showcase of applications built with MERN stack, Laravel, React, WordPress, WebSockets, and database systems. Each card includes architecture breakdowns and verified tech stacks."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#1A2A38]">
          <span className="text-xs font-mono text-[#5B6B77] mr-2 hidden sm:inline">// CATEGORIES:</span>
          {categories.map((cat) => {
            const isActive = projectsFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => dispatch(setProjectsFilter(cat.id))}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#B7FF4A] text-[#080D10] font-bold shadow-[0_0_15px_rgba(183,255,74,0.3)]'
                    : 'bg-[#101A22] text-[#8E9CA6] hover:text-[#F4F7F5] border border-[#1A2A38] hover:border-[#2A4052]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Layout with Varied Visual Rhythm */}
        <div className="space-y-8">
          
          {/* Featured Wide Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isWide={true} />
              ))}
            </div>
          )}

          {/* Grid Supporting Projects */}
          {regularProjects.length > 0 && (
            <div>
              {featuredProjects.length > 0 && (
                <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B77] uppercase tracking-wider my-8 pt-4 border-t border-[#1A2A38]">
                  <span>// SPECIALIZED SYSTEM BUILDS</span>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} isWide={false} />
                ))}
              </div>
            </div>
          )}

          {/* Fallback if category has no items */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-[#0C141A] rounded-xl border border-[#1A2A38] p-8">
              <p className="text-sm font-mono text-[#8E9CA6]">No projects found in this category.</p>
              <button
                onClick={() => dispatch(setProjectsFilter('all'))}
                className="mt-3 px-4 py-2 rounded-lg bg-[#B7FF4A] text-[#080D10] text-xs font-mono font-bold"
              >
                View All Projects
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;
