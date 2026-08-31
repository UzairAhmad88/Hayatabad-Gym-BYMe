import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-black uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF00] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#B7FF00] text-black font-black hover:bg-[#a4e600] shadow-[0_0_25px_rgba(183,255,0,0.35)] hover:shadow-[0_0_40px_rgba(183,255,0,0.6)] hover:-translate-y-0.5",
    secondary:
      "bg-[#1B1B1B] text-white hover:bg-[#252525] border border-white/20 hover:border-[#B7FF00]/60 shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-white/30 text-white hover:border-[#B7FF00] hover:text-[#B7FF00] hover:bg-[#B7FF00]/10 bg-transparent hover:-translate-y-0.5",
    ghost: "text-[#E5E7EB] hover:text-[#B7FF00] hover:bg-white/5 bg-transparent"
  };

  const sizeStyles = {
    sm: "text-xs px-5 py-3 rounded-full",
    md: "text-sm px-7 py-4 rounded-full",
    lg: "text-base px-9 py-5 rounded-full"
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
