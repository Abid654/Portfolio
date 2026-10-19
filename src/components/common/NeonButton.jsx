import { ArrowUpRight, Download, Send } from 'lucide-react';

export const NeonButton = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  href = null,
  onClick = null,
  type = 'button',
  className = '',
  disabled = false,
  download = false,
  target = null,
  rel = null,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium font-display transition-all duration-200 tracking-wide rounded-lg select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-[#B7FF4A] text-[#080D10] font-semibold hover:bg-[#c6ff6b] hover:shadow-[0_0_20px_rgba(183,255,74,0.35)] active:scale-[0.98]",
    secondary: "bg-[#101A22] text-[#F4F7F5] border border-[#1A2A38] hover:border-[#B7FF4A] hover:text-[#B7FF4A] hover:bg-[#14222D] active:scale-[0.98]",
    outline: "bg-transparent text-[#F4F7F5] border border-[#2A4052] hover:border-[#B7FF4A] hover:text-[#B7FF4A] hover:shadow-[0_0_15px_rgba(183,255,74,0.15)] active:scale-[0.98]",
    ghost: "bg-transparent text-[#8E9CA6] hover:text-[#B7FF4A] hover:bg-[#101A22]/60",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const renderIcon = () => {
    if (icon === 'arrow') return <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    if (icon === 'download') return <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />;
    if (icon === 'send') return <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />;
    return icon;
  };

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};

export default NeonButton;
