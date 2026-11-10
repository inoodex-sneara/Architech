import Image from "next/image";
import Link from "next/link";
import { expertiseAreas } from "@/lib/expertise";

export function ExpertiseSection() {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="bg-white py-14 text-black sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16">
        <h2
          className="mb-8 font-sans text-3xl font-semibold tracking-tight text-slate-700 sm:mb-10 sm:text-4xl"
          id="expertise-heading"
        >
          Specialty Expertise
        </h2>
        <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {expertiseAreas.map((area) => (
            <Link
              className="group border-b border-slate-200 pb-4"
              href={`/expertise/${area.slug}`}
              key={area.slug}
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  alt={area.imageAlt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={area.image}
                />
              </div>
              <h3 className="mt-4 font-sans text-2xl font-semibold leading-tight text-slate-700 group-hover:underline sm:text-3xl">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
