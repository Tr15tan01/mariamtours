import { Navigation } from "@/components/Navigarion";
import { Hero } from "@/components/Hero";
import { FeaturedTours } from "@/components/FeaturedTours";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
import { Booking } from "@/components/Booking";

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
        <section id="booking">
          <Booking />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
