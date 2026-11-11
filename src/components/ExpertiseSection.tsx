import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertiseAreas } from "@/lib/expertise";

export function ExpertiseSection() {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="bg-white pt-14 pb-4 text-black sm:pt-18 sm:pb-6 lg:pt-20 lg:pb-8"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-4 border-b border-slate-300 pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:pb-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-600">
              WHAT WE DO
            </p>
            <h2
              className="font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              id="expertise-heading"
            >
              Specialty Expertise
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A multidisciplinary approach to shaping thoughtful, resilient places.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {expertiseAreas.map((area) => (
            <Link
              className="group block min-w-0"
              href={`/expertise/${area.slug}`}
              key={area.slug}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
                <Image
                  alt={area.imageAlt}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={area.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 transition-opacity duration-300 group-hover:from-black/80" />
               
              
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <span className="mb-3 block text-[10px] font-semibold tracking-[0.2em] text-white/75 sm:text-xs">
                    EXPERTISE
                  </span>
                  <h3 className="font-sans text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {area.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
                {area.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-slate-900">
                EXPLORE AREA
                <span aria-hidden="true" className="h-px w-8 bg-slate-900 transition-all duration-300 group-hover:w-12" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
