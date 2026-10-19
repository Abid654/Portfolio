import { additionalSkillsCards } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import TechIcon from './common/TechIcon';
import { 
  LayoutTemplate, 
  SearchCheck, 
  ShieldAlert, 
  GitBranch, 
  CheckCircle2 
} from 'lucide-react';

export const AdditionalSkillsSection = () => {
  const iconComponents = {
    LayoutTemplate: <LayoutTemplate className="w-5 h-5 text-[#B7FF4A]" />,
    SearchCheck: <SearchCheck className="w-5 h-5 text-[#B7FF4A]" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#B7FF4A]" />,
    GitBranch: <GitBranch className="w-5 h-5 text-[#B7FF4A]" />,
  };

  return (
    <section id="showcase" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#080D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          category="ADDITIONAL EXPERTISE"
          title="CMS, SEO, QA & Collaborative Workflows."
          subtitle="Beyond core coding, these disciplines ensure web applications are discoverable by search engines, bug-free in production, easily managed by clients, and tracked collaboratively."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalSkillsCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0C141A] rounded-xl border border-[#1A2A38] p-6 sm:p-8 hover:border-[#B7FF4A] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Category Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1A2A38]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#101A22] border border-[#1A2A38] group-hover:border-[#B7FF4A] transition-colors">
                      {iconComponents[card.icon]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#B7FF4A] uppercase tracking-wider block">
                        {card.badge}
                      </span>
                      <h3 className="text-xl font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#8E9CA6] leading-relaxed mb-6">
                  {card.summary}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-mono text-[#5B6B77] uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  {card.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8E9CA6]">
                      <CheckCircle2 className="w-4 h-4 text-[#B7FF4A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Specific Tech Pills */}
              <div className="pt-4 border-t border-[#162430]">
                <div className="flex flex-wrap gap-1.5">
                  {card.id === 'cms-elementor' && (
                    <>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="WordPress" className="w-3 h-3 text-[#B7FF4A]" /> WordPress
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="Elementor" className="w-3 h-3 text-[#B7FF4A]" /> Elementor
                      </span>
                    </>
                  )}

                  {card.id === 'seo-specialization' && (
                    <>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="SEO" className="w-3 h-3 text-[#B7FF4A]" /> On-Page SEO
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="SEO" className="w-3 h-3 text-[#B7FF4A]" /> Off-Page SEO
                      </span>
                    </>
                  )}

                  {card.id === 'manual-qa' && (
                    <>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="Manual Testing" className="w-3 h-3 text-[#B7FF4A]" /> Manual Testing (QA)
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                        <TechIcon name="Postman" className="w-3 h-3 text-[#B7FF4A]" /> Postman Validations
                      </span>
                    </>
                  )}

                  {card.id === 'tools-collaboration' && (
                    <>
                      {['Git', 'GitHub', 'GitLab', 'SourceTree', 'Jira', 'Postman'].map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A22] border border-[#1A2A38] text-[11px] font-mono text-[#F4F7F5]">
                          <TechIcon name={t} className="w-3 h-3 text-[#B7FF4A]" /> {t}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdditionalSkillsSection;
