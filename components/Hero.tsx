import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Mountain,
  Wine,
  Castle,
  Waves,
} from "lucide-react";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 mt-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tours/tbilisi.jpg"
          alt="Tbilisi city view with Narikala fortress"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Simple gradient background - no heavy animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/30 to-emerald-900/50" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots text-white/20" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-effect bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex gap-1">
              {[Mountain, Wine, Castle, Waves].map((Icon, index) => (
                <Icon
                  key={index}
                  className="h-5 w-5 text-white animate-pulse-subtle"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white">
              Authentic Georgian Journeys
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif tracking-tight">
            <span className="text-white block mb-2 drop-shadow-lg">
              Discover
            </span>
            <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl block drop-shadow-lg">
              Georgia with <span className="text-white">AnaMari</span>
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Immerse yourself in breathtaking landscapes, ancient traditions, and
            warm hospitality. Your unforgettable Georgian adventure begins here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/tours">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white text-lg px-8 py-6 shadow-lg hover-lift cursor-pointer"
              >
                <span className="relative z-10">Start Your Adventure</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/tours">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover-lift border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/70 cursor-pointer"
              >
                Explore Tours
              </Button>
            </Link>
          </div>

          {/* Stats - redesigned with glass effect */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Happy Travelers", delay: "0s" },
              { value: "50+", label: "Destinations", delay: "0.1s" },
              { value: "10+", label: "Years Experience", delay: "0.2s" },
              { value: "24/7", label: "Support", delay: "0.3s" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover-lift animate-fade-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-8 text-white animate-bounce mt-12" />
      </div>
    </section>
  );
}
