export type NewsCategory =
  | "AWARDS"
  | "IN-DEPTH"
  | "NEWS"
  | "PRESS"
  | "PRESS RELEASES"
  | "VIDEO";

export type NewsItem = {
  category: NewsCategory;
  title: string;
  image: string;
  imageAlt: string;
  video?: string;
};

export const newsCategories: ("ALL" | NewsCategory)[] = [
  "ALL",
  "AWARDS",
  "IN-DEPTH",
  "PRESS",
  "PRESS RELEASES",
  "VIDEO",
];

export const newsItems: NewsItem[] = [
  {
    category: "PRESS",
    title: "Architizer Recognizes Inoodex as a Leader in Sustainable Architecture",
    image: "/news/3095_1_000_N401_cropped_2400x2400-900x900.webp",
    imageAlt: "A contemporary building featured in a sustainability story",
  },
  {
    category: "PRESS",
    title:
      "Carlos Cerezo Davila Speaks to the Financial Times about Building Climate-Resilient Cities",
    image: "/news/2867_1_000_N1597_cropped_2400x2400-900x900.webp",
    imageAlt: "An aerial view of a city and its surrounding neighborhoods",
  },
  {
    category: "PRESS",
    title:
      "Carlos Cerezo Davila Co-Authors a Feature on Digital Decarbonization Tools",
    image: "/news/Carlos_Oculus_Feature_2400-x-2400-900x900.webp",
    imageAlt: "A feature card about digital tools for decarbonization",
  },
  {
    category: "AWARDS",
    title: "TP-LINK LXD and TCC DAKA RRRC Win an AN Best of Design Award",
    image: "/news/2970_1_000_N615_cropped_2400x2400-900x900.webp",
    imageAlt: "An award-winning contemporary architecture project",
  },
  {
    category: "PRESS",
    title: "John Bushell Shares Inoodex's Approach to Retrofit and Adaptive Reuse",
    image: "/news/3588_1_000_N71_cropped_2400x2400-900x900.webp",
    imageAlt: "A discussion about adaptive reuse and building design",
  },
  {
    category: "IN-DEPTH",
    title:
      "Mustafa Chehabeddine Discusses Equitable City-Building with University of Oxford Students",
    image: "/news/2607_1_000_N172_cropped_2400x2400-900x900.webp",
    imageAlt: "Students and designers discussing a city-building model",
  },
  {
    category: "PRESS RELEASES",
    title: "Inoodex Presents at AEC Tech NYC Annual Conference 2026",
    image: "/news/AEC_Tech_2400-x-2400-1-900x900.webp",
    imageAlt: "Conference information for AEC Tech NYC",
  },
  {
    category: "AWARDS",
    title: "Inoodex Tops Architizer's List of the Best Architecture and Design Firms",
    image: "/news/2939_1_000_N652_cropped_2400x1200-1440x720.webp",
    imageAlt: "A city skyline featured in architecture industry news",
  },
  {
    category: "AWARDS",
    title: "Architecture MasterPrize Recognizes Inoodex Projects with Five Awards",
    image: "/news/S_261006_N75_cropped_2400x2400-900x900.webp",
    imageAlt: "An architecture project recognized with an award",
  },
  {
    category: "PRESS",
    title: "Waterline's Responsive Design Highlighted in Dezeen",
    image: "/news/S_261109_N12_cropped_2400x2400-900x900.webp",
    imageAlt: "A contemporary building project featured in the press",
  },
  {
    category: "VIDEO",
    title: "Inoodex Architecture Film",
    image: "/images/homepage-video-poster.webp",
    imageAlt: "A contemporary waterfront building at dusk",
    video: "/video/2_Homepage_20260430.mp4",
  },
  {
    category: "VIDEO",
    title: "Movement Through Public Spaces",
    image: "/images/search-interiors.webp",
    imageAlt: "A view into a contemporary public interior",
    video: "/expertise/istockphoto-1788600834-640_adpp_is.mp4",
  },
  {
    category: "NEWS",
    title: "James von Klemperer Discusses the Trophy Office at NYU Stern",
    image: "/news/20261030_Jamie_FAIALuxury_Real_Estate_NYU_Stern_Talk-1440x720.webp",
    imageAlt: "An announcement for an architecture talk at NYU Stern",
  },
];
