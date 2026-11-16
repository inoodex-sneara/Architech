import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";

export function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      className="bg-white py-14 sm:py-18 lg:py-20 text-slate-900 border-b border-slate-100"
      id="news"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#b5883e] uppercase sm:text-sm">
              STORIES &amp; IDEAS
            </p>
            <h2
              className="font-serif text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]"
              id="news-heading"
            >
              Design that moves ideas forward.
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600">
              Explore the people, thinking, and details shaping the architectural spaces we share.
            </p>
          </div>
          <Link
            className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-[#9d8249] bg-[#b39759] px-5 text-xs font-semibold tracking-wide text-white shadow-[0_0_0_4px_rgba(49,66,76,0.75)] transition-colors hover:bg-[#9d8249] sm:px-6"
            href="/news"
          >
            <span>Read all news</span>
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Featured Story Card (Compact & Balanced) */}
        {stories[0] && (
          <Link
            className="group grid grid-cols-1 gap-6 border-t border-slate-200/90 pt-6 md:grid-cols-12 md:gap-8 items-center"
            href={`/stories/${stories[0].slug}`}
          >
            {/* Featured Image (7 cols) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/80 shadow-sm md:col-span-7">
              <Image
                alt={stories[0].imageAlt}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                src={stories[0].image}
              />
            </div>

            {/* Featured Content (5 cols) */}
            <div className="flex flex-col justify-center py-1 md:col-span-5">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#b5883e]">
                <span>✳</span>
                <span>{stories[0].category}</span>
              </div>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium leading-snug text-slate-900 group-hover:text-[#b5883e] transition-colors">
                {stories[0].title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                {stories[0].summary}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#b5883e]">
                <span>Read Full Story</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        )}

        {/* 4-Column Compact Stories Grid */}
        <div
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
          id="news-all"
        >
          {stories.slice(1).map((story) => (
            <Link
              className="group flex flex-col min-w-0"
              href={`/stories/${story.slug}`}
              key={story.slug}
            >
              <div className="relative aspect-[16/10.5] w-full overflow-hidden rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200/80 shadow-2xs">
                <Image
                  alt={story.imageAlt}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  src={story.image}
                />
              </div>
              <div className="mt-3 flex flex-col flex-1">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#b5883e]">
                  {story.category}
                </p>
                <h3 className="mt-1.5 text-xs sm:text-sm font-medium leading-snug text-slate-900 group-hover:text-[#b5883e] transition-colors line-clamp-2">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
