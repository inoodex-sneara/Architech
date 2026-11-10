import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTopicSlug, stories } from "@/lib/stories";

type TopicPageProps = PageProps<"/topics/[topic]">;

export const instant = false;

const topics = [...new Set(stories.flatMap((story) => story.topics))];

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: getTopicSlug(topic) }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = topics.find((item) => getTopicSlug(item) === topicSlug);

  return topic
    ? {
        title: `${topic} Stories`,
        description: `Explore stories about ${topic.toLowerCase()}.`,
      }
    : { title: "Topic not found" };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: topicSlug } = await params;
  const topic = topics.find((item) => getTopicSlug(item) === topicSlug);

  if (!topic) notFound();

  const topicStories = stories.filter((story) => story.topics.includes(topic));

  return (
    <main className="flex-1 bg-white px-6 py-12 text-black sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Link
          className="text-sm font-medium underline underline-offset-4"
          href="/#news"
        >
          All stories
        </Link>
        <p className="mt-10 text-xs font-semibold tracking-[0.16em]">
          TOPIC
        </p>
        <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          {topic}
        </h1>

        <div className="mt-8 grid gap-x-6 gap-y-10 border-t border-slate-200 pt-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {topicStories.map((story) => (
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
              <p className="mt-4 text-xs font-semibold tracking-[0.16em]">
                {story.category}
              </p>
              <h2 className="mt-2 text-base font-medium leading-snug group-hover:underline sm:text-lg">
                {story.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-black">
                {story.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
