import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, Lightbulb, Users } from "lucide-react";
import { CareerInterestForm } from "@/components/CareerInterestForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore a future with Inoodex Architects and share your interest in working together.",
};

const studioValues = [
  {
    icon: Compass,
    title: "Start with context",
    description:
      "Look closely at the people, culture, and place before deciding what a project should become.",
  },
  {
    icon: Lightbulb,
    title: "Stay curious",
    description:
      "Ask better questions, test new ideas, and keep learning through every stage of the work.",
  },
  {
    icon: Users,
    title: "Make it together",
    description:
      "Bring different perspectives to the table and shape stronger ideas through collaboration.",
  },
];

export default function CareersPage() {
  return (
    <main className="flex-1 bg-[#f6f5f2] text-[#172f3d]">
      <section className="mx-auto grid min-h-[min(760px,calc(100svh-82px))] max-w-[1640px] items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#bd7958] sm:text-sm">
            CAREERS / INOODEX
          </p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[88px]">
            Make room for better ideas.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We believe thoughtful architecture starts with people who care about
            the places they shape. Bring your point of view, your curiosity, and
            your ambition—we&apos;d like to hear from you.
          </p>
          <a
            className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#172f3d] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#30495b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd7958]"
            href="#share-interest"
          >
            Share your interest
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="relative min-h-[360px] overflow-hidden bg-[#d9d9d4] sm:min-h-[480px] lg:min-h-[610px]">
          <Image
            alt="The Inoodex team sharing ideas together"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            src="/images/S_260721_cropped_2400x1200-1440x720.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142936]/65 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-xs text-sm font-medium leading-6 text-white sm:bottom-7 sm:left-7">
            Better places take many perspectives.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="culture-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-8 border-b border-slate-200 pb-10 sm:pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#bd7958] sm:text-sm">
              HOW WE THINK
            </p>
            <div>
              <h2
                className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl"
                id="culture-heading"
              >
                Good work grows from an open mind and a shared purpose.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Every project is an opportunity to listen, explore, and make
                something more meaningful. We value people who bring care to
                the details and stay open to what the team can discover
                together.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {studioValues.map(({ icon: Icon, title, description }) => (
              <article className="bg-white p-6 sm:p-8 lg:p-10" key={title}>
                <Icon aria-hidden="true" className="size-6 text-[#bd7958]" />
                <h3 className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="opportunities-heading"
        className="mx-auto grid max-w-[1640px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16 lg:py-24"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#bd7958] sm:text-sm">
            OPPORTUNITIES
          </p>
          <h2
            className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl"
            id="opportunities-heading"
          >
            Your next chapter could start here.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            There are no specific openings listed right now. If you feel your
            experience and perspective could contribute to our work, tell us a
            little about yourself.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#172f3d] underline decoration-[#bd7958] decoration-2 underline-offset-4 transition-colors hover:text-[#bd7958]"
            href="/contact"
          >
            Learn more about Inoodex
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div
          className="bg-white p-5 sm:p-8 lg:p-10"
          id="share-interest"
        >
          <div className="mb-7 border-b border-slate-200 pb-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#bd7958]">
              START A CONVERSATION
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tell us about yourself
            </h3>
          </div>
          <CareerInterestForm />
        </div>
      </section>
    </main>
  );
}
