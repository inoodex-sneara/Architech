import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getAllNews,
  getNewsBySlug,
  getRelatedNews,
} from "@/lib/news";
import { NewsShareBar } from "@/components/NewsShareBar";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return {
      title: "News Dispatch Not Found | Inoodex Architects",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: `${item.title} | Inoodex Journal`,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      images: [{ url: item.image, alt: item.imageAlt }],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const allNews = getAllNews();
  const currentIndex = allNews.findIndex((n) => n.slug === item.slug);
  const previousItem =
    currentIndex > 0 ? allNews[currentIndex - 1] : allNews[allNews.length - 1];
  const nextItem =
    currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : allNews[0];

  const relatedNews = getRelatedNews(item.slug, 3);

  return (
    <main className="flex-1 bg-white text-slate-900">
      {/* Hero Media (Full Bleed / Top Banner) */}
      {item.category === "VIDEO" && item.video ? (
        <div className="relative aspect-video max-h-[520px] w-full overflow-hidden bg-black">
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster={item.image}
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative aspect-[16/9] max-h-[380px] w-full overflow-hidden bg-slate-100 sm:aspect-[2.4/1] sm:max-h-[520px]">
          <Image
            alt={item.imageAlt}
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src={item.image}
          />
        </div>
      )}

      {/* Main Centered Article Container */}
      <article className="mx-auto max-w-[880px] px-6 pb-16 pt-9 sm:px-10 sm:pb-24 sm:pt-14">
        {/* Navigation & Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 transition-colors hover:text-[#bd7958]"
            href="/news"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all news</span>
          </Link>

          <span className="text-xs font-semibold tracking-[0.18em] text-[#a86544] uppercase">
            {item.category}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[52px]">
          {item.title}
        </h1>

        {/* Lead Summary */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
          {item.summary}
        </p>

        {/* Meta Bar */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
            <span>{item.date}</span>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <span>{item.readTime}</span>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <span className="font-semibold text-slate-900">{item.author}</span>
            {item.publication && (
              <>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className="text-slate-500">{item.publication}</span>
              </>
            )}
          </div>

          <NewsShareBar summary={item.summary} title={item.title} />
        </div>

        {/* Topics / Tags Row */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-6 grid gap-2 border-b border-slate-200 pb-5 sm:grid-cols-[5rem_1fr] sm:gap-4 items-center text-sm">
            <span className="font-semibold text-slate-900 text-xs tracking-wider uppercase">
              Topics
            </span>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-600 text-sm">
              {item.tags.map((tag, idx) => (
                <li key={tag} className="flex items-center gap-4">
                  <span className="underline underline-offset-4 hover:text-[#a86544] transition-colors cursor-default">
                    {tag}
                  </span>
                  {idx < (item.tags?.length ?? 0) - 1 && (
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Paragraphs */}
        <div className="mt-8 space-y-6 text-[16px] leading-[1.85] text-slate-800 sm:mt-10 sm:space-y-7 sm:text-[17px] sm:leading-[1.85]">
          {item.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        {item.quote && (
          <blockquote className="my-10 py-2 sm:my-14">
            <p className="font-serif text-2xl sm:text-3xl italic leading-relaxed text-slate-900">
              &ldquo;{item.quote.text}&rdquo;
            </p>
            <footer className="mt-4 not-italic font-sans text-xs sm:text-sm font-semibold tracking-wide text-slate-500">
              — {item.quote.author}, {item.quote.role}
            </footer>
          </blockquote>
        )}

        {/* Secondary Detail Image (if present) */}
        {item.secondaryImage && (
          <figure className="my-10 sm:my-12">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 sm:aspect-[1.8/1]">
              <Image
                alt={item.secondaryImage.alt}
                className="object-cover object-center"
                fill
                sizes="(max-width: 880px) 100vw, 880px"
                src={item.secondaryImage.src}
              />
            </div>
            <figcaption className="mt-2.5 text-xs text-slate-500">
              {item.secondaryImage.caption}
            </figcaption>
          </figure>
        )}

        {/* Previous / Next Article Navigation Cards */}
        <nav
          aria-label="Previous and next articles"
          className="mt-14 border-t border-slate-200 pt-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <Link
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:border-slate-400 hover:shadow-md"
              href={`/news/${previousItem.slug}`}
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-400 uppercase transition-colors group-hover:text-[#bd7958]">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Previous dispatch</span>
                </span>
                <h3 className="mt-3 font-serif text-lg font-normal leading-snug text-slate-900 group-hover:underline line-clamp-2">
                  {previousItem.title}
                </h3>
              </div>
              <span className="mt-4 text-xs font-medium text-slate-400">
                {previousItem.date}
              </span>
            </Link>

            <Link
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:text-right transition-all duration-300 hover:border-slate-400 hover:shadow-md"
              href={`/news/${nextItem.slug}`}
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-400 uppercase transition-colors group-hover:text-[#bd7958] sm:justify-end">
                  <span>Next dispatch</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <h3 className="mt-3 font-serif text-lg font-normal leading-snug text-slate-900 group-hover:underline line-clamp-2">
                  {nextItem.title}
                </h3>
              </div>
              <span className="mt-4 text-xs font-medium text-slate-400">
                {nextItem.date}
              </span>
            </Link>
          </div>
        </nav>
      </article>

      {/* Related News Dispatches Grid */}
      {relatedNews.length > 0 && (
        <section
          aria-labelledby="more-news-heading"
          className="border-t border-slate-200 bg-white py-14 sm:py-20"
        >
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#bd7958]" />
                  <p className="text-xs font-bold tracking-[0.2em] text-[#a86544] uppercase">
                    JOURNAL &amp; PERSPECTIVES
                  </p>
                </div>
                <h2
                  className="mt-1 font-serif text-2xl sm:text-3xl text-slate-900 font-normal"
                  id="more-news-heading"
                >
                  Related Dispatches
                </h2>
              </div>
              <Link
                className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#bd7958] transition-colors"
                href="/news"
              >
                <span>View all news</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((related) => (
                <Link
                  className="group flex flex-col justify-between bg-white p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                  href={`/news/${related.slug}`}
                  key={related.slug}
                >
                  <div>
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <Image
                        alt={related.imageAlt}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={related.image}
                      />
                      <div className="absolute top-3 left-3 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-800 uppercase backdrop-blur-md">
                        {related.category}
                      </div>
                    </div>
                    <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-[#a86544] uppercase">
                      {related.category}
                    </p>
                    <h3 className="mt-1 font-serif text-lg leading-snug text-slate-900 group-hover:underline">
                      {related.title}
                    </h3>
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-3 text-xs text-slate-400">
                    {related.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
