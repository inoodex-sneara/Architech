export type Story = {
  slug: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  detailImage?: { src: string; alt: string; caption: string };
  detailGallery?: {
    heading: string;
    paragraphs: string[];
    images: { src: string; alt: string; caption: string }[];
  };
  title: string;
  summary: string;
  topics: string[];
  keyPoints: { title: string; description: string }[];
  paragraphs: string[];
};

export function getTopicSlug(topic: string) {
  return topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const stories: Story[] = [
  {
    slug: "craft-computation-and-a-new-way-to-build",
    category: "IN-DEPTH",
    date: "2026-11-10",
    image: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
    imageAlt: "A sweeping timber structure revealing its intricate design",
    detailImage: {
      src: "/images/Craft_Homepage-2.webp",
      alt: "A warm timber-lined interior with sculpted wood walls",
      caption: "Material and craft shape the experience of an interior.",
    },
    detailGallery: {
      heading: "How do material and technology shape the design?",
      paragraphs: [
        "The design process brings hands-on material thinking together with digital studies. By testing how repeated timber elements meet and fit together, the team can refine the form while keeping construction and craft in view.",
      ],
      images: [
        {
          src: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
          alt: "Timber components forming a repeating architectural structure",
          caption: "A study in timber structure and repetition.",
        },
        {
          src: "/images/Context_Homepage-1.webp",
          alt: "A contemporary building viewed in its urban setting",
          caption: "Architecture connects material choices to place.",
        },
      ],
    },
    title: "Craft, computation, and a new way to build",
    summary:
      "A closer look at how material, geometry, and careful design thinking can come together in expressive architecture.",
    topics: ["Timber", "Design technology", "Making"],
    keyPoints: [
      {
        title: "Material leads the idea",
        description:
          "The character of timber shapes both the structure and the experience of the space.",
      },
      {
        title: "Think in connected parts",
        description:
          "Repeated components work together as one legible architectural system.",
      },
      {
        title: "Tools support craft",
        description:
          "Digital studies help refine the design while keeping construction in view.",
      },
    ],
    paragraphs: [
      "Architecture begins with curiosity: about a place, the people who will use it, and the materials that can give an idea form. When these questions are considered together, the process of making becomes part of the design itself.",
      "This timber structure explores how individual pieces can work as a larger, connected system. The repeating elements create rhythm and shade, while their changing angles give the surface a sense of movement.",
      "Digital tools help designers study the relationship between each component and the whole. They make it possible to test many arrangements, refine connections, and carry a clear idea from an early study toward a buildable solution.",
      "The geometry has to work at more than one scale. From a distance, the structure needs to read as a coherent whole; up close, each joint and repeated member must make sense as something that can be fabricated, transported, and assembled. Studying those scales together helps keep the visual idea connected to the realities of building.",
      "Material choice also influences the atmosphere of a space. Timber brings variation in color and grain, and its surface can make a large interior feel more tactile and welcoming. Its performance depends on careful detailing, however, including how members connect and how the material is protected over time.",
      "The most useful digital model is therefore not simply a final picture. It is a working tool for asking questions, comparing options, and sharing decisions across design and construction teams. That exchange allows precision and hands-on knowledge to reinforce one another.",
      "The result is not technology for its own sake. It is an architecture where the logic of how something is made contributes to the experience of being there.",
    ],
  },
  {
    slug: "a-simple-sketch-and-a-lasting-idea",
    category: "DESIGN",
    date: "2026-11-03",
    image: "/images/IBM_Sofa_Card_Crop-1784641858.webp",
    imageAlt: "An archival furniture design drawing",
    detailImage: {
      src: "/images/search-interiors.webp",
      alt: "A sculptural interior with layered forms and openings",
      caption: "Considering objects in the spaces people use.",
    },
    detailGallery: {
      heading: "How does a first sketch become part of everyday life?",
      paragraphs: [
        "Designers test an idea against the way people sit, move, and gather. Comparing drawings, materials, and full-scale details helps turn an early concept into a useful object that belongs naturally in its surroundings.",
      ],
      images: [
        {
          src: "/images/IBM_Sofa_Card_Crop-1784641858.webp",
          alt: "An archival furniture design drawing",
          caption: "An early study for an everyday object.",
        },
        {
          src: "/images/Context_Homepage-1.webp",
          alt: "A contemporary building viewed in its urban setting",
          caption: "Design ideas are shaped by the spaces around them.",
        },
      ],
    },
    title: "Where a simple sketch becomes a lasting idea",
    summary:
      "Design often starts with a small observation. A drawing can capture the first step toward an object made to serve everyday life.",
    topics: ["Furniture", "Design process", "Everyday life"],
    keyPoints: [
      {
        title: "Start with a question",
        description:
          "Early sketches make room to explore proportion, comfort, and use.",
      },
      {
        title: "Refine through making",
        description:
          "Material and construction choices turn an initial thought into a useful object.",
      },
      {
        title: "Design for daily life",
        description:
          "The most lasting ideas make ordinary routines feel more considered.",
      },
    ],
    paragraphs: [
      "A sketch is a way to ask a question. It lets designers explore proportion, use, and construction before a solution is fixed, leaving room for new ideas to emerge.",
      "Furniture design brings these questions close to the human scale. The height of a seat, the curve of a back, and the choice of material all shape how an object feels and how naturally it fits into a room.",
      "Looking back at early drawings reveals a process of testing and refinement. Each line records a decision, while the finished concept depends on balancing comfort, clarity, and the practical details of making.",
      "A drawing can hold several possibilities at once. Designers may compare different proportions, adjust the relationship between a seat and its frame, or explore how a piece might be used in more than one setting. These small changes are easier to consider before materials and production methods are fixed.",
      "The move from paper to object brings new questions. A promising outline must be tested for stability, comfort, and durability, while joints and surfaces need to work in everyday use. Prototypes help reveal where an idea needs to change and where its original simplicity should be preserved.",
      "A lasting design is not defined by appearance alone. It earns its place through repeated use: by feeling intuitive, holding up over time, and fitting comfortably into a range of daily routines. That is how an initial sketch can continue to matter long after the drawing is complete.",
      "That attention to ordinary moments is what gives a good idea its staying power. It becomes part of the spaces and routines people return to every day.",
    ],
  },
  {
    slug: "art-engineering-and-shared-spaces",
    category: "CULTURE",
    date: "2026-10-28",
    image: "/images/SOM_Art_0029_med-1792593921.jpg",
    imageAlt: "A model displayed within an architecture exhibition",
    detailImage: {
      src: "/images/search-learning.webp",
      alt: "A contemporary building entrance beneath a glass canopy",
      caption: "Architecture can make ideas tangible in shared spaces.",
    },
    detailGallery: {
      heading: "How can people understand a design before it is built?",
      paragraphs: [
        "Models, drawings, and material studies make a proposal easier to explore from different viewpoints. Sharing these pieces together gives teams and visitors a clearer way to discuss how a place could work and feel.",
      ],
      images: [
        {
          src: "/images/SOM_Art_0029_med-1792593921.jpg",
          alt: "An architectural model presented in an exhibition",
          caption: "A model invites people to examine a design up close.",
        },
        {
          src: "/images/Context_Homepage-1.webp",
          alt: "An architectural view that places a design in context",
          caption: "Considering architecture in its wider setting.",
        },
      ],
    },
    title: "The art and engineering behind great spaces",
    summary:
      "Models and material studies make design ideas tangible, helping teams and communities imagine a place before it is built.",
    topics: ["Architecture", "Exhibition", "Collaboration"],
    keyPoints: [
      {
        title: "Make ideas tangible",
        description:
          "Models help people understand a proposal from more than one point of view.",
      },
      {
        title: "Connect disciplines",
        description:
          "Structure, light, circulation, and materials shape a shared design conversation.",
      },
      {
        title: "Invite perspectives",
        description:
          "Sharing work in progress helps a wider group contribute to the outcome.",
      },
    ],
    paragraphs: [
      "An architectural model is both an object and a conversation. It turns a plan into something people can gather around, examine, and understand from different points of view.",
      "The process brings creative and technical thinking together. Structure, light, circulation, and material are considered as connected parts of the same experience rather than isolated decisions.",
      "Exhibitions offer another way to share that process. Drawings, samples, and models show how a design changes over time and make the work behind a finished space more visible.",
      "A physical model makes relationships easier to discuss. People can look across a plan, trace a route, or compare the scale of rooms without needing to interpret technical drawings first. Different representations each reveal something different, so models are most useful alongside images, plans, and material samples.",
      "The exchange between disciplines is equally important. An idea about daylight may affect the facade; a structural decision can change the shape of a room; and circulation influences how people meet or move through a building. Bringing these questions into one conversation helps teams understand the consequences of individual choices.",
      "An exhibition can make that collaboration visible to a wider audience. Showing studies as well as finished work communicates that design is a process of inquiry and revision. It gives visitors a way to ask questions and see how many connected decisions contribute to a shared place.",
      "When ideas are shared early, a wider range of perspectives can help shape the outcome. The result is a design process rooted in both imagination and collaboration.",
    ],
  },
  {
    slug: "places-that-support-healing",
    category: "PROJECT",
    date: "2026-08-18",
    image: "/images/EmoryWinship_SOM_DaveBurk_021_large-1786736969-scaled.jpg",
    imageAlt: "The Emory Winship cancer care building in Atlanta",
    detailImage: {
      src: "/images/EmoryWinship_SOM_DaveBurk_004_large-1786727410-scaled.jpg",
      alt: "An additional view of the Winship Cancer Institute",
      caption: "A welcoming space at the Winship Cancer Institute.",
    },
    detailGallery: {
      heading:
        "How did the team bring many perspectives into the design?",
      paragraphs: [
        "Patients, clinicians, care partners, and project teams shared their perspectives on how a cancer care facility could better support the patient journey. Using models and collaborative planning sessions, participants explored options and helped shape a more connected care environment.",
      ],
      images: [
        {
          src: "/images/Emory_Stakeholder_Engagement_02-1786733892-scaled.jpg",
          alt: "Project participants gathered around a model during a design workshop",
          caption: "© SOM",
        },
        {
          src: "/images/Emory_Stakeholder_Engagement_SOM_IMG_0350_large-1786733880.jpg",
          alt: "Care team members reviewing a facility plan together",
          caption: "© SOM",
        },
      ],
    },
    title: "Creating places that support healing",
    summary:
      "Thoughtful healthcare environments can make complex visits feel clearer, calmer, and more connected for patients and care teams.",
    topics: ["Healthcare", "Patient experience", "Community"],
    keyPoints: [
      {
        title: "Make arrival feel clear",
        description:
          "A welcoming entrance and easy-to-read routes help orient patients and visitors.",
      },
      {
        title: "Support moments between care",
        description:
          "Comfortable shared spaces give patients and families room to pause.",
      },
      {
        title: "Bring teams together",
        description:
          "A connected environment can support communication across care teams.",
      },
    ],
    paragraphs: [
      "A healthcare visit can involve many people, conversations, and steps. The spaces between appointments matter too: they affect how patients find their way, where families can pause, and how care teams work together.",
      "A welcoming entrance can set a more reassuring tone from the start. Clear routes, comfortable waiting areas, and access to daylight help make a large building easier to navigate and more humane to experience.",
      "At the Winship Cancer Institute, shared spaces bring patients, visitors, and staff into a carefully considered setting. Material warmth and views outward help balance the scale and activity of a major medical center.",
      "Good wayfinding begins before a visitor has to ask for help. A clear sequence from arrival to reception and onward to care areas can reduce uncertainty, especially for people managing stress, fatigue, or unfamiliar appointments. Landmarks, sightlines, and consistent signs all contribute to that sense of orientation.",
      "Waiting areas also serve different needs. Some visitors may want a quiet place to pause, while others need to stay close to family or speak privately with a care team. A range of seating and shared spaces can support these moments without making the building feel difficult to understand.",
      "For staff, the relationship between clinical and shared areas matters too. Thoughtful adjacencies can support communication and make daily work more direct, while still protecting privacy. Considering patients, families, and care teams together helps the building respond to the full experience of care.",
      "Good healthcare design supports the work of care without overwhelming the people who come there. It brings practical needs and a sense of dignity into the same environment.",
    ],
  },
  {
    slug: "designing-for-movement-and-change",
    category: "IN-DEPTH",
    date: "2026-04-22",
    image: "/images/Alibaba_CFD_Banner-1776197385.jpg",
    imageAlt: "A contemporary building facade explored through flowing lines",
    detailImage: {
      src: "/images/2132_1_000_N647_large-scaled.webp",
      alt: "A large glass terminal facade at dusk",
      caption: "A building envelope responds to its environment.",
    },
    detailGallery: {
      heading: "How can a building respond to its climate?",
      paragraphs: [
        "The team studies how sunlight, wind, and orientation affect the building throughout the day. Comparing environmental analysis with facade and material options helps connect performance goals to a comfortable experience inside.",
      ],
      images: [
        {
          src: "/images/Alibaba_CFD_Banner-1776197385.jpg",
          alt: "A building facade explored through environmental design",
          caption: "Studying how a building envelope meets its surroundings.",
        },
        {
          src: "/images/Context_Homepage-1.webp",
          alt: "An architectural view illustrating a building in context",
          caption: "Design decisions begin with the conditions of a place.",
        },
      ],
    },
    title: "Designing for movement, climate, and change",
    summary:
      "The building envelope is an opportunity to respond to sun, wind, and the changing needs of the people inside.",
    topics: ["Building envelope", "Climate", "Performance"],
    keyPoints: [
      {
        title: "Respond to the site",
        description:
          "Orientation and depth can help a facade work with local light and weather.",
      },
      {
        title: "Test early",
        description:
          "Environmental studies connect performance goals to the experience inside.",
      },
      {
        title: "Plan for change",
        description:
          "Durable details help a building remain useful as needs evolve.",
      },
    ],
    paragraphs: [
      "A facade does more than define how a building looks. Its depth, orientation, and material can shape daylight, reduce unwanted heat, and create a more comfortable relationship between inside and out.",
      "Design teams use environmental analysis to understand how a building responds to its local conditions. Testing different approaches early helps connect performance goals with the experience of the street and the rooms beyond.",
      "Those studies can lead to expressive forms, but the form is only one part of the story. Long-term performance also depends on durable materials, thoughtful detailing, and a building that can adapt as needs change.",
      "Sunlight changes throughout the day and across the seasons, so a facade has to balance access to daylight with glare and heat gain. Orientation, shading, glazing, and the depth of exterior elements can all be tested together to understand how they affect the rooms inside.",
      "Air movement is another part of the building's relationship with its surroundings. Understanding local wind conditions can inform entrances, outdoor areas, and the experience at street level. These studies are most valuable when they are considered alongside how people will use the building, not as isolated technical targets.",
      "Performance continues after construction. Durable materials, accessible maintenance, and adaptable systems can help a building remain comfortable as weather patterns and user needs evolve. Designing for change means considering how the envelope can be cared for and updated over its life.",
      "When these considerations are brought together, the facade becomes an active part of the architecture: a layer that responds to its surroundings and supports the life of the building.",
    ],
  },
];
