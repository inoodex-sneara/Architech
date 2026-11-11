"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

type Review = {
  id: string;
  author: string;
  role: string;
  organization: string;
  initials: string;
  project: string;
  category: string;
  logo: string;
  rating: number;
  quote: string;
};

const reviews: Review[] = [
  {
    id: "anwar",
    author: "Engr. Noor E Alam",
    role: "Executive Director",
    organization: "Anwar Landmark",
    initials: "NA",
    project: "Gulshan Skyline Residences",
    category: "RESIDENTIAL",
    logo: "/clients/anwar-landmark.svg",
    rating: 5,
    quote:
      "Inoodex brought a level of environmental sensitivity and computational precision to our residential towers that elevated the entire skyline. Their commitment to constructability and sustainable craft is second to none.",
  },
  {
    id: "sanmar",
    author: "Tariqur Rahman",
    role: "Head of Project Development",
    organization: "Sanmar Properties",
    initials: "TR",
    project: "Chattogram Gateway Complex",
    category: "COMMERCIAL",
    logo: "/clients/sanmar.svg",
    rating: 5,
    quote:
      "From the earliest master-planning sketches to the final material selection, Inoodex delivered a human-centric campus that redefined how people experience contemporary commercial spaces in Chattogram.",
  },
  {
    id: "kidney",
    author: "Prof. Dr. Harun Ur Rashid",
    role: "Founder & President",
    organization: "Kidney Foundation Bangladesh",
    initials: "HR",
    project: "Specialized Healthcare Facility",
    category: "HEALTHCARE",
    logo: "/clients/kidney-foundation.png",
    rating: 5,
    quote:
      "Healthcare architecture demands both operational rigor and profound empathy. Inoodex designed clinical and healing environments bathed in natural daylight that have measurably improved patient recovery.",
  },
  {
    id: "rangs",
    author: "Asif Moyeen",
    role: "Director of Architecture",
    organization: "Rangs Properties",
    initials: "AM",
    project: "Parametric Facade Innovation Hub",
    category: "WORKPLACE",
    logo: "/clients/rangs.svg",
    rating: 5,
    quote:
      "Working with Inoodex is an exercise in pushing design boundaries. Their parametric facade studies gave our flagship development a distinctive identity while drastically cutting HVAC solar heat gain.",
  },
  {
    id: "sunnydale",
    author: "Dr. Tazeen Ahmed",
    role: "Principal & Trustee",
    organization: "Sunnydale School",
    initials: "TA",
    project: "Inclusive Learning Commons",
    category: "EDUCATION",
    logo: "/clients/sunnydale.png",
    rating: 5,
    quote:
      "Our new academic campus is a living classroom. Inoodex crafted interconnected indoor-outdoor learning courtyards that inspire curiosity and foster a genuine sense of student community.",
  },
  {
    id: "orion",
    author: "Salman Obaidul Karim",
    role: "Managing Director",
    organization: "Orion Group",
    initials: "SK",
    project: "Orion Corporate Headquarters",
    category: "CORPORATE",
    logo: "/clients/orion.svg",
    rating: 5,
    quote:
      "Inoodex approaches corporate headquarters as cultural anchors. The spatial flow, passive ventilation, and acoustic refinement make our new headquarters a joy to work in every day.",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Show 3 cards per view on desktop, 2 on tablet, 1 on mobile
  const maxIndex = reviews.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <section
      aria-labelledby="reviews-heading"
      className="border-t border-slate-100 bg-[#f5f2ed] py-16 text-black sm:py-20 lg:py-24"
      id="reviews"
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setIsPaused(false);
        }
      }}
      onFocusCapture={() => setIsPaused(true)}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#bd7958]" />
              <p className="text-xs font-bold tracking-[0.22em] text-[#a86544] uppercase sm:text-sm">
                VOICES OF APPRECIATION
              </p>
            </div>
            <h2
              className="font-sans text-3xl font-semibold uppercase leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl"
              id="reviews-heading"
            >
              From our happy clients
            </h2>
            <p className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
              Reflections from developers, institutional patrons, and civic leaders on
              shaping transformative spaces with Inoodex.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div aria-label="Choose a review" className="mr-2 flex items-center gap-1.5">
              {reviews.map((review, index) => (
                <button
                  aria-current={currentIndex === index ? "true" : undefined}
                  aria-label={`Show review from ${review.author}`}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-[#bd7958]"
                      : "w-2 bg-slate-300 hover:bg-[#bd7958]/60"
                  }`}
                  key={review.id}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <button
              aria-label="Previous review"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all hover:border-[#bd7958] hover:bg-[#bd7958] hover:text-white active:scale-95 sm:h-11 sm:w-11"
              onClick={prevSlide}
              type="button"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next review"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all hover:border-[#bd7958] hover:bg-[#bd7958] hover:text-white active:scale-95 sm:h-11 sm:w-11"
              onClick={nextSlide}
              type="button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid / Carousel */}
        <div
          aria-live="off"
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          <div className="review-card-enter group relative min-h-[360px] overflow-hidden rounded-2xl bg-[#172f3d] sm:rounded-3xl md:col-span-2 md:min-h-[420px] lg:col-span-1">
            <Image
              alt="A calm, warm interior with natural materials and a comfortable reading chair"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
              src="/images/client-testimonials-interior.png"
            />
          </div>

          {[0, 1].map((offset) => {
            const item = reviews[(currentIndex + offset) % reviews.length];

            return (
              <article
                className="review-card-enter group relative flex min-h-[360px] flex-col justify-between rounded-2xl border border-white/80 bg-[#fcfaf7] p-6 shadow-[0_8px_30px_rgba(35,34,30,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(35,34,30,0.09)] sm:rounded-3xl sm:p-8 lg:min-h-[420px]"
                key={`${item.id}-${offset}`}
                style={{ animationDelay: `${offset * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-100 pb-5">
                    <Image
                      alt={`${item.organization} logo`}
                      className="h-8 w-[120px] object-contain object-left"
                      height={40}
                      src={item.logo}
                      unoptimized={item.logo.endsWith(".svg")}
                      width={140}
                    />
                    <Quote
                      aria-hidden="true"
                      className="size-8 fill-stone-200/70 text-stone-200/70"
                    />
                  </div>
                  <div className="relative my-6">
                    <blockquote className="text-[15px] font-medium leading-[1.75] text-slate-800 sm:text-base sm:leading-[1.8]">
                      “{item.quote}”
                    </blockquote>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-3 border-t border-stone-200/80 pt-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {item.author}
                    </p>
                    <p className="mt-1 truncate text-xs font-medium text-slate-500">
                      {item.role}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#172f3d] px-3 py-1.5 text-[9px] font-bold tracking-wider text-[#e4b396] uppercase">
                    {item.category}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
