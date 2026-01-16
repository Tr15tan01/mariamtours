import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Mountain,
  Wine,
  Castle,
  Waves,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Simple gradient background - no heavy animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots text-blue-400" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-effect">
            <div className="flex gap-1">
              {[Mountain, Wine, Castle, Waves].map((Icon, index) => (
                <Icon
                  key={index}
                  className="h-5 w-5 text-blue-600 animate-pulse-subtle"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-blue-600">
              Authentic Georgian Journeys
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif tracking-tight">
            <span className="text-gradient block mb-2">Discover</span>
            <span className="text-foreground/90 text-4xl md:text-5xl lg:text-6xl block">
              Georgia with <span className="text-gradient">Mari</span>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Immerse yourself in breathtaking landscapes, ancient traditions, and
            warm hospitality. Your unforgettable Georgian adventure begins here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-lg px-8 py-6 shadow-lg hover-lift"
            >
              <span className="relative z-10">Start Your Adventure</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover-lift border-2 border-blue-200 hover:border-blue-300"
            >
              Explore Tours
            </Button>
            <p>This is env {process.env.TEST_ONE}</p>
          </div>

          {/* Stats - redesigned */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Happy Travelers", delay: "0s" },
              { value: "50+", label: "Destinations", delay: "0.1s" },
              { value: "10+", label: "Years Experience", delay: "0.2s" },
              { value: "24/7", label: "Support", delay: "0.3s" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm border hover-lift animate-fade-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-8 text-blue-600 animate-bounce mt-12" />
      </div>
    </section>
  );
}
