"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface PortfolioProject {
  id: string;
  title: string;
  sqft: string;
  location: string;
  categories: string[];
  image: string;
  badge?: string;
  href?: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "rangpur",
    title: "Rangpur Modern Living Suite",
    sqft: "2145 sqft",
    location: "Rangpur",
    categories: ["residential", "upcoming", "running"],
    image: "/portfolio/project-rangpur.webp",
    badge: "Upcoming Project",
  },
  {
    id: "dinajpur",
    title: "Dinajpur Contemporary Dining & Lounge",
    sqft: "1600 sqft",
    location: "Dinajpur",
    categories: ["residential", "upcoming", "handover"],
    image: "/portfolio/project-dinajpur.webp",
    badge: "Upcoming Project",
  },
  {
    id: "mirpur-2",
    title: "Mirpur 2 Minimalist Master Suite",
    sqft: "1600 sqft",
    location: "Mirpur 2",
    categories: ["residential", "upcoming", "handover"],
    image: "/portfolio/project-mirpur.webp",
    badge: "Upcoming Project",
  },
  {
    id: "kafrul",
    title: "Kafrul Cantonment Luxury Salon",
    sqft: "3000 sqft",
    location: "Kafrul Cantonment",
    categories: ["residential", "upcoming", "running"],
    image: "/portfolio/project-kafrul.webp",
    badge: "Upcoming Project",
  },
  {
    id: "madaripur",
    title: "Madaripur Architectural Villa",
    sqft: "2320 sqft",
    location: "Madaripur",
    categories: ["residential", "upcoming", "handover"],
    image: "/portfolio/project-madaripur.webp",
    badge: "Upcoming Project",
  },
  {
    id: "gulshan-penthouse",
    title: "Gulshan Lakefront Penthouse",
    sqft: "4200 sqft",
    location: "Gulshan 2, Dhaka",
    categories: ["residential", "commercial", "handover"],
    image: "/New folder/492148510_726187993069203_6052875679272392053_n_k3Vkgv.jpg",
    badge: "Handover Project",
  },
  {
    id: "banani-corporate",
    title: "Banani Tech Headquarters",
    sqft: "5400 sqft",
    location: "Banani, Dhaka",
    categories: ["commercial", "consultancy", "running"],
    image: "/images/IBM_Sofa_Card_Crop-1784641858.webp",
    badge: "Running Project",
  },
  {
    id: "uttara-studio",
    title: "Uttara Creative Duplex",
    sqft: "3850 sqft",
    location: "Sector 7, Uttara",
    categories: ["residential", "commercial", "upcoming"],
    image: "/New folder/1_3yy0P4.webp",
    badge: "Upcoming Project",
  },
  {
    id: "sustainability",
    title: "Low-Carbon & Passive Solar Architecture",
    sqft: "Specialty Area",
    location: "Sustainability & Green Tech",
    categories: ["expertise", "consultancy"],
    image: "/images/specialty-sustainability.png",
    badge: "Specialty Expertise",
    href: "/expertise/sustainability",
  },
  {
    id: "cfd-modeling",
    title: "Computational Environmental Analysis",
    sqft: "Specialty Area",
    location: "3D Visualization & VR",
    categories: ["expertise", "consultancy"],
    image: "/images/Alibaba_CFD_Banner-1776197385.jpg",
    badge: "Specialty Expertise",
    href: "/expertise",
  },
  {
    id: "timber-engineering",
    title: "Mass Timber Structural Frameworks",
    sqft: "Specialty Area",
    location: "Bespoke Architecture",
    categories: ["expertise", "consultancy"],
    image: "/images/Queens_Braid_Timber_Stadium_SOM_04-1731077764-scaled.jpg",
    badge: "Specialty Expertise",
    href: "/expertise",
  },
  {
    id: "resilient-cities",
    title: "Resilient Urban Masterplanning",
    sqft: "Specialty Area",
    location: "Urban Design & Infrastructure",
    categories: ["expertise", "consultancy", "commercial"],
    image: "/images/Context_Homepage-1.webp",
    badge: "Specialty Expertise",
    href: "/expertise",
  },
];

