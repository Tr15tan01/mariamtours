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
import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Tbilisi & Kazbegi Adventure",
    description:
      "Explore the capital's old town and journey to the stunning Gergeti Trinity Church.",
    duration: "5 Days",
    groupSize: "Small Group",
    price: "$899",
    rating: 4.9,
    image: "/tours/tbilisi-kazbegi.jpg",
    tags: ["Popular", "Cultural"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Wine Tour in Kakheti",
    description:
      "Discover Georgia's ancient winemaking traditions in the heart of wine country.",
    duration: "3 Days",
    groupSize: "Private",
    price: "$699",
    rating: 4.8,
    image: "/tours/kakheti-wine.jpg",
    tags: ["Wine", "Gourmet"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Svaneti Mountain Trek",
    description:
      "Hike through UNESCO-protected villages and majestic Caucasus mountains.",
    duration: "7 Days",
    groupSize: "Adventure",
    price: "$1299",
    rating: 5.0,
    image: "/tours/svaneti-trek.jpg",
    tags: ["Adventure", "Hiking"],
    color: "from-blue-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Black Sea Coast Retreat",
    description:
      "Relax on beautiful beaches and explore Batumi's modern architecture.",
    duration: "4 Days",
    groupSize: "Flexible",
    price: "$749",
    rating: 4.7,
    image: "/tours/black-sea.jpg",
    tags: ["Beach", "Relax"],
    color: "from-sky-500 to-blue-500",
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
            <Card
              key={tour.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative h-48 bg-gradient-to-br ${tour.color} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {tour.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/90 text-gray-800 border-none backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{tour.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="group-hover:text-primary transition-colors text-lg">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {tour.groupSize}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between items-center pt-4 border-t">
                <div>
                  <span className="text-2xl font-bold text-gradient">
                    {tour.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    /person
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="group">
                  Details
                  <MapPin className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-200 hover:border-blue-300 px-8"
          >
            View All Tours
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
