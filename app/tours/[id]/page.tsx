import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Star,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { Navigation } from "@/components/Navigarion";
import { Footer } from "@/components/Footer";
import { getTourById, getAllTourIds, type Tour } from "@/lib/tours";
import { ShareButton } from "@/components/ShareButton";
import type { Metadata } from "next";
import { formUrl } from "@/lib/utils";

// Generate static params for all tours
export async function generateStaticParams() {
  return getAllTourIds();
}

// Generate metadata for each tour for better SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    return {
      title: "Tour Not Found | AnaMari Tours",
      description: "The requested tour could not be found.",
    };
  }

  return {
    title: `${tour.title} | AnaMari Tours`,
    description: tour.description,
    keywords: [
      ...tour.tags,
      "Georgia tours",
      "Tbilisi tours",
      "travel Georgia",
    ].join(", "),
    openGraph: {
      title: `${tour.title} | AnaMari Tours`,
      description: tour.description,
      images: [
        {
          url: tour.image,
          alt: tour.alt,
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: "AnaMari Tours",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.description,
      images: [tour.image],
    },
    alternates: {
      canonical: `https://anamaritours.com/tours/${tour.id}`,
    },
  };
}

// Add structured data for better SEO (JSON-LD)
function TourStructuredData({ tour }: { tour: Tour }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    image: tour.image,
    duration: tour.duration === "Full Day" ? "P1D" : "PT8H",
    offers: {
      "@type": "Offer",
      price: tour.price || "Contact for pricing",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    touristType: tour.tags,
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.highlights.map(
        (highlight: string, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: highlight,
        }),
      ),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Main page component
export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <TourStructuredData tour={tour} />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src={tour.image}
            alt={tour.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm border-none">
                {tour.tags[0]}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating} / 5.0</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  <Users className="h-4 w-4" />
                  <span>{tour.groupSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  {tour.fullDescription
                    .split("\n")
                    .map((paragraph: string, idx: number) => (
                      <p key={idx} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {tour.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Button - Now using Client Component */}
              <div className="pt-4">
                <ShareButton
                  title={tour.title}
                  description={tour.description}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                      Contact for Pricing
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      per person (group discounts available)
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>Group Size: {tour.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>Location: Georgia</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>Available: Year-round</span>
                    </div>
                  </div>
                  <a href={formUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white cursor-pointer hover:from-blue-700 hover:to-emerald-700 mb-3">
                      Book This Tour
                    </Button>
                  </a>
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-2">
                        Have questions?
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <span>+995 555 123 456</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-1">
                        <Mail className="h-4 w-4 text-emerald-600" />
                        <span>info@anamaritours.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
