import { ServiceType } from "@/types";

// Mock services data with 100+ services
export const SERVICES_DATA: ServiceType[] = [
  // Photography Services
  {
    id: "photo-001",
    name: "Royal Wedding Photography",
    category: "Photography",
    description: "Professional wedding photography with candid moments, traditional shots, and cinematic coverage.",
    price: 50000,
    pricePerDay: 50000,
    city: "Mumbai",
    vendorId: "vendor-001",
    vendorName: "Sharma Studios",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800"
    ],
    rating: 4.8,
    reviewCount: 156,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24", "2026-02-25"]
  },
  {
    id: "photo-002",
    name: "Candid Wedding Photography",
    category: "Photography",
    description: "Capture natural emotions and beautiful candid moments of your special day.",
    price: 35000,
    pricePerDay: 35000,
    city: "Delhi",
    vendorId: "vendor-002",
    vendorName: "Clickwala Studios",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800"
    ],
    rating: 4.6,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24", "2026-02-26", "2026-02-28"]
  },
  {
    id: "photo-003",
    name: "Pre-Wedding Shoot Specialists",
    category: "Photography",
    description: "Creative pre-wedding photography at exotic locations with unique concepts.",
    price: 25000,
    pricePerDay: 25000,
    city: "Jaipur",
    vendorId: "vendor-003",
    vendorName: "Moments Captured",
    images: [
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800"
    ],
    rating: 4.9,
    reviewCount: 234,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Videography Services
  {
    id: "video-001",
    name: "Cinematic Wedding Films",
    category: "Videography",
    description: "Hollywood-style cinematic wedding videos with drone coverage and same-day edits.",
    price: 75000,
    pricePerDay: 75000,
    city: "Mumbai",
    vendorId: "vendor-004",
    vendorName: "CineWed Productions",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
    ],
    rating: 4.7,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  {
    id: "video-002",
    name: "Drone Wedding Coverage",
    category: "Videography",
    description: "Aerial drone videography for stunning bird's eye views of your wedding venue.",
    price: 20000,
    pricePerDay: 20000,
    city: "Bangalore",
    vendorId: "vendor-005",
    vendorName: "SkyView Films",
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800"
    ],
    rating: 4.5,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-25"]
  },
  // Catering Services
  {
    id: "catering-001",
    name: "Royal Feast Catering",
    category: "Catering",
    description: "Multi-cuisine catering with live counters, traditional dishes, and modern presentations.",
    price: 800,
    pricePerDay: 800,
    city: "Delhi",
    vendorId: "vendor-006",
    vendorName: "Taste of India Caterers",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
    ],
    rating: 4.8,
    reviewCount: 312,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  {
    id: "catering-002",
    name: "Vegetarian Delights",
    category: "Catering",
    description: "Pure vegetarian catering with Rajasthani, Gujarati, and South Indian cuisines.",
    price: 600,
    pricePerDay: 600,
    city: "Ahmedabad",
    vendorId: "vendor-007",
    vendorName: "Shudh Shakahari",
    images: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
      "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800"
    ],
    rating: 4.6,
    reviewCount: 189,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-24", "2026-02-28"]
  },
  {
    id: "catering-003",
    name: "Live Cooking Counter",
    category: "Live Cooking",
    description: "Interactive live cooking stations with chefs preparing dishes in front of guests.",
    price: 1000,
    pricePerDay: 1000,
    city: "Mumbai",
    vendorId: "vendor-008",
    vendorName: "Chef's Table",
    images: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
    ],
    rating: 4.9,
    reviewCount: 78,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Decoration Services
  {
    id: "decor-001",
    name: "Floral Paradise Decoration",
    category: "Flower Decoration",
    description: "Exquisite flower decorations with roses, marigolds, orchids, and exotic flowers.",
    price: 100000,
    pricePerDay: 100000,
    city: "Mumbai",
    vendorId: "vendor-009",
    vendorName: "Bloom Decorators",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800"
    ],
    rating: 4.8,
    reviewCount: 156,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  {
    id: "decor-002",
    name: "Royal Mandap Setup",
    category: "Mandap Decoration",
    description: "Traditional and modern mandap designs with flowers, lights, and drapes.",
    price: 150000,
    pricePerDay: 150000,
    city: "Jaipur",
    vendorId: "vendor-010",
    vendorName: "Mandap Kings",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800"
    ],
    rating: 4.7,
    reviewCount: 98,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21"]
  },
  {
    id: "decor-003",
    name: "LED Stage Decoration",
    category: "Stage Decoration",
    description: "Modern LED stage designs with dynamic lighting and digital backdrops.",
    price: 80000,
    pricePerDay: 80000,
    city: "Hyderabad",
    vendorId: "vendor-011",
    vendorName: "Light Up Events",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
    ],
    rating: 4.5,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Band Baja & Music
  {
    id: "music-001",
    name: "Royal Band Baja",
    category: "Band Baja",
    description: "Traditional brass band with uniformed musicians for baraat procession.",
    price: 25000,
    pricePerDay: 25000,
    city: "Delhi",
    vendorId: "vendor-012",
    vendorName: "Sharma Band Party",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800"
    ],
    rating: 4.6,
    reviewCount: 234,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  {
    id: "music-002",
    name: "DJ Night Explosion",
    category: "DJ & Music",
    description: "Professional DJ with state-of-the-art sound system and LED dance floor.",
    price: 35000,
    pricePerDay: 35000,
    city: "Mumbai",
    vendorId: "vendor-013",
    vendorName: "DJ Beats",
    images: [
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800"
    ],
    rating: 4.8,
    reviewCount: 189,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-24", "2026-02-28"]
  },
  {
    id: "music-003",
    name: "Dhol Players Group",
    category: "Dhol",
    description: "Energetic Punjabi dhol players for baraat and sangeet celebrations.",
    price: 15000,
    pricePerDay: 15000,
    city: "Chandigarh",
    vendorId: "vendor-014",
    vendorName: "Punjab Di Dhol",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800"
    ],
    rating: 4.9,
    reviewCount: 312,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Makeup Artists
  {
    id: "makeup-001",
    name: "Bridal Makeup Specialist",
    category: "Makeup Artist",
    description: "Award-winning bridal makeup with HD finish, airbrush, and long-lasting products.",
    price: 30000,
    pricePerDay: 30000,
    city: "Mumbai",
    vendorId: "vendor-015",
    vendorName: "Glamour by Priya",
    images: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
    ],
    rating: 4.9,
    reviewCount: 456,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  {
    id: "makeup-002",
    name: "Celebrity Makeup Artist",
    category: "Makeup Artist",
    description: "Bollywood-trained makeup artist for that perfect celebrity look.",
    price: 50000,
    pricePerDay: 50000,
    city: "Delhi",
    vendorId: "vendor-016",
    vendorName: "Star Looks Studio",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800"
    ],
    rating: 4.8,
    reviewCount: 178,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23"]
  },
  // Mehendi Artists
  {
    id: "mehendi-001",
    name: "Traditional Mehendi Art",
    category: "Mehendi Artist",
    description: "Intricate bridal mehendi designs with Arabic, Rajasthani, and fusion patterns.",
    price: 15000,
    pricePerDay: 15000,
    city: "Jaipur",
    vendorId: "vendor-017",
    vendorName: "Henna by Fatima",
    images: [
      "https://images.unsplash.com/photo-1595929712111-1eda7ca4e974?w=800",
      "https://images.unsplash.com/photo-1611106207063-53c1b1dc5a7c?w=800"
    ],
    rating: 4.8,
    reviewCount: 289,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  {
    id: "mehendi-002",
    name: "Arabic Mehendi Expert",
    category: "Mehendi Artist",
    description: "Specialist in elegant Arabic mehendi patterns with modern twist.",
    price: 12000,
    pricePerDay: 12000,
    city: "Hyderabad",
    vendorId: "vendor-018",
    vendorName: "Noor Mehendi",
    images: [
      "https://images.unsplash.com/photo-1632171927336-4c7c9bdd0e77?w=800",
      "https://images.unsplash.com/photo-1609757449316-ca2e57e1b7c2?w=800"
    ],
    rating: 4.7,
    reviewCount: 156,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Venue Services
  {
    id: "venue-001",
    name: "Grand Palace Banquet",
    category: "Venue",
    description: "Luxurious banquet hall with capacity of 1000 guests, AC, parking, and premium amenities.",
    price: 200000,
    pricePerDay: 200000,
    city: "Delhi",
    vendorId: "vendor-019",
    vendorName: "Palace Grand",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-25", "2026-02-28"]
  },
  {
    id: "venue-002",
    name: "Lakeside Resort Wedding",
    category: "Venue",
    description: "Picturesque lakeside venue with outdoor and indoor options for destination weddings.",
    price: 500000,
    pricePerDay: 500000,
    city: "Udaipur",
    vendorId: "vendor-020",
    vendorName: "Lake Palace Resort",
    images: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800"
    ],
    rating: 4.9,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22"]
  },
  // Fireworks & Crackers
  {
    id: "fire-001",
    name: "Grand Fireworks Display",
    category: "Fireworks",
    description: "Professional aerial fireworks display with synchronized music and effects.",
    price: 100000,
    pricePerDay: 100000,
    city: "Mumbai",
    vendorId: "vendor-021",
    vendorName: "Sky Fire Works",
    images: [
      "https://images.unsplash.com/photo-1498931299476-f9e5d37fcb01?w=800",
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800"
    ],
    rating: 4.6,
    reviewCount: 34,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  {
    id: "fire-002",
    name: "Cold Pyro Effects",
    category: "Fire Crackers",
    description: "Safe indoor cold pyrotechnics for stage effects and couple entry.",
    price: 25000,
    pricePerDay: 25000,
    city: "Bangalore",
    vendorId: "vendor-022",
    vendorName: "Pyro Magic",
    images: [
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800",
      "https://images.unsplash.com/photo-1548091523-4e87b8f9e68e?w=800"
    ],
    rating: 4.8,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Pandit Services
  {
    id: "pandit-001",
    name: "Vedic Wedding Pandit",
    category: "Pandit Ji",
    description: "Experienced pandit for all Hindu wedding rituals with proper vedic mantras.",
    price: 21000,
    pricePerDay: 21000,
    city: "Varanasi",
    vendorId: "vendor-023",
    vendorName: "Shastri Ji Services",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800"
    ],
    rating: 4.9,
    reviewCount: 234,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  // Orchestra Services
  {
    id: "orchestra-001",
    name: "Live Orchestra Band",
    category: "Orchestra",
    description: "12-piece live orchestra playing Bollywood hits and classical fusion.",
    price: 80000,
    pricePerDay: 80000,
    city: "Mumbai",
    vendorId: "vendor-024",
    vendorName: "Rhythm Orchestra",
    images: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800"
    ],
    rating: 4.7,
    reviewCount: 56,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-24"]
  },
  // Ghodi & Rath Services
  {
    id: "ghodi-001",
    name: "Royal White Mare",
    category: "Ghodi",
    description: "Beautiful decorated white mare for groom's grand baraat entry.",
    price: 15000,
    pricePerDay: 15000,
    city: "Delhi",
    vendorId: "vendor-025",
    vendorName: "Royal Stables",
    images: [
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    rating: 4.8,
    reviewCount: 178,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  {
    id: "rath-001",
    name: "Decorated Chariot Entry",
    category: "Rath",
    description: "Traditional decorated chariot for royal groom or bride entry.",
    price: 25000,
    pricePerDay: 25000,
    city: "Jaipur",
    vendorId: "vendor-026",
    vendorName: "Rajasthani Rath",
    images: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
    ],
    rating: 4.6,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Tent House Services
  {
    id: "tent-001",
    name: "Premium AC Tent Setup",
    category: "AC Tent",
    description: "Air-conditioned tent setup with chandeliers, carpets, and premium furniture.",
    price: 150000,
    pricePerDay: 150000,
    city: "Delhi",
    vendorId: "vendor-027",
    vendorName: "Royal Tent House",
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    rating: 4.7,
    reviewCount: 123,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  {
    id: "tent-002",
    name: "Shamiyana Setup",
    category: "Shamiyana",
    description: "Traditional shamiyana with colorful drapes, lighting, and seating arrangements.",
    price: 50000,
    pricePerDay: 50000,
    city: "Lucknow",
    vendorId: "vendor-028",
    vendorName: "Awadh Tent House",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
    ],
    rating: 4.5,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Wedding Planner
  {
    id: "planner-001",
    name: "Complete Wedding Planning",
    category: "Wedding Planner",
    description: "End-to-end wedding planning with vendor coordination, timeline management, and execution.",
    price: 300000,
    pricePerDay: 300000,
    city: "Mumbai",
    vendorId: "vendor-029",
    vendorName: "Dream Weddings Co.",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
    ],
    rating: 4.9,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-25"]
  },
  // Car Rental
  {
    id: "car-001",
    name: "Luxury Wedding Car",
    category: "Car Rental",
    description: "Mercedes, BMW, Audi fleet for wedding transportation with decorated options.",
    price: 20000,
    pricePerDay: 20000,
    city: "Delhi",
    vendorId: "vendor-030",
    vendorName: "Elite Wheels",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ],
    rating: 4.6,
    reviewCount: 145,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24", "2026-02-25"]
  },
  // Sweet & Food Stalls
  {
    id: "sweet-001",
    name: "Mithai Counter",
    category: "Mithai",
    description: "Fresh traditional Indian sweets counter with 50+ varieties.",
    price: 300,
    pricePerDay: 300,
    city: "Delhi",
    vendorId: "vendor-031",
    vendorName: "Haldiram's Catering",
    images: [
      "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=800",
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800"
    ],
    rating: 4.8,
    reviewCount: 267,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  {
    id: "chaat-001",
    name: "Live Chaat Counter",
    category: "Chaat Counter",
    description: "Authentic Delhi-style chaat with golgappe, papdi chaat, tikki, and more.",
    price: 200,
    pricePerDay: 200,
    city: "Delhi",
    vendorId: "vendor-032",
    vendorName: "Chaat King",
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800"
    ],
    rating: 4.7,
    reviewCount: 189,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  {
    id: "paan-001",
    name: "Premium Paan Counter",
    category: "Paan Counter",
    description: "Variety of paans including meetha paan, fire paan, and chocolate paan.",
    price: 8000,
    pricePerDay: 8000,
    city: "Lucknow",
    vendorId: "vendor-033",
    vendorName: "Lucknowi Paan Bhandar",
    images: [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800",
      "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=800"
    ],
    rating: 4.9,
    reviewCount: 345,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Invitation Cards
  {
    id: "invite-001",
    name: "Designer Wedding Cards",
    category: "Invitation Cards",
    description: "Premium designer wedding invitation cards with box packaging.",
    price: 150,
    pricePerDay: 150,
    city: "Jaipur",
    vendorId: "vendor-034",
    vendorName: "Card Palace",
    images: [
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800"
    ],
    rating: 4.6,
    reviewCount: 456,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  // Photo Booth
  {
    id: "booth-001",
    name: "360° Photo Booth",
    category: "Photo Booth",
    description: "Modern 360-degree photo booth with instant prints and social sharing.",
    price: 25000,
    pricePerDay: 25000,
    city: "Mumbai",
    vendorId: "vendor-035",
    vendorName: "Click360",
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
      "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800"
    ],
    rating: 4.8,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Dance Troupes
  {
    id: "dance-001",
    name: "Bollywood Dance Group",
    category: "Dance Troupe",
    description: "Professional Bollywood dancers for sangeet and reception performances.",
    price: 40000,
    pricePerDay: 40000,
    city: "Mumbai",
    vendorId: "vendor-036",
    vendorName: "Filmy Dancers",
    images: [
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800"
    ],
    rating: 4.7,
    reviewCount: 78,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  {
    id: "dance-002",
    name: "Bhangra Dance Group",
    category: "Bhangra Group",
    description: "Energetic Punjabi bhangra dancers to electrify your wedding.",
    price: 30000,
    pricePerDay: 30000,
    city: "Chandigarh",
    vendorId: "vendor-037",
    vendorName: "Punjab Bhangra Team",
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800"
    ],
    rating: 4.9,
    reviewCount: 156,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-24", "2026-02-28"]
  },
  // Anchor & Emcee
  {
    id: "anchor-001",
    name: "Professional Wedding Anchor",
    category: "Anchor",
    description: "Experienced bilingual anchor for wedding ceremonies and receptions.",
    price: 25000,
    pricePerDay: 25000,
    city: "Delhi",
    vendorId: "vendor-038",
    vendorName: "Voice of Events",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800"
    ],
    rating: 4.8,
    reviewCount: 123,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  // Lighting Services
  {
    id: "light-001",
    name: "Wedding LED Lighting",
    category: "Lighting",
    description: "Complete LED lighting setup with mood lighting, fairy lights, and chandeliers.",
    price: 60000,
    pricePerDay: 60000,
    city: "Mumbai",
    vendorId: "vendor-039",
    vendorName: "Bright Lights Events",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"
    ],
    rating: 4.6,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Motihari Local Services
  {
    id: "moti-001",
    name: "Motihari Wedding Photography",
    category: "Photography",
    description: "Local professional photography services in Motihari and East Champaran.",
    price: 25000,
    pricePerDay: 25000,
    city: "Motihari",
    vendorId: "vendor-040",
    vendorName: "Motihari Studio",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800"
    ],
    rating: 4.5,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24", "2026-02-25"]
  },
  {
    id: "moti-002",
    name: "Champaran Catering Services",
    category: "Catering",
    description: "Authentic Bihari cuisine catering with litti chokha, thali, and more.",
    price: 400,
    pricePerDay: 400,
    city: "Motihari",
    vendorId: "vendor-041",
    vendorName: "Bihari Bhoj",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  {
    id: "moti-003",
    name: "East Champaran Band Party",
    category: "Band Baja",
    description: "Traditional band party for baraat in Motihari and nearby areas.",
    price: 15000,
    pricePerDay: 15000,
    city: "Motihari",
    vendorId: "vendor-042",
    vendorName: "Champaran Band",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800"
    ],
    rating: 4.4,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  {
    id: "moti-004",
    name: "Motihari Tent & Decoration",
    category: "Tent House",
    description: "Complete tent and decoration setup for weddings in Motihari.",
    price: 40000,
    pricePerDay: 40000,
    city: "Motihari",
    vendorId: "vendor-043",
    vendorName: "Shree Tent House",
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
    ],
    rating: 4.6,
    reviewCount: 78,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24", "2026-02-26"]
  },
  // More services to reach 100+
  {
    id: "patna-001",
    name: "Patna Premium Catering",
    category: "Catering",
    description: "Multi-cuisine catering service with 200+ dishes for grand weddings.",
    price: 700,
    pricePerDay: 700,
    city: "Patna",
    vendorId: "vendor-044",
    vendorName: "Bihar Caterers",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
    ],
    rating: 4.7,
    reviewCount: 234,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  {
    id: "patna-002",
    name: "Patna Wedding Photography",
    category: "Photography",
    description: "Professional wedding photography with candid coverage in Patna.",
    price: 35000,
    pricePerDay: 35000,
    city: "Patna",
    vendorId: "vendor-045",
    vendorName: "Patna Clicks",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
    ],
    rating: 4.6,
    reviewCount: 156,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // LED Screen
  {
    id: "led-001",
    name: "Giant LED Screen Rental",
    category: "LED Screen",
    description: "High-definition LED screens for live streaming and video playback.",
    price: 30000,
    pricePerDay: 30000,
    city: "Mumbai",
    vendorId: "vendor-046",
    vendorName: "Screen Masters",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"
    ],
    rating: 4.5,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Sound System
  {
    id: "sound-001",
    name: "Professional Sound System",
    category: "Sound System",
    description: "High-quality sound system with speakers, mixers, and technicians.",
    price: 25000,
    pricePerDay: 25000,
    city: "Delhi",
    vendorId: "vendor-047",
    vendorName: "Sound Wave Events",
    images: [
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Generator
  {
    id: "gen-001",
    name: "Silent Generator Rental",
    category: "Generator",
    description: "Silent diesel generators from 25 KVA to 500 KVA for uninterrupted power.",
    price: 15000,
    pricePerDay: 15000,
    city: "Delhi",
    vendorId: "vendor-048",
    vendorName: "Power Plus",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800"
    ],
    rating: 4.4,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24", "2026-02-25"]
  },
  // Furniture Rental
  {
    id: "furn-001",
    name: "Premium Furniture Rental",
    category: "Furniture Rental",
    description: "Elegant sofas, chairs, tables, and royal furniture for weddings.",
    price: 50000,
    pricePerDay: 50000,
    city: "Delhi",
    vendorId: "vendor-049",
    vendorName: "Royal Furniture Rentals",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
    ],
    rating: 4.6,
    reviewCount: 78,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Crockery Rental
  {
    id: "crockery-001",
    name: "Premium Crockery Set",
    category: "Crockery Rental",
    description: "Elegant dinner sets, glassware, and serving dishes for grand events.",
    price: 100,
    pricePerDay: 100,
    city: "Mumbai",
    vendorId: "vendor-050",
    vendorName: "Table Grace",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800"
    ],
    rating: 4.5,
    reviewCount: 134,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Kulfi Counter
  {
    id: "kulfi-001",
    name: "Live Kulfi Counter",
    category: "Kulfi",
    description: "Traditional malai kulfi, pista kulfi, mango kulfi, and falooda counter.",
    price: 6000,
    pricePerDay: 6000,
    city: "Delhi",
    vendorId: "vendor-051",
    vendorName: "Giani Kulfi Wala",
    images: [
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=800",
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800"
    ],
    rating: 4.8,
    reviewCount: 189,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  // Ice Cream Counter
  {
    id: "ice-001",
    name: "Premium Ice Cream Bar",
    category: "Ice Cream",
    description: "Gelato, sorbets, and premium ice cream with live preparation.",
    price: 10000,
    pricePerDay: 10000,
    city: "Mumbai",
    vendorId: "vendor-052",
    vendorName: "Frozen Delights",
    images: [
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800",
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800"
    ],
    rating: 4.7,
    reviewCount: 123,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Wedding Cake
  {
    id: "cake-001",
    name: "Designer Wedding Cake",
    category: "Wedding Cake",
    description: "Custom multi-tier wedding cakes with fondant art and fresh flowers.",
    price: 25000,
    pricePerDay: 25000,
    city: "Mumbai",
    vendorId: "vendor-053",
    vendorName: "Cake Artistry",
    images: [
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800",
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800"
    ],
    rating: 4.9,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Return Gifts
  {
    id: "gift-001",
    name: "Premium Return Gifts",
    category: "Return Gifts",
    description: "Customized return gifts with couple's name and wedding date.",
    price: 200,
    pricePerDay: 200,
    city: "Jaipur",
    vendorId: "vendor-054",
    vendorName: "Gift Galaxy",
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800"
    ],
    rating: 4.6,
    reviewCount: 234,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  // Valet Parking
  {
    id: "valet-001",
    name: "Valet Parking Service",
    category: "Valet Parking",
    description: "Professional valet parking with trained staff and security.",
    price: 15000,
    pricePerDay: 15000,
    city: "Mumbai",
    vendorId: "vendor-055",
    vendorName: "Park Easy",
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ],
    rating: 4.5,
    reviewCount: 56,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Security Services
  {
    id: "security-001",
    name: "Event Security Team",
    category: "Security",
    description: "Trained security personnel for guest management and safety.",
    price: 2000,
    pricePerDay: 2000,
    city: "Delhi",
    vendorId: "vendor-056",
    vendorName: "Safe Events",
    images: [
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800",
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24", "2026-02-25"]
  },
  // Hostess & Welcome Girls
  {
    id: "host-001",
    name: "Professional Hostesses",
    category: "Hostess",
    description: "Trained hostesses for guest welcome, registration, and coordination.",
    price: 15000,
    pricePerDay: 15000,
    city: "Mumbai",
    vendorId: "vendor-057",
    vendorName: "Elegance Hostess",
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800"
    ],
    rating: 4.6,
    reviewCount: 78,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Folk Dance
  {
    id: "folk-001",
    name: "Rajasthani Folk Dance",
    category: "Folk Dance",
    description: "Authentic Rajasthani folk dancers with Ghoomar and Kalbeliya.",
    price: 35000,
    pricePerDay: 35000,
    city: "Jaipur",
    vendorId: "vendor-058",
    vendorName: "Rajasthani Rang",
    images: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    rating: 4.8,
    reviewCount: 123,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Magic Show
  {
    id: "magic-001",
    name: "Wedding Magic Show",
    category: "Magic Show",
    description: "Professional magician for entertainment during wedding events.",
    price: 20000,
    pricePerDay: 20000,
    city: "Mumbai",
    vendorId: "vendor-059",
    vendorName: "Magic Moments",
    images: [
      "https://images.unsplash.com/photo-1576267423429-569309b31e84?w=800",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
    ],
    rating: 4.5,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-24", "2026-02-28"]
  },
  // Groom Entry
  {
    id: "entry-001",
    name: "Grand Groom Entry",
    category: "Groom Entry",
    description: "Spectacular groom entry with dry ice, fireworks, and LED props.",
    price: 50000,
    pricePerDay: 50000,
    city: "Delhi",
    vendorId: "vendor-060",
    vendorName: "Entry Kings",
    images: [
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800",
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Bride Entry
  {
    id: "entry-002",
    name: "Royal Bride Entry",
    category: "Bride Entry",
    description: "Elegant bride entry with phoolon ki chaadar and live music.",
    price: 30000,
    pricePerDay: 30000,
    city: "Delhi",
    vendorId: "vendor-061",
    vendorName: "Bridal Dreams",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
    ],
    rating: 4.8,
    reviewCount: 67,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Varmala Entry
  {
    id: "varmala-001",
    name: "Varmala Stage Setup",
    category: "Varmala Entry",
    description: "Creative varmala stage with lifting platform and decorations.",
    price: 40000,
    pricePerDay: 40000,
    city: "Mumbai",
    vendorId: "vendor-062",
    vendorName: "Stage Craft",
    images: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
    ],
    rating: 4.6,
    reviewCount: 56,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-23", "2026-02-26"]
  },
  // Astrologer
  {
    id: "astro-001",
    name: "Wedding Muhurat Expert",
    category: "Astrologer",
    description: "Expert astrologer for muhurat, kundli matching, and wedding rituals.",
    price: 11000,
    pricePerDay: 11000,
    city: "Varanasi",
    vendorId: "vendor-063",
    vendorName: "Jyotish Guru",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800"
    ],
    rating: 4.9,
    reviewCount: 189,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23", "2026-02-24"]
  },
  // Juice & Mocktails
  {
    id: "juice-001",
    name: "Fresh Juice & Mocktail Bar",
    category: "Juice & Mocktails",
    description: "Live juice bar with exotic mocktails and fresh fruit juices.",
    price: 12000,
    pricePerDay: 12000,
    city: "Mumbai",
    vendorId: "vendor-064",
    vendorName: "Juice Junction",
    images: [
      "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800"
    ],
    rating: 4.7,
    reviewCount: 134,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Dry Fruits Counter
  {
    id: "dry-001",
    name: "Premium Dry Fruits Display",
    category: "Dry Fruits",
    description: "Elegant dry fruits display with gift packaging options.",
    price: 500,
    pricePerDay: 500,
    city: "Delhi",
    vendorId: "vendor-065",
    vendorName: "Dry Fruit Palace",
    images: [
      "https://images.unsplash.com/photo-1599598177991-ec67b5c37318?w=800",
      "https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=800"
    ],
    rating: 4.6,
    reviewCount: 89,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22", "2026-02-23"]
  },
  // Flowers
  {
    id: "flower-001",
    name: "Fresh Flower Supply",
    category: "Flowers",
    description: "Fresh flowers for decoration, garlands, and bouquets.",
    price: 25000,
    pricePerDay: 25000,
    city: "Bangalore",
    vendorId: "vendor-066",
    vendorName: "Flower World",
    images: [
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800",
      "https://images.unsplash.com/photo-1518882605630-8b28e76034f2?w=800"
    ],
    rating: 4.8,
    reviewCount: 145,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-21", "2026-02-22"]
  },
  // Jewellery
  {
    id: "jewel-001",
    name: "Bridal Jewellery Rental",
    category: "Jewellery",
    description: "Premium bridal jewellery sets on rent for all wedding functions.",
    price: 30000,
    pricePerDay: 30000,
    city: "Jaipur",
    vendorId: "vendor-067",
    vendorName: "Jewel Box",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"
    ],
    rating: 4.7,
    reviewCount: 178,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-22", "2026-02-24"]
  },
  // Honeymoon Planning
  {
    id: "honey-001",
    name: "Honeymoon Package Planner",
    category: "Honeymoon Planning",
    description: "Complete honeymoon packages to Maldives, Bali, Europe, and more.",
    price: 100000,
    pricePerDay: 100000,
    city: "Mumbai",
    vendorId: "vendor-068",
    vendorName: "Honeymoon Travels",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
    ],
    rating: 4.8,
    reviewCount: 56,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-25", "2026-02-28"]
  },
  // Destination Wedding
  {
    id: "dest-001",
    name: "Destination Wedding Planner",
    category: "Destination Wedding",
    description: "Complete destination wedding planning in Goa, Udaipur, Jaipur, and Thailand.",
    price: 500000,
    pricePerDay: 500000,
    city: "Mumbai",
    vendorId: "vendor-069",
    vendorName: "Destination Dreams",
    images: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800"
    ],
    rating: 4.9,
    reviewCount: 34,
    isVerified: true,
    availability: ["2026-02-20", "2026-03-01"]
  },
  // Theme Wedding
  {
    id: "theme-001",
    name: "Theme Wedding Designer",
    category: "Theme Wedding",
    description: "Creative theme weddings - Royal, Bollywood, Vintage, Beach, and more.",
    price: 400000,
    pricePerDay: 400000,
    city: "Delhi",
    vendorId: "vendor-070",
    vendorName: "Theme Makers",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
    ],
    rating: 4.8,
    reviewCount: 45,
    isVerified: true,
    availability: ["2026-02-20", "2026-02-28"]
  }
];

export default SERVICES_DATA;
