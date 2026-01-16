import { Navigation } from "@/components/Navigarion";
import { Hero } from "@/components/Hero";
import { FeaturedTours } from "@/components/FeaturedTours";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to- from-white to-blue-50/20">
      <Navigation />
      <main>
        <Hero />
        <FeaturedTours />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
