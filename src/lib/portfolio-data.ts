export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  category: string;
  location: string;
  size: string;
  duration: string;
  status: string;
  youtubeUrl?: string;
  headline: string;
  storyHeading: string;
  storyParagraphs: string[];
  specs: {
    location: string;
    area: string;
    status: string;
    tagline: string;
  };
  gallery: string[];
  storyImages: {
    left: string;
    right: string;
  };
}

export const allPortfolioProjects: Record<string, ProjectDetail> = {
  "mirpur-2": {
    slug: "mirpur-2",
    title: "Mirpur 2 Residential Interior",
    client: "Md. Rahim",
    category: "Apartment Interior",
    location: "Mirpur 2",
    size: "1600 sqft",
    duration: "3 Months",
    status: "Upcoming Project",
    youtubeUrl: "https://youtube.com",
    headline: "How smart interiors create memorable experiences",
    storyHeading: "A New Vision of Modern Living",
    storyParagraphs: [
      "A beautiful home begins with a thoughtful vision. Every detail is carefully planned to bring together modern aesthetics, smart space utilization, and functional design.",
      "We are excited to introduce our upcoming 1,600 Sq. Ft. residential interior design project in Mirpur 2.",
      "Through thoughtfully crafted 3D designs, we aim to transform this space into a beautiful, elegant, and comfortable home that perfectly reflects modern living.",
    ],
    specs: {
      location: "Mirpur 2, Dhaka",
      area: "1,600 Sq. Ft.",
      status: "Upcoming Project",
      tagline: "Your Space. Your Story. Our Design.",
    },
    gallery: [
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-mirpur.webp",
      "/portfolio/project-rangpur.webp",
      "/portfolio/project-dinajpur.webp",
      "/portfolio/project-kafrul.webp",
      "/portfolio/project-madaripur.webp",
      "/New folder/492148510_726187993069203_6052875679272392053_n_k3Vkgv.jpg",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  rangpur: {
    slug: "rangpur",
    title: "Rangpur Modern Living Suite",
    client: "Engr. Tanvir Ahmed",
    category: "Duplex Interior",
    location: "Rangpur",
    size: "2145 sqft",
    duration: "4 Months",
    status: "Running Project",
    youtubeUrl: "https://youtube.com",
    headline: "Transforming regional living through bespoke modernism",
    storyHeading: "Grandeur Meets Everyday Serenity",
    storyParagraphs: [
      "Crafted for a prominent family residence in Rangpur, this 2,145 sq. ft. living suite blends natural marble textures, acoustic fluted timber panels, and warm ambient lighting.",
      "Our team focused on creating an open spatial flow that accommodates grand family gatherings while offering cozy, private nooks for relaxation.",
      "Every fixture, custom credenza, and marble wall installation is engineered with precision and built to withstand the test of time.",
    ],
    specs: {
      location: "Dhap, Rangpur",
      area: "2,145 Sq. Ft.",
      status: "Running Project",
      tagline: "Crafted for Distinction and Enduring Comfort.",
    },
    gallery: [
      "/portfolio/project-rangpur.webp",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-dinajpur.webp",
      "/portfolio/project-mirpur.webp",
      "/portfolio/project-kafrul.webp",
      "/New folder/1_3yy0P4.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  dinajpur: {
    slug: "dinajpur",
    title: "Dinajpur Contemporary Dining & Lounge",
    client: "Dr. Farhana Islam",
    category: "Residential Architecture",
    location: "Dinajpur",
    size: "1600 sqft",
    duration: "3.5 Months",
    status: "Upcoming Project",
    youtubeUrl: "https://youtube.com",
    headline: "Elegance defined by balanced geometry and warm materials",
    storyHeading: "Refined Culinary and Entertaining Spaces",
    storyParagraphs: [
      "In this 1,600 sq. ft. residence, the dining and entertainment zone serves as the heartbeat of the home, framed by fluted glass display cabinets and subtle brass accents.",
      "Custom ergonomics and imported lighting luminaires provide layered illumination for both festive dinners and quiet family evenings.",
      "A seamless transition between dining, bar counter, and open lounge elevates the living experience.",
    ],
    specs: {
      location: "Suihari, Dinajpur",
      area: "1,600 Sq. Ft.",
      status: "Upcoming Project",
      tagline: "Where Light and Texture Harmonize.",
    },
    gallery: [
      "/portfolio/project-dinajpur.webp",
      "/portfolio/project-rangpur.webp",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-kafrul.webp",
      "/New folder/2_9piP4v.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  kafrul: {
    slug: "kafrul",
    title: "Kafrul Cantonment Luxury Salon",
    client: "Brig. Gen. (Retd.) M. Kabir",
    category: "Luxury Duplex Interior",
    location: "Kafrul Cantonment",
    size: "3000 sqft",
    duration: "5 Months",
    status: "Upcoming Project",
    youtubeUrl: "https://youtube.com",
    headline: "Sculptural volume and monumental spatial balance",
    storyHeading: "Timeless Architecture within a Prestige Setting",
    storyParagraphs: [
      "Spanning over 3,000 sq. ft. in Kafrul Cantonment, this luxury interior combines double-height ceiling voids with monolithic porcelain stoneware and subtle bronze trims.",
      "Designed for dignified entertaining and quiet luxury, every piece of built-in joinery was custom-fabricated by our in-house master craftsmen.",
      "The result is a tranquil, light-filled sanctuary offering total acoustic privacy and refined aesthetic composure.",
    ],
    specs: {
      location: "Kafrul Cantonment, Dhaka",
      area: "3,000 Sq. Ft.",
      status: "Upcoming Project",
      tagline: "Monumental Elegance for Discerning Living.",
    },
    gallery: [
      "/portfolio/project-kafrul.webp",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-rangpur.webp",
      "/portfolio/project-mirpur.webp",
      "/New folder/1_za30g1.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  madaripur: {
    slug: "madaripur",
    title: "Madaripur Architectural Villa",
    client: "Khandakar Associates",
    category: "Private Villa Interior",
    location: "Madaripur",
    size: "2320 sqft",
    duration: "4 Months",
    status: "Handover Project",
    youtubeUrl: "https://youtube.com",
    headline: "Modern coastal and deltaic villa aesthetics",
    storyHeading: "Crafting a Multi-Generational Heritage Residence",
    storyParagraphs: [
      "Surrounded by lush delta landscape in Madaripur, this 2,320 sq. ft. villa integrates open courtyards with expansive floor-to-ceiling glass fenestrations.",
      "The interior palette relies on sustainable local teak woodwork, honed river stones, and custom-tailored linen fabrics.",
      "Delivered on schedule with 100% turnkey handover, the villa stands as a testament to our dedication to context and craft.",
    ],
    specs: {
      location: "Madaripur Sadar",
      area: "2,320 Sq. Ft.",
      status: "Handover Project",
      tagline: "Rooted in Culture. Elevated by Modern Design.",
    },
    gallery: [
      "/portfolio/project-madaripur.webp",
      "/portfolio/project-rangpur.webp",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-dinajpur.webp",
      "/New folder/5_5Bxpp9.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  "gulshan-penthouse": {
    slug: "gulshan-penthouse",
    title: "Gulshan Lakefront Penthouse",
    client: "Syed Mansoor & Partners",
    category: "Penthouse Architecture & Interior",
    location: "Gulshan 2, Dhaka",
    size: "4200 sqft",
    duration: "6 Months",
    status: "Handover Project",
    youtubeUrl: "https://youtube.com",
    headline: "Panoramic vistas framed by minimalist luxury",
    storyHeading: "The Pinnacle of Urban Living",
    storyParagraphs: [
      "Perched high above Gulshan Lake, this 4,200 sq. ft. penthouse commands 360-degree skyline views while offering intimate, opulent interior volumes.",
      "Custom Italian Calacatta marble hearths, concealed climate control systems, and automated intelligent shading guarantee effortless living comfort.",
      "Winner of regional residential interior excellence honors.",
    ],
    specs: {
      location: "Road 50, Gulshan 2, Dhaka",
      area: "4,200 Sq. Ft.",
      status: "Handover Project",
      tagline: "Skyline Living Reimagined.",
    },
    gallery: [
      "/New folder/492148510_726187993069203_6052875679272392053_n_k3Vkgv.jpg",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-kafrul.webp",
      "/portfolio/project-dinajpur.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  "banani-corporate": {
    slug: "banani-corporate",
    title: "Banani Tech Headquarters",
    client: "Apex Venture Labs",
    category: "Commercial Workspace",
    location: "Banani, Dhaka",
    size: "5400 sqft",
    duration: "4.5 Months",
    status: "Running Project",
    youtubeUrl: "https://youtube.com",
    headline: "Agile workplaces engineered for collaborative innovation",
    storyHeading: "Human-Centric Workspace Ecosystem",
    storyParagraphs: [
      "A biophilic corporate interior spanning 5,400 sq. ft. across two floors, featuring modular breakout zones, acoustic phone pods, and hot-desking stations.",
      "Integrated air purification systems and daylight-harvesting facades ensure superior worker wellbeing and energy savings.",
      "Scheduled for turnkey delivery in the upcoming quarter.",
    ],
    specs: {
      location: "Road 11, Banani, Dhaka",
      area: "5,400 Sq. Ft.",
      status: "Running Project",
      tagline: "Empowering Creative Teams Through Thoughtful Space.",
    },
    gallery: [
      "/images/IBM_Sofa_Card_Crop-1784641858.webp",
      "/New folder/1_za30g1.webp",
      "/portfolio/project-kafrul.webp",
      "/portfolio/project-madaripur.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
  "uttara-studio": {
    slug: "uttara-studio",
    title: "Uttara Creative Duplex",
    client: "Farhad & Nasreen",
    category: "Duplex Interior",
    location: "Sector 7, Uttara",
    size: "3850 sqft",
    duration: "4 Months",
    status: "Upcoming Project",
    youtubeUrl: "https://youtube.com",
    headline: "Harmonizing contemporary art and domestic life",
    storyHeading: "Light, Proportion, and Modern Warmth",
    storyParagraphs: [
      "A 3,850 sq. ft. duplex in Sector 7, Uttara, designed around an open-concept living pavilion and a private family sanctuary on the upper tier.",
      "Custom timber slat screens modulate natural daylight while preserving privacy from neighboring plots.",
      "Carefully chosen textural contrasts—raw concrete, brushed gold, and warm oak—bring visual depth to every corner.",
    ],
    specs: {
      location: "Sector 7, Uttara, Dhaka",
      area: "3,850 Sq. Ft.",
      status: "Upcoming Project",
      tagline: "Artful Living with Purpose.",
    },
    gallery: [
      "/New folder/1_3yy0P4.webp",
      "/portfolio/hero-bedroom-detail.jpg",
      "/portfolio/project-rangpur.webp",
      "/portfolio/project-mirpur.webp",
    ],
    storyImages: {
      left: "/portfolio/story-blueprint.jpg",
      right: "/portfolio/story-architect.png",
    },
  },
};
