import {
  ArrowUpRight,
  Award,
  Check,
  Compass,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ExperienceBadge() {
  return (
    <Link
      href="/about"
      aria-label="About Inoodex Architects"
      className="group relative flex size-20 items-center justify-center rounded-full border border-[#b59659] bg-[#d4bf8b] p-1 shadow-[0_8px_24px_rgba(34,31,24,0.24)] transition-transform duration-300 hover:scale-105 sm:size-24"
    >
      <div className="flex size-full items-center justify-center rounded-full border border-white/60 text-[#65512d]">
        <div className="flex size-12 items-center justify-center rounded-full border border-[#65512d]/50 bg-[#dfcca0] sm:size-14">
          <Award aria-hidden="true" className="size-7 stroke-[1.4] sm:size-8" />
        </div>
      </div>
      <ArrowUpRight aria-hidden="true" className="absolute bottom-1 right-1 size-5 rounded-full bg-[#1d2930] p-1 text-white sm:bottom-1.5 sm:right-1.5" />
    </Link>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden border-b border-[#e6e0d4] bg-[#f7f5ef] py-14 text-slate-900 scroll-mt-20 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 0 46%, rgba(166, 151, 124, 0.08) 46.2%, transparent 46.5%), linear-gradient(24deg, transparent 0 63%, rgba(166, 151, 124, 0.06) 63.2%, transparent 63.5%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto h-[360px] w-full max-w-[510px] sm:h-[430px] lg:h-[420px]">
            <div aria-hidden="true" className="absolute left-[2%] top-[5%] h-[48%] w-[33%] bg-[#b79a5b] shadow-sm" />
            <div aria-hidden="true" className="absolute left-[53%] top-[9%] h-[42%] w-[42%] bg-[#31424c]" />
            <div aria-hidden="true" className="absolute bottom-[5%] left-[10%] h-[32%] w-[13%] bg-[#31424c]" />
            <div aria-hidden="true" className="absolute bottom-[1%] right-[21%] h-[30%] w-[22%] bg-[#b79a5b]" />

            <div
              aria-hidden="true"
              className="absolute -bottom-1 left-[7%] z-0 grid grid-cols-6 gap-2 opacity-50"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="size-1 rounded-full bg-[#a9956a]"
                />
              ))}
            </div>

            <div className="absolute left-[8%] top-[10%] h-[72%] w-[68%] overflow-hidden border border-white/70 bg-slate-200 shadow-[0_16px_40px_rgba(37,34,27,0.18)]">
              <Image
                src="/New folder/1_3yy0P4.webp"
                alt="Luxury living room architectural interior by Inoodex"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <div className="absolute bottom-[8%] right-[4%] z-10 h-[35%] w-[48%] overflow-hidden rounded-lg border-[3px] border-white bg-slate-200 shadow-[0_14px_32px_rgba(37,34,27,0.24)]">
              <Image
                src="/New folder/15_KrxL5u.webp"
                alt="Refined contemporary dining and bar lounge by Inoodex"
                fill
                sizes="(max-width: 768px) 60vw, 300px"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <div className="absolute left-[3%] top-[8%] z-20">
              <ExperienceBadge />
            </div>
          </div>

          <div className="lg:py-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.24em] text-[#7d6840] uppercase sm:text-xs">
              <span aria-hidden="true" className="text-sm">✳</span>
              <span>About Us</span>
            </div>

            <h2
              id="about-heading"
              className="mt-2 max-w-[610px] font-serif text-[34px] font-medium leading-[0.98] tracking-[-0.035em] text-[#15191b] sm:text-[42px] lg:text-[48px]"
            >
              DESIGNING SPACES THAT ARE{" "}
              <span className="text-[#9b7a3d]">LUXURY HOMES</span>
            </h2>

            <p className="mt-4 max-w-[590px] text-sm leading-[1.7] text-[#34383a] sm:text-[15px]">
              We create elegant, high-end interiors and architectural landmarks
              that reflect comfort, sophistication, and timeless beauty—turning
              everyday living into a luxurious experience.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 text-[11px] leading-relaxed text-[#292d2f] sm:grid-cols-2 sm:gap-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-[#a58b56] text-[#806a3d]">
                  <Check aria-hidden="true" className="size-2.5 stroke-[2.5]" />
                </div>
                <span>We ensure every project reflects both beauty and purpose.</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-[#a58b56] text-[#806a3d]">
                  <Check aria-hidden="true" className="size-2.5 stroke-[2.5]" />
                </div>
                <span>We create spaces that are stylish, sustainable, and efficient.</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="min-h-[158px] rounded-xl border border-[#a58b56] bg-[#1b2428] p-4 text-white shadow-[0_8px_20px_rgba(23,31,34,0.16)] sm:p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-white">
                    Our Mission
                  </h3>
                  <div className="flex size-8 items-center justify-center rounded-full border border-[#b69b61]/60 text-[#c6ab70]">
                    <Layers aria-hidden="true" className="size-4" />
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-[1.55] text-white/85">
                  To craft refined, elegant, and functional living spaces that
                  redefine modern luxury and elevate lifestyle comfort.
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-white">
                  <span className="text-[#c6ab70]">•</span>
                  <span>Thoughtfully Crafted Spaces</span>
                </p>
              </div>

              <div className="min-h-[158px] rounded-xl border border-[#a58b56] bg-[#1b2428] p-4 text-white shadow-[0_8px_20px_rgba(23,31,34,0.16)] sm:p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-white">
                    Our Vision
                  </h3>
                  <div className="flex size-8 items-center justify-center rounded-full border border-[#b69b61]/60 text-[#c6ab70]">
                    <Compass aria-hidden="true" className="size-4" />
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-[1.55] text-white/85">
                  To be the nation&apos;s leading architectural firm, celebrated
                  for
                  timeless aesthetics, mastercraft, and sustainable design.
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-white">
                  <span className="text-[#c6ab70]">•</span>
                  <span>Redefining Modern Living</span>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#9d8249] bg-[#b39759] px-5 text-xs font-semibold tracking-wide text-white shadow-[0_0_0_4px_rgba(49,66,76,0.75)] transition-colors hover:bg-[#9d8249] sm:px-6"
              >
                <span>EXPLORE OUR STORY &amp; INITIATE CONTACT</span>
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
