// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { MapPin, Calendar, Users, Star, ArrowRight, Clock } from "lucide-react";

// const tours = [
//   {
//     id: 1,
//     title: "Tbilisi - Gori - Uplistsikhe Cave Town",
//     description:
//       "Explore Stalin's birthplace and the ancient cave town carved into rocks dating back to the first millennium B.C.",
//     duration: "Full Day",
//     groupSize: "Small Group",
//     rating: 4.9,
//     image: "/tours/gori.jpg",
//     tags: ["Cultural", "Historical"],
//     color: "from-blue-500 to-blue-600",
//     highlights: [
//       "Stalin Museum and his personal train",
//       "Uplistsikhe cave town (1st millennium B.C.)",
//       "Ancient rock-cut architecture",
//     ],
//   },
//   {
//     id: 2,
//     title: "Wine Tour in Kakheti Region",
//     description:
//       "Discover Georgia's 8,000-year winemaking tradition in the cradle of wine, visit Bodbe Monastery and the City of Love.",
//     duration: "Full Day",
//     groupSize: "Private",
//     rating: 4.8,
//     image: "/tours/kakheti-wine.jpg",
//     tags: ["Wine", "Cultural", "Gourmet"],
//     color: "from-emerald-500 to-emerald-600",
//     highlights: [
//       "Qvevri wine-making demonstration & tasting",
//       "Bodbe Monastery - burial place of Saint Nino",
//       "Signagi - City of Love with 18th-century wall",
//       "Alazany Valley views",
//     ],
//   },
//   {
//     id: 3,
//     title: "Tbilisi City Tour",
//     description:
//       "Discover Georgia's majestic 5th-century capital with its blend of ancient history and modern architecture.",
//     duration: "Full Day",
//     groupSize: "Flexible",
//     rating: 5.0,
//     image: "/tours/tbilisi.jpg",
//     tags: ["City Tour", "Cultural"],
//     color: "from-blue-500 to-emerald-500",
//     highlights: [
//       "Sulphur baths & Narikala Fortress (4th century)",
//       "Mother of Georgia statue (cable car ride)",
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
//     duration: "Full Day",
//     groupSize: "Small Group",
//     rating: 4.9,
//     image: "/tours/ananuri.jpg",
//     tags: ["Adventure", "Mountain", "Nature"],
//     color: "from-sky-500 to-blue-500",
//     highlights: [
//       "Jinvali Reservoir & Ananuri Castle complex",
//       "Gudauri Ski Resort (2000m) & Russia-Georgia Friendship Monument",
//       "Holy Trinity Church in Kazbegi with Caucasus views",
//       "Optional activities: rafting, paragliding, horseback riding",
//     ],
//   },
// ];

// export function FeaturedTours() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 animate-fade-in">
//           <div className="inline-flex items-center gap-2 mb-6">
//             <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-emerald-600" />
//             <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
//               Featured Tours
//             </span>
//             <div className="w-12 h-px bg-gradient-to-r from-emerald-600 to-blue-600" />
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
//             Curated <span className="text-gradient">Experiences</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Discover Georgia through our handpicked tours that blend culture,
//             nature, and authentic experiences.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {tours.map((tour, index) => (
//             <Card
//               key={tour.id}
//               className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift animate-fade-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 {/* Next.js Image component */}
//                 <Image
//                   src={tour.image}
//                   alt={tour.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   priority={index < 2}
//                 />

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//                 {/* Tags */}
//                 <div className="absolute top-4 left-4 flex gap-2">
//                   {tour.tags.slice(0, 2).map((tag) => (
//                     <Badge
//                       key={tag}
//                       className="bg-white/90 text-gray-800 border-none backdrop-blur-sm"
//                     >
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>

//                 {/* Rating */}
//                 <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
//                   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                   <span className="font-semibold">{tour.rating}</span>
//                 </div>
//               </div>

