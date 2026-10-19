import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeProjectModal } from '../../store/portfolioSlice';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, AlertCircle } from 'lucide-react';
import TechIcon, { GithubIcon } from './TechIcon';
import ProjectPreviewGraphic from './ProjectPreviewGraphic';
import NeonButton from './NeonButton';

export const ProjectModal = () => {
  const dispatch = useDispatch();
  const { isProjectModalOpen, selectedProject } = useSelector((state) => state.portfolio);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isProjectModalOpen) {
        dispatch(closeProjectModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProjectModalOpen, dispatch]);

  if (!isProjectModalOpen || !selectedProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={() => dispatch(closeProjectModal())}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0C141A] border border-[#1A2A38] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-auto text-[#F4F7F5] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2A38] bg-[#101A22]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A] animate-pulse"></span>
            <span className="text-xs font-mono text-[#B7FF4A] tracking-wider uppercase">
              {selectedProject.type}
            </span>
          </div>

          <button
            onClick={() => dispatch(closeProjectModal())}
            className="p-1.5 rounded-lg text-[#8E9CA6] hover:text-[#B7FF4A] hover:bg-[#162531] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Project Preview Illustration */}
          <div className="rounded-lg overflow-hidden border border-[#1A2A38]">
            <ProjectPreviewGraphic visualType={selectedProject.previewVisual} className="h-56 sm:h-64 w-full" />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-[#F4F7F5] mb-2">
              {selectedProject.name}
            </h3>
            <p className="text-sm sm:text-base text-[#B7FF4A] font-mono">
              {selectedProject.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#8E9CA6] leading-relaxed">
            {selectedProject.description}
          </p>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E9CA6] mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#B7FF4A]" />
              <span>Verified Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#101A22] border border-[#1A2A38] text-xs font-mono text-[#F4F7F5] hover:border-[#B7FF4A] transition-colors"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown */}
          {selectedProject.details && (
            <div className="bg-[#101A22] rounded-lg p-5 border border-[#1A2A38] space-y-4">
              <div>
                <h5 className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider mb-1">Problem & Objective</h5>
                <p className="text-xs sm:text-sm text-[#8E9CA6]">{selectedProject.details.problem}</p>
              </div>

              <div>
                <h5 className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider mb-1">Architecture & Solution</h5>
                <p className="text-xs sm:text-sm text-[#8E9CA6]">{selectedProject.details.solution}</p>
              </div>

              {selectedProject.details.architecture && (
                <div>
                  <h5 className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider mb-2">Implementation Highlights</h5>
                  <ul className="space-y-1.5">
                    {selectedProject.details.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#8E9CA6]">
                        <span className="text-[#B7FF4A] font-mono mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E9CA6] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B7FF4A]" />
              <span>Core Functional Capabilities</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {selectedProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#101A22]/50 p-2.5 rounded border border-[#1A2A38]/70 text-xs text-[#8E9CA6]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7FF4A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repository & Demo Notice */}
          <div className="p-3 rounded-lg bg-[#080D10] border border-[#1A2A38] flex items-center gap-2.5 text-xs text-[#8E9CA6]">
            <AlertCircle className="w-4 h-4 text-[#B7FF4A] shrink-0" />
            <span>
              Project repository and live demo links are configurable placeholders in <code className="text-[#B7FF4A]">src/data/portfolioData.js</code>.
            </span>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-[#1A2A38] bg-[#101A22]">
          <div className="flex items-center gap-3">
            <NeonButton
              variant="secondary"
              size="sm"
              href={selectedProject.githubUrl}
              target="_blank"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </NeonButton>

            <NeonButton
              variant="outline"
              size="sm"
              href={selectedProject.liveUrl}
              target="_blank"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </NeonButton>
          </div>

          <NeonButton
            variant="ghost"
            size="sm"
            onClick={() => dispatch(closeProjectModal())}
          >
            Close
          </NeonButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
