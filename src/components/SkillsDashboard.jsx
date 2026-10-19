import { useSelector, useDispatch } from 'react-redux';
import { setSkillsFilter, setSkillsSearchQuery } from '../store/portfolioSlice';
import { skillsData } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import TechIcon from './common/TechIcon';
import { Search, CheckCircle2 } from 'lucide-react';

export const SkillsDashboard = () => {
  const dispatch = useDispatch();
  const { skillsFilter, skillsSearchQuery } = useSelector((state) => state.portfolio);

  // Filter panels based on active category and search query
  const filteredPanels = skillsData.panels
    .map((panel) => {
      // Check if panel matches active category
      const matchesCategory = skillsFilter === 'all' || panel.id === skillsFilter;
      if (!matchesCategory) return null;

      // Filter skills within panel based on search query
      const matchingSkills = panel.skills.filter((skill) => {
        if (!skillsSearchQuery) return true;
        const q = skillsSearchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(q) ||
          skill.tag.toLowerCase().includes(q) ||
          skill.context.toLowerCase().includes(q)
        );
      });

      if (matchingSkills.length === 0) return null;

      return {
        ...panel,
        skills: matchingSkills,
      };
    })
    .filter(Boolean);

  const totalVerifiedSkillsCount = skillsData.panels.reduce(
    (sum, p) => sum + p.skills.length,
    0
  );

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#0A1218] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="02"
          category="TECHNICAL SKILLS"
          title="Verified Technical Stack & Architecture."
          subtitle="A structured 7-panel dashboard mapping my actual CV skills. Every technology is verified without fabricated proficiency bars or unverified claims."
        />

        {/* Filter Controls & Live Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1A2A38]">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist" aria-label="Skills Category Filters">
            {skillsData.categories.map((cat) => {
              const isActive = skillsFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => dispatch(setSkillsFilter(cat.id))}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-[#B7FF4A] text-[#080D10] font-bold shadow-[0_0_15px_rgba(183,255,74,0.3)]'
                      : 'bg-[#101A22] text-[#8E9CA6] hover:text-[#F4F7F5] border border-[#1A2A38] hover:border-[#2A4052]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search className="w-4 h-4 text-[#5B6B77] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, PHP, JWT)..."
              value={skillsSearchQuery}
              onChange={(e) => dispatch(setSkillsSearchQuery(e.target.value))}
              className="w-full bg-[#101A22] border border-[#1A2A38] focus:border-[#B7FF4A] rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-[#F4F7F5] placeholder-[#5B6B77] focus:outline-none transition-colors"
            />
            {skillsSearchQuery && (
              <button
                onClick={() => dispatch(setSkillsSearchQuery(''))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8E9CA6] hover:text-[#B7FF4A]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Status Strip: Count of visible skills */}
        <div className="flex items-center justify-between text-xs font-mono text-[#8E9CA6] mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF4A]"></span>
            <span>SHOWING {filteredPanels.reduce((acc, p) => acc + p.skills.length, 0)} OF {totalVerifiedSkillsCount} VERIFIED COMPETENCIES</span>
          </div>
          <span className="text-[#5B6B77] hidden sm:inline">// ZERO FABRICATED PERCENTAGES</span>
        </div>

        {/* 7 Structured Panels Grid */}
        <div className="space-y-8">
          {filteredPanels.map((panel) => (
            <div
              key={panel.id}
              className="bg-[#0C141A] rounded-xl border border-[#1A2A38] overflow-hidden shadow-lg transition-all duration-300 hover:border-[#2A4052]"
            >
              {/* Panel Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#101A22] border-b border-[#1A2A38] gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#B7FF4A] bg-[#162531] px-2.5 py-1 rounded border border-[#1A2A38]">
                    PANEL {panel.panelNumber}
                  </span>
                  <h3 className="text-lg font-bold font-display text-[#F4F7F5]">
                    {panel.panelTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#8E9CA6] font-mono sm:text-right">
                  {panel.description}
                </p>
              </div>

              {/* Skills Cards Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {panel.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-[#0E1720] border border-[#1A2A38] hover:border-[#B7FF4A] hover:bg-[#121F2C] transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon + Skill Name + Tag */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-md bg-[#101A22] border border-[#1A2A38] text-[#B7FF4A] group-hover:border-[#B7FF4A]/50 transition-colors">
                            <TechIcon name={skill.name} className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[#8E9CA6]">
                          {skill.tag}
                        </span>
                      </div>

                      {/* Practical Application Context */}
                      <p className="text-xs text-[#8E9CA6] leading-relaxed mt-2 font-sans">
                        {skill.context}
                      </p>
                    </div>

                    {/* Bottom verification check */}
                    <div className="mt-3 pt-2.5 border-t border-[#162430] flex items-center justify-between text-[10px] font-mono text-[#5B6B77]">
                      <span>VERIFIED IN CV</span>
                      <span className="text-[#B7FF4A] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Empty search fallback */}
          {filteredPanels.length === 0 && (
            <div className="p-12 text-center bg-[#0C141A] rounded-xl border border-[#1A2A38]">
              <p className="text-[#8E9CA6] text-sm font-mono mb-3">
                No verified skills match your search query: &ldquo;{skillsSearchQuery}&rdquo;
              </p>
              <button
                onClick={() => {
                  dispatch(setSkillsSearchQuery(''));
                  dispatch(setSkillsFilter('all'));
                }}
                className="px-4 py-2 rounded-lg bg-[#B7FF4A] text-[#080D10] text-xs font-mono font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SkillsDashboard;
