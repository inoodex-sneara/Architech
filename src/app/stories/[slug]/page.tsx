import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTopicSlug, stories } from "@/lib/stories";
import { ShareStory } from "@/components/ShareStory";

type StoryPageProps = PageProps<"/stories/[slug]">;

export const instant = false;

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  return story
    ? { title: story.title, description: story.summary }
    : { title: "Story not found" };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const storyIndex = stories.findIndex((item) => item.slug === slug);
  const story = stories[storyIndex];

  if (!story) notFound();

  const relatedStories = stories
    .filter((item) => item.slug !== story.slug)
    .slice(0, 3);
  const readingMinutes = Math.max(
    1,
    Math.ceil(
      story.paragraphs.join(" ").split(/\s+/).length / 220,
    ),
  );

  return (
    <main className="flex-1 bg-white text-black">
      <div className="relative aspect-[16/9] max-h-[360px] w-full overflow-hidden bg-slate-100 sm:aspect-[2.4/1] sm:max-h-[520px]">
        <Image
          alt={story.imageAlt}
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={story.image}
        />
      </div>

      <article className="mx-auto max-w-[920px] px-6 pb-16 pt-9 sm:px-10 sm:pb-24 sm:pt-14">
        <Link
          className="text-xs font-semibold tracking-[0.16em] text-black underline-offset-4 hover:underline"
          href="/#news"
        >
          {story.category}
        </Link>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {story.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-black sm:text-lg">
          {story.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <time className="text-sm text-black" dateTime={story.date}>
              {new Intl.DateTimeFormat("en", {
                day: "numeric",
                month: "short",
                timeZone: "UTC",
                year: "numeric",
              }).format(new Date(story.date))}
            </time>
            <span aria-hidden="true" className="text-slate-400">
              /
            </span>
            <span className="text-sm text-black">{readingMinutes} min read</span>
          </div>
          <ShareStory summary={story.summary} title={story.title} />
        </div>

        <div className="mt-8 grid gap-3 border-b border-slate-200 pb-6 sm:mt-10 sm:grid-cols-[5.5rem_1fr] sm:gap-6">
          <p className="text-sm font-semibold text-black">Topics</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {story.topics.map((topic) => (
              <li className="text-sm text-black underline underline-offset-4" key={topic}>
                <Link href={`/topics/${getTopicSlug(topic)}`}>{topic}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 space-y-5 text-[15px] leading-7 text-black sm:mt-9 sm:space-y-6 sm:text-base sm:leading-8">
          {story.paragraphs.map((paragraph, index) => (
            <div className="space-y-6 sm:space-y-8" key={paragraph}>
              <p>{paragraph}</p>
              {index === 1 && story.detailImage ? (
                <figure className="py-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[1.55/1]">
                    <Image
                      alt={story.detailImage.alt}
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 640px) 100vw, 840px"
                      src={story.detailImage.src}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-relaxed text-slate-600">
                    {story.detailImage.caption}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          ))}
        </div>

        {story.detailGallery ? (
          <section aria-labelledby="story-gallery-heading" className="mt-10 sm:mt-14">
            <h2
              className="text-base font-semibold leading-relaxed sm:text-lg"
              id="story-gallery-heading"
            >
              {story.detailGallery.heading}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-black sm:text-base sm:leading-8">
              {story.detailGallery.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {story.detailGallery.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      alt={image.alt}
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      src={image.src}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-relaxed text-slate-600">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section
          aria-labelledby="key-ideas-heading"
          className="mt-10 border-y border-slate-200 py-7 sm:mt-14 sm:py-9"
        >
          <h2
            className="font-serif text-2xl sm:text-3xl"
            id="key-ideas-heading"
          >
            Key ideas
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-5">
            {story.keyPoints.map((point, index) => (
              <div className="border-t border-slate-200 pt-4" key={point.title}>
                <p className="text-xs font-semibold tracking-[0.16em] text-black">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Link
          className="mt-10 inline-flex text-sm font-semibold text-black underline underline-offset-4"
          href="/#news"
        >
          Back to all stories
        </Link>
      </article>

      <section
        aria-labelledby="more-stories-heading"
        className="border-t border-slate-200 bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <h2
            className="mb-7 font-serif text-2xl sm:mb-9 sm:text-3xl"
            id="more-stories-heading"
          >
            More stories
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStories.map((relatedStory) => (
              <Link
                className="group min-w-0"
                href={`/stories/${relatedStory.slug}`}
                key={relatedStory.slug}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    alt={relatedStory.imageAlt}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={relatedStory.image}
                  />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.16em]">
                  {relatedStory.category}
                </p>
                <h3 className="mt-2 text-base font-medium leading-snug group-hover:underline sm:text-lg">
                  {relatedStory.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
