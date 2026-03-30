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
import { tours, type Tour } from "@/lib/tours";

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
