"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  newsCategories,
  newsItems,
  type NewsCategory,
} from "@/lib/news";

const pageSize = 9;
const featuredNews = {
  title: "Inoodex Named Architecture Firm of the Year",
  image: "/images/S_260721_cropped_2400x1200-1440x720.webp",
  imageAlt: "The Inoodex team gathered above the city skyline",
};

export function NewsListing() {
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
    <main className="flex-1 bg-white py-8 text-slate-700 sm:py-12">
      <div className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16">
        <section
          aria-label="Featured news"
          className="grid gap-5 md:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)] md:gap-6"
        >
          <div className="relative aspect-[1.65/1] overflow-hidden bg-slate-100">
            <Image
              alt={featuredNews.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 75vw"
              src={featuredNews.image}
            />
          </div>
          <div className="border-b border-slate-200 pb-5 md:pt-1">
            <p className="text-sm font-semibold text-slate-500">FEATURED</p>
            <h1 className="mt-2 text-xl font-semibold leading-snug sm:text-2xl">
              {featuredNews.title}
            </h1>
          </div>
        </section>

        <section aria-label="News articles" className="mt-6 sm:mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 py-3 text-sm">
            <span className="font-semibold">Filter News:</span>
            {newsCategories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`font-semibold transition-colors hover:text-[#d09270] ${
                  activeCategory === category
                    ? "text-slate-900 underline underline-offset-4"
                    : "text-slate-500"
                }`}
                key={category}
                onClick={() => selectCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          {visibleNews.length > 0 ? (
            <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
              {visibleNews.map((item) => (
                <article
                  className="min-w-0 border-b border-slate-200 pb-4"
                  key={item.title}
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    {item.category === "VIDEO" && item.video ? (
                      <video
                        aria-label={item.title}
                        className="absolute inset-0 size-full object-cover"
                          autoPlay
                        controls
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={item.image}
                        src={item.video}
                      >
                        <track kind="captions" />
                        Your browser does not support video playback.
                      </video>
                    ) : (
                      <Image
                        alt={item.imageAlt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={item.image}
                      />
                    )}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-500">
                    {item.category}
                  </p>
                  <h2 className="mt-1 text-lg font-medium leading-snug sm:text-xl">
                    {item.title}
                  </h2>
                </article>
              ))}
            </div>
          ) : (
            <p className="py-10 text-sm text-slate-600">
              No news in this category yet.
            </p>
          )}

          {pageCount > 1 ? (
            <nav
              aria-label="News pages"
              className="flex items-center justify-center gap-2 py-8"
            >
              <button
                aria-label="Previous page"
                className="px-2 py-1 text-sm text-slate-600 hover:text-[#d09270] disabled:opacity-40"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
                type="button"
              >
                ←
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`min-w-8 px-2 py-1 text-sm ${
                      currentPage === page
                        ? "font-semibold text-slate-900 underline underline-offset-4"
                        : "text-slate-600 hover:text-[#d09270]"
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
                className="px-2 py-1 text-sm text-slate-600 hover:text-[#d09270] disabled:opacity-40"
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage((page) => page + 1)}
                type="button"
              >
                →
              </button>
            </nav>
          ) : null}
        </section>
      </div>
    </main>
  );
}
