"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

type Review = {
  id: string;
  author: string;
  role: string;
  organization: string;
  category: string;
  quote: string;
};

const reviews: Review[] = [
  {
    id: "sanmar",
    author: "Tariqur Rahman",
    role: "Head of Project Development",
    organization: "Sanmar Properties",
    category: "COMMERCIAL",
    quote:
      "From the earliest master-planning sketches to the final material selection, Inoodex delivered a human-centric campus that redefined how people experience contemporary commercial spaces in Chattogram.",
  },
  {
    id: "kidney",
    author: "Prof. Dr. Harun Ur Rashid",
    role: "Founder & President",
    organization: "Kidney Foundation Bangladesh",
    category: "HEALTHCARE",
    quote:
      "Healthcare architecture demands both operational rigor and profound empathy. Inoodex designed clinical and healing environments bathed in natural daylight that have measurably improved patient recovery.",
  },
  {
    id: "anwar",
    author: "Engr. Noor E Alam",
    role: "Executive Director",
    organization: "Anwar Landmark",
    category: "RESIDENTIAL",
    quote:
      "Inoodex brought a level of environmental sensitivity and computational precision to our residential towers that elevated the entire skyline. Their commitment to constructability and sustainable craft is second to none.",
  },
  {
    id: "rangs",
    author: "Asif Moyeen",
    role: "Director of Architecture",
    organization: "Rangs Properties",
    category: "WORKPLACE",
    quote:
      "Working with Inoodex is an exercise in pushing design boundaries. Their parametric facade studies gave our flagship development a distinctive identity while drastically cutting HVAC solar heat gain.",
  },
  {
    id: "sunnydale",
    author: "Dr. Tazeen Ahmed",
    role: "Principal & Trustee",
    organization: "Sunnydale School",
    category: "EDUCATION",
    quote:
      "Our new academic campus is a living classroom. Inoodex crafted interconnected indoor-outdoor learning courtyards that inspire curiosity and foster a genuine sense of student community.",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = reviews.length; // 5

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Auto-animation / Auto-slider with pause-on-hover & reduced-motion respect
  useEffect(() => {
    if (isPaused) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalReviews]);

  // Two visible review cards next to the feature image card
  const review1 = reviews[currentIndex];
  const review2 = reviews[(currentIndex + 1) % totalReviews];

  return (
    <section
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-[#faf7f2] py-20 text-slate-900 sm:py-24 lg:py-28"
      id="reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1520px] px-4 sm:px-8 lg:px-12">
        {/* =========================================================================
            HEADER ROW: TITLE ON LEFT, SUBTITLE & SLIDER CONTROLS ON RIGHT
        ========================================================================= */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: Kicker & Main Headline */}
          <div>
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#b5883e]">
              + VOICES OF APPRECIATION
            </p>
            <h2
              id="reviews-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-normal leading-[1.12] tracking-tight text-slate-900 uppercase"
            >
              FROM OUR HAPPY CLIENTS
            </h2>
          </div>

          {/* Right: Subtitle & Navigation Buttons */}
          <div className="flex flex-col sm:items-end gap-5">
            <p className="max-w-md text-sm sm:text-[15px] leading-relaxed text-slate-600 sm:text-right font-normal">
              Curated reflections from industry-leading visionaries on our
              transformative architectural and design journey.
            </p>

            {/* Prev / Next Circular Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous review"
                className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-full bg-[#b5883e] text-white shadow-xs transition-all duration-300 hover:bg-[#9d7432] active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next review"
                className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-full bg-[#b5883e] text-white shadow-xs transition-all duration-300 hover:bg-[#9d7432] active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARDS GRID (3-Column Layout: Feature Image + Review 1 + Review 2)
        ========================================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* -----------------------------------------------------------------------
              CARD 1: FEATURE IMAGE CARD WITH FLOATING GLASS OVERLAY
          ----------------------------------------------------------------------- */}
          <div className="relative aspect-[4/4.8] w-full min-h-[380px] sm:min-h-[420px] overflow-hidden rounded-[28px] border border-stone-200/70 bg-white p-2.5 sm:p-3 shadow-xs">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-stone-100">
              <Image
                src="/images/client-testimonials-clean.png"
                alt="Architectural luxury interior reading lounge with natural materials"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Top-Right Badge: "Trusted by 15+ Institutional Leaders" */}
              <div className="absolute right-3.5 top-3.5 z-10 rounded-2xl border border-white/70 bg-white/85 px-4 py-2.5 text-center shadow-md backdrop-blur-md">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                  Trusted by
                </p>
                <p className="font-serif text-sm sm:text-[15px] font-bold text-slate-900 mt-0.5">
                  15+ Institutional Leaders
                </p>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CARD 2: FIRST REVIEW CARD (Animated)
          ----------------------------------------------------------------------- */}
          <article
            key={`review-card-1-${currentIndex}`}
            className="review-card-enter group relative flex min-h-[380px] sm:min-h-[420px] flex-col justify-between rounded-[28px] border border-stone-200/70 bg-[#fdfbf7] p-7 sm:p-8 lg:p-9 shadow-xs transition-all duration-300 hover:shadow-md"
          >
            <div>
              {/* Top Row: Quote icon on left, INOODEX pill on right */}
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 fill-[#b5883e]/15 text-[#b5883e]" />
                <span className="rounded-full bg-[#f3ece2] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#9d7432] uppercase">
                  INOODEX
                </span>
              </div>

              {/* Review Quote Body - Legible & Proportionate */}
              <blockquote className="mt-6 sm:mt-7 font-sans text-base sm:text-[17px] lg:text-[17.5px] leading-[1.7] sm:leading-[1.75] text-slate-800 font-normal">
                &ldquo;{review1.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Meta & Category */}
            <div className="mt-8 pt-5 border-t border-stone-200/60">
              <p className="font-sans text-base sm:text-[17px] font-bold text-slate-900 tracking-tight">
                {review1.author}
              </p>
              <p className="mt-1 text-xs sm:text-[13px] text-slate-500 font-medium">
                {review1.role}
              </p>

              <span className="mt-4 inline-block rounded-full bg-[#f3ece2] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#9d7432] uppercase">
                {review1.category}
              </span>
            </div>
          </article>

          {/* -----------------------------------------------------------------------
              CARD 3: SECOND REVIEW CARD (Animated, Visible on md/lg)
          ----------------------------------------------------------------------- */}
          <article
            key={`review-card-2-${currentIndex}`}
            style={{ animationDelay: "80ms" }}
            className="review-card-enter group relative hidden min-h-[380px] sm:min-h-[420px] flex-col justify-between rounded-[28px] border border-stone-200/70 bg-[#fdfbf7] p-7 sm:p-8 lg:p-9 shadow-xs transition-all duration-300 hover:shadow-md lg:flex"
          >
            <div>
              {/* Top Row: Quote icon on left, INOODEX pill on right */}
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 fill-[#b5883e]/15 text-[#b5883e]" />
                <span className="rounded-full bg-[#f3ece2] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#9d7432] uppercase">
                  INOODEX
                </span>
              </div>

              {/* Review Quote Body - Legible & Proportionate */}
              <blockquote className="mt-6 sm:mt-7 font-sans text-base sm:text-[17px] lg:text-[17.5px] leading-[1.7] sm:leading-[1.75] text-slate-800 font-normal">
                &ldquo;{review2.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Meta & Category */}
            <div className="mt-8 pt-5 border-t border-stone-200/60">
              <p className="font-sans text-base sm:text-[17px] font-bold text-slate-900 tracking-tight">
                {review2.author}
              </p>
              <p className="mt-1 text-xs sm:text-[13px] text-slate-500 font-medium">
                {review2.role}
              </p>

              <span className="mt-4 inline-block rounded-full bg-[#f3ece2] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#9d7432] uppercase">
                {review2.category}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
