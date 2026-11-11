"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import {
  newsCategories,
  newsItems,
  type NewsCategory,
} from "@/lib/news";

const pageSize = 9;

export function NewsListing() {
  const featuredNewsItem = newsItems[0];
  const [activeCategory, setActiveCategory] = useState<
    "ALL" | NewsCategory
  >("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(
    () =>
      activeCategory === "ALL"
        ? newsItems
        : newsItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const pageCount = Math.ceil(filteredNews.length / pageSize);
  const visibleNews = filteredNews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function selectCategory(category: "ALL" | NewsCategory) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  return (
    <main className="flex-1 bg-white py-10 text-slate-700 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Page Header */}
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 sm:mb-12 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d6a184]/70 bg-[#fbf6f3] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8d4e34]">
              Journal &amp; Perspectives
            </span>
            <h1 className="mt-4 font-sans text-4xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
              News &amp; Insights
            </h1>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Dispatches on sustainable architecture, computational research, awards, and the people shaping the built environment.
          </p>
        </header>

        {/* Featured Story Hero Banner */}
        {activeCategory === "ALL" && (
          <section aria-label="Featured news story" className="mb-12 sm:mb-14 lg:mb-16">
            <Link
              className="group relative grid overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-lg md:grid-cols-[1.38fr_1fr]"
              href={`/news/${featuredNewsItem.slug}`}
            >
              {/* Media */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 md:aspect-auto md:min-h-[400px]">
                <Image
                  alt={featuredNewsItem.imageAlt}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  src={featuredNewsItem.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 md:hidden" />
                <div className="absolute top-4 left-4 rounded-full border border-white/40 bg-[#142936]/80 px-3.5 py-1 text-[10px] font-bold tracking-[0.16em] text-white shadow-sm backdrop-blur-md uppercase">
                  FEATURED STORY
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#a86544] uppercase">
                    <span>{featuredNewsItem.category}</span>
                    <span>·</span>
                    <span className="text-slate-400">{featuredNewsItem.readTime}</span>
                  </div>
                  <h2 className="mt-3.5 font-serif text-2xl font-normal leading-snug tracking-tight text-slate-900 group-hover:underline sm:text-3xl lg:text-[34px]">
                    {featuredNewsItem.title}
                  </h2>
                  <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
                    {featuredNewsItem.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    {featuredNewsItem.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a86544] group-hover:underline">
                    <span>Read feature</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Filter Navigation Bar */}
        <section aria-label="News articles">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 shrink-0 text-xs sm:text-sm font-semibold tracking-wider text-slate-700 uppercase">
                Filter News:
              </span>
              {newsCategories.map((category) => (
                <button
                  aria-pressed={activeCategory === category}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all sm:text-[13px] ${
                    activeCategory === category
                      ? "bg-[#142936] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  key={category}
                  onClick={() => selectCategory(category)}
                  type="button"
                >
                  {category === "ALL" ? "All News" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          {visibleNews.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {visibleNews.map((item, index) => (
                <Link
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl sm:p-4"
                  href={`/news/${item.slug}`}
                  key={`${item.slug}-${index}`}
                >
                  <div>
                    {/* Media Container */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-slate-100">
                      {item.category === "VIDEO" && item.video ? (
                        <div className="relative h-full w-full">
                          <Image
                            alt={item.imageAlt}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            src={item.image}
                          />
                          <div className="absolute inset-0 bg-black/35" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                              <Play className="ml-0.5 h-5 w-5 fill-slate-900 text-slate-900" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Image
                          alt={item.imageAlt}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          src={item.image}
                        />
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-800 uppercase shadow-sm backdrop-blur-md">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 px-1">
                      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#a86544] uppercase">
                        <span>{item.category}</span>
                        <span>·</span>
                        <span className="text-slate-400">{item.readTime}</span>
                      </div>
                      <h2 className="mt-2 font-sans text-lg font-semibold leading-snug tracking-tight text-slate-900 group-hover:underline sm:text-xl">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 px-1 text-xs font-semibold text-slate-500">
                    <span className="tracking-wider uppercase">{item.date}</span>
                    <span className="text-xs font-semibold text-[#a86544] group-hover:underline">
                      Read article
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-base font-medium text-slate-600">
                No articles found in the &ldquo;{activeCategory}&rdquo; category.
              </p>
            </div>
          )}

          {/* Pagination */}
          {pageCount > 1 && (
            <nav
              aria-label="News pages"
              className="mt-12 flex items-center justify-center gap-2 sm:mt-16"
            >
              <button
                aria-label="Previous page"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-[#bd7958] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
                type="button"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full font-mono text-xs font-semibold transition-all ${
                      currentPage === page
                        ? "bg-[#142936] text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                aria-label="Next page"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-[#bd7958] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage((page) => page + 1)}
                type="button"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}
