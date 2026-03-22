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
} from "lucide-react";
import { Navigation } from "@/components/Navigarion";
import { Footer } from "@/components/Footer";

// Define the Tour type
interface Tour {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  groupSize: string;
  rating: number;
  image: string;
  alt: string;
  tags: string[];
  category: string;
  color: string;
  highlights: string[];
}

// Tours data
const tours: Tour[] = [
  {
    id: 1,
    title: "Tbilisi - Gori - Uplistsikhe Cave Town",
    description:
      "Explore Stalin's birthplace and the ancient cave town carved into rocks dating back to the first millennium B.C.",
    fullDescription:
      "The tour starts in the morning at 10:00. First you will explore Gori (86 km from Tbilisi, 43,000 inhabitants). The territory of Gori has been populated since the early Bronze age. This city is known as a birthplace of communist revolutionary and Soviet politician Joseph Stalin. Here you'll find the Stalin Museum, his personal train, and the house where he grew up. Just 20 km from Gori you'll reach Uplistsikhe, a cave town frozen in time carved into rocks dating back to the first millennium B.C.",
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.9,
    image: "/tours/gori.jpg",
    alt: "Uplistsikhe cave town in Georgia",
    tags: ["Cultural", "Historical"],
    category: "cultural",
    color: "from-blue-500 to-blue-600",
    highlights: [
      "Stalin Museum with personal artifacts and his train",
      "House where Stalin grew up",
      "Uplistsikhe cave town - 1st millennium B.C. rock-cut settlement",
      "Bronze age archaeological site",
    ],
  },
  {
    id: 2,
    title: "Wine Tour in Kakheti Region",
    description:
      "Discover Georgia's 8,000-year winemaking tradition in the cradle of wine, visit Bodbe Monastery and the City of Love.",
    fullDescription:
      "Georgia is recognized as the cradle of wine, with wine culture dating back 8,000 years. First, you'll visit a winery where a local guide shows you the tradition of making wine in clay pots called Qvevri. After wine tasting, visit Bodbe Monastery, the burial place of Saint Nino who brought Christianity to Georgia in the 4th century. Just 2 km away is Signagi, the City of Love, where you can visit the great 18th-century wall and enjoy views of the Alazany Valley.",
    duration: "Full Day",
    groupSize: "Private",
    rating: 4.8,
    image: "/tours/kakheti-wine.jpg",
    alt: "Georgian wine and qvevri clay pots",
    tags: ["Wine", "Cultural", "Gourmet"],
    category: "culinary",
    color: "from-emerald-500 to-emerald-600",
    highlights: [
      "Qvevri wine-making demonstration (8,000-year tradition)",
      "Wine tasting experience",
      "Bodbe Monastery - burial place of Saint Nino",
      "Signagi - City of Love with 18th-century wall",
      "Panoramic Alazany Valley views",
    ],
  },
  {
    id: 3,
    title: "Tbilisi City Tour",
    description:
      "Discover Georgia's majestic 5th-century capital with its blend of ancient history and modern architecture.",
    fullDescription:
      "Tbilisi, the capital of Georgia, was founded in the 5th century by King Vakhtang Gorgasali. This majestic city charms visitors in every season with its diverse sights: Sulphur baths, Mother of Georgia statue (reached by cable car from Rike Park in 1 minute), Narikala Fortress (4th century), Sioni Cathedral, Metekhi Church, Chardeni Street, Legvtakevi Waterfall, Mosque, Synagogue, and the Bridge of Peace. After exploring both old and new parts of the capital, visit the Chronicles of Georgia (Matiane) overlooking the Tbilisi Sea.",
    duration: "Full Day",
    groupSize: "Flexible",
    rating: 5.0,
    image: "/tours/tbilisi.jpg",
    alt: "Tbilisi old town and Narikala fortress",
    tags: ["City Tour", "Cultural"],
    category: "cultural",
    color: "from-blue-500 to-emerald-500",
    highlights: [
      "Sulphur baths district",
      "Cable car to Mother of Georgia statue",
      "Narikala Fortress (4th century)",
      "Bridge of Peace & Legvtakevi Waterfall",
      "Chronicles of Georgia with Tbilisi Sea view",
      "Sioni Cathedral & Metekhi Church",
    ],
  },
  {
    id: 4,
    title: "Mountain Tour: Jinvali - Ananuri - Gudauri - Kazbegi",
    description:
      "Journey to the Great Caucasus Mountains along the Georgian Military Highway with breathtaking views.",
    fullDescription:
      "Ready to meet the Great Caucasus Mountains? This tour takes you toward the Russian border with breathtaking views of mountains, rivers, and water reservoirs. First stop: Jinvali Reservoir (with submerged villages). Nearby stands Ananuri Castle, a feudal-era complex with churches and fortifications. You'll then reach Gudauri Ski Resort (2000 meters above sea level), home to the famous Gudauri Panorama, also known as the Russia-Georgia Friendship Monument. The final stop is the Holy Trinity Church in Kazbegi, located on a hill surrounded by snow-capped Caucasus mountains. Along the way, enjoy optional activities: rafting, boating, horseback riding, paragliding, quadro, and buggy tours.",
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.9,
    image: "/tours/ananuri.jpg",
    alt: "Caucasus mountains and Gergeti Trinity Church",
    tags: ["Adventure", "Mountain", "Nature"],
    category: "adventure",
    color: "from-sky-500 to-blue-500",
    highlights: [
      "Jinvali Reservoir - submerged villages",
      "Ananuri Castle complex (feudal era)",
      "Gudauri Ski Resort (2000m altitude)",
      "Russia-Georgia Friendship Monument",
      "Holy Trinity Church with Caucasus mountain views",
      "Optional adventure activities available",
    ],
  },
];

// Generate static params for all tours
export async function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}

// Generate metadata for each tour - params must be awaited here too
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = tours.find((t) => t.id.toString() === id);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: `${tour.title} | AnaMari Tours`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [tour.image],
    },
  };
}

// Main page component - params must be awaited
export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params Promise to get the id
  const { id } = await params;
  const tour = tours.find((t) => t.id.toString() === id);

  if (!tour) {
    notFound();
  }

  return (
    <>
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
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm">
                {tour.tags[0]}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
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
                <p className="text-gray-600 leading-relaxed">
                  {tour.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {tour.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 border">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600">
                      Contact for Pricing
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      per person (group discounts available)
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Group Size: {tour.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Location: Georgia</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 mb-3">
                    Book This Tour
                  </Button>

                  <div className="mt-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-2">
                        Have questions?
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>+995 555 123 456</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-1">
                        <Mail className="h-4 w-4" />
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
