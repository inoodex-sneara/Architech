import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
    <main className="flex-1 bg-[#f5f4f1] text-slate-900">
      <section
        aria-labelledby="expertise-title"
        className="relative flex min-h-[400px] items-end overflow-hidden bg-slate-950 sm:min-h-[460px] lg:min-h-[min(560px,calc(100svh-82px))]"
      >
        <Image
          alt={area.imageAlt}
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={area.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1640px] px-6 pb-12 text-white sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-white/75 sm:text-sm">
            SPECIALTY EXPERTISE
          </p>
          <h1
            className="max-w-5xl font-sans text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[80px] xl:text-[96px]"
            id="expertise-title"
          >
            {area.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:max-w-xl lg:text-[19px] lg:leading-8">
            {area.description}
          </p>
          <a
            className="mt-8 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-xs font-semibold tracking-[0.16em] text-white transition-colors hover:border-white"
            href="#expertise-content"
          >
            DISCOVER OUR APPROACH
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <div
        className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16"
        id="expertise-content"
      >
        {/* OUR APPROACH SECTION */}
        <section
          aria-labelledby="approach-heading"
          className="relative my-8 overflow-hidden rounded-3xl border border-stone-200/80 bg-[#fbf9f6] p-7 shadow-[0_4px_30px_rgba(0,0,0,0.02)] sm:my-12 sm:p-10 lg:my-16 lg:p-14"
        >
          <div className="grid gap-8 md:grid-cols-[0.55fr_2fr] md:gap-10 lg:gap-14 xl:gap-16">
            {/* Left Column: Eyebrow + Index + Tag */}
            <div className="flex flex-col justify-between border-b border-stone-200/80 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#bd7958]" />
                  <p
                    className="text-xs font-bold tracking-[0.22em] text-[#a86544] uppercase"
                    id="approach-heading"
                  >
                    OUR APPROACH
                  </p>
                </div>
                <span aria-hidden="true" className="mt-5 block h-px w-12 bg-[#bd7958]" />
              </div>
              <div className="mt-6 md:mt-12">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  PHILOSOPHY &amp; METHODOLOGY
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  Integrated evidence-led design
                </p>
              </div>
            </div>

            {/* Right Column: Statement + Core Practice Pillars */}
            <div className="flex flex-col justify-between">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 -left-5 select-none font-serif text-7xl text-stone-200/70 sm:-top-8 sm:-left-7 sm:text-8xl"
                >
                  “
                </span>
                <p className="relative max-w-4xl font-sans text-xl font-normal leading-[1.4] tracking-[-0.015em] text-slate-900 sm:text-2xl sm:leading-[1.38] lg:text-[27px] lg:leading-[1.4]">
                  {area.intro}
                </p>
              </div>

              {/* Core Practice Pillars micro-grid */}
              <div className="mt-8 border-t border-stone-200/90 pt-6 sm:mt-10 sm:pt-8">
                <p className="mb-3.5 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  FOCUS DOMAINS
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                  {area.sections.map((section) => (
                    <div
                      className="group/pillar rounded-xl border border-stone-200/80 bg-white/80 p-3.5 transition-all duration-300 hover:border-[#bd7958]/50 hover:bg-white hover:shadow-sm sm:p-4"
                      key={section.title}
                    >
                      <span aria-hidden="true" className="mb-3 block h-px w-7 bg-[#bd7958] transition-all duration-300 group-hover/pillar:w-11" />
                      <p className="text-sm font-bold text-slate-900 transition-colors group-hover/pillar:text-[#a86544]">
                        {section.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {area.sections.map((section) => (
          <section
            aria-labelledby={`${area.slug}-${section.title}`}
            className="border-t border-slate-300 py-10 sm:py-14 lg:py-16"
            key={section.title}
          >
            <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[0.55fr_2fr] md:gap-12 lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  EXPERTISE
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2
                  className="max-w-3xl font-sans text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl xl:text-[56px]"
                  id={`${area.slug}-${section.title}`}
                >
                  {section.title}
                </h2>
                <span aria-hidden="true" className="h-[2px] w-12 bg-[#bd7958]" />
                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[15px] lg:leading-[1.75]">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-7 xl:grid-cols-4">
              {section.images.map((item) => (
                <article className="group min-w-0" key={item.src}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <Image
                      alt={item.alt}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      src={item.src}
                    />
                    <span className="absolute left-3 top-3 bg-white/90 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-slate-800">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg lg:text-xl xl:text-lg">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section
          aria-labelledby="expertise-commitment"
          className="mx-auto my-12 grid max-w-[1460px] gap-8 bg-[#172f3d] px-6 py-10 text-white sm:my-16 sm:px-10 sm:py-12 md:min-h-[340px] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-center md:gap-10 lg:px-16 lg:py-14"
        >
          <div className="max-w-[520px] lg:max-w-[480px]">
            <h2
              className="font-sans text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[34px]"
              id="expertise-commitment"
            >
              {area.commitment.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-7 lg:text-[15px] lg:leading-[1.8]">
              {area.commitment.description}
            </p>
          </div>
          <div className="flex min-h-[200px] flex-col justify-center border-t border-[#d6a184]/50 pt-8 md:min-h-[280px] md:border-l md:border-t-0 md:pt-0 md:pl-10 lg:pl-12">
            <p className="max-w-[640px] text-3xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[44px] xl:text-5xl">
              {area.commitment.graphicTitle}
            </p>
            <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-[#e4b396] sm:mt-7 sm:text-sm">
              {area.commitment.graphicYear}
            </p>
          </div>
        </section>

        <nav
          aria-label="Other expertise areas"
          className="grid grid-cols-2 border-t border-slate-300 py-8 sm:py-10"
        >
          <Link
            className="group flex items-center gap-3 pr-4 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-500 sm:text-lg"
            href={`/expertise/${previous.slug}`}
          >
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.16em] text-slate-500">PREVIOUS</span>
              {previous.title}
            </span>
          </Link>
          <Link
            className="group flex items-center justify-end gap-3 pl-4 text-right text-sm font-semibold text-slate-800 transition-colors hover:text-slate-500 sm:text-lg"
            href={`/expertise/${next.slug}`}
          >
            <span>
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.16em] text-slate-500">NEXT</span>
              {next.title}
            </span>
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
