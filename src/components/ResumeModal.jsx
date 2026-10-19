import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeResumeModal } from '../store/portfolioSlice';
import { personalInfo } from '../data/portfolioData';
import { X, FileText, CheckCircle2, FolderCheck } from 'lucide-react';
import NeonButton from './common/NeonButton';

export const ResumeModal = () => {
  const dispatch = useDispatch();
  const { isResumeModalOpen } = useSelector((state) => state.portfolio);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isResumeModalOpen) {
        dispatch(closeResumeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isResumeModalOpen, dispatch]);

  if (!isResumeModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={() => dispatch(closeResumeModal())}
    >
      <div
        className="relative w-full max-w-xl bg-[#0C141A] border border-[#1A2A38] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden text-[#F4F7F5] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2A38] bg-[#101A22]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B7FF4A]" />
            <span className="text-xs font-mono text-[#B7FF4A] tracking-wider uppercase">
              Curriculum Vitae / Resume
            </span>
          </div>

          <button
            onClick={() => dispatch(closeResumeModal())}
            className="p-1.5 rounded-lg text-[#8E9CA6] hover:text-[#B7FF4A] hover:bg-[#162531] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold font-display text-[#F4F7F5] mb-1">
              Download {personalInfo.name} CV
            </h3>
            <p className="text-xs font-mono text-[#8E9CA6]">
              {personalInfo.roleTitle}
            </p>
          </div>

          {/* Quick summary card */}
          <div className="bg-[#101A22] rounded-lg p-4 border border-[#1A2A38] text-xs space-y-2 text-[#8E9CA6]">
            <div className="text-[#F4F7F5] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B7FF4A]" />
              <span>Verified CV Credentials:</span>
            </div>
            <p>• Practical MERN Stack &amp; PHP/Laravel Web Development experience</p>
            <p>• RESTful APIs, JWT Authentication, WebSockets &amp; Database Architecture</p>
            <p>• WordPress, Elementor, On-Page &amp; Off-Page SEO, and Manual QA Testing</p>
          </div>

          {/* Resume placement instructions */}
          {/* <div className="bg-[#080D10] rounded-lg p-4 border border-[#1A2A38] text-xs space-y-2">
            <div className="text-[#B7FF4A] font-mono font-semibold flex items-center gap-1.5">
              <FolderCheck className="w-4 h-4" />
              <span>How to replace with your real CV file:</span>
            </div>
            <p className="text-[#8E9CA6] leading-relaxed">
              1. Copy your verified CV PDF to <code className="text-[#B7FF4A] bg-[#101A22] px-1 py-0.5 rounded">/public/resume.pdf</code> in your project.
            </p>
            <p className="text-[#8E9CA6] leading-relaxed">
              2. Or configure a custom path/URL in <code className="text-[#B7FF4A] bg-[#101A22] px-1 py-0.5 rounded">src/data/portfolioData.js</code>.
            </p>
          </div> */}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#1A2A38] bg-[#101A22]">
          <NeonButton
            variant="ghost"
            size="sm"
            onClick={() => dispatch(closeResumeModal())}
          >
            Cancel
          </NeonButton>

          <NeonButton
            variant="primary"
            size="md"
            href={personalInfo.resumePath}
            download="Muhammad Abid.pdf"
            target="_blank"
            icon="download"
          >
            Download PDF Now
          </NeonButton>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
