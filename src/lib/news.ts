export type NewsCategory =
  | "AWARDS"
  | "IN-DEPTH"
  | "NEWS"
  | "PRESS"
  | "PRESS RELEASES"
  | "VIDEO";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  title: string;
  date: string;
  author: string;
  publication: string;
  readTime: string;
  summary: string;
  image: string;
  imageAlt: string;
  video?: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  keyTakeaways?: string[];
  secondaryImage?: {
    src: string;
    alt: string;
    caption: string;
  };
  tags?: string[];
};

export const newsCategories: ("ALL" | NewsCategory)[] = [
  "ALL",
  "AWARDS",
  "IN-DEPTH",
  "PRESS",
  "PRESS RELEASES",
  "VIDEO",
];

export const featuredNewsItem: NewsItem = {
  slug: "inoodex-named-architecture-firm-of-the-year",
  category: "AWARDS",
  title: "Inoodex Named Architecture Firm of the Year",
  date: "November 2026",
  author: "Editorial Board",
  publication: "World Architecture & South Asian Design Forum",
  readTime: "4 min read",
  summary:
    "Recognized for groundbreaking contributions to sustainable design, computational facade innovation, and community-led public architecture across Bangladesh and South Asia.",
  image: "/images/S_260721_cropped_2400x1200-1440x720.webp",
  imageAlt: "The Inoodex team gathered above the city skyline",
  paragraphs: [
    "Inoodex has been honored with the prestigious Architecture Firm of the Year award at the 2026 South Asian Design Excellence Summit. The jury cited the studio's decade-long dedication to contextual modernism, low-carbon structural engineering, and responsive climate facades tailored to tropical deltas.",
    "Over the past three years, Inoodex has delivered landmark civic, commercial, and residential projects that bridge vernacular Bangladeshi craftsmanship with advanced computational simulations. Notable among these are the Anwar Landmark Tower, the Sanmar Horizon headquarters, and multiple resilient healthcare facilities.",
    "Accepting the award on behalf of the studio, the founding partners emphasized that this accolade belongs to the collective team of architects, urban planners, structural engineers, and skilled local craftspeople who turn ambitious concepts into enduring reality.",
    "As cities across the Global South confront rapid urbanization and rising climatic volatility, Inoodex continues to pioneer regenerative spatial models that foster social cohesion while reducing embodied carbon across every building's complete lifecycle.",
  ],
  quote: {
    text: "Architecture is not merely about shaping silhouettes against the horizon; it is an ethical commitment to the living ecologies and human communities that inhabit them.",
    author: "Tariqul Islam",
    role: "Principal & Design Director, Inoodex",
  },
  keyTakeaways: [
    "Recognized for excellence in bioclimatic architecture and net-zero operational milestones.",
    "Honored for integrating local terra-cotta, timber, and recycled aggregate with computational fluid dynamics (CFD).",
    "Celebrated for community-led public realm interventions across Dhaka, Chattogram, and Sylhet.",
  ],
  secondaryImage: {
    src: "/images/specialty-sustainability.png",
    alt: "Bioclimatic facade integration with vertical greenery",
    caption: "Passive ventilation and thermal envelope modeling at Inoodex's urban research laboratory.",
  },
  tags: ["Sustainability", "Awards", "Urbanism", "Innovation", "Dhaka"],
};

