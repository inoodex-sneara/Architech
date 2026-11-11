export type ExpertiseImage = {
  src: string;
  alt: string;
  category: string;
  title: string;
};

export type ExpertiseSection = {
  title: string;
  description: string;
  images: ExpertiseImage[];
};

export type ExpertiseArea = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: ExpertiseSection[];
  commitment: { title: string; description: string; graphicTitle: string; graphicYear: string };
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "sustainability",
    title: "Sustainability",
    description:
      "We employ advanced tools and best practices to minimize carbon and maximize resilience.",
    image: "/images/specialty-sustainability.png",
    imageAlt: "A contemporary residential building with planted balconies and landscaped grounds",
    intro:
      "The scale and impact of our work shape an evidence-led approach to sustainability. We bring design, materials, energy, and landscape together to support healthier buildings, more resilient communities, and a lower-carbon future.",
    sections: [
      {
        title: "Low-Carbon Design",
        description:
          "We reduce the climate impact of our projects through careful choices about energy, building systems, materials, and reuse.",
        images: [
          {
            src: "/images/Craft_Homepage-2.webp",
            alt: "A warm timber-lined interior with sculpted wood walls",
            category: "IN-DEPTH",
            title: "Material Innovation",
          },
          {
            src: "/images/Alibaba_CFD_Banner-1776197385.jpg",
            alt: "A building facade studied with airflow visualization",
            category: "TECHNOLOGY",
            title: "Environmental Analysis",
          },
          {
            src: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
            alt: "A large timber structure made from repeated components",
            category: "PROJECT",
            title: "Building with Timber",
          },
          {
            src: "/images/1849_Square1x1_Sustainability.webp",
            alt: "A native garden landscape beside a contemporary building",
            category: "LANDSCAPE",
            title: "A Living Landscape",
          },
        ],
      },
      {
        title: "Resilient Cities",
        description:
          "We consider climate, landscape, and urban systems together to help places adapt and thrive as conditions change.",
        images: [
          {
            src: "/images/Context_Homepage-1.webp",
            alt: "Contemporary architecture integrated with its surroundings",
            category: "URBAN DESIGN",
            title: "Designing in Context",
          },
          {
            src: "/images/Alibaba_CFD_Banner-1776197385.jpg",
            alt: "A building form explored with environmental analysis",
            category: "RESEARCH",
            title: "Climate and Comfort",
          },
          {
            src: "/images/search-airports.webp",
            alt: "An expansive transportation building and its surrounding site",
            category: "PROJECT",
            title: "Connected Infrastructure",
          },
          {
            src: "/images/EmoryWinship_SOM_DaveBurk_021_large-1786736969-scaled.jpg",
            alt: "A healthcare building designed around patient needs",
            category: "PROJECT",
            title: "Places for Wellbeing",
          },
        ],
      },
      {
        title: "Healthy Communities",
        description:
          "We create accessible, welcoming spaces that support wellbeing and contribute to a more sustainable and equitable future.",
        images: [
          {
            src: "/images/Community1x1_HomepageSpecialtyExpertise-scaled.webp",
            alt: "People gathering in a planted communal courtyard",
            category: "COMMUNITY",
            title: "Shared Outdoor Space",
          },
          {
            src: "/images/Emory_Stakeholder_Engagement_02-1786733892-scaled.jpg",
            alt: "Project participants gathered around a model during a design workshop",
            category: "ENGAGEMENT",
            title: "Listening and Learning",
          },
          {
            src: "/images/EMory_TWO-STORY-CARE-COMMUNITY_square-1786727402-scaled.jpg",
            alt: "A shared space designed for a healthcare community",
            category: "HEALTHCARE",
            title: "Care and Community",
          },
          {
            src: "/images/search-learning.webp",
            alt: "A welcoming building entrance beneath a glass canopy",
            category: "PUBLIC SPACE",
            title: "Welcoming Places",
          },
        ],
      },
    ],
    commitment: {
      title: "A shared responsibility",
      description:
        "Sustainability is part of every design decision. By setting clear goals, evaluating impacts, and learning from each project, we can help shape places that serve people and the planet over the long term.",
      graphicTitle: "Designing for a more resilient future",
      graphicYear: "People · Place · Planet",
    },
  },
  {
    slug: "technology",
    title: "Technology",
    description:
      "We leverage computational design and environmental analysis to develop informed design solutions.",
    image: "/images/specialty-technology-pool.png",
    imageAlt: "A contemporary house beside a swimming pool under a clear sky",
    intro:
      "We use computation, research, and emerging digital tools to make complex design questions easier to see and solve. Technology helps our teams test ideas, understand performance, and make informed decisions from early concepts through delivery.",
    sections: [
      {
        title: "Computational Design",
        description:
          "Parametric workflows help teams explore options, coordinate complex systems, and connect design intent to buildable solutions.",
        images: [
          {
            src: "/images/scout.webp",
            alt: "A color-coded computational model of a city",
            category: "RESEARCH",
            title: "Urban Systems",
          },
          {
            src: "/images/specialty-technology-green-building.png",
            alt: "A contemporary residential building with planted balconies",
            category: "PROJECT",
            title: "Integrated Architecture",
          },
          {
            src: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
            alt: "A large timber structure made from repeated components",
            category: "PROJECT",
            title: "Geometry and Craft",
          },
          {
            src: "/images/Alibaba_CFD_Banner-1776197385.jpg",
            alt: "A building facade studied with airflow visualization",
            category: "ANALYSIS",
            title: "Modeling Performance",
          },
          {
            src: "/images/SOM_Art_0029_med-1792593921.jpg",
            alt: "An architectural model displayed in an exhibition",
            category: "DESIGN",
            title: "Making Ideas Visible",
          },
        ],
      },
      {
        title: "Performance and Analysis",
        description:
          "Digital simulations let teams study daylight, energy, airflow, and comfort early enough to shape better design outcomes.",
        images: [
          {
            src: "/images/Alibaba_CFD_Banner-1776197385.jpg",
            alt: "A building form explored through computational airflow analysis",
            category: "ENVIRONMENT",
            title: "Airflow Studies",
          },
          {
            src: "/images/1849_Square1x1_Sustainability.webp",
            alt: "A planted landscape beside a contemporary workplace",
            category: "LANDSCAPE",
            title: "Landscape Performance",
          },
          {
            src: "/images/2132_1_000_N647_large-scaled.webp",
            alt: "A glass transportation terminal at dusk",
            category: "PROJECT",
            title: "Complex Environments",
          },
          {
            src: "/images/Context_Homepage-1.webp",
            alt: "A contemporary building within its urban setting",
            category: "URBAN DESIGN",
            title: "Design in Context",
          },
        ],
      },
      {
        title: "Integrated Delivery",
        description:
          "Shared digital models connect disciplines, support coordination, and help carry decisions clearly from concept to construction.",
        images: [
          {
            src: "/images/SOM_Art_0029_med-1792593921.jpg",
            alt: "A scale model used to communicate an architectural idea",
            category: "COLLABORATION",
            title: "Shared Design Tools",
          },
          {
            src: "/images/Emory_Stakeholder_Engagement_SOM_IMG_0350_large-1786733880.jpg",
            alt: "Care team members reviewing a facility plan together",
            category: "WORKSHOP",
            title: "Coordinating Perspectives",
          },
          {
            src: "/images/IBM_Sofa_Card_Crop-1784641858.webp",
            alt: "An archival furniture design drawing",
            category: "DESIGN",
            title: "From Drawing to Detail",
          },
          {
            src: "/images/search-learning.webp",
            alt: "A contemporary entrance beneath a glass canopy",
            category: "PROJECT",
            title: "Built Outcomes",
          },
        ],
      },
    ],
    commitment: {
      title: "Tools in service of better design",
      description:
        "Our technology practice is grounded in the questions each project needs to answer. We bring specialists and designers together so that analysis informs human experience, material choices, and delivery.",
      graphicTitle: "Ideas informed by data",
      graphicYear: "Research · Design · Delivery",
    },
  },
  {
    slug: "community",
    title: "Community",
    description:
      "We create buildings and spaces that are informed by and contribute to their communities.",
    image: "/images/Community1x1_HomepageSpecialtyExpertise-scaled.webp",
    imageAlt: "People gathering in a planted communal courtyard",
    intro:
      "Places work best when they reflect the people who use them. We listen to local knowledge and bring communities into the design process to create inclusive, welcoming environments that support connection and everyday life.",
    sections: [
      {
        title: "Healthy Communities",
        description:
          "We design accessible spaces that support wellbeing, make room for different needs, and help communities flourish.",
        images: [
          {
            src: "/images/Community1x1_HomepageSpecialtyExpertise-scaled.webp",
            alt: "People gathering in a planted communal courtyard",
            category: "PUBLIC SPACE",
            title: "Places to Gather",
          },
          {
            src: "/images/EmoryWinship_SOM_DaveBurk_004_large-1786727410-scaled.jpg",
            alt: "A welcoming shared space in a healthcare building",
            category: "HEALTHCARE",
            title: "Spaces for Care",
          },
          {
            src: "/images/search-learning.webp",
            alt: "A public entrance framed by a glass canopy",
            category: "EDUCATION",
            title: "Welcoming Entrances",
          },
          {
            src: "/images/EmoryWinship_SOM_DaveBurk_038-1786975474-scaled.jpg",
            alt: "A shared interior space at a cancer care center",
            category: "PROJECT",
            title: "Room for Everyone",
          },
        ],
      },
      {
        title: "Listening and Engagement",
        description:
          "Workshops, conversations, and shared design studies help turn community knowledge into meaningful project decisions.",
        images: [
          {
            src: "/images/Emory_Stakeholder_Engagement_02-1786733892-scaled.jpg",
            alt: "Participants discussing a project around a model",
            category: "WORKSHOP",
            title: "Designing Together",
          },
          {
            src: "/images/Emory_Stakeholder_Engagement_SOM_IMG_0350_large-1786733880.jpg",
            alt: "Care team members reviewing a plan together",
            category: "COLLABORATION",
            title: "Sharing Perspectives",
          },
          {
            src: "/images/SOM_Art_0029_med-1792593921.jpg",
            alt: "An architectural model presented to visitors",
            category: "EXHIBITION",
            title: "Making Ideas Tangible",
          },
          {
            src: "/images/Context_Homepage-1.webp",
            alt: "Architecture shaped by its surrounding neighborhood",
            category: "URBAN DESIGN",
            title: "Responding to Place",
          },
        ],
      },
      {
        title: "Connected Places",
        description:
          "We look beyond individual buildings to the streets, landscapes, and shared spaces that bring people together.",
        images: [
          {
            src: "/images/EMory_TWO-STORY-CARE-COMMUNITY_square-1786727402-scaled.jpg",
            alt: "A shared space planned around a healthcare community",
            category: "HEALTHCARE",
            title: "Care as a Community",
          },
          {
            src: "/images/1849_Square1x1_Sustainability.webp",
            alt: "A landscaped path alongside a contemporary building",
            category: "LANDSCAPE",
            title: "Nature in Daily Life",
          },
          {
            src: "/images/search-airports.webp",
            alt: "A major transportation hub connected to its wider city",
            category: "INFRASTRUCTURE",
            title: "Shared Connections",
          },
          {
            src: "/images/EmoryWinship_SOM_DaveBurk_021_large-1786736969-scaled.jpg",
            alt: "A healthcare facility supporting patients and visitors",
            category: "PROJECT",
            title: "Places That Support Healing",
          },
        ],
      },
    ],
    commitment: {
      title: "Design shaped by people",
      description:
        "Community-centered design is an ongoing exchange. By listening, testing ideas together, and making access a priority, we can create places that feel relevant, useful, and welcoming over time.",
      graphicTitle: "Better places, made together",
      graphicYear: "Listen · Include · Connect",
    },
  },
];

export function getExpertiseArea(slug: string) {
  return expertiseAreas.find((area) => area.slug === slug);
}
