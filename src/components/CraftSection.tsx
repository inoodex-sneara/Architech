import Image from "next/image";

const craftHighlights = [
  { label: "PROJECT", title: "Thoughtful details, built to last." },
  { label: "IN-DEPTH", title: "The art and practice of making." },
  { label: "PRESS", title: "Ideas shaping the spaces around us." },
];

export function CraftSection() {
  return (
    <section aria-labelledby="craft-heading" className="relative z-20 bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-8 lg:px-16 lg:py-16">
        <div className="pb-7 lg:pb-0">
          <h2
            className="font-serif text-4xl tracking-tight text-black sm:text-5xl"
            id="craft-heading"
          >
            Craft
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-black sm:text-lg">
            Our work is carefully considered, inventive, and made to last.
          </p>
        </div>
        {craftHighlights.map((highlight) => (
          <div
            className="grid grid-cols-[5.5rem_1fr] items-start gap-3 border-t border-slate-200 py-4 last:border-b lg:flex lg:min-h-24 lg:flex-col lg:justify-between lg:border-b-0 lg:pb-4"
            key={highlight.label}
          >
            <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-black lg:text-sm lg:tracking-wide">
              {highlight.label}
            </span>
            <span className="text-[15px] leading-relaxed text-black lg:mt-3 lg:text-base lg:leading-snug">
              {highlight.title}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-20 aspect-[5/3] min-h-[220px] max-h-[360px] w-full overflow-hidden bg-slate-100 md:aspect-auto md:h-[min(82svh,600px)] md:min-h-[420px] md:max-h-[600px]">
        <Image
          alt="An illuminated glass airport terminal at dusk"
          className="object-cover object-center"
          fill
          sizes="100vw"
          src="/images/2132_1_000_N647_large-scaled.webp"
        />
      </div>
    </section>
  );
}
