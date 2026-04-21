"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { formUrl } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", section: "hero" },
    { label: "Tours", href: "/", section: "featured-tours" },
    { label: "About", href: "/", section: "about" },
    { label: "Contact", href: "/", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (item: (typeof navItems)[0]) => {
    // Close mobile menu
    setIsMenuOpen(false);

    // If we're already on home page, just scroll to section
    if (pathname === "/") {
      scrollToSection(item.section);
    } else {
      // Navigate to home page with hash
      router.push(`/#${item.section}`);
    }
  };

  // Handle external link (Google Forms)
  const handleBookNow = () => {
    window.open(formUrl, "_blank"); // Opens in new tab
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              <Plane className="h-8 w-8 text-blue-600 group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient font-serif">
                GeorgiaGuided
              </div>
              <div className="text-xs text-muted-foreground">
                Authentic Georgia Travel
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm relative group cursor-pointer bg-transparent border-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white cursor-pointer hover:from-blue-700 hover:to-emerald-700 hidden sm:flex"
              size="sm"
              onClick={handleBookNow} // Use the new handler
            >
              Book Now
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-left cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 mt-2"
                onClick={handleBookNow} // Use the new handler
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
