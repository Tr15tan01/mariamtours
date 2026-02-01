"use client";

import { useState } from "react";
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
  Filter,
  MapPin,
  Calendar,
  Users,
  Star,
  Mountain,
  Wine,
  Castle,
  Waves,
  ChevronRight,
} from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Tbilisi & Kazbegi Adventure",
    description: "Explore the capital's old town and Gergeti Trinity Church.",
    duration: "5 Days",
    groupSize: "Small Group",
    price: "$899",
    rating: 4.9,
    image: "/tours/tbilisi-kazbegi.jpg",
    tags: ["Popular", "Cultural"],
    category: "cultural",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Wine Tour in Kakheti",
    description: "Discover Georgia's ancient winemaking traditions.",
    duration: "3 Days",
    groupSize: "Private",
    price: "$699",
    rating: 4.8,
    image: "/tours/kakheti-wine.jpg",
    tags: ["Wine", "Gourmet"],
    category: "culinary",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Svaneti Mountain Trek",
    description: "Hike through UNESCO villages and Caucasus mountains.",
    duration: "7 Days",
    groupSize: "Adventure",
    price: "$1299",
    rating: 5.0,
    image: "/tours/svaneti-trek.jpg",
    tags: ["Adventure", "Hiking"],
    category: "adventure",
    color: "from-blue-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Black Sea Coast",
    description: "Relax on beaches and explore Batumi's architecture.",
    duration: "4 Days",
    groupSize: "Flexible",
    price: "$749",
    rating: 4.7,
    image: "/tours/black-sea.jpg",
    tags: ["Beach", "Relax"],
    category: "relaxation",
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 5,
    title: "Georgian Food Odyssey",
    description: "Culinary journey through regional cuisines.",
    duration: "6 Days",
    groupSize: "Foodies",
    price: "$999",
    rating: 4.9,
    image: "/tours/food-odyssey.jpg",
    tags: ["Gourmet", "Cooking"],
    category: "culinary",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    title: "Ancient Monasteries",
    description: "Visit UNESCO sites and historic churches.",
    duration: "4 Days",
    groupSize: "Cultural",
    price: "$649",
    rating: 4.6,
    image: "/tours/monastery-trail.jpg",
    tags: ["Cultural", "Historical"],
    category: "cultural",
    color: "from-purple-500 to-indigo-500",
  },
];

const categories = [
  { id: "all", label: "All Tours" },
  { id: "cultural", label: "Cultural" },
  { id: "adventure", label: "Adventure" },
  { id: "culinary", label: "Food & Wine" },
  { id: "relaxation", label: "Relaxation" },
];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTours = tours.filter((tour) => {
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch =
      search === "" ||
      tour.title.toLowerCase().includes(search.toLowerCase()) ||
      tour.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
        <div className="absolute inset-0 pattern-dots text-blue-400" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border">
              <div className="flex gap-1">
                {[Mountain, Wine, Castle, Waves].map((Icon, index) => (
                  <Icon key={index} className="h-5 w-5 text-blue-600" />
                ))}
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
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${
                selectedCategory === category.id
                  ? "bg-gradient-to- from-blue-600 to-emerald-600 text-white"
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
            {filteredTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden border hover:shadow-xl transition-all duration-300 hover-lift"
              >
                {/* Color Header */}
                <div className={`h-3 bg-gradient-to-r ${tour.color}`} />

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{tour.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{tour.description}</p>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {tour.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <div className="text-xl font-bold text-gradient">
                    {tour.price}
                    <span className="text-sm text-gray-500"> /person</span>
                  </div>
                  <Button size="sm" className="gap-1">
                    Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
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
  );
}
