import { personalInfo, howIWork } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import { 
  Code2, 
  Layout, 
  CheckCircle2, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

export const AboutSection = () => {
  const iconMap = {
    Code2: <Code2 className="w-5 h-5 text-[#B7FF4A]" />,
    Layout: <Layout className="w-5 h-5 text-[#B7FF4A]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#B7FF4A]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#B7FF4A]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#B7FF4A]" />,
  };

  const experienceFocusAreas = [
    { title: "MERN Stack Development", detail: "React.js, Node.js, Express.js, MongoDB" },
    { title: "PHP & Laravel Architecture", detail: "MVC structure, Eloquent ORM, MySQL" },
    { title: "Responsive Frontend Engineering", detail: "Tailwind CSS, HTML5, modern ES6+ JavaScript" },
    { title: "RESTful APIs & Integration", detail: "Clean JSON contracts, Postman endpoint testing" },
    { title: "Authentication & Security", detail: "JWT token validation, protected route workflows" },
    { title: "Database Systems", detail: "Relational MySQL & NoSQL MongoDB schema design" },
    { title: "Version Control & Team Ops", detail: "Git, GitHub, GitLab, SourceTree, Jira agile tracking" },
    { title: "CMS & Optimization", detail: "WordPress, Elementor, On-Page & Off-Page SEO, Manual QA" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#080D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="01"
          category="ABOUT ME"
          title="Engineering Functional, High-Performance Web Applications."
          subtitle="A practical blend of modern JavaScript full-stack development, PHP/Laravel application architecture, and rigorous quality assurance."
        />

        {/* Top Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#8E9CA6] text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-xl bg-[#0C141A] border border-[#1A2A38] shadow-lg">
              <p className="text-[#F4F7F5] font-medium leading-relaxed mb-4">
                &ldquo;{personalInfo.bio}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#8E9CA6]">
                {personalInfo.secondaryBio}
              </p>
            </div>

            <p className="text-sm sm:text-base">
              My engineering philosophy revolves around building robust software from the ground up: 
              designing clean database structures, implementing secure API contracts with <span className="text-[#F4F7F5] font-semibold">JWT authentication</span>, 
              writing modular components with <span className="text-[#F4F7F5] font-semibold">React.js</span>, and ensuring high code stability through 
              methodical <span className="text-[#F4F7F5] font-semibold">Postman testing and manual QA</span>.
            </p>

            <div className="p-4 rounded-lg bg-[#101A22] border-l-2 border-[#B7FF4A] text-xs sm:text-sm font-mono text-[#F4F7F5]">
              <span className="text-[#B7FF4A] font-bold">// PRINCIPLE:</span> High quality is not an afterthought. It is embedded into every line of code, database query, and interface interaction.
            </div>
          </div>

          {/* Right Column: Key Focus Disciplines Matrix */}
          <div className="lg:col-span-5 bg-[#0C141A] rounded-xl border border-[#1A2A38] p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1A2A38]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B7FF4A]">
                // CORE DISCIPLINE FOCUS
              </span>
              <span className="text-[10px] font-mono text-[#5B6B77]">VERIFIED SCOPE</span>
            </div>

            <div className="space-y-3.5">
              {experienceFocusAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-[#101A22]/70 border border-[#1A2A38]/70 hover:border-[#B7FF4A]/50 transition-colors group"
                >
                  <span className="text-xs font-mono text-[#B7FF4A] mt-0.5">0{idx + 1}.</span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#8E9CA6] mt-0.5">
                      {area.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* "How I Work" Subsection */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#1A2A38]">
            <div>
              <span className="text-xs font-mono text-[#B7FF4A] uppercase tracking-wider">// METHODOLOGY</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F4F7F5] mt-1">
                How I Work
              </h3>
            </div>
            <p className="text-xs font-mono text-[#8E9CA6] mt-2 sm:mt-0">
              Rigorous, dependable software engineering workflows
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howIWork.map((item) => (
              <div
                key={item.id}
                className="bg-[#0C141A] rounded-xl border border-[#1A2A38] p-5 flex flex-col justify-between hover:border-[#B7FF4A] transition-all duration-200 group hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#101A22] border border-[#1A2A38] flex items-center justify-center mb-4 group-hover:border-[#B7FF4A] transition-colors">
                    {iconMap[item.icon] || <Code2 className="w-5 h-5 text-[#B7FF4A]" />}
                  </div>

                  <div className="text-[10px] font-mono text-[#5B6B77] mb-1">STEP 0{item.id}</div>
                  <h4 className="text-sm font-bold font-display text-[#F4F7F5] group-hover:text-[#B7FF4A] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8E9CA6] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A2A38]/70 flex items-center justify-between text-[10px] font-mono text-[#5B6B77]">
                  <span>PRACTICAL QA</span>
                  <span className="text-[#B7FF4A]">&#x2714;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
