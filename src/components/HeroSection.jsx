import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openResumeModal } from '../store/portfolioSlice';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/TechIcon';
import NeonButton from './common/NeonButton';

export const HeroSection = () => {
  const dispatch = useDispatch();
  const [activeCodeTab, setActiveCodeTab] = useState('profile');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center border-b border-[#1A2A38] bg-grid-pattern overflow-hidden"
    >
      {/* Subtle radial ambient gradients (restrained, dark, no cheesy blobs) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B7FF4A]/[0.035] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-[#112433]/40 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Hero Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101A22] border border-[#1A2A38] text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#B7FF4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B7FF4A]"></span>
              </span>
              <span className="text-[#8E9CA6] text-[11px] sm:text-xs tracking-wide">
                STATUS: <strong className="text-[#B7FF4A] font-semibold">AVAILABLE FOR HIRE</strong> // FULL-TIME &amp; CONTRACT
              </span>
            </div>

            {/* Main Greeting & Name Heading */}
            <div className="space-y-2">
              <p className="font-mono text-sm sm:text-base text-[#8E9CA6] tracking-wider uppercase">
                {personalInfo.heroIntro}
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-[#F4F7F5] leading-[1.08]">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="h-0.5 w-8 bg-[#B7FF4A]"></span>
                <h2 className="text-lg sm:text-2xl font-mono text-[#B7FF4A] font-medium tracking-tight">
                  {personalInfo.shortRole}
                </h2>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#8E9CA6] max-w-2xl font-normal leading-relaxed">
              {personalInfo.heroTagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <NeonButton
                variant="primary"
                size="lg"
                icon="arrow"
                onClick={() => scrollToSection('projects')}
              >
                Explore My Work
              </NeonButton>

              <NeonButton
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </NeonButton>

              <NeonButton
                variant="outline"
                size="lg"
                icon="download"
                onClick={() => dispatch(openResumeModal())}
              >
                Download CV
              </NeonButton>
            </div>

            {/* Verified Social Profile Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8E9CA6]">
              <span className="text-[#5B6B77]">PROFILES:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B7FF4A] transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#B7FF4A]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#5B6B77]" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B7FF4A] transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#B7FF4A]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#5B6B77]" />
              </a>

              <a
                href={personalInfo.socialLinks.emailLink}
                className="flex items-center gap-1.5 hover:text-[#B7FF4A] transition-colors p-1"
                aria-label="Email Directly"
              >
                <Mail className="w-4 h-4 text-[#B7FF4A]" />
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3 text-[#5B6B77]" />
              </a>
            </div>

            {/* Core Competencies Quick Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#1A2A38]/80 text-left">
              <div className="bg-[#101A22]/60 p-3 rounded-lg border border-[#1A2A38]">
                <div className="text-[10px] font-mono text-[#5B6B77]">01 // STACK</div>
                <div className="text-xs font-semibold text-[#F4F7F5] mt-0.5">MERN &amp; Laravel</div>
                <div className="text-[10px] text-[#8E9CA6]">Full-stack web</div>
              </div>

              <div className="bg-[#101A22]/60 p-3 rounded-lg border border-[#1A2A38]">
                <div className="text-[10px] font-mono text-[#5B6B77]">02 // APIS</div>
                <div className="text-xs font-semibold text-[#F4F7F5] mt-0.5">REST &amp; WebSockets</div>
                <div className="text-[10px] text-[#8E9CA6]">JWT Auth &amp; Events</div>
              </div>

              <div className="bg-[#101A22]/60 p-3 rounded-lg border border-[#1A2A38]">
                <div className="text-[10px] font-mono text-[#5B6B77]">03 // DATA-BASE</div>
                <div className="text-xs font-semibold text-[#F4F7F5] mt-0.5">MongoDB &amp; MySQL</div>
                <div className="text-[10px] text-[#8E9CA6]">Eloquent ORM &amp; QA</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Developer Workspace Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card border */}
              <div className="rounded-xl bg-[#0C141A] border border-[#1A2A38] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Editor Header Bar with Tab navigation */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#101A22] border-b border-[#1A2A38]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#B7FF4A]"></div>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs">
                    <button
                      onClick={() => setActiveCodeTab('profile')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === 'profile'
                          ? 'bg-[#0C141A] text-[#B7FF4A] border border-[#1A2A38]'
                          : 'text-[#8E9CA6] hover:text-[#F4F7F5]'
                      }`}
                    >
                      Developer.js
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('stack')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === 'stack'
                          ? 'bg-[#0C141A] text-[#B7FF4A] border border-[#1A2A38]'
                          : 'text-[#8E9CA6] hover:text-[#F4F7F5]'
                      }`}
                    >
                      StackMatrix.json
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('terminal')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === 'terminal'
                          ? 'bg-[#0C141A] text-[#B7FF4A] border border-[#1A2A38]'
                          : 'text-[#8E9CA6] hover:text-[#F4F7F5]'
                      }`}
                    >
                      Terminal
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[#5B6B77]">
                    <span>UTF-8</span>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[340px] bg-[#080D10]/90">
                  {activeCodeTab === 'profile' && (
                    <div className="space-y-1">
                      <div className="text-[#5B6B77]">// Developer Profile Specification 2026</div>
                      <div>
                        <span className="text-[#B7FF4A]">const</span>{" "}
                        <span className="text-[#F4F7F5]">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">name:</span>{" "}
                        <span className="text-[#B7FF4A]">&quot;{personalInfo.name}&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">role:</span>{" "}
                        <span className="text-[#B7FF4A]">&quot;MERN &amp; Full-Stack Web Developer&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">primaryStack:</span> [
                      </div>
                      <div className="pl-8 text-[#F4F7F5]">
                        <span className="text-[#B7FF4A]">&quot;React.js&quot;</span>,{" "}
                        <span className="text-[#B7FF4A]">&quot;Node.js&quot;</span>,{" "}
                        <span className="text-[#B7FF4A]">&quot;Express.js&quot;</span>,
                      </div>
                      <div className="pl-8 text-[#F4F7F5]">
                        <span className="text-[#B7FF4A]">&quot;PHP&quot;</span>,{" "}
                        <span className="text-[#B7FF4A]">&quot;Laravel&quot;</span>,{" "}
                        <span className="text-[#B7FF4A]">&quot;MongoDB&quot;</span>,{" "}
                        <span className="text-[#B7FF4A]">&quot;MySQL&quot;</span>
                      </div>
                      <div className="pl-4">],</div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">security:</span>{" "}
                        <span className="text-[#B7FF4A]">&quot;JWT &amp; Protected Routes&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">realtime:</span>{" "}
                        <span className="text-[#B7FF4A]">&quot;WebSockets Bidirectional&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">codeHygiene:</span> &#123;
                      </div>
                      <div className="pl-8 text-[#8E9CA6]">
                        modular: <span className="text-[#B7FF4A]">true</span>, testedWithPostman:{" "}
                        <span className="text-[#B7FF4A]">true</span>, manualQA: <span className="text-[#B7FF4A]">true</span>
                      </div>
                      <div className="pl-4">&#125;,</div>
                      <div>&#125;;</div>
                    </div>
                  )}

                  {activeCodeTab === 'stack' && (
                    <div className="space-y-1">
                      <div className="text-[#5B6B77]">// Verified Technology Manifest (No Unverified Additions)</div>
                      <div>&#123;</div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;languages&quot;:</span> [&quot;JavaScript&quot;, &quot;PHP&quot;],
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;frontend&quot;:</span> [
                      </div>
                      <div className="pl-8 text-[#B7FF4A]">
                        &quot;HTML5&quot;, &quot;CSS3&quot;, &quot;JavaScript (ES6+)&quot;, &quot;React.js&quot;, &quot;Tailwind CSS&quot;, &quot;Redux Toolkit&quot;
                      </div>
                      <div className="pl-4">],</div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;backend&quot;:</span> [
                      </div>
                      <div className="pl-8 text-[#B7FF4A]">
                        &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;PHP&quot;, &quot;Laravel&quot;, &quot;RESTful APIs&quot;, &quot;JWT&quot;, &quot;WebSockets&quot;
                      </div>
                      <div className="pl-4">],</div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;databases&quot;:</span> [&quot;MongoDB&quot;, &quot;MySQL&quot;],
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;tools&quot;:</span> [&quot;Git&quot;, &quot;GitHub&quot;, &quot;GitLab&quot;, &quot;Postman&quot;, &quot;Eloquent ORM&quot;, &quot;Jira&quot;, &quot;SourceTree&quot;],
                      </div>
                      <div className="pl-4">
                        <span className="text-[#8E9CA6]">&quot;cmsAndQA&quot;:</span> [&quot;WordPress&quot;, &quot;Elementor&quot;, &quot;On-Page SEO&quot;, &quot;Off-Page SEO&quot;, &quot;Manual QA&quot;]
                      </div>
                      <div>&#125;</div>
                    </div>
                  )}

                  {activeCodeTab === 'terminal' && (
                    <div className="space-y-2">
                      <div className="text-[#5B6B77]">// Live Environment Audit Diagnostics</div>
                      <div className="text-[#8E9CA6]">$ node -v &amp;&amp; npm run verify-environment</div>
                      <div className="text-[#B7FF4A]">&#x2714; Node.js v24.x LTS runtime active</div>
                      <div className="text-[#B7FF4A]">&#x2714; React 19 + Redux Toolkit initialized</div>
                      <div className="text-[#B7FF4A]">&#x2714; Express REST routes compiled (200 OK)</div>
                      <div className="text-[#B7FF4A]">&#x2714; Laravel 11 + Eloquent connection pool ready</div>
                      <div className="text-[#8E9CA6]">$ ping mongo-cluster.local</div>
                      <div className="text-[#F4F7F5]">64 bytes from 127.0.0.1: time=0.84ms TTL=64</div>
                      <div className="text-[#8E9CA6]">$ git status</div>
                      <div className="text-[#B7FF4A]">On branch main: your branch is up to date with origin.</div>
                      <div className="text-[#B7FF4A] animate-pulse">_</div>
                    </div>
                  )}
                </div>

                {/* Editor Footer / Diagnostics Status Strip */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#101A22] border-t border-[#1A2A38] text-[11px] font-mono text-[#8E9CA6]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF4A]"></span>
                    <span className="text-[#F4F7F5]">ENV: PRODUCTION READY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>BUILD: PASS</span>
                    <span className="text-[#B7FF4A]">LATENCY: 12ms</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Coordinate Accent */}
              <div className="absolute -bottom-3 -right-3 px-2 py-1 rounded bg-[#080D10] border border-[#1A2A38] text-[10px] font-mono text-[#5B6B77] shadow-lg">
                DEV // 2026.PRO
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle scroll indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-xs font-mono text-[#5B6B77] hover:text-[#B7FF4A] transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER PROFILE</span>
            <div className="w-5 h-8 rounded-full border border-[#1A2A38] group-hover:border-[#B7FF4A] flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B7FF4A] animate-bounce"></div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
