"use client";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorder({
  children,
  className = "",
}: AnimatedBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Subtle gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-emerald-600/20 rounded-xl blur-sm group-hover:blur transition-all duration-300" />

      {/* Content */}
      <div className="relative bg-white rounded-xl p-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}
