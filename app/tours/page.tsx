"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  Star,
  Mountain,
  Wine,
  Castle,
  Waves,
  ChevronRight,
  Clock,
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
  price?: string; // Optional for now
}

// Tours data with proper typing
// const tours: Tour[] = [
//   {
//     id: 1,
//     title: "Tbilisi - Gori - Uplistsikhe Cave Town",
//     description:
//       "Explore Stalin's birthplace and the ancient cave town carved into rocks dating back to the first millennium B.C.",
//     fullDescription:
//       "The tour starts in the morning at 10:00. First you will explore Gori (86 km from Tbilisi, 43,000 inhabitants). The territory of Gori has been populated since the early Bronze age. This city is known as a birthplace of communist revolutionary and Soviet politician Joseph Stalin. Here you'll find the Stalin Museum, his personal train, and the house where he grew up. Just 20 km from Gori you'll reach Uplistsikhe, a cave town frozen in time carved into rocks dating back to the first millennium B.C.",
//     duration: "Full Day",
//     groupSize: "Small Group",
//     rating: 4.9,
//     image: "/tours/gori.jpg",
//     alt: "Uplistsikhe cave town in Georgia",
//     tags: ["Cultural", "Historical"],
//     category: "cultural",
//     color: "from-blue-500 to-blue-600",
//     highlights: [
//       "Stalin Museum with personal artifacts and his train",
//       "House where Stalin grew up",
//       "Uplistsikhe cave town - 1st millennium B.C. rock-cut settlement",
//       "Bronze age archaeological site",
//     ],
//   },
//   {
//     id: 2,
//     title: "Wine Tour in Kakheti Region",
//     description:
//       "Discover Georgia's 8,000-year winemaking tradition in the cradle of wine, visit Bodbe Monastery and the City of Love.",
//     fullDescription:
//       "Georgia is recognized as the cradle of wine, with wine culture dating back 8,000 years. First, you'll visit a winery where a local guide shows you the tradition of making wine in clay pots called Qvevri. After wine tasting, visit Bodbe Monastery, the burial place of Saint Nino who brought Christianity to Georgia in the 4th century. Just 2 km away is Signagi, the City of Love, where you can visit the great 18th-century wall and enjoy views of the Alazany Valley.",
//     duration: "Full Day",
//     groupSize: "Private",
//     rating: 4.8,
//     image: "/tours/kakheti-wine.jpg",
//     alt: "Georgian wine and qvevri clay pots",
//     tags: ["Wine", "Cultural", "Gourmet"],
//     category: "culinary",
//     color: "from-emerald-500 to-emerald-600",
//     highlights: [
//       "Qvevri wine-making demonstration (8,000-year tradition)",
//       "Wine tasting experience",
//       "Bodbe Monastery - burial place of Saint Nino",
//       "Signagi - City of Love with 18th-century wall",
//       "Panoramic Alazany Valley views",
//     ],
//   },
//   {
//     id: 3,
//     title: "Tbilisi City Tour",
//     description:
//       "Discover Georgia's majestic 5th-century capital with its blend of ancient history and modern architecture.",
//     fullDescription:
//       "Tbilisi, the capital of Georgia, was founded in the 5th century by King Vakhtang Gorgasali. This majestic city charms visitors in every season with its diverse sights: Sulphur baths, Mother of Georgia statue (reached by cable car from Rike Park in 1 minute), Narikala Fortress (4th century), Sioni Cathedral, Metekhi Church, Chardeni Street, Legvtakevi Waterfall, Mosque, Synagogue, and the Bridge of Peace. After exploring both old and new parts of the capital, visit the Chronicles of Georgia (Matiane) overlooking the Tbilisi Sea.",
//     duration: "Full Day",
//     groupSize: "Flexible",
//     rating: 5.0,
//     image: "/tours/tbilisi.jpg",
//     alt: "Tbilisi old town and Narikala fortress",
//     tags: ["City Tour", "Cultural"],
//     category: "cultural",
//     color: "from-blue-500 to-emerald-500",
//     highlights: [
//       "Sulphur baths district",
//       "Cable car to Mother of Georgia statue",
//       "Narikala Fortress (4th century)",
//       "Bridge of Peace & Legvtakevi Waterfall",
//       "Chronicles of Georgia with Tbilisi Sea view",
//       "Sioni Cathedral & Metekhi Church",
//     ],
//   },
//   {
//     id: 4,
//     title: "Mountain Tour: Jinvali - Ananuri - Gudauri - Kazbegi",
//     description:
//       "Journey to the Great Caucasus Mountains along the Georgian Military Highway with breathtaking views.",
//     fullDescription:
//       "Ready to meet the Great Caucasus Mountains? This tour takes you toward the Russian border with breathtaking views of mountains, rivers, and water reservoirs. First stop: Jinvali Reservoir (with submerged villages). Nearby stands Ananuri Castle, a feudal-era complex with churches and fortifications. You'll then reach Gudauri Ski Resort (2000 meters above sea level), home to the famous Gudauri Panorama, also known as the Russia-Georgia Friendship Monument. The final stop is the Holy Trinity Church in Kazbegi, located on a hill surrounded by snow-capped Caucasus mountains. Along the way, enjoy optional activities: rafting, boating, horseback riding, paragliding, quadro, and buggy tours.",
//     duration: "Full Day",
//     groupSize: "Small Group",
//     rating: 4.9,
//     image: "/tours/ananuri.jpg",
//     alt: "Caucasus mountains and Gergeti Trinity Church",
//     tags: ["Adventure", "Mountain", "Nature"],
//     category: "adventure",
//     color: "from-sky-500 to-blue-500",
//     highlights: [
//       "Jinvali Reservoir - submerged villages",
//       "Ananuri Castle complex (feudal era)",
//       "Gudauri Ski Resort (2000m altitude)",
//       "Russia-Georgia Friendship Monument",
//       "Holy Trinity Church with Caucasus mountain views",
//       "Optional adventure activities available",
//     ],
//   },
// ];

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
  {
    id: 5,
    title: "Borjomi - Central Park - Green Monastery",
    description:
      "Discover the natural beauty and peaceful atmosphere of central Georgia on this unforgettable one day tour from Tbilisi. Taste fresh mineral water from the source and explore the serene Green Monastery hidden in a lush forest.",
    fullDescription:
      "Borjomi is a small town located 800 meters above sea level with 10,000 inhabitants. Our first stop is Borjomi Central Park (3km) where you are able to taste some fresh mineral water right from the source and enjoy the fresh mountain air. Afterward, we continue to the peaceful Green Monastery, hidden in a lush forest. This historic Monastery offers a calm and spiritual atmosphere, surrounded by nature and a small river flowing nearby. You will get time to explore, take photos and relax in this serene environment. During the tour, there will be an optional stop for lunch at a local restaurant, where you can taste traditional Georgian cuisine. In the evening we will return back to Tbilisi, filled with unforgettable memories of Georgia's natural beauty and cultural heritage.",
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.8,
    image: "/tours/borjomi.jpg",
    alt: "Borjomi Central Park and Green Monastery in Georgia",
    tags: ["Nature", "Spiritual", "Wellness"],
    category: "adventure",
    color: "from-green-500 to-emerald-600",
    highlights: [
      "Borjomi Central Park with fresh mineral water springs",
      "Taste mineral water directly from the source",
      "Green Monastery hidden in lush forest",
      "Peaceful riverside setting",
      "Optional traditional Georgian lunch",
      "Fresh mountain air and scenic nature walks",
    ],
  },
  {
    id: 6,
    title: "Mtskheta - Jvari Monastery - Chronicles of Georgia",
    description:
      "Experience the spiritual heart of Georgia in the 'Second Jerusalem'. Visit ancient UNESCO sites, Jvari Monastery with its breathtaking river confluence views, and the monumental Chronicles of Georgia.",
    fullDescription:
      "If you are looking for something unique, breathtaking, serene, peaceful and sacred, Mtskheta is the perfect destination for you. It is often called the Second Jerusalem and you can truly feel its spiritual atmosphere as soon as you step into this charming small city. The reason for this name is the fact that the robe of Jesus Christ is preserved in Svetitskhoveli Cathedral, one of the most important religious sites in Georgia. After visiting the old capital Mtskheta, it is time to explore Jvari Monastery. 'Jvari' in Georgian means 'cross'. Once Georgia adopted Christianity in the 4th century, a wooden cross was erected on this place. Later in the 6th century, the magnificent church that we see today was built. From this mountain, where the church stands, you can enjoy a stunning view of the confluence of 2 rivers - Aragvi and Mtkvari. The last site we will visit is the Chronicles of Georgia, a huge monument overlooking the Tbilisi Sea. It contains 16 massive columns and is divided into 3 sections. It was built in 1985 by famous artist Zurab Tsereteli. Enjoy the view of the Tbilisi Sea and forest.",
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.9,
    image: "/tours/mtskheta.jpg",
    alt: "Jvari Monastery and Svetitskhoveli Cathedral in Mtskheta, Georgia",
    tags: ["Spiritual", "Historical", "UNESCO"],
    category: "cultural",
    color: "from-purple-500 to-blue-600",
    highlights: [
      "Svetitskhoveli Cathedral - UNESCO World Heritage site",
      "Robe of Jesus Christ preserved in the cathedral",
      "Jvari Monastery with stunning river confluence views",
      "Panoramic view of Aragvi and Mtkvari rivers",
      "Chronicles of Georgia monument with 16 massive columns",
      "Tbilisi Sea and forest panoramic views",
      "Ancient capital of Georgia (UNESCO site)",
    ],
  },
];
// Categories with proper typing
interface Category {
  id: string;
  label: string;
}

