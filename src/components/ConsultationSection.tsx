"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ConsultationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        const animElements = leftColRef.current.querySelectorAll(".stagger-reveal");
        gsap.fromTo(
          animElements,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      aria-label="Modern Spaces Crafted With Precision"
      className="relative mt-4 w-full overflow-hidden bg-[#142936] sm:mt-6 lg:mt-10"
      ref={sectionRef}
    >
      {/* 100% Full Bleed Background Image (Full Layout) */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Architectural blueprint and interior background"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/news/why-choose-image-1.jpg"
        />
        {/* Soft Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Rotating Circular Consultation Badge (Top Right) */}
      <Link
        aria-label="Get a free consultation"
        className="group absolute right-3 top-3 z-20 flex h-16 w-16 items-center justify-center sm:right-8 sm:top-8 sm:h-24 sm:w-24 lg:right-16 lg:top-12 lg:h-28 lg:w-28"
        href="/contact"
      >
        <svg
          className="h-full w-full animate-[spin_14s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
            id="consultationCirclePath"
          />
          <text className="fill-white/85 text-[8.5px] font-semibold tracking-[0.24em] uppercase transition-colors group-hover:fill-[#e4b396]">
            <textPath href="#consultationCirclePath">
              • GET A FREE CONSULTATION • INOODEX ARCHITECTURE
            </textPath>
          </text>
        </svg>
        <div className="absolute flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#e4b396] shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
          <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
        </div>
      </Link>

      {/* Main Container - Full Bleed Width with Responsive Spacing */}
      <div className="relative z-10 mx-auto w-full max-w-[1640px] px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-4 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* Left Column Content */}
          <div
            className="pt-7 pb-2 sm:pt-14 sm:pb-10 lg:py-24"
            ref={leftColRef}
          >
            {/* Kicker */}
            <div className="stagger-reveal flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#e4b396] uppercase sm:gap-2 sm:text-xs lg:text-sm">
              <span>✦</span>
              <span>Design. Build. Inspire.</span>
            </div>

            {/* Main Headline */}
            <h2 className="stagger-reveal mt-3 font-sans text-2xl font-bold uppercase leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:mt-5 sm:text-3xl md:text-4xl lg:text-[52px] xl:text-[58px]">
              Modern Spaces
              <br />
              Crafted with Precision
            </h2>

            {/* Subtitle Description */}
            <p className="stagger-reveal mt-2.5 max-w-xl text-xs leading-relaxed text-slate-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-4 sm:text-sm sm:leading-relaxed lg:text-base lg:leading-relaxed">
              Every space we design begins with your vision. Our team carefully
              blends aesthetics, functionality, and personalized details to create
              environments that truly mirror your taste and lifestyle.
            </p>
          </div>

          {/* Right Column Architect Image - Bottom Grounded & Scaled for Mobile */}
          <div
            className="relative flex items-end justify-center lg:justify-end"
            ref={imageRef}
          >
            <div className="relative h-[280px] w-[210px] sm:h-[400px] sm:w-[300px] md:h-[480px] md:w-[360px] lg:h-[620px] lg:w-[460px]">
              <Image
                alt="Inoodex architect consultant presenting a modern scale model"
                className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                fill
                priority
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 360px, 460px"
                src="/images/architect-consultation.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
