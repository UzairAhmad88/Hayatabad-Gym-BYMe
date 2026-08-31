import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-4xl ${alignClass}`}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[#B7FF00]/40 bg-[#B7FF00]/10 px-4 py-1.5 backdrop-blur-md ${align === "center" ? "mx-auto" : ""}`}>
          <span className="h-2 w-2 rounded-full bg-[#B7FF00] animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl leading-[0.92]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base font-medium leading-relaxed text-[#E5E7EB] sm:text-xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
