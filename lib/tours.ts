// lib/tours.ts
export interface Tour {
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
  price?: string;
}

// Single source of truth for all tours
export const tours: Tour[] = [
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

// Helper function to get a tour by ID
export function getTourById(id: string | number): Tour | undefined {
  const tourId = typeof id === "string" ? parseInt(id, 10) : id;
  return tours.find((tour) => tour.id === tourId);
}

// Helper function to get all tour IDs (for static params)
export function getAllTourIds(): { id: string }[] {
  return tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}