const categories: Category[] = [
  { id: "all", label: "All Tours" },
  { id: "cultural", label: "Cultural & Historical" },
  { id: "adventure", label: "Adventure & Nature" },
  { id: "culinary", label: "Food & Wine" },
];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filteredTours = tours.filter((tour: Tour) => {
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch =
      search === "" ||
      tour.title.toLowerCase().includes(search.toLowerCase()) ||
      tour.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-20">
        {/* Hero */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
          <div className="absolute inset-0 pattern-dots text-blue-400" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border">
                <div className="flex gap-1">
                  {[Mountain, Wine, Castle, Waves].map(
                    (Icon, index: number) => (
                      <Icon key={index} className="h-5 w-5 text-blue-600" />
                    ),
                  )}
                </div>
                <span className="text-sm font-medium text-blue-600">
                  Explore Georgia
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                <span className="text-gradient">All Tours</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
                Choose from our collection of handcrafted Georgian adventures
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search tours..."
                  className="pl-12 py-6 rounded-full border-2 border-blue-100"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category: Category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tours Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredTours.length} Tours Available
            </h2>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                <Search className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">No tours found</h3>
              <p className="text-gray-600 mb-6">
                Try a different search or category
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearch("");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour: Tour) => (
                <Link href={`/tours/${tour.id}`} key={tour.id}>
                  <Card className="group overflow-hidden border hover:shadow-xl transition-all duration-300 hover-lift cursor-pointer h-full">
                    {/* Image Section */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {tour.rating}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-white/90 text-gray-800 border-none backdrop-blur-sm">
                          {tour.tags[0]}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                        {tour.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {tour.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          {tour.groupSize}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {tour.tags
                          .slice(1, 3)
                          .map((tag: string, index: number) => (
                            <Badge
                              key={`${tag}-${index}`}
                              variant="outline"
                              className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-end items-center pt-4 border-t">
                      <Button size="sm" className="gap-1">
                        View Details
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-serif mb-4">
                Want a custom tour?
              </h3>
              <p className="text-gray-600 mb-6">
                We can create a personalized itinerary just for you
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                Contact Us for Custom Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
