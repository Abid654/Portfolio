export const SectionHeader = ({
  number,
  category,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const isCentered = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {/* Category Eyebrow with Neon Lime Accent */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#101A22] border border-[#1A2A38] text-[#B7FF4A] mb-4 ${isCentered ? "justify-center" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF4A] animate-pulse"></span>
        <span>{number ? `// ${number}` : "// SECTION"}</span>
        <span className="text-[#5B6B77]">|</span>
        <span className="uppercase tracking-widest text-[11px] font-semibold text-[#F4F7F5]">{category}</span>
      </div>

      {/* Main Section Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#F4F7F5] leading-tight mb-4">
        {title}
      </h2>

      {/* Subtitle / Supporting copy */}
      {subtitle && (
        <p className="text-base sm:text-lg text-[#8E9CA6] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Hairline subtle divider */}
      <div className={`mt-6 h-[1px] w-20 bg-gradient-to-r from-[#B7FF4A] to-transparent ${isCentered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeader;
