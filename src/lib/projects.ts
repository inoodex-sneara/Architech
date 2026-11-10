export const projectTypes = [
  "ALL",
  "WORKPLACE",
  "HEALTHCARE",
  "EDUCATION",
  "CULTURE",
  "INFRASTRUCTURE",
  "RESIDENTIAL",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export type Project = {
  title: string;
  location: string;
  type: Exclude<ProjectType, "ALL">;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Dhaka Learning Commons",
    location: "Dhaka, Bangladesh",
    type: "EDUCATION",
    image: "/expertise/2987_HKUST-opening_1x1_v2c-Zhangchao-540x540.webp",
    imageAlt: "A contemporary campus building framed by landscaped courtyards",
  },
  {
    title: "Chattogram Medical Centre",
    location: "Chattogram, Bangladesh",
    type: "HEALTHCARE",
    image: "/images/EmoryWinship_SOM_DaveBurk_021_large-1786736969-scaled.jpg",
    imageAlt: "A calm, daylit healthcare waiting space with city views",
  },
  {
    title: "Gulshan Innovation House",
    location: "Dhaka, Bangladesh",
    type: "WORKPLACE",
    image: "/expertise/3033_Meta_Square.webp",
    imageAlt: "A welcoming workplace terrace with planting and outdoor seating",
  },
  {
    title: "Cox's Bazar Coastal Residences",
    location: "Cox's Bazar, Bangladesh",
    type: "RESIDENTIAL",
    image: "/expertise/2656_1_000_N312_large-540x540.webp",
    imageAlt: "A contemporary residential tower rising above a city street",
  },
  {
    title: "Rajshahi Cultural Pavilion",
    location: "Rajshahi, Bangladesh",
    type: "CULTURE",
    image: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
    imageAlt: "A sculptural timber structure with a repeating geometric pattern",
  },
  {
    title: "Dhaka Transit Terminal",
    location: "Dhaka, Bangladesh",
    type: "INFRASTRUCTURE",
    image: "/images/search-airports.webp",
    imageAlt: "A spacious contemporary transport terminal",
  },
  {
    title: "Sylhet Learning Campus",
    location: "Sylhet, Bangladesh",
    type: "EDUCATION",
    image: "/images/search-learning.webp",
    imageAlt: "A light-filled entrance to a contemporary learning space",
  },
  {
    title: "Old Dhaka Arts Centre",
    location: "Dhaka, Bangladesh",
    type: "CULTURE",
    image: "/images/SOM_Art_0029_med-1792593921.jpg",
    imageAlt: "An architectural model displayed in a gallery",
  },
  {
    title: "Khulna Green Workplace",
    location: "Khulna, Bangladesh",
    type: "WORKPLACE",
    image: "/images/1849_Square1x1_Sustainability.webp",
    imageAlt: "A landscaped garden beside a contemporary workplace",
  },
  {
    title: "Chattogram Urban Gateway",
    location: "Chattogram, Bangladesh",
    type: "INFRASTRUCTURE",
    image: "/images/Alibaba_CFD_Banner-1776197385.jpg",
    imageAlt: "A contemporary high-rise building in a city setting",
  },
  {
    title: "Bashundhara Courtyard Homes",
    location: "Dhaka, Bangladesh",
    type: "RESIDENTIAL",
    image: "/images/Context_Homepage-1.webp",
    imageAlt: "A contemporary residential building set among green courtyards",
  },
  {
    title: "Barishal Community Health Centre",
    location: "Barishal, Bangladesh",
    type: "HEALTHCARE",
    image: "/images/EMory_TWO-STORY-CARE-COMMUNITY_square-1786727402-scaled.jpg",
    imageAlt: "A shared, welcoming space within a healthcare centre",
  },
];
