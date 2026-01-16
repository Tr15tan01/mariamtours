"use client";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-shift" />

      {/* Very slow moving gradient overlay */}
      <div className="absolute inset-0 bg-cloud-drift opacity-30" />

      {/* Static geometric pattern for depth */}
      <div className="absolute inset-0 bg-geometric-static opacity-50" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-minimal-grid opacity-20" />

      {/* Floating dots for texture */}
      <div className="absolute inset-0 bg-floating-dots opacity-10" />

      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
