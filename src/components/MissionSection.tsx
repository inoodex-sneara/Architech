import Image from "next/image";

const contextHighlights = [
  {
    label: "PROJECT",
    title: "Places shaped by their people and surroundings.",
  },
  {
    label: "IN-DEPTH",
    title: "Fresh thinking for the challenges cities face.",
  },
  {
    label: "PRESS",
    title: "New perspectives on the spaces around us.",
  },
];

export function MissionSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative z-10 bg-white text-slate-900 py-16 sm:py-20 lg:py-24 border-b border-slate-100"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* =========================================================================
              LEFT COLUMN: TEXT, MISSION HEADLINE & CONTEXT HIGHLIGHTS (7 cols)
          ========================================================================= */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Kicker */}
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#b5883e] uppercase sm:text-sm">
              OUR MISSION
            </p>

            {/* Main Headline */}
            <h2
              className="text-balance text-3xl font-semibold leading-[1.2] tracking-[-0.035em] text-slate-900 sm:text-4xl md:leading-[1.14] lg:text-[42px] xl:text-[46px]"
              id="mission-heading"
            >
              We shape better cities through{" "}
              <span className="underline decoration-[#b5883e] decoration-2 underline-offset-[6px]">
                context
              </span>
              ,{" "}
              <span className="underline decoration-[#b5883e] decoration-2 underline-offset-[6px]">
                craft
              </span>
              , and{" "}
              <span className="underline decoration-[#b5883e] decoration-2 underline-offset-[6px]">
                performance
              </span>
              .
            </h2>

            {/* Context Subsection */}
            <div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 border-t border-slate-200 pt-6 sm:mt-10"
              id="context"
            >
              {/* Context Title & Note */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-slate-900">
                  Context
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Every design begins by listening to the place it will call home.
                </p>
              </div>

              {/* Highlights */}
              {contextHighlights.map((highlight) => (
                <div
                  className="flex min-h-20 flex-col justify-between border-b border-slate-200 pb-3 max-sm:border-t max-sm:border-b-0 max-sm:pt-3"
                  key={highlight.label}
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-slate-500">
                    {highlight.label}
                  </span>
                  <span className="mt-2 text-sm sm:text-base font-medium leading-snug text-slate-900">
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: PROPERLY FRAMED ARCHITECTURAL CONTEXT IMAGE (5 cols)
          ========================================================================= */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3.4] xl:aspect-[16/11] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 shadow-xl border border-slate-200/80">
              <Image
                alt="Contemporary city architecture framed by greenery and open sky"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                src="/images/Context_Homepage-1.webp"
              />

              {/* Corner Architectural Label */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-xs backdrop-blur-xs border border-slate-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b5883e]" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-800">
                  Contextual Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
