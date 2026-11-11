"use client";

import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Compass,
  Headphones,
  Layers,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Reusable Circular Rotating Badge
function RotatingContactBadge({
  text = "• CONTACT US • CONTACT US •",
  className = "",
  size = "md",
}: {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-24 h-24 sm:w-28 sm:h-28",
    lg: "w-28 h-28 sm:w-36 sm:h-36",
  }[size];

  return (
    <Link
      href="/contact"
      aria-label="Contact Us"
      className={`group relative flex items-center justify-center rounded-full ${sizeClasses} ${className}`}
    >
      <svg
        className="h-full w-full animate-[spin_12s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <path
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
          id="badgeCirclePath"
        />
        <text className="fill-[#bd7958] text-[8px] font-bold tracking-[0.26em] uppercase transition-colors group-hover:fill-[#a96343]">
          <textPath href="#bd7958geCirclePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#bd7958] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
    </Link>
  );
}

// Custom Kicker pill
function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#bd7958]">
      <span className="text-[#bd7958]">✳</span>
      <span>{children}</span>
    </div>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "Can you work with my existing furniture or layout?",
      a: "Absolutely. We can incorporate your existing furniture, décor, and layout preferences into the new design to maintain continuity and budget efficiency while elevating the overarching aesthetic.",
    },
    {
      q: "What is the estimated cost for a design project?",
      a: "Project costs vary depending on square footage, scope of work, materials selected, and customized design requirements. We provide a transparent, itemized estimate following our initial consultation.",
    },
    {
      q: "Do you offer both residential and commercial design services?",
      a: "Yes, we specialize in luxury private residences, penthouses, high-end commercial offices, hospitality venues, and retail spaces with full architectural oversight and tailored interior solutions.",
    },
    {
      q: "Will I be involved in selecting materials and finishes?",
      a: "Definitely. Our process is collaborative. We prepare curated material palettes, finish samples, and photorealistic 3D renderings for your review and approval before procurement.",
    },
    {
      q: "Can you handle end-to-end execution along with design?",
      a: "Yes, we offer comprehensive turnkey solutions encompassing architectural design, interior styling, contractor coordination, project management, and final handover.",
    },
  ];

  const marqueeKeywords = [
    "CONSTRUCTION",
    "RENOVATION & REMODELING",
    "COMMERCIAL PROJECTS",
    "INTERIOR & EXTERIOR DESIGN",
    "BESPOKE ARCHITECTURE",
    "SUSTAINABLE SPACES",
    "PROJECT MANAGEMENT",
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#bd7958] selection:text-white">
      {/* =========================================================================
          SECTION 1: HERO BANNER
      ========================================================================= */}
      <section className="relative flex h-[320px] sm:h-[400px] lg:h-[460px] w-full items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src="/images/Context_Homepage-1.webp"
          alt="Contemporary architecture integrated with its surrounding city landscape"
          fill
          priority
          className="object-cover object-center opacity-70 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.14em] uppercase text-white drop-shadow-sm">
            ABOUT US
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/80">
            <Link
              href="/"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <span className="text-[#bd7958]">/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BRONZE MARQUEE TICKER
      ========================================================================= */}
      <section className="w-full overflow-hidden bg-[#172f3d] py-3.5 sm:py-4 text-[#ffffff]">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          {[...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords].map(
            (item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-[#e4b396] text-base">✳</span>
              </span>
            ),
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ABOUT US CORE SECTION (Luxury Home Story)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#f5f4f1] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Overlapping Image Collage */}
            <div className="relative lg:col-span-6">
              {/* Decorative dot pattern */}
              <div className="absolute -left-6 -bottom-6 -z-0 grid grid-cols-6 gap-2 opacity-30">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#bd7958]"
                  />
                ))}
              </div>

              {/* Faint vertical brand watermark */}
              <span className="absolute -left-8 top-10 select-none -rotate-90 text-6xl sm:text-7xl font-bold tracking-widest text-zinc-900/[0.04]">
                INOODEX
              </span>

              {/* Main Photo */}
              <div className="relative aspect-[4/4.5] w-full max-w-[480px] overflow-hidden rounded-3xl bg-zinc-200 shadow-xl">
                <Image
                  src="/news/what-we-do-image-2.jpg"
                  alt="Warm modern living room interior"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Photo */}
              <div className="absolute -bottom-8 right-0 sm:right-4 w-[60%] sm:w-[54%] aspect-[4/3.5] overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-zinc-100">
                <Image
                  src="/news/why-choose-image-1.jpg"
                  alt="Contemporary lounge with refined finishes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Narrative + Mission / Vision */}
            <div className="mt-8 lg:mt-0 lg:col-span-6">
              <SectionKicker>About Us</SectionKicker>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.18]">
                DESIGNING SPACES THAT FEEL LIKE LUXURY HOME
              </h2>
              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
                We create elegant, high end interiors that reflect comfort,
                sophistication, and timeless beauty turning everyday living into
                a luxurious experience.
              </p>

              {/* Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#bd7958]/15 text-[#bd7958]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>We ensuring every project reflects both beauty.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#bd7958]/15 text-[#bd7958]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>We create spaces that are stylish, and efficient.</span>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mission Card */}
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-lg font-bold text-zinc-900">
                      Our Mission
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#bd7958]/10 text-[#bd7958]">
                      <Layers className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Our mission is to craft refined, elegant & functional living
                    space that redefine.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-zinc-800">
                    • To Deliver Thoughtfully Crafted and Spaces
                  </p>
                </div>

                {/* Vision Card */}
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-lg font-bold text-zinc-900">
                      Our Vision
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#bd7958]/10 text-[#bd7958]">
                      <Compass className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Our vision is to become a trusted leader in architecture &
                    interior design.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-zinc-800">
                    • To Redefine Modern Living Through Design
                  </p>
                </div>
              </div>

              {/* CTA Row */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#172f3d] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md hover:bg-[#30495b] transition-colors"
                >
                  <span>Contact Now</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CRAFTING ARCHITECTURE & INTERIORS WITH PURPOSE
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          {/* Centered Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-zinc-900 leading-[1.18]">
              CRAFTING ARCHITECTURE AND INTERIORS WITH PURPOSE
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left 2 Pillars */}
            <div className="space-y-12 lg:col-span-4">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  Innovative Architectural Design
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  We design buildings that are not just functional but also
                  visually striking & timeless.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>Custom building solutions combining aesthetics</span>
                </div>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  3D Visualization & Planning
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  We provide realistic 3D models and visual plans that let you
                  experience your space before.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>Realistic 3D models for precise design clarity</span>
                </div>
              </div>
            </div>

            {/* Center: Arch Cutout Image with Rotating Badge */}
            <div className="relative mx-auto w-full max-w-[360px] lg:col-span-4">
              <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-t-full border-4 border-[#f5f4f1] shadow-2xl bg-zinc-100">
                <Image
                  src="/news/what-we-do-image-2.jpg"
                  alt="Interior lounge with tall window and fire pit"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rotating Badge on Arch Edge */}
              <div className="absolute right-[-10px] top-[24%] z-20">
                <RotatingContactBadge
                  text="• CONTACT US • CONTACT US •"
                  size="md"
                />
              </div>
            </div>

            {/* Right 2 Pillars */}
            <div className="space-y-12 lg:col-span-4">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  Bespoke Interior Design
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  From furniture layouts to lighting schemes craft spaces that
                  are personalized, and inspiring.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>Personalized interiors blending elegance & style</span>
                </div>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  Comprehensive Project Manage
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  We oversee every aspect of your project, ensuring seamless
                  coordination.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>Seamless coordination from concept completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#f5f4f1] py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Progress Bars & Copy */}
            <div className="lg:col-span-6">
              <SectionKicker>Why Choose Us</SectionKicker>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.18]">
                YOUR TRUSTED PARTNER FROM START TO FINISH
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                We guide you through the design journey with transparency,
                professionalism, and personalized service, ensuring a smooth,
                enjoyable, and stress-free process.
              </p>

              {/* Feature highlight */}
              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#bd7958]/30 bg-white text-[#bd7958] shadow-sm">
                  <Clapperboard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    Expertise You Can Trust
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                    With years of experience and a team of skilled professionals,
                    we deliver innovative, functional, and beautifully crafted
                    spaces that exceed expectations.
                  </p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold text-zinc-900">
                    <span>Residential Design</span>
                    <span>54%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#bd7958] to-[#d6a184]"
                      style={{ width: "54%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold text-zinc-900">
                    <span>Space Planning & Layout</span>
                    <span>59%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#bd7958] to-[#d6a184]"
                      style={{ width: "59%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#172f3d] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md hover:bg-[#30495b] transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Photo Collage & Stat Box */}
            <div className="relative lg:col-span-6">
              {/* Top Photo */}
              <div className="relative ml-auto aspect-[4/3] w-[75%] overflow-hidden rounded-3xl border-4 border-white shadow-lg bg-zinc-200">
                <Image
                  src="/about/why-choose-top.jpg"
                  alt="Neutral lounge chair and paper lamp"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rotating Badge between images */}
              <div className="absolute left-[8%] top-[28%] z-20">
                <RotatingContactBadge
                  text="• CONTACT US • CONTACT US •"
                  size="md"
                />
              </div>

              {/* Bottom Main Photo */}
              <div className="relative -mt-20 z-10 aspect-[16/10] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-zinc-200">
                <Image
                  src="/news/why-choose-image-1.jpg"
                  alt="Luxury living room sofa and marble feature wall"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Golden Stat Card */}
              <div className="absolute -bottom-6 right-4 sm:right-8 z-20 rounded-2xl bg-gradient-to-br from-[#a96343] to-[#a96343] p-6 sm:p-7 text-white shadow-xl">
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  5,000+
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-white/90">
                  Hours of Design Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR FEATURES (Timeless Spaces + Video Card)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionKicker>Our Features</SectionKicker>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.18]">
                CREATING FUNCTIONAL, STYLISH, & TIMELESS SPACES
              </h2>
            </div>
            <div className="flex items-center gap-10 sm:gap-14 border-t lg:border-t-0 pt-6 lg:pt-0 border-zinc-200">
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                  100+
                </p>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 max-w-[150px]">
                  Commercial & Corporate Spaces Designed
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                  120+
                </p>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 max-w-[150px]">
                  Happy Clients Across industries
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Card 1: Video Preview Card */}
            <div
              onClick={() => setIsVideoOpen(true)}
              className="group relative cursor-pointer aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-900 shadow-md lg:col-span-6"
            >
              <Image
                src="/about/feature-video.jpg"
                alt="Watch Inoodex Design Walkthrough"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/35" />

              {/* Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group-hover:scale-110 relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl transition-transform duration-300">
                  <svg
                    className="h-full w-full animate-[spin_12s_linear_infinite]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                      id="videoCirclePath"
                    />
                    <text className="fill-white text-[8px] font-bold tracking-[0.26em] uppercase">
                      <textPath href="#videoCirclePath">
                        • WATCH OUR VIDEO •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#bd7958] shadow-lg">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-[#bd7958] ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Cutting Edge Technology */}
            <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-[#f5f4f1] p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow lg:col-span-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">
                  Cutting Edge Technology
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Utilizing the latest software for 3D model, virtual
                  walkthroughs.
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>3D model for precise planning</span>
                </div>
              </div>
            </div>

            {/* Card 3: Timely Project Delivery */}
            <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-[#f5f4f1] p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow lg:col-span-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">
                  Timely Project Delivery
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our project management ensures that all timelines are met.
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <Check className="h-3.5 w-3.5 text-[#bd7958]" />
                  <span>Premium 3D visuals and mood</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pill Tags */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-zinc-700">
            {[
              "Modern Architecture",
              "Innovative Solutions",
              "Sustainable Architecture",
              "Commercial Architecture",
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f5f4f1] px-5 py-2.5 shadow-2xs hover:border-[#bd7958]/40 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#bd7958]" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: HOW IT WORKS (4 Process Steps)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#f5f4f1] py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionKicker>How It Works</SectionKicker>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.18]">
                TRANSFORMING YOUR IDEAS INTO STUNNING SPACES
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-zinc-600 leading-relaxed">
                From initial consultation to final execution, our structured
                design process ensures every project is handled with creativity,
                precision, and attention to detail.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#172f3d] px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-md hover:bg-[#30495b] transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-zinc-900">
                  Consultation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We begin by understanding your life style, preferences, &
                  goals.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-semibold text-zinc-800">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Capturing Your Unique Vision</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Assessing Space</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-zinc-900">
                  Concept Development
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our team creates mood boards, layout sketches, etc.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-semibold text-zinc-800">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Visualizing the Final Space in 3D</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Integrating Functionality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-zinc-900">
                  Design Execution
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  From material selection to furniture, lighting, and décor.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-semibold text-zinc-800">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Ensuring Functional Excellence</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Managing Timelines</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#bd7958]/10 text-[#bd7958]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-zinc-900">
                  Final Reveal
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We conduct a final walkthrough to ensure everything meets.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-semibold text-zinc-800">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Client Walkthrough & Feedback</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#bd7958]">▪</span>
                    <span>Presenting the Space</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CONTACT CTA BANNER (Full-Bleed Luxury Living Room)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-20 text-zinc-900 sm:py-28">
        <Image
          src="/about/cta-bg.jpg"
          alt="Contact Inoodex Design Studio"
          fill
          className="object-cover object-center opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#bd7958]">
                <span>✳</span>
                <span>Contact Us Today!</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-[1.15] text-zinc-900">
                CONNECT WITH OUR DESIGN EXPERTS INSTANTLY
              </h2>
              <p className="mt-5 max-w-xl text-base text-zinc-600 leading-relaxed">
                Whether you&apos;re planning a new build, renovating your space,
                or looking for expert design guidance, our team is here to help.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#bd7958] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-xl hover:bg-[#a96343] transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Glass Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200 bg-white/85 p-7 shadow-xl backdrop-blur-md sm:p-8">
                <h3 className="text-xl font-bold text-zinc-900">
                  Seamless Collaboration With Our Design Team
                </h3>
                <div className="mt-4 flex -space-x-2">
                  {[
                    "/about/team-1.jpg",
                    "/about/team-2.jpg",
                    "/about/team-3.jpg",
                    "/about/team-4.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-zinc-200"
                    >
                      <Image
                        src={src}
                        alt="Team collaborator"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#bd7958] text-xs font-bold text-white">
                    15+
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Experience a truly collaborative design journey where your
                  vision meets our architectural precision.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom 3 Features Bar */}
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#bd7958]/10 text-[#bd7958]">
                <Headphones className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-700">
                Prompt and Dedicated Support for Every Client Inquiry
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#bd7958]/10 text-[#bd7958]">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-700">
                Personalized Expert Consultation to Bring Your Vision to Life
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#bd7958]/10 text-[#bd7958]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-700">
                Seamless Assistance Throughout Your Entire Design Journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: OUR EXPERT TEAM (Creative Minds You Trust)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker>Our Expert Team</SectionKicker>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.18]">
              CREATIVE MINDS YOU TRUST
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Our team brings together innovative thinkers and skilled
              professionals dedicated to crafting spaces that reflect your style
              and enhance your everyday living.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Brooklyn Simmons",
                role: "Interior Design Assistant",
                image: "/about/team-1.jpg",
              },
              {
                name: "Kathryn Murphy",
                role: "Lead Architect",
                image: "/about/team-2.jpg",
              },
              {
                name: "Darrell Steward",
                role: "Senior Interior Designer",
                image: "/about/team-3.jpg",
              },
              {
                name: "Jerome Bell",
                role: "Project Manager",
                image: "/about/team-4.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative aspect-[3/3.8] overflow-hidden rounded-3xl bg-zinc-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-lg font-bold tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#e4b396] mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-10 flex items-center justify-center gap-3 text-xs sm:text-sm text-zinc-600">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bd7958]/10 text-[#bd7958]">
              <Phone className="h-4 w-4" />
            </div>
            <p>
              Experience design where vision and precision come together
              beautifully –{" "}
              <Link
                href="/people"
                className="font-bold text-zinc-900 underline hover:text-[#bd7958]"
              >
                Meet Our Team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FAQ ACCORDION & 5-COLUMN STATS BAR
      ========================================================================= */}
      <section className="relative overflow-hidden border-t border-zinc-200/80 bg-[#f7f6f3] py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-zinc-900 sm:text-4xl lg:text-[46px]">
                YOUR DESIGN QUESTIONS CLEARLY EXPLAINED
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600 sm:text-base">
                Find clear answers about our design services, project process,
                and how we bring your ideas to life.
              </p>
              <Link
                href="/contact"
                aria-label="Contact us about your design questions"
                className="group mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#bd7958] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#a96343] hover:shadow-lg"
              >
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="divide-y divide-zinc-200/90 lg:col-span-7">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`transition-colors duration-200 ${
                      isOpen
                        ? "rounded-2xl bg-white px-4 shadow-[0_8px_28px_rgba(25,35,40,0.06)] sm:px-6"
                        : "px-4 sm:px-6"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                      aria-expanded={isOpen}
                      aria-controls={`about-faq-answer-${index}`}
                    >
                      <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                        <span
                          className={`mt-0.5 text-xs font-bold tracking-wider ${
                            isOpen ? "text-[#bd7958]" : "text-zinc-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-bold leading-6 text-zinc-900 sm:text-base">
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#bd7958] text-white"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    <div
                      id={`about-faq-answer-${index}`}
                      hidden={!isOpen}
                      className="review-card-enter pb-5 pl-8 pr-10 text-sm leading-6 text-zinc-600 sm:pb-6 sm:pl-11"
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5-Column Stats Row */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-200 pt-12 sm:grid-cols-3 lg:grid-cols-5">
            <div className="lg:border-r lg:border-zinc-200 lg:pr-6 text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                55+
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600">
                Design Awards Won
              </p>
            </div>

            <div className="lg:border-r lg:border-zinc-200 lg:px-6 text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                250+
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600">
                Completed Projects
              </p>
            </div>

            <div className="lg:border-r lg:border-zinc-200 lg:px-6 text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                300+
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600">
                3D Renderings Delivered
              </p>
            </div>

            <div className="lg:border-r lg:border-zinc-200 lg:px-6 text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                98%
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="lg:pl-6 text-center lg:text-left col-span-2 sm:col-span-1">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                250+
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600">
                Vendor & Material Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VIDEO MODAL POPUP
      ========================================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm review-card-enter">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <video
                src="/video/2_Homepage_20260430.mp4"
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
