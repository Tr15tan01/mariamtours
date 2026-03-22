import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigarion";
import { Footer } from "@/components/Footer";

export default function TourNotFound() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Tour Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the tour you&apos;re looking for doesn&apos;t exist or has
            been removed.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/tours">
              <Button className="bg-gradient-to-r from-blue-600 to-emerald-600">
                Browse All Tours
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