const categoryTabs = [
  { id: "all", label: "ALL" },
  { id: "residential", label: "RESIDENTIAL" },
  { id: "commercial", label: "COMMERCIAL" },
  { id: "handover", label: "HANDOVER PROJECT" },
  { id: "running", label: "RUNNING PROJECT" },
  { id: "upcoming", label: "UPCOMING PROJECT" },
  { id: "consultancy", label: "ARCHITECTURAL CONSULTANCY" },
  { id: "expertise", label: "SPECIALTY EXPERTISE" },
];

export function ExpertiseSection() {
  // Default to 'upcoming' to match the active tab in user's reference screenshot
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categories.includes(activeTab));

  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white pt-8 pb-14 font-sans text-slate-900 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
    >
      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-8 lg:px-12">
        {/* =========================================================================
            HEADER AREA
        ========================================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-[#b5883e]">
            <span>✳</span>
            <span>WHAT WE DO</span>
            <span>✳</span>
          </div>

          <h2
            id="what-we-do-heading"
            className="mt-2 font-serif text-[34px] font-normal leading-[0.96] sm:leading-[1.0] tracking-tight text-slate-900 sm:text-[42px] lg:text-[52px]"
          >
            Where Beauty
            <br />
            <span className="font-serif italic text-[#b5883e]">
              Meets Intention
            </span>
          </h2>

          {/* Luxury Architectural Ornament Divider */}
          <div className="mx-auto mt-2.5 flex items-center justify-center gap-2.5 sm:mt-3">
            <span className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#b5883e]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#b5883e]" />
            <span className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#b5883e]/60" />
          </div>

          <p className="mx-auto mt-2 max-w-2xl text-[10px] font-medium leading-relaxed uppercase tracking-[0.14em] text-slate-500 sm:mt-2.5 sm:text-xs sm:tracking-[0.16em]">
            Specialty Expertise in Architecture, Interiors &amp; Masterplanning
          </p>
        </div>

        {/* =========================================================================
            FILTER TABS (Harmonious, Luxury Rounded Architectural Pills)
        ========================================================================= */}
        <div
          aria-label="Filter projects by category"
          className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-2.5"
          role="group"
        >
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                type="button"
                className={`min-h-9 rounded-full border px-4 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5883e] sm:px-5 sm:text-[11px] sm:tracking-[0.14em] ${isActive
                    ? "border-[#b5883e] bg-[#b5883e] text-white shadow-sm shadow-[#b5883e]/20"
                    : "border-slate-200/90 bg-white text-slate-600 shadow-2xs hover:-translate-y-0.5 hover:border-[#b5883e]/60 hover:text-slate-900 hover:shadow-xs"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            PORTFOLIO GRID
        ========================================================================= */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href || `/projects/${project.id}`}
              className="group cursor-pointer block min-w-0"
            >
              {/* Image Frame - Larger and Taller */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs transition-all duration-500 group-hover:border-[#b5883e]/60 group-hover:shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 transition-opacity group-hover:opacity-30" />

                {/* Watermark logo in top left */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-xs bg-white/90 px-2.5 py-0.5 shadow-xs backdrop-blur-xs">
                  <span className="font-serif text-[11px] font-bold tracking-wider text-slate-800">
                    INOODEX
                  </span>
                </div>

                {/* Badge in top right */}
                {project.badge && (
                  <div className="absolute right-3 top-3 rounded-xs bg-[#b5883e] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Caption Line */}
              <div className="mt-3.5 flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#b5883e]">
                    {project.sqft}
                  </span>
                  <span className="text-sm sm:text-[15px] font-normal tracking-wide text-slate-600 group-hover:text-slate-900 transition-colors">
                    {project.location}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#b5883e] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>

        {/* =========================================================================
            BOTTOM LINK / CTA
        ========================================================================= */}
        <div className="mt-14 text-center sm:mt-18">

        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX / QUICK VIEW MODAL
      ========================================================================= */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs review-card-enter"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#b5883e] hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="font-serif text-lg font-bold text-[#b5883e]">
                  {selectedProject.sqft}
                </span>
                <h3 className="font-sans text-xl font-bold text-slate-900 mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Location: {selectedProject.location}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b5883e] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#9a7231] transition-colors shadow-xs"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
