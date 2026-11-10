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
      className="relative z-10 bg-white text-black md:sticky md:top-[82px] md:flex md:h-[calc(100svh-82px)] md:flex-col md:overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:shrink-0 md:py-6 lg:px-16 lg:py-7">
        <div className="max-w-[980px]">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-black sm:text-sm md:mb-3">
            OUR MISSION
          </p>
          <h2
            className="max-w-[920px] text-balance text-3xl font-semibold leading-[1.2] tracking-[-0.035em] text-black sm:text-4xl md:text-4xl md:leading-[1.12] lg:text-[44px] xl:text-5xl"
            id="mission-heading"
          >
            We shape better cities through{" "}
            <span className="underline decoration-2 underline-offset-[6px]">
              context
            </span>
            ,{" "}
            <span className="underline decoration-2 underline-offset-[6px]">
              craft
            </span>
            , and{" "}
            <span className="underline decoration-2 underline-offset-[6px]">
              performance
            </span>
            .
          </h2>
        </div>

        <div
          className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-slate-200 pt-5 sm:mt-10 sm:gap-x-8 sm:gap-y-6 sm:pt-6 md:mt-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-6 md:pt-5 lg:mt-7 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-8 lg:pt-6"
          id="context"
        >
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-3xl tracking-tight text-black sm:text-4xl md:text-4xl">
              Context
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-black sm:text-base md:mt-3 md:text-base md:leading-7">
              Every design begins by listening to the place it will call home.
            </p>
          </div>
          {contextHighlights.map((highlight) => (
            <div
              className={`flex min-h-24 flex-col justify-between border-b border-slate-200 pb-3 max-md:border-t max-md:border-b-0 max-md:pt-3 md:min-h-24 md:pb-4 ${highlight.label === "PRESS" ? "col-span-2 md:col-span-1" : ""}`}
              key={highlight.label}
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-slate-600">
                {highlight.label}
              </span>
              <span className="mt-3 text-base font-medium leading-relaxed text-black md:text-base md:leading-7">
                {highlight.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[52vw] min-h-[300px] max-h-[760px] w-full overflow-hidden bg-slate-100 sm:min-h-[420px] md:h-auto md:min-h-0 md:flex-1">
        <Image
          alt="Contemporary city architecture framed by greenery and open sky"
          className="object-cover object-center"
          fill
          priority={false}
          sizes="100vw"
          src="/images/Context_Homepage-1.webp"
        />
      </div>
    </section>
  );
}
