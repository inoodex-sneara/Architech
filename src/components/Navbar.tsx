"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";



const menuItems = [
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "NEWS", href: "news" },
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="flex h-[68px] items-center justify-between px-4 sm:h-[82px] sm:px-8">
        <Link
          aria-label="Inoodex home"
          className="shrink-0 font-sans text-2xl font-semibold leading-none tracking-[-0.06em] text-slate-900 sm:text-[40px]"
          href="/"
        >
          INOODEX
        </Link>

        <div className="flex items-center gap-2 text-slate-800 sm:gap-3.5">
          <button
            aria-controls="site-search"
            aria-expanded={isSearchOpen}
            className={`flex h-10 items-center justify-center gap-2 border px-2.5 text-xs font-semibold uppercase tracking-wider transition-colors sm:h-11 sm:min-w-44 sm:px-5 sm:text-sm ${
              isSearchOpen
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-800 hover:border-[#d6a184] hover:bg-[#fbf5f0]"
            }`}
            onClick={() => {
              setIsSearchOpen((open) => !open);
              setIsMenuOpen(false);
            }}
            type="button"
          >
            <span className="hidden sm:inline">Search</span>
            <Search aria-hidden="true" className="size-4 sm:size-[17px]" strokeWidth={2} />
          </button>
          <button
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 items-center justify-center gap-1.5 border border-[#d6a184] bg-[#d6a184] px-3.5 text-xs font-semibold uppercase tracking-wider text-[#142936] transition-colors hover:bg-[#e3b89e] sm:h-11 sm:px-5 sm:text-sm"
            onClick={() => {
              setIsMenuOpen((open) => !open);
              setIsSearchOpen(false);
              setSearchQuery("");
            }}
            type="button"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-4" strokeWidth={2.5} />
            ) : (
              <Menu aria-hidden="true" className="size-4" strokeWidth={2.5} />
            )}
          </button>
          {isMenuOpen && (
            <div className="fixed right-0 top-[68px] z-40 h-[calc(100dvh-68px)] w-full overflow-y-auto border-l border-slate-700 bg-[#172f3d] shadow-xl sm:top-[82px] sm:h-[calc(100dvh-82px)] sm:w-[420px]">
              <div className="absolute inset-0">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-cover object-center opacity-45"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 420px"
                  src="/images/S_260721_cropped_2400x1200-1440x720.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#142936]/85 via-[#142936]/75 to-[#142936]/95" />
              </div>
              <div className="relative flex min-h-full flex-col px-6 pb-8 pt-5 sm:px-8 sm:pb-10">
              <div className="mb-6 flex justify-end">
                <button
                  aria-label="Close menu"
                  className="text-white transition-colors hover:text-[#d6a184]"
                  onClick={() => setIsMenuOpen(false)}
                  type="button"
                >
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
              <nav
                aria-label="Menu"
                className="flex flex-col gap-3"
                id="site-menu"
              >
                {menuItems.map((item) => (
                  <a
                    className="text-2xl font-medium leading-tight tracking-tight text-white transition-colors hover:text-[#e4b396] sm:text-[30px]"
                    href={item.href}
                    key={item.label}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <section aria-labelledby="featured-heading" className="mt-7">
                <h2
                  className="mb-2 text-base font-semibold text-[#e4b396]"
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
                  <span className="mt-3 block text-base font-semibold text-[#e4b396]">
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
        </div>
      </div>
      {isSearchOpen && (
        <div
          aria-label="Search Inoodex"
          aria-modal="false"
          className="fixed right-0 top-[68px] z-[60] flex h-[calc(100dvh-68px)] w-full flex-col overflow-y-auto border-l border-zinc-200 bg-white px-5 pb-8 pt-3 shadow-xl sm:top-[82px] sm:h-[calc(100dvh-82px)] sm:w-[420px] sm:px-6 sm:pb-10 lg:w-[450px]"
          id="site-search"
          role="dialog"
        >
          <div className="mb-3 flex justify-end">
            <button
              aria-label="Close search"
              className="text-slate-700 transition-colors hover:text-[#bd7958]"
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
                      className="border border-zinc-200 px-2.5 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-[#d6a184] hover:bg-[#fbf5f0]"
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
                          <span className="mb-1 block text-xs font-bold text-[#bd7958]">
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
      )}
    </header>
  );
}
