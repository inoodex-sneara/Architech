import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the collaborative, multidisciplinary thinking behind Inoodex architecture and design.",
};

const principles = [
  {
    title: "Listen first",
    description:
      "Understand the people, culture, and character of a place before deciding what it needs.",
  },
  {
    title: "Think together",
    description:
      "Bring different perspectives into the process and let stronger ideas emerge through exchange.",
  },
  {
    title: "Make with care",
    description:
      "Carry thought and intention from the first sketch through the smallest detail.",
  },
];

const practicePerspectives = [
  {
    title: "Context & community",
    description:
      "We look beyond a site boundary to understand local character, everyday routines, and the wider city around a project.",
    href: "/expertise/community",
    link: "Explore community design",
  },
  {
    title: "Craft & computation",
    description:
      "Digital tools and material thinking work together, helping the team test options and carry design intent into buildable details.",
    href: "/expertise/technology",
    link: "Explore design technology",
  },
  {
    title: "Climate & sustainability",
    description:
      "Environmental performance is considered early, informing choices about comfort, materials, energy, and long-term use.",
    href: "/expertise/sustainability",
    link: "Explore sustainability",
  },
  {
    title: "Care & collaboration",
    description:
      "Listening to clients, consultants, and the people who will use a place helps align the work around shared priorities.",
    href: "/contact",
    link: "Start a conversation",
  },
];

export default function PeoplePage() {
  return (
    <main className="flex-1 bg-white text-[#172f3d]">
      <section className="mx-auto max-w-[1640px] px-6 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-14 lg:px-16 lg:pb-20 lg:pt-16">
        <div className="mb-9 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end lg:mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#a96343] sm:text-sm">
              PEOPLE / INOODEX
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              A shared commitment to better places.
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:justify-self-end md:text-base md:leading-8">
            We are a collaborative architecture practice shaped by curiosity,
            care, and a belief that good design begins with understanding
            people and place.
          </p>
        </div>

        <div className="relative aspect-[1.68/1] overflow-hidden bg-[#d9dedb]">
          <Image
            alt="Inoodex team gathered together at a studio event"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            src="/images/inoodex-team-photo.png"
          />
        </div>
        <p className="mt-3 text-xs tracking-wide text-slate-500">
          THE INOODEX TEAM — ARCHITECTURE, DESIGN &amp; URBAN THINKING
        </p>
      </section>

      <section
        aria-labelledby="working-heading"
        className="bg-[#f5f4f1]"
      >
        <div className="mx-auto grid max-w-[1640px] gap-7 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:px-16 lg:py-20">
          <div className="flex items-start gap-4 lg:gap-5">
            <span aria-hidden="true" className="mt-1 h-10 w-1 shrink-0 bg-[#bd7958]" />
            <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#a96343] sm:text-sm">
              OUR WAY OF WORKING
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">
              A collaborative practice
            </p>
            </div>
          </div>
          <div className="lg:border-l lg:border-slate-300 lg:pl-12">
            <h2
              className="max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
              id="working-heading"
            >
              The best work comes from shared perspective.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              We bring different disciplines into the same conversation,
              question assumptions, and stay open to new ideas. This way of
              working helps us create architecture that responds thoughtfully
              to the people and places it serves.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From early research and concept development to technical
              coordination, each stage benefits from clear communication and
              shared responsibility. We use models, drawings, and design
              studies to make ideas easier to discuss, test, and refine.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="perspectives-heading"
        className="mx-auto max-w-[1640px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-1 h-10 w-1 shrink-0 bg-[#bd7958]" />
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#a96343] sm:text-sm">
                PERSPECTIVES ACROSS THE PRACTICE
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                Different questions help us see a project more completely.
              </p>
            </div>
          </div>
          <div>
            <h2
              className="max-w-3xl text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
              id="perspectives-heading"
            >
              Connected thinking, from city to detail.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our work draws on complementary areas of design. Bringing these
              perspectives together helps the team respond to a project&apos;s
              context, performance goals, and the people it is meant to serve.
            </p>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {practicePerspectives.map((perspective) => (
                <article
                  className="border-t border-slate-200 py-5 sm:py-6"
                  key={perspective.title}
                >
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {perspective.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {perspective.description}
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-[#172f3d] underline decoration-[#bd7958] underline-offset-4 transition-colors hover:text-[#a96343]"
                    href={perspective.href}
                  >
                    {perspective.link}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="principles-heading"
        className="mx-auto max-w-[1640px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div>
          <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:pb-7">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="mt-1 h-9 w-1 shrink-0 bg-[#bd7958]" />
              <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#a96343] sm:text-sm">
              WHAT GUIDES US
            </p>
              </div>
            </div>
            <div className="max-w-2xl sm:text-right">
              <h2
                className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl"
                id="principles-heading"
              >
                The principles behind our work
              </h2>
            </div>
          </div>
          <div className="grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            {principles.map((principle, index) => (
              <article
                className={`border-t border-slate-200 py-5 sm:border-t-0 sm:px-6 sm:py-2 lg:px-9 ${index === 0 ? "sm:pl-0" : ""} ${index === principles.length - 1 ? "sm:pr-0" : ""}`}
                key={principle.title}
              >
                <span aria-hidden="true" className="mb-5 block h-px w-9 bg-[#bd7958]" />
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600 sm:mt-3 sm:text-base">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-with-us-heading"
        className="border-t border-slate-200 bg-[#172f3d] text-white"
      >
        <div className="mx-auto flex max-w-[1640px] flex-col gap-7 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e4b396] sm:text-sm">
              WORK WITH US
            </p>
            <h2
              className="mt-3 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              id="work-with-us-heading"
            >
              Continue the conversation.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-11 items-center justify-center bg-[#d6a184] px-5 text-sm font-semibold text-[#172f3d] transition-colors hover:bg-[#e4b396]"
              href="/careers"
            >
              Explore careers
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              href="/contact"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
