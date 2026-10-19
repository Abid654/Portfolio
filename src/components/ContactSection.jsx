import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContactFormStatus, resetContactForm } from '../store/portfolioSlice';
import { personalInfo } from '../data/portfolioData';
import SectionHeader from './common/SectionHeader';
import NeonButton from './common/NeonButton';
import { 
  Mail, 
  Check, 
  Copy, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/TechIcon';

export const ContactSection = () => {
  const dispatch = useDispatch();
  const { contactForm } = useSelector((state) => state.portfolio);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must contain at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(setContactFormStatus({ status: 'submitting' }));

    // Simulate clean client-side submission with clear notice
    setTimeout(() => {
      dispatch(setContactFormStatus({ status: 'success' }));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-[#1A2A38] bg-[#0A1218] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="06"
          category="GET IN TOUCH"
          title="Let's Build Something Great."
          subtitle="I'm open to discussing software development opportunities, collaborations, and interesting web projects."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0C141A] rounded-xl border border-[#1A2A38] p-6 sm:p-8 shadow-xl space-y-6">
              
              <div>
                <span className="text-[10px] font-mono text-[#B7FF4A] uppercase tracking-wider block mb-1">
                  // COMMUNICATION CHANNELS
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F7F5]">
                  Start a Conversation
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9CA6] mt-2 leading-relaxed">
                  Whether you are hiring for a full-time role, need a custom MERN stack solution, or have an engineering inquiry, reach out through any of these verified channels.
                </p>
              </div>

              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-lg bg-[#101A22] border border-[#1A2A38] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded bg-[#080D10] text-[#B7FF4A] shrink-0 border border-[#1A2A38]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-[#5B6B77]">DIRECT EMAIL</div>
                    <div className="text-xs sm:text-sm font-mono text-[#F4F7F5] truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded bg-[#162531] hover:bg-[#B7FF4A] text-[#8E9CA6] hover:text-[#080D10] text-xs font-mono transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#080D10]" />
                      <span className="text-[#080D10] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Profiles Strip */}
              <div className="space-y-2.5">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#101A22] border border-[#1A2A38] hover:border-[#B7FF4A] text-[#8E9CA6] hover:text-[#F4F7F5] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#B7FF4A]" />
                    <span className="text-xs font-mono">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5B6B77] group-hover:text-[#B7FF4A] transition-colors" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#101A22] border border-[#1A2A38] hover:border-[#B7FF4A] text-[#8E9CA6] hover:text-[#F4F7F5] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#B7FF4A]" />
                    <span className="text-xs font-mono">LinkedIn Network</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5B6B77] group-hover:text-[#B7FF4A] transition-colors" />
                </a>
              </div>

              {/* Turnaround Commitment */}
              <div className="pt-4 border-t border-[#162430] flex items-center gap-2.5 text-xs font-mono text-[#8E9CA6]">
                <Clock className="w-4 h-4 text-[#B7FF4A] shrink-0" />
                <span>Typical response window: Under 24 hours</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C141A] rounded-xl border border-[#1A2A38] p-6 sm:p-8 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A2A38]">
                <h3 className="text-lg font-bold font-display text-[#F4F7F5]">
                  Send a Direct Message
                </h3>
                <span className="text-xs font-mono text-[#B7FF4A]">
                  // CLIENT VALIDATED
                </span>
              </div>

              {/* Success Notification Banner */}
              {contactForm.status === 'success' ? (
                <div className="p-6 rounded-lg bg-[#101A22] border border-[#B7FF4A] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#B7FF4A]/20 border border-[#B7FF4A] flex items-center justify-center mx-auto text-[#B7FF4A]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold font-display text-[#F4F7F5]">
                      Message Validated &amp; Ready!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8E9CA6] leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out! Client-side validation succeeded. This form is built and styled to connect directly to your backend endpoint, Formspree, or EmailJS service in production.
                    </p>
                  </div>
                  <NeonButton
                    variant="secondary"
                    size="sm"
                    onClick={() => dispatch(resetContactForm())}
                  >
                    Send Another Message
                  </NeonButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-[#8E9CA6] mb-1.5">
                        Your Full Name <span className="text-[#B7FF4A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full bg-[#101A22] border rounded-lg px-3.5 py-2.5 text-xs font-mono text-[#F4F7F5] placeholder-[#5B6B77] focus:outline-none transition-colors ${
                          errors.name ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1A2A38] focus:border-[#B7FF4A]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-[#EF4444] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-[#8E9CA6] mb-1.5">
                        Email Address <span className="text-[#B7FF4A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full bg-[#101A22] border rounded-lg px-3.5 py-2.5 text-xs font-mono text-[#F4F7F5] placeholder-[#5B6B77] focus:outline-none transition-colors ${
                          errors.email ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1A2A38] focus:border-[#B7FF4A]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-[#EF4444] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-[#8E9CA6] mb-1.5">
                      Subject <span className="text-[#B7FF4A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Role Opportunity / Collaboration"
                      className={`w-full bg-[#101A22] border rounded-lg px-3.5 py-2.5 text-xs font-mono text-[#F4F7F5] placeholder-[#5B6B77] focus:outline-none transition-colors ${
                        errors.subject ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1A2A38] focus:border-[#B7FF4A]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-[#EF4444] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-[#8E9CA6] mb-1.5">
                      Message <span className="text-[#B7FF4A]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discuss project requirements, technology timelines, or team roles..."
                      className={`w-full bg-[#101A22] border rounded-lg p-3.5 text-xs font-mono text-[#F4F7F5] placeholder-[#5B6B77] focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-[#1A2A38] focus:border-[#B7FF4A]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-[#EF4444] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <NeonButton
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={contactForm.status === 'submitting'}
                      className="w-full sm:w-auto"
                      icon={contactForm.status === 'submitting' ? null : 'send'}
                    >
                      {contactForm.status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-[#080D10] border-t-transparent rounded-full animate-spin"></span>
                          <span>Validating Input...</span>
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </NeonButton>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
