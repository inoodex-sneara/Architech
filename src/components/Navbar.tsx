"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/about" },
  { label: "NEWS", href: "/news" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

const popularSearches = [
  "Central Social District",
  "Hospitality",
  "Airports",
  "Residential",
];

const searchResults = [
  {
    category: "ABOUT",
    title: "Meet the people behind Inoodex",
    href: "/about",
    image: "/images/inoodex-team-photo.png",
    alt: "The Inoodex team gathered together at a studio event",
    keywords: "studio team people architects awards",
  },
  {
    category: "PROJECTS",
    title: "Airport architecture, from above",
    href: "/projects",
    image: "/images/search-airports.webp",
    alt: "A contemporary airport terminal seen from above",
    keywords: "airports airport hospitality travel projects",
  },
  {
    category: "PROJECTS",
    title: "A welcoming place to learn and gather",
    href: "/projects",
    image: "/images/search-learning.webp",
    alt: "A modern public building with a welcoming entrance",
    keywords: "education community central social district projects",
  },
  {
    category: "PROJECTS",
    title: "Spaces shaped around everyday life",
    href: "/projects",
    image: "/images/search-interiors.webp",
    alt: "A bright, sculptural contemporary interior",
    keywords: "residential interiors hospitality homes projects",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredResults = normalizedQuery
    ? searchResults.filter((result) =>
        normalizedQuery
          .split(/\s+/)
          .every((term) =>
            `${result.category} ${result.title} ${result.keywords}`
              .toLowerCase()
              .includes(term),
          ),
      )
    : searchResults;

  // Don't lock body overflow: hidden because on touch devices and Chrome mobile
  // emulation it cancels touchmove events and prevents scrolling fixed overlays.
  useEffect(() => {
    if (!isSearchOpen) return;

    searchInputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] sm:h-[82px] max-w-[1520px] items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          aria-label="Inoodex home"
          className="shrink-0 font-sans text-2xl font-semibold leading-none tracking-[-0.06em] text-slate-900 sm:text-[34px] lg:text-[38px] transition-colors hover:text-[#b5883e]"
          href="/"
        >
          INOODEX
        </Link>

        {/* =====================================================================
            DESKTOP NAVIGATION: MENU BAR IN A ROW
        ===================================================================== */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-9"
        >
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative py-1.5 text-xs xl:text-[13px] font-semibold tracking-[0.16em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#b5883e] font-bold"
                    : "text-slate-700 hover:text-[#b5883e]"
                }`}
              >
                {item.label}
                {/* Active & Hover Underline Accent */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#b5883e] opacity-100 scale-x-100"
                      : "bg-[#b5883e] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions: Search, CTA, Mobile Menu */}
        <div className="flex items-center gap-2 text-slate-800 sm:gap-3">
          {/* Search Button */}
          <button
            aria-controls="site-search"
            aria-expanded={isSearchOpen}
            className={`flex h-10 items-center justify-center gap-2 border px-3 text-xs font-semibold uppercase tracking-wider transition-colors sm:h-10 sm:px-3.5 ${
              isSearchOpen
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300/90 bg-white text-slate-700 hover:border-[#b5883e] hover:text-[#b5883e]"
            }`}
            onClick={() => {
              setIsSearchOpen((open) => !open);
              setIsMenuOpen(false);
            }}
            type="button"
          >
            <Search aria-hidden="true" className="size-4" strokeWidth={2} />
            <span className="hidden xl:inline">Search</span>
          </button>

          {/* Quotation CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-xs bg-[#b5883e] px-4 sm:px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#9d7432] shadow-2xs hover:shadow-xs"
          >
            Get Quotation
          </Link>

          {/* Mobile / Tablet Menu Button (lg:hidden) */}
          <button
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            className="flex lg:hidden h-10 items-center justify-center gap-1.5 border border-slate-300/90 bg-white px-3 text-xs font-semibold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#b5883e] hover:text-[#b5883e]"
            onClick={() => {
              setIsMenuOpen((open) => !open);
              setIsSearchOpen(false);
              setSearchQuery("");
            }}
            type="button"
          >
            <span className="text-xs">{isMenuOpen ? "Close" : "Menu"}</span>
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-4" strokeWidth={2.5} />
            ) : (
              <Menu aria-hidden="true" className="size-4" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
    </header>

    {/* =========================================================================
        MOBILE DRAWER (Outside sticky header to ensure natural touch & wheel scroll)
    ========================================================================= */}
    {isMenuOpen && (
      <div className="fixed inset-x-0 bottom-0 top-[68px] z-50 h-[calc(100vh-68px)] overflow-hidden border-l border-slate-700 bg-[#172f3d] shadow-2xl sm:left-auto sm:right-0 sm:top-[82px] sm:h-[calc(100vh-82px)] sm:w-[420px]">
        {/* Static Background Layer */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Image
            alt=""
            aria-hidden="true"
            className="object-cover object-center opacity-40"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 420px"
            src="/images/S_260721_cropped_2400x1200-1440x720.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#142936]/85 via-[#142936]/75 to-[#142936]/95" />
        </div>

        {/* Scrollable Content Container with Visible Scrollbar */}
        <div className="drawer-scrollbar h-full w-full overflow-y-scroll overscroll-contain px-6 pb-36 pt-6 sm:px-8 sm:pb-24">
          <nav
            aria-label="Mobile Navigation Menu"
            className="flex flex-col gap-3.5 shrink-0"
            id="site-menu"
          >
            {navLinks.map((item) => (
              <Link
                className="text-xl font-medium leading-tight tracking-tight text-white transition-colors hover:text-[#b5883e] sm:text-2xl"
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <section aria-labelledby="featured-heading" className="mt-8 shrink-0">
            <h2
              className="mb-2 text-base font-semibold text-brand-accent"
              id="featured-heading"
            >
              FEATURED
            </h2>
            <Link
              className="block overflow-hidden rounded-2xl border border-white/20 bg-[#142936]/45 p-3 backdrop-blur-sm transition-colors hover:bg-[#142936]/65"
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative aspect-[1.65] w-full overflow-hidden rounded-xl bg-slate-200">
                <Image
                  alt="Architecture team gathered on a New York rooftop"
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  src="/images/S_260721_cropped_2400x1200-1440x720.webp"
                />
              </div>
              <span className="mt-3 block text-base font-semibold text-brand-accent">
                INOODEX
              </span>
              <span className="mt-1 block text-xl font-semibold leading-snug text-white">
                The people behind great architecture
              </span>
            </Link>
          </section>
        </div>
      </div>
    )}
      {isSearchOpen && (
        <div
          aria-label="Search Inoodex"
          aria-modal="false"
          className="fixed inset-x-0 bottom-0 top-[68px] z-50 overflow-hidden border-l border-zinc-200 bg-white shadow-2xl sm:left-auto sm:right-0 sm:top-[82px] sm:w-[420px] lg:w-[450px]"
          id="site-search"
          role="dialog"
        >
          <div className="drawer-scrollbar h-full w-full overflow-y-auto px-5 pb-16 pt-3 sm:px-6 sm:pb-12">
          <div className="mb-3 flex justify-end">
            <button
              aria-label="Close search"
              className="text-slate-700 transition-colors hover:text-brand-accent-strong"
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              type="button"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
            <form
              className="flex h-12 items-center gap-2 border border-slate-700 px-3"
              onSubmit={(event) => event.preventDefault()}
              role="search"
            >
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-slate-700"
                strokeWidth={2}
              />
              <input
                aria-label="Search projects, people, and news"
                className="h-full min-w-0 flex-1 bg-transparent text-base font-semibold text-slate-800 outline-none placeholder:font-semibold placeholder:text-slate-500"
                inputMode="search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search"
                ref={searchInputRef}
                type="text"
                value={searchQuery}
              />
              {searchQuery && (
                <button
                  aria-label="Clear search"
                  className="shrink-0 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800"
                  onClick={() => {
                    setSearchQuery("");
                    searchInputRef.current?.focus();
                  }}
                  type="button"
                >
                  Clear
                </button>
              )}
            </form>

            {!normalizedQuery && (
              <section aria-labelledby="popular-searches" className="mt-8">
                <h2
                  className="mb-3 text-sm font-bold text-slate-500"
                  id="popular-searches"
                >
                  POPULAR SEARCH
                </h2>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      className="border border-zinc-200 px-2.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-brand-accent hover:bg-[#fbf5f0]"
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      type="button"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section aria-labelledby="search-results-heading" className="mt-6">
              <h2
                className="mb-4 text-sm font-bold text-slate-500"
                id="search-results-heading"
              >
                {normalizedQuery ? "SEARCH RESULTS" : "FEATURED CONTENT"}
              </h2>
              {filteredResults.length > 0 ? (
                <ul className="flex flex-col gap-5">
                  {filteredResults.map((result) => (
                    <li key={result.title}>
                      <Link
                        className="group flex items-center gap-3"
                        href={result.href}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        <div className="relative size-20 shrink-0 overflow-hidden bg-slate-100">
                          <Image
                            alt={result.alt}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            fill
                            sizes="80px"
                            src={result.image}
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="mb-1 block text-xs font-bold text-brand-accent-strong">
                            {result.category}
                          </span>
                          <span className="block text-base font-bold leading-snug text-slate-700 transition-colors group-hover:text-slate-500">
                            {result.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-8 text-base font-medium text-slate-600" role="status">
                  No results for “{searchQuery}”. Try a different search.
                </p>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
