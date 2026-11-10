import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";

export function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      className="bg-white py-14 text-black sm:py-20 lg:py-24"
      id="news"
    >
      <div className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16">
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-black sm:text-sm">
              STORIES &amp; IDEAS
            </p>
            <h2
              className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              id="news-heading"
            >
              Design that moves ideas forward.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black sm:text-base">
              Explore the people, thinking, and details shaping the places we
              share.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 w-fit items-center border border-black px-5 text-sm font-semibold text-black transition-colors hover:border-[#d6a184] hover:bg-[#e3b89e] hover:text-[#263b48]"
            href="news"
          >
            Read all news
          </Link>
        </div>

        <Link
          className="group grid gap-6 border-t border-slate-200 pt-5 md:grid-cols-[minmax(0,2fr)_minmax(250px,0.9fr)] md:gap-8 lg:gap-12"
          href={`/stories/${stories[0].slug}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 md:aspect-[1.55/1]">
            <Image
              alt={stories[0].imageAlt}
              className="object-cover object-center"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              src={stories[0].image}
            />
          </div>
          <div className="flex flex-col justify-center py-1 md:py-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-black">
              {stories[0].category}
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-snug group-hover:underline sm:text-3xl">
              {stories[0].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
              {stories[0].summary}
            </p>
          </div>
        </Link>

        <div
          className="mt-10 grid scroll-mt-24 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
          id="news-all"
        >
          {stories.slice(1).map((story) => (
            <Link
              className="group min-w-0"
              href={`/stories/${story.slug}`}
              key={story.slug}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  alt={story.imageAlt}
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={story.image}
                />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-black">
                {story.category}
              </p>
              <h3 className="mt-2 text-base font-medium leading-snug group-hover:underline sm:text-lg">
                {story.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