export const newsItems: NewsItem[] = [
  featuredNewsItem,
  {
    slug: "architizer-recognizes-inoodex-leader-sustainable-architecture",
    category: "PRESS",
    title: "Architizer Recognizes Inoodex as a Leader in Sustainable Architecture",
    date: "November 2026",
    author: "Architizer Features",
    publication: "Architizer",
    readTime: "3 min read",
    summary:
      "Global architectural journal Architizer features Inoodex's proprietary passive cooling methodologies and regional material innovations.",
    image: "/news/3095_1_000_N401_cropped_2400x2400-900x900.webp",
    imageAlt: "A contemporary building featured in a sustainability story",
    paragraphs: [
      "In a dedicated editorial feature published this week, Architizer spotlighted Inoodex's radical approach to passive building envelopes in sub-tropical climates. The article examines how the studio combines centuries-old courtyard ventilation wisdom with modern parametric perforated shading screens.",
      "By conducting microclimate simulations at early concept stages, Inoodex reduces daytime air-conditioning reliance by up to 38 percent across residential high-rises in Dhaka. This methodology has drawn international attention for its affordability and replicability.",
      "The profile also highlights Inoodex's material supply chain, which prioritizes locally sourced clay bricks, non-toxic lime plasters, and FSC-certified bamboo laminates over energy-intensive imported glass curtain walls.",
    ],
    quote: {
      text: "Inoodex proves that sustainable architecture in high-density delta cities does not require exorbitant budgets—it requires uncompromising ecological rigor and spatial intelligence.",
      author: "Elena Rostova",
      role: "Senior Architecture Critic, Architizer",
    },
    keyTakeaways: [
      "38% reduction in HVAC loads through parametric solar chimneys and wind scoops.",
      "Hyper-local material sourcing reduces embodied carbon by 42%.",
      "Featured across Architizer's global sustainable architecture monograph.",
    ],
    tags: ["Sustainability", "Passive Design", "Architizer", "Materials"],
  },
  {
    slug: "carlos-cerezo-davila-financial-times-climate-resilient-cities",
    category: "PRESS",
    title:
      "Carlos Cerezo Davila Speaks to the Financial Times about Building Climate-Resilient Cities",
    date: "October 2026",
    author: "Financial Times Architecture",
    publication: "Financial Times",
    readTime: "5 min read",
    summary:
      "An in-depth dialogue on mitigating urban heat island effects, monsoon flash floods, and sea-level surges in vulnerable delta megacities.",
    image: "/news/2867_1_000_N1597_cropped_2400x2400-900x900.webp",
    imageAlt: "An aerial view of a city and its surrounding neighborhoods",
    paragraphs: [
      "Speaking with the Financial Times' urban affairs correspondent, Inoodex collaborator Carlos Cerezo Davila outlined actionable urban design protocols for delta cities facing climate extremes.",
      "The interview focused on urban hydrology and the need to restore historic canals, wetlands, and permeable ground planes rather than encasing riverfronts in hard concrete seawalls. Cerezo Davila shared case studies from Inoodex's master planning projects across South Asia.",
      "The discussion also tackled the economics of climate resilience, demonstrating that proactive green infrastructure investments yield three-fold returns in reduced flood damages, healthcare savings, and property value appreciation.",
    ],
    quote: {
      text: "When dealing with water in delta cities, we must stop resisting nature and start designing with its natural tidal rhythms.",
      author: "Carlos Cerezo Davila",
      role: "Urban Resilience Strategist & Inoodex Advisor",
    },
    keyTakeaways: [
      "Replacing impervious surfaces with retention swales and native riparian buffers.",
      "Decentralized stormwater filtration integrated into civic public plazas.",
      "Economic modeling demonstrating 300% ROI on nature-based urban defense systems.",
    ],
    tags: ["Climate Resilience", "Urban Planning", "Financial Times", "Hydrology"],
  },
  {
    slug: "carlos-cerezo-davila-digital-decarbonization-tools",
    category: "PRESS",
    title:
      "Carlos Cerezo Davila Co-Authors a Feature on Digital Decarbonization Tools",
    date: "October 2026",
    author: "Oculus Journal",
    publication: "Oculus Architectural Quarterly",
    readTime: "4 min read",
    summary:
      "New computational tools empower architects to analyze operational and embodied carbon within early design phases before breaking ground.",
    image: "/news/Carlos_Oculus_Feature_2400-x-2400-900x900.webp",
    imageAlt: "A feature card about digital tools for decarbonization",
    paragraphs: [
      "In the latest volume of Oculus Quarterly, Carlos Cerezo Davila and the Inoodex computational research team published their findings on automated carbon accounting plugins embedded inside BIM and Rhino workflows.",
      "The publication outlines how Inoodex's custom digital tools calculate real-time embodied carbon metrics as architects adjust massing models, slab thicknesses, and facade glazing ratios.",
      "This rapid feedback loop allows design teams to evaluate hundreds of structural options in hours, targeting low-carbon concrete mixes and mass timber alternatives before client presentations.",
    ],
    quote: {
      text: "Real-time carbon simulation transforms sustainability from an afterthought audit into a primary generative design driver.",
      author: "Inoodex Computational Research Lab",
      role: "White Paper Abstract",
    },
    keyTakeaways: [
      "Custom Grasshopper and Revit scripts tracking kilograms of CO2 equivalent in real time.",
      "Designers can benchmark 50+ structural schemes in a single design sprint.",
      "Open-source release planned for university architecture programs.",
    ],
    tags: ["Technology", "Decarbonization", "BIM", "Computational Design"],
  },
  {
    slug: "tp-link-lxd-tcc-daka-rrrc-an-best-of-design-award",
    category: "AWARDS",
    title: "TP-LINK LXD and TCC DAKA RRRC Win an AN Best of Design Award",
    date: "September 2026",
    author: "Staff Reporter",
    publication: "The Architect's Newspaper",
    readTime: "3 min read",
    summary:
      "The prestigious AN Best of Design Awards celebrate the tech-campus innovation and adaptive community infrastructure designed by Inoodex.",
    image: "/news/2970_1_000_N615_cropped_2400x2400-900x900.webp",
    imageAlt: "An award-winning contemporary architecture project",
    paragraphs: [
      "The Architect's Newspaper announced the winners of its annual Best of Design Awards, recognizing Inoodex in the Commercial Campus category for the TP-LINK LXD and TCC DAKA RRRC complexes.",
      "The jury commended the scheme for its bold geometric massing, which incorporates stepped garden terraces, deep sun louvers, and expansive collaborative atriums designed to foster spontaneous interdisciplinary interaction.",
      "The complex achieved a LEED Platinum rating by combining a high-performance double-skin facade, rooftop photovoltaic arrays, and an on-site greywater recycling plant that irrigates 15,000 square meters of native landscaping.",
    ],
    keyTakeaways: [
      "Awarded in the Commercial & Campus Category by The Architect's Newspaper.",
      "LEED Platinum certified with 45% operational energy reductions.",
      "Integrated rooftop photovoltaic canopy providing 28% of base building power.",
    ],
    tags: ["Awards", "Commercial", "LEED Platinum", "Innovation"],
  },
  {
    slug: "john-bushell-retrofit-adaptive-reuse",
    category: "PRESS",
    title: "John Bushell Shares Inoodex's Approach to Retrofit and Adaptive Reuse",
    date: "September 2026",
    author: "Architectural Record",
    publication: "Architectural Record",
    readTime: "5 min read",
    summary:
      "Why preserving existing concrete frames and historic masonry is the most impactful carbon reduction strategy for modern cities.",
    image: "/news/3588_1_000_N71_cropped_2400x2400-900x900.webp",
    imageAlt: "A discussion about adaptive reuse and building design",
    paragraphs: [
      "In a widely shared commentary for Architectural Record, John Bushell discussed Inoodex's specialized methodology for retrofitting aging mid-century commercial towers into high-performance contemporary workspaces.",
      "Bushell argued that the greenest building is always the one that already exists. By non-destructively assessing existing structural frames, Inoodex salvages up to 70 percent of a structure's embodied carbon.",
      "The article illustrates how new high-efficiency mechanical cores, daylight-harvesting facades, and biophilic interior atriums can rejuvenate obsolete buildings without the waste and disruption of demolition.",
    ],
    quote: {
      text: "The greenest building is the one that is already built. Our duty is to give historic frameworks new life and contemporary purpose.",
      author: "John Bushell",
      role: "Director of Adaptive Reuse, Inoodex",
    },
    keyTakeaways: [
      "Retaining 70% of embodied carbon through structural preservation.",
      "Thermal modernization of envelopes reducing operating emissions by 50%.",
      "Economic delivery 30% faster than demolition and complete rebuilds.",
    ],
    tags: ["Adaptive Reuse", "Retrofit", "Circular Economy", "Heritage"],
  },
  {
    slug: "mustafa-chehabeddine-equitable-city-building-oxford",
    category: "IN-DEPTH",
    title:
      "Mustafa Chehabeddine Discusses Equitable City-Building with University of Oxford Students",
    date: "August 2026",
    author: "Oxford Urban Studies",
    publication: "University of Oxford Lectures",
    readTime: "6 min read",
    summary:
      "A guest lecture on spatial justice, democratic streetscapes, and designing inclusive public spaces in rapidly densifying global metropolises.",
    image: "/news/2607_1_000_N172_cropped_2400x2400-900x900.webp",
    imageAlt: "Students and designers discussing a city-building model",
    paragraphs: [
      "During a week-long symposium at the University of Oxford, Mustafa Chehabeddine delivered a keynote on equitable urbanism, sharing Inoodex's ground-up participatory design frameworks.",
      "The lecture explored how architecture firms can democratize master planning by actively engaging street vendors, local residents, children, and transit workers in design workshops prior to finalizing urban schemes.",
      "Students participated in hands-on design charettes, testing Inoodex's modular public street furniture and micro-green lung interventions designed for congested urban corridors.",
    ],
    quote: {
      text: "A city's greatness is measured not by its tallest skyscrapers, but by how welcoming, dignified, and safe its public sidewalks are for every citizen.",
      author: "Mustafa Chehabeddine",
      role: "Partner & Head of Urban Frameworks, Inoodex",
    },
    keyTakeaways: [
      "Participatory planning workshops involving hundreds of neighborhood stakeholders.",
      "Micro-pocket parks and shaded pedestrian corridors prioritizing non-motorized transit.",
      "Universal accessibility standards applied across all civic infrastructure projects.",
    ],
    tags: ["In-Depth", "Urban Planning", "Civic Design", "Education"],
  },
  {
    slug: "inoodex-aec-tech-nyc-annual-conference-2026",
    category: "PRESS RELEASES",
    title: "Inoodex Presents at AEC Tech NYC Annual Conference 2026",
    date: "July 2026",
    author: "Corporate Communications",
    publication: "AEC Tech Press Room",
    readTime: "3 min read",
    summary:
      "Inoodex's digital engineering division demonstrated proprietary AI-assisted generative layout engines at the premier AEC tech gathering in New York.",
    image: "/news/AEC_Tech_2400-x-2400-1-900x900.webp",
    imageAlt: "Conference information for AEC Tech NYC",
    paragraphs: [
      "Inoodex presented its latest breakthroughs in generative space optimization at the 14th Annual AEC Tech Conference held in New York City.",
      "The presentation showcased algorithms developed in-house that balance daylight penetration, acoustics, structural efficiency, and circulation paths simultaneously, producing balanced architectural floorplates in minutes.",
      "Industry leaders and computational architects praised the studio's practical application of AI, highlighting its real-world integration into several completed healthcare and laboratory projects.",
    ],
    keyTakeaways: [
      "Multi-objective algorithmic space planning demonstrated live on stage.",
      "Real-world case studies in complex hospital floorplate routing.",
      "Collaboration announced with leading computational geometry research centers.",
    ],
    tags: ["Press Release", "Technology", "AEC Tech", "Generative Design"],
  },
  {
    slug: "inoodex-tops-architizers-best-architecture-design-firms",
    category: "AWARDS",
    title: "Inoodex Tops Architizer's List of the Best Architecture and Design Firms",
    date: "June 2026",
    author: "Architizer Editorial",
    publication: "Architizer A+Awards",
    readTime: "4 min read",
    summary:
      "Architizer names Inoodex among the global top 10 architecture practices for responsive environmental design and urban innovation.",
    image: "/news/2939_1_000_N652_cropped_2400x1200-1440x720.webp",
    imageAlt: "A city skyline featured in architecture industry news",
    paragraphs: [
      "Architizer has ranked Inoodex among the world's most innovative architectural practices in its 2026 Global Firm Index, acknowledging the firm's prolific and impactful portfolio across Asia.",
      "The editorial committee commended Inoodex for redefining South Asian urban typologies, marrying progressive structural engineering with deep climatic empathy.",
      "With over forty completed landmark projects in the region, Inoodex was applauded for showing that high-density urban developments can be ecological, humanistic, and commercially viable.",
    ],
    keyTakeaways: [
      "Ranked #1 in South Asia for sustainable high-density residential and commercial typologies.",
      "Over 45 completed landmarks evaluated across design quality, community impact, and performance.",
      "Jury highlighted Inoodex's signature terracotta rainscreen envelope systems.",
    ],
    tags: ["Awards", "Global Rankings", "Architizer", "Architecture"],
  },
  {
    slug: "architecture-masterprize-recognizes-inoodex-five-awards",
    category: "AWARDS",
    title: "Architecture MasterPrize Recognizes Inoodex Projects with Five Awards",
    date: "May 2026",
    author: "Awards Committee",
    publication: "Architecture MasterPrize (AMP)",
    readTime: "4 min read",
    summary:
      "Five distinct Inoodex projects claim honors across healthcare, commercial high-rise, residential, and landscape architecture categories.",
    image: "/news/S_261006_N75_cropped_2400x2400-900x900.webp",
    imageAlt: "An architecture project recognized with an award",
    paragraphs: [
      "The Architecture MasterPrize (AMP) jury unveiled its 2026 winners, honoring Inoodex with five distinct accolades celebrating excellence in architecture, interior architecture, and landscape design.",
      "Winning projects included the National Kidney Foundation Specialist Hospital for Healthcare Architecture, Sanmar Tower for Commercial High-Rise, and the Gulshan Lake Biophilic Promenade for Landscape Urbanism.",
      "The international panel of judges praised the cohesive material language, precision detailing, and biophilic integration evident across all submissions.",
    ],
    keyTakeaways: [
      "5 AMP Awards spanning Healthcare, High-Rise, Landscape, and Green Architecture.",
      "Highest rating awarded to the Kidney Foundation Hospital for patient healing garden integration.",
      "Celebrated during the annual gala at the Guggenheim Museum Bilbao.",
    ],
    tags: ["Awards", "MasterPrize", "Healthcare", "Commercial", "Landscape"],
  },
  {
    slug: "waterlines-responsive-design-highlighted-in-dezeen",
    category: "PRESS",
    title: "Waterline's Responsive Design Highlighted in Dezeen",
    date: "April 2026",
    author: "Natasha Levy",
    publication: "Dezeen Magazine",
    readTime: "5 min read",
    summary:
      "Dezeen explores the dynamic kinetics and tidal flood adaptation of Inoodex's coastal waterfront pavilion.",
    image: "/news/S_261109_N12_cropped_2400x2400-900x900.webp",
    imageAlt: "A contemporary building project featured in the press",
    paragraphs: [
      "Leading architecture and design publication Dezeen published an extensive retrospective on Inoodex's Waterline project, exploring how its floating promenade and kinetic facade react to coastal weather patterns.",
      "Constructed using corrosion-resistant marine timber and recycled aluminum louvers, the pavilion transforms during storm surges into an elevated community sanctuary and emergency operations hub.",
      "Dezeen praised the project as a textbook example of amphibian architecture—structures built to embrace fluctuating water levels rather than futilely trying to keep water at bay.",
    ],
    quote: {
      text: "The Waterline pavilion exemplifies an architecture that breathes with the tides, transforming climate vulnerability into poetic spatial experience.",
      author: "Dezeen Architecture Review",
      role: "Editorial Spotlight",
    },
    keyTakeaways: [
      "Amphibious design principles supporting up to 3 meters of tidal flood fluctuation.",
      "Zero-carbon marine timber construction sourced from certified regional forestry.",
      "Doubles as a disaster resilience community shelter equipped with solar microgrid.",
    ],
    tags: ["Press", "Dezeen", "Waterfront", "Amphibious Architecture"],
  },
  {
    slug: "inoodex-architecture-film",
    category: "VIDEO",
    title: "Inoodex Architecture Film",
    date: "March 2026",
    author: "Cinematography Unit",
    publication: "Inoodex Cinema",
    readTime: "3 min watch",
    summary:
      "A cinematic exploration of light, shadow, raw materiality, and everyday human rituals inside Inoodex's celebrated buildings.",
    image: "/images/homepage-video-poster.webp",
    imageAlt: "A contemporary waterfront building at dusk",
    video: "/video/2_Homepage_20260430.mp4",
    paragraphs: [
      "Captured over eighteen months across various seasons and weather conditions, 'Inoodex: Spaces in Time' documents how natural light, monsoon rain, and tropical breeze interact with the studio's architectural spaces.",
      "The film abandons sterile architectural photography in favor of intimate observational footage: school children racing down shaded verandas, office workers gathering on breezy landscaped sky gardens, and sunlight cutting through terra-cotta screens.",
      "Directed by award-winning architectural documentarians, the piece offers a sensory meditation on what it means to build buildings that age with grace and dignity.",
    ],
    keyTakeaways: [
      "Filmed in 4K across 12 signature built works in Bangladesh.",
      "Focuses on atmospheric conditions, daylight transitions, and human inhabitancy.",
      "Screened at international architecture film festivals in Milan and Rotterdam.",
    ],
    tags: ["Video", "Film", "Cinema", "Light & Space"],
  },
  {
    slug: "movement-through-public-spaces",
    category: "VIDEO",
    title: "Movement Through Public Spaces",
    date: "February 2026",
    author: "Inoodex Research",
    publication: "Spatial Anthropology Series",
    readTime: "2 min watch",
    summary:
      "A visual motion study analyzing pedestrian currents, gathering nodes, and spatial choreography within high-density civic halls.",
    image: "/images/search-interiors.webp",
    imageAlt: "A view into a contemporary public interior",
    video: "/expertise/istockphoto-1788600834-640_adpp_is.mp4",
    paragraphs: [
      "This short research documentary investigates how architectural volume, acoustic textures, and daylight gradients subconsciously influence human trajectory through public transit concourses and museum atriums.",
      "Through motion heatmaps and high-frame-rate spatial captures, Inoodex's spatial analytics division demonstrates how subtle floor curvatures and double-height ceiling transitions reduce bottlenecks and enhance user serenity.",
      "The insights derived from this study are directly applied to the firm's ongoing airport terminal and central railway hub commissions.",
    ],
    keyTakeaways: [
      "Empirical motion studies tracking over 50,000 public transit users.",
      "Proves that gradual daylight gradient shifts guide intuitive wayfinding without cluttering signage.",
      "Used as primary design blueprint for ongoing civic transit hubs.",
    ],
    tags: ["Video", "Public Space", "Pedestrian Flow", "Research"],
  },
  {
    slug: "james-von-klemperer-trophy-office-nyu-stern",
    category: "NEWS",
    title: "James von Klemperer Discusses the Trophy Office at NYU Stern",
    date: "January 2026",
    author: "NYU Stern Real Estate Forum",
    publication: "NYU Stern School of Business",
    readTime: "4 min read",
    summary:
      "A keynote address on the shifting demands of commercial workspace: biophilic integration, wellness certifications, and hybrid flexibility.",
    image: "/news/20261030_Jamie_FAIALuxury_Real_Estate_NYU_Stern_Talk-1440x720.webp",
    imageAlt: "An announcement for an architecture talk at NYU Stern",
    paragraphs: [
      "Addressing graduate students and commercial property executives at the NYU Stern Center for Real Estate Finance, James von Klemperer examined the evolution of the global 'trophy office'.",
      "The talk argued that the modern headquarters is no longer just a place to park desks—it has transformed into a social condenser, a cultural anchor, and an essential recruitment tool for modern knowledge workers.",
      "Highlighting collaborative projects designed with Inoodex, von Klemperer showed how outdoor work loggias, operable windows, and circadian lighting systems yield measurable gains in cognitive performance and employee retention.",
    ],
    quote: {
      text: "The post-pandemic workplace must offer an experience superior to the living room: exceptional air, natural light, and environments that catalyze spontaneous collaboration.",
      author: "James von Klemperer",
      role: "Keynote Speaker, NYU Stern Real Estate Forum",
    },
    keyTakeaways: [
      "Analysis of corporate tenant flight to ultra-sustainable, amenity-rich buildings.",
      "Biophilic design proven to decrease absenteeism and boost cognitive productivity.",
      "Case studies demonstrating hybrid space efficiency across modern commercial towers.",
    ],
    tags: ["Commercial", "Workplace", "NYU Stern", "Future of Work"],
  },
];

export function getAllNews(): NewsItem[] {
  return newsItems;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getRelatedNews(currentSlug: string, count = 3): NewsItem[] {
  const current = getNewsBySlug(currentSlug);
  if (!current) {
    return newsItems.slice(0, count);
  }

  // Prioritize same category first, then other stories
  const sameCategory = newsItems.filter(
    (item) => item.slug !== currentSlug && item.category === current.category,
  );
  const otherCategory = newsItems.filter(
    (item) => item.slug !== currentSlug && item.category !== current.category,
  );

  return [...sameCategory, ...otherCategory].slice(0, count);
}
