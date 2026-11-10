import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { expertiseAreas, getExpertiseArea } from "@/lib/expertise";

type ExpertisePageProps = PageProps<"/expertise/[slug]">;

export const instant = false;

export function generateStaticParams() {
  return expertiseAreas.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getExpertiseArea(slug);

  return area
    ? { title: area.title, description: area.intro }
    : { title: "Expertise not found" };
}

export default async function ExpertisePage({ params }: ExpertisePageProps) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);

  if (!area) notFound();

  const currentIndex = expertiseAreas.findIndex(
    (item) => item.slug === area.slug,
  );
  const previous = expertiseAreas[
    (currentIndex - 1 + expertiseAreas.length) % expertiseAreas.length
  ];
  const next = expertiseAreas[(currentIndex + 1) % expertiseAreas.length];

  return (
    <main className="flex-1 bg-white text-slate-700">
      <section
        aria-labelledby="expertise-title"
        className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-slate-900 sm:min-h-[500px] lg:min-h-[560px]"
      >
        <Image
          alt={area.imageAlt}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={area.image}
        />
        <div className="absolute inset-0 bg-black/35" />
        <h1
          className="relative z-10 mx-6 mb-10 text-center font-sans text-4xl font-semibold tracking-tight text-white sm:mb-14 sm:text-5xl lg:text-6xl"
          id="expertise-title"
        >
          {area.title}
        </h1>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <p className="mx-auto max-w-[760px] py-12 text-base font-medium leading-7 text-slate-700 sm:py-16 sm:text-lg sm:leading-8">
          {area.intro}
        </p>

        {area.sections.map((section) => (
          <section
            aria-labelledby={`${area.slug}-${section.title}`}
            className="border-t border-slate-200 py-10 sm:py-14"
            key={section.title}
          >
            <div className="mb-7 max-w-[760px]">
              <h2
                className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl"
                id={`${area.slug}-${section.title}`}
              >
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {section.description}
              </p>
            </div>
            <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {section.images.map((item) => (
                <article className="border-b border-slate-200 pb-4" key={item.src}>
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      src={item.src}
                    />
                  </div>
                  <p className="mt-3 text-xs font-medium tracking-wide text-slate-500">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-base font-medium leading-snug sm:text-lg">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section
          aria-labelledby="expertise-commitment"
          className="grid gap-8 border-t border-slate-200 py-10 sm:py-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:items-center md:gap-12"
        >
          <div>
            <h2
              className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl"
              id="expertise-commitment"
            >
              {area.commitment.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {area.commitment.description}
            </p>
          </div>
          <div className="flex min-h-[250px] flex-col justify-center bg-lime-200 px-7 py-10 text-sky-800 sm:min-h-[320px] sm:px-12">
            <p className="max-w-[640px] text-3xl font-bold uppercase leading-[0.98] tracking-tight sm:text-5xl">
              {area.commitment.graphicTitle}
            </p>
            <p className="mt-7 text-lg font-medium sm:text-2xl">
              {area.commitment.graphicYear}
            </p>
          </div>
        </section>

        <nav
          aria-label="Other expertise areas"
          className="flex items-center justify-between border-t border-slate-200 py-8 sm:py-10"
        >
          <Link
            className="text-base font-semibold hover:underline sm:text-2xl"
            href={`/expertise/${previous.slug}`}
          >
            <span aria-hidden="true">← </span>
            {previous.title}
          </Link>
          <Link
            className="text-right text-base font-semibold hover:underline sm:text-2xl"
            href={`/expertise/${next.slug}`}
          >
            {next.title}
            <span aria-hidden="true"> →</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
