"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { allPortfolioProjects, type ProjectDetail } from "@/lib/portfolio-data";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Fallback to mirpur-2 if project not found
  const project: ProjectDetail =
    allPortfolioProjects[slug] || allPortfolioProjects["mirpur-2"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : ["/portfolio/hero-bedroom-detail.jpg"];

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1,
    );
  };

  // Other projects for "More projects" section
  const moreProjects = Object.values(allPortfolioProjects).filter(
    (p) => p.slug !== project.slug,
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-brand-accent selection:text-white">
      {/* =========================================================================
          TOP SUB-NAV / BREADCRUMB
      ========================================================================= */}
      <div className="border-b border-slate-200/80 bg-[#faf8f5]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3.5 sm:px-8 lg:px-12">
          <Link
            href="/#what-we-do-heading"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 hover:text-brand-accent-strong transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs font-medium tracking-wider text-slate-500 uppercase">
              {project.category}
            </span>
            <Link
              href="/contact"
              className="rounded-full bg-brand-accent px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-2xs hover:bg-brand-accent transition-colors"
            >
              Get Quotation
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        {/* =========================================================================
            SECTION 1: HERO IMAGE CAROUSEL / SLIDER (Chitron-style)
        ========================================================================= */}
        <div className="relative aspect-[16/9] sm:aspect-[16/8.2] w-full overflow-hidden rounded-sm bg-slate-100 border border-slate-200/90 shadow-sm">
          {/* Active Image */}
          <Image
            src={gallery[currentImageIndex]}
            alt={`${project.title} - view ${currentImageIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover transition-opacity duration-500"
          />

          {/* Left Arrow Button */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xs bg-white/85 text-slate-800 shadow-sm backdrop-blur-xs transition-colors hover:bg-brand-accent hover:text-white border border-slate-200/70"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xs bg-white/85 text-slate-800 shadow-sm backdrop-blur-xs transition-colors hover:bg-brand-accent hover:text-white border border-slate-200/70"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Top-Right Counter Badge (01 / 18) */}
          <div className="absolute right-4 top-4 rounded-xs bg-white/95 px-3 py-1 font-mono text-xs font-bold tracking-widest text-slate-900 shadow-xs border border-slate-200/80 backdrop-blur-xs">
            {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: SPECS META BAR (CLIENT, CATEGORY, LOCATION, SIZE, DURATION)
        ========================================================================= */}
        <div className="mt-8 border-y border-slate-200 py-6 sm:py-7">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 sm:gap-8">
            {/* Client */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                CLIENT
              </p>
              <p className="mt-1.5 font-sans text-sm sm:text-base font-medium text-slate-900">
                {project.client}
              </p>
            </div>

            {/* Category */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                CATEGORY
              </p>
              <p className="mt-1.5 font-sans text-sm sm:text-base font-medium text-slate-900">
                {project.category}
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                LOCATION
              </p>
              <p className="mt-1.5 font-sans text-sm sm:text-base font-medium text-slate-900">
                {project.location}
              </p>
            </div>

            {/* Size */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                SIZE
              </p>
              <p className="mt-1.5 font-serif text-sm sm:text-base font-bold text-brand-accent-strong">
                {project.size}
              </p>
            </div>

            {/* Duration */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                DURATION
              </p>
              <p className="mt-1.5 font-sans text-sm sm:text-base font-medium text-slate-900">
                {project.duration}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: NARRATIVE & STORY DESCRIPTION
        ========================================================================= */}
        <div className="mt-12 sm:mt-16">
          {/* Top Line: Heading on left, YouTube button on right */}
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between border-b border-slate-200 pb-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] tracking-tight text-slate-900 max-w-2xl">
              {project.headline}
            </h1>

            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-slate-500 hover:text-brand-accent-strong transition-colors"
              >
                <span>View full project on:</span>
                <YoutubeIcon className="h-5 w-5 text-red-600 fill-red-600 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>

          {/* Story Body Content */}
          <div className="mt-8 max-w-3xl space-y-5 text-sm sm:text-base leading-relaxed text-slate-600">
            <h2 className="font-sans text-base sm:text-lg font-bold tracking-wide text-brand-accent-strong">
              {project.storyHeading}
            </h2>

            {project.storyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Bullet Points */}
            <div className="mt-6 space-y-2.5 pt-4 text-xs sm:text-sm text-slate-800">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>
                  <strong>Location:</strong> {project.specs.location}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>📐</span>
                <span>
                  <strong>Area:</strong> {project.specs.area}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>🏗️</span>
                <span>
                  <strong>Project Status:</strong> {project.specs.status}
                </span>
              </p>
              <p className="flex items-center gap-2 font-serif italic text-brand-accent-strong text-sm sm:text-base pt-2">
                <span>✨</span>
                <span>{project.specs.tagline}</span>
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: 2-COLUMN PHOTO COLLAGE / STUDIO WORK (Screenshot 2)
        ========================================================================= */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Blueprint Work Image */}
          <div className="relative aspect-[16/10.5] w-full overflow-hidden rounded-xs bg-slate-100 border border-slate-200/90 shadow-2xs">
            <Image
              src={project.storyImages.left}
              alt="Architectural Blueprint Planning"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Smiling Architect with Model Image */}
          <div className="relative aspect-[16/10.5] w-full overflow-hidden rounded-xs bg-slate-100 border border-slate-200/90 shadow-2xs">
            <Image
              src={project.storyImages.right}
              alt="Lead Architect in Studio with Physical Model"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* =========================================================================
            SECTION 5: "MORE PROJECTS" (Screenshot 3)
        ========================================================================= */}
        <div className="mt-20 sm:mt-28 border-t border-slate-200 pt-12 sm:pt-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900">
              More projects
            </h2>

            <Link
              href="/#what-we-do-heading"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent-strong hover:text-slate-900 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4-Column Related Projects Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7">
            {moreProjects.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block min-w-0"
              >
                <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs transition-all duration-500 group-hover:border-brand-accent/60 group-hover:shadow-md">
                  <Image
                    src={p.gallery[0] || "/portfolio/hero-bedroom-detail.jpg"}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Watermark logo */}
                  <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-xs bg-white/85 px-2 py-0.5 shadow-2xs backdrop-blur-xs">
                    <span className="font-serif text-[10px] font-bold tracking-wider text-slate-800">
                      INOODEX
                    </span>
                  </div>
                </div>

                {/* Caption Line */}
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-sm sm:text-base font-bold text-brand-accent-strong">
                      {p.size}
                    </span>
                    <span className="text-xs sm:text-sm font-normal tracking-wide text-slate-600 group-hover:text-slate-900 transition-colors">
                      {p.location}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-brand-accent-strong opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
