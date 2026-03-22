import { Navigation } from "@/components/Navigarion";
import { Hero } from "@/components/Hero";
import { FeaturedTours } from "@/components/FeaturedTours";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to from-white to-blue-50/20">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="featured-tours">
          <FeaturedTours />
        </section>

        <section id="about">
          <WhyChooseUs />
        </section>

        <section id="contact">
          <Footer />
        </section>

        <section id="booking">
          {/* Add your booking component here */}
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Book Your Adventure</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to explore Georgia? Contact us to start your journey!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 text-lg">
              Book Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
