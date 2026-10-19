import { useDispatch } from 'react-redux';
import { openProjectModal } from '../store/portfolioSlice';
import ProjectPreviewGraphic from './common/ProjectPreviewGraphic';
import { ExternalLink, CheckCircle2, Eye, ArrowUpRight } from 'lucide-react';
import TechIcon, { GithubIcon } from './common/TechIcon';

export const ProjectCard = ({ project, isWide = false }) => {
  const dispatch = useDispatch();

  if (isWide) {
    return (
      <div className="bg-[#0C141A] rounded-xl border border-[#1A2A38] hover:border-[#B7FF4A] transition-all duration-300 overflow-hidden shadow-xl group">
        <div className="grid lg:grid-cols-12 gap-0">
          
          {/* Visual Preview Side (Large 7 cols) */}
          <div className="lg:col-span-7 bg-[#080D10] border-b lg:border-b-0 lg:border-r border-[#1A2A38] relative flex flex-col justify-center">
            <ProjectPreviewGraphic visualType={project.previewVisual} className="h-64 sm:h-80 w-full" />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-[#080D10]/90 border border-[#B7FF4A]/50 text-[#B7FF4A] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF4A] animate-pulse"></span>
                FEATURED ARCHITECTURE
              </span>
            </div>
          </div>

          {/* Details & Actions Side (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider">
                  {project.type}
                </span>
                <span className="text-[10px] font-mono text-[#5B6B77]">2026 PROD</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors mb-2">
                {project.name}
              </h3>

              <p className="text-xs font-mono text-[#8E9CA6] mb-4">
                {project.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#8E9CA6] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Key Features Summary */}
              <div className="space-y-2 mb-6">
                {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#8E9CA6]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF4A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]"
                  >
                    <TechIcon name={tech} className="w-3 h-3 text-[#B7FF4A]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#162430] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => dispatch(openProjectModal(project))}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#B7FF4A] hover:text-[#c7ff73] transition-colors cursor-pointer group/btn"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors"
                  aria-label="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6] hover:text-[#B7FF4A] hover:border-[#B7FF4A] transition-colors"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // Standard Grid Card
  return (
    <div className="bg-[#0C141A] rounded-xl border border-[#1A2A38] hover:border-[#B7FF4A] transition-all duration-300 overflow-hidden shadow-xl group flex flex-col justify-between">
      <div>
        {/* Preview Graphic */}
        <div className="bg-[#080D10] relative">
          <ProjectPreviewGraphic visualType={project.previewVisual} className="h-44 sm:h-48 w-full" />
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#080D10]/90 border border-[#1A2A38] text-[#B7FF4A]">
              {project.type}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors mb-1.5">
            {project.name}
          </h3>

          <p className="text-xs font-mono text-[#8E9CA6] mb-3">
            {project.tagline}
          </p>

          <p className="text-xs text-[#8E9CA6] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] font-mono text-[#F4F7F5]"
              >
                <TechIcon name={tech} className="w-2.5 h-2.5 text-[#B7FF4A]" />
                <span>{tech}</span>
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-[#101A22] text-[10px] font-mono text-[#5B6B77]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 py-3.5 bg-[#101A22] border-t border-[#1A2A38] flex items-center justify-between">
        <button
          onClick={() => dispatch(openProjectModal(project))}
          className="text-xs font-mono font-medium text-[#B7FF4A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Details</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8E9CA6] hover:text-[#B7FF4A] transition-colors p-1"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8E9CA6] hover:text-[#B7FF4A] transition-colors p-1"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
