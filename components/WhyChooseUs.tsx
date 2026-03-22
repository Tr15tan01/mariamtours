import {
  Shield,
  Heart,
  Globe,
  Clock,
  CheckCircle,
  Compass,
  Award,
  Leaf,
  Handshake,
  Calendar,
  User,
  MapPin,
  Sparkles,
  Mountain,
  Wine,
  Camera,
  Coffee,
} from "lucide-react";
import { AnimatedBorder } from "./AnimatedBorder";

const features = [
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Local Expertise",
    description:
      "Born and raised in Georgia, we know the hidden gems and authentic experiences.",
    highlights: ["Native guides", "Off-the-beaten-path", "Cultural insights"],
    highlightIcons: ["🗺️", "🏔️", "🎭"],
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Trust & Safety",
    description:
      "Fully licensed and insured with 24/7 support throughout your journey.",
    highlights: ["Licensed operator", "24/7 support", "Travel insurance"],
    highlightIcons: ["✅", "📞", "🛡️"],
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainable Travel",
    description:
      "We support local communities and practice eco-friendly tourism.",
    highlights: ["Eco-friendly", "Local partnerships", "Carbon offset"],
    highlightIcons: ["🌱", "🤝", "🌍"],
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Flexible Planning",
    description:
      "Customizable itineraries that match your pace and preferences.",
    highlights: ["Tailored tours", "Flexible dates", "Personalized service"],
    highlightIcons: ["✏️", "📅", "🎯"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-sm font-semibold text-blue-600">
              Why Travel With Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            The <span className="text-gradient">Mari Tours</span> Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience Georgia authentically with our commitment to excellence
            and personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedBorder>
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {/* Decorative elements */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-400" />

                      {/* Icon */}
                      <div className="text-white relative z-10">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li
                          key={highlight}
                          className="flex items-center text-sm group"
                        >
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                            <span className="text-sm">
                              {feature.highlightIcons[i]}
                            </span>
                          </div>
                          <span className="text-foreground/80 font-medium">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedBorder>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border">
            <div className="text-5xl text-blue-100 mb-4">&quot;</div>
            <p className="text-lg text-muted-foreground mb-6 italic">
              &ldquo;Mari Tours showed us a side of Georgia we never would have
              found on our own. The attention to detail and genuine care for
              authentic experiences made this trip unforgettable.&quot;
            </p>
            <div className="font-semibold">Sarah & Mark Johnson</div>
            <div className="text-sm text-muted-foreground">
              Travelers from Canada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