//               <CardHeader className="pb-4">
//                 <CardTitle className="group-hover:text-primary transition-colors text-base line-clamp-2">
//                   {tour.title}
//                 </CardTitle>
//                 <CardDescription className="text-sm line-clamp-2">
//                   {tour.description}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="pb-4">
//                 <div className="space-y-2">
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Clock className="h-4 w-4 mr-2" />
//                     {tour.duration}
//                   </div>
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Users className="h-4 w-4 mr-2" />
//                     {tour.groupSize}
//                   </div>
//                 </div>
//               </CardContent>

//               <CardFooter className="flex justify-between items-center pt-4 border-t">
//                 <div className="text-sm text-muted-foreground">
//                   From {tour.duration}
//                 </div>
//                 <Button variant="ghost" size="sm" className="group">
//                   Details
//                   <MapPin className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-2 border-blue-200 hover:border-blue-300 px-8"
//           >
//             View All Tours
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star, ArrowRight, Clock } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Tbilisi - Gori - Uplistsikhe Cave Town",
    description:
      "Explore Stalin's birthplace and the ancient cave town carved into rocks dating back to the first millennium B.C.",
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.9,
    image: "/tours/gori.jpg",
    tags: ["Cultural", "Historical"],
    color: "from-blue-500 to-blue-600",
    highlights: [
      "Stalin Museum and his personal train",
      "Uplistsikhe cave town (1st millennium B.C.)",
      "Ancient rock-cut architecture",
    ],
  },
  {
    id: 2,
    title: "Wine Tour in Kakheti Region",
    description:
      "Discover Georgia's 8,000-year winemaking tradition in the cradle of wine, visit Bodbe Monastery and the City of Love.",
    duration: "Full Day",
    groupSize: "Private",
    rating: 4.8,
    image: "/tours/kakheti-wine.jpg",
    tags: ["Wine", "Cultural", "Gourmet"],
    color: "from-emerald-500 to-emerald-600",
    highlights: [
      "Qvevri wine-making demonstration & tasting",
      "Bodbe Monastery - burial place of Saint Nino",
      "Signagi - City of Love with 18th-century wall",
      "Alazany Valley views",
    ],
  },
  {
    id: 3,
    title: "Tbilisi City Tour",
    description:
      "Discover Georgia's majestic 5th-century capital with its blend of ancient history and modern architecture.",
    duration: "Full Day",
    groupSize: "Flexible",
    rating: 5.0,
    image: "/tours/tbilisi.jpg",
    tags: ["City Tour", "Cultural"],
    color: "from-blue-500 to-emerald-500",
    highlights: [
      "Sulphur baths & Narikala Fortress (4th century)",
      "Mother of Georgia statue (cable car ride)",
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
    duration: "Full Day",
    groupSize: "Small Group",
    rating: 4.9,
    image: "/tours/ananuri.jpg",
    tags: ["Adventure", "Mountain", "Nature"],
    color: "from-sky-500 to-blue-500",
    highlights: [
      "Jinvali Reservoir & Ananuri Castle complex",
      "Gudauri Ski Resort (2000m) & Russia-Georgia Friendship Monument",
      "Holy Trinity Church in Kazbegi with Caucasus views",
      "Optional activities: rafting, paragliding, horseback riding",
    ],
  },
];

export function FeaturedTours() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-emerald-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Featured Tours
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-emerald-600 to-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Curated <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Georgia through our handpicked tours that blend culture,
            nature, and authentic experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <Link href={`/tours/${tour.id}`} key={tour.id}>
              <Card
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift animate-fade-up cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Next.js Image component */}
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {tour.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-white/90 text-gray-800 border-none backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tour.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="group-hover:text-primary transition-colors text-base line-clamp-2">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {tour.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {tour.groupSize}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    From {tour.duration}
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/tours">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-200 cursor-pointer hover:border-blue-300 px-8"
            >
              View All Tours
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
