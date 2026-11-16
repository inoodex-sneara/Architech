import Image from "next/image";

const services = [
  {
    title: "Architecture & Masterplanning",
    description: "Places shaped around people, purpose, and their wider context.",
    image: "/images/Context_Homepage-1.webp",
    imageAlt: "Contemporary architecture integrated with a green landscape",
  },
  {
    title: "Residential Interiors",
    description: "Warm, considered homes tailored to the way you live.",
    image: "/portfolio/project-kafrul.webp",
    imageAlt: "Calm contemporary residential interior",
  },
  {
    title: "Workplace Design",
    description: "Flexible work environments that support focus and collaboration.",
    image: "/images/2132_1_000_N647_large-scaled.webp",
    imageAlt: "Daylit modern workplace interior",
  },
  {
    title: "Healthcare & Education",
    description: "Welcoming, people-first spaces for care and learning.",
    image: "/images/EmoryWinship_SOM_DaveBurk_020_lcrop-1786737527-scaled.jpg",
    imageAlt: "Bright healthcare interior with a generous waiting area",
  },
  {
    title: "Hospitality & Culture",
    description: "Memorable places designed to bring people together.",
    image: "/portfolio/project-dinajpur.webp",
    imageAlt: "Refined interior with natural materials and furnishings",
  },
  {
    title: "Sustainable Buildings",
    description: "Low-impact design grounded in climate and local context.",
    image: "/images/Community1x1_HomepageSpecialtyExpertise-scaled.webp",
    imageAlt: "Contemporary building surrounded by landscape",
  },
  {
    title: "Furniture & Joinery",
    description: "Purposeful details and custom pieces made for each space.",
    image: "/images/IBM_Sofa_Card_Crop-1784641858.webp",
    imageAlt: "Furniture design drawing with construction details",
  },
  {
    title: "Renovation & Retrofit",
    description: "Giving existing spaces a thoughtful and lasting new life.",
    image: "/portfolio/story-blueprint.jpg",
    imageAlt: "Designers reviewing drawings and material selections",
  },
];

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white py-16 sm:py-24 lg:py-28 text-slate-900 border-b border-slate-100"
    >
      <div className="mx-auto max-w-[1520px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#b5883e]">
            WHAT WE OFFER
          </p>
          <h2
            className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.14] tracking-tight text-slate-900"
            id="services-heading"
          >
            Our Services
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-12 bg-[#b5883e]"
          />
          <p className="mx-auto mt-5 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600">
            From early concepts to turnkey execution, we create architecture and bespoke interiors that elevate modern living.
          </p>
        </header>

        {/* 3-Column Grid Matching WHAT WE DO exactly in Size & Aspect Ratio */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {services.map((service, index) => (
            <article
              className="group relative aspect-[16/11] w-full overflow-hidden bg-slate-900 border border-slate-200/90 shadow-2xs transition-all duration-500 group-hover:border-[#b5883e]/60 group-hover:shadow-md rounded-xs"
              key={service.title}
            >
              <Image
                alt={service.imageAlt}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                src={service.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"
              />

             

              {/* Bottom Text Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl leading-tight text-white group-hover:text-[#e5bf84] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200/90 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
