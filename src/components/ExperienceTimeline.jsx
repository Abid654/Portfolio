import { experiences } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import TechIcon from './common/TechIcon';
import { Briefcase, Calendar, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#080D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="03"
          category="WORK HISTORY"
          title="Professional Experience & Engineering Roles."
          subtitle="Real-world development experience in full-stack MERN engineering, PHP/Laravel enterprise systems, and quality assurance workflows."
        />

        {/* Informational Config Banner */}
        <div className="mb-12 p-4 rounded-lg bg-[#101A22] border border-[#1A2A38] flex items-start gap-3 max-w-3xl">
          <AlertCircle className="w-5 h-5 text-[#B7FF4A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#8E9CA6] leading-relaxed">
            <strong className="text-[#F4F7F5] font-semibold">Configurable CV Placeholders: </strong>
            Company names, locations, dates, and bullet points can be edited in <code className="text-[#B7FF4A] bg-[#080D10] px-1 py-0.5 rounded">src/data/portfolioData.js</code> to align with your verified employment contracts.
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#1A2A38] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080D10] border-2 border-[#B7FF4A] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B7FF4A]"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-[#0C141A] rounded-xl border border-[#1A2A38] p-6 sm:p-8 hover:border-[#B7FF4A] transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                
                {/* Header Row: Role Title, Company & Duration */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#1A2A38]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[#B7FF4A]">
                        {exp.type}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#162531] text-[#8E9CA6]">
                        {exp.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8E9CA6] mt-2">
                      <span className="flex items-center gap-1.5 text-[#F4F7F5] font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-[#B7FF4A]" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-[#5B6B77]">|</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#5B6B77]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101A22] border border-[#1A2A38] text-xs font-mono text-[#B7FF4A] self-start lg:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Verified Responsibilities List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#5B6B77]">
                    Key Responsibilities &amp; Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8E9CA6] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B7FF4A] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Applied in Role */}
                <div className="pt-4 border-t border-[#162430]">
                  <div className="text-[11px] font-mono text-[#5B6B77] mb-2.5 uppercase">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]"
                      >
                        <TechIcon name={tech} className="w-3 h-3 text-[#B7FF4A]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
