"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import { projects, projectTypes, type ProjectType } from "@/lib/projects";

const pageSize = 9;
const featuredProject = projects[0];

export function ProjectsListing() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  const statusParam = searchParams.get("status");

  const [activeType, setActiveType] = useState<ProjectType>("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    let list =
      activeType === "ALL"
        ? projects.filter((project) => project.title !== featuredProject.title)
        : projects.filter((project) => project.type === activeType);

    if (locationParam) {
      const q = locationParam.toLowerCase();
      list = list.filter(
        (p) =>
          p.location.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q),
      );
    }

    return list;
  }, [activeType, locationParam]);

  const projectCount =
    filteredProjects.length +
    (activeType === "ALL" &&
    (!locationParam ||
      featuredProject.location.toLowerCase().includes(locationParam.toLowerCase()) ||
      featuredProject.title.toLowerCase().includes(locationParam.toLowerCase()))
      ? 1
      : 0);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function selectType(type: ProjectType) {
    setActiveType(type);
    setCurrentPage(1);
  }

  function clearLocationFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("location");
    const qs = params.toString();
    router.push(qs ? `/projects?${qs}` : "/projects");
  }

  return (
    <main className="flex-1 bg-[#f7f6f3] py-8 text-slate-700 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-[1640px] px-6 sm:px-10 lg:px-16">
        <header className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#a86544] sm:text-xs">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#d6a184]" />
              BANGLADESH / PROJECT CONCEPTS
            </p>
            <h1 className="mt-4 font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#172f3d] sm:text-5xl lg:text-[64px]">
              Projects across Bangladesh
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Explore architectural concepts for Bangladesh’s cities and
              communities, from learning and healthcare to culture and everyday
              life.
            </p>
          </div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#172f3d]/10 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:text-sm">
            <span className="font-semibold text-[#172f3d]">{projectCount}</span>
            design concepts
          </p>
        </header>

        {activeType === "ALL" ? (
          <section
            aria-label="Featured project"
            className="group grid overflow-hidden rounded-2xl bg-[#172f3d] text-white shadow-[0_20px_60px_rgba(23,47,61,0.12)] md:grid-cols-[1.55fr_1fr]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 md:aspect-auto md:min-h-[440px]">
              <Image
                alt={featuredProject.imageAlt}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 65vw"
                src={featuredProject.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#172f3d]/55 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white backdrop-blur-md sm:bottom-7 sm:left-7">
                FEATURED PROJECT
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </span>
            </div>
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#e4b396] sm:text-xs">
                  FEATURED CONCEPT <span className="mx-1.5 text-white/35">/</span>{" "}
                  {featuredProject.type}
                </p>
                <h2 className="mt-5 max-w-xl font-sans text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/70 sm:text-base">
                  <MapPin aria-hidden="true" className="size-4 text-[#e4b396]" />
                  {featuredProject.location}
                </p>
              </div>
              <div>
                <div aria-hidden="true" className="mb-5 h-px w-full bg-white/20" />
                <p className="max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                  A welcoming campus concept that brings learning, research, and
                  community life together.
                </p>
                <p className="mt-6 text-[10px] font-semibold tracking-[0.18em] text-white/45">
                  INOODEX <span className="mx-2 text-[#e4b396]">·</span> BANGLADESH
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section aria-label="Project portfolio" className="mt-8 sm:mt-10">
          <div className="flex flex-col gap-3 border-t border-slate-200 py-4 sm:flex-row sm:items-center sm:gap-5">
            <span className="shrink-0 text-sm font-semibold">Filter Projects:</span>
            <label className="relative block md:hidden">
              <span className="sr-only">Filter projects by category</span>
              <select
                className="h-11 w-full appearance-none border border-slate-300 bg-white px-4 pr-10 text-sm font-medium text-slate-700 focus:border-[#30495b] focus:outline-none focus:ring-2 focus:ring-[#30495b]/20"
                onChange={(event) => {
                  const selectedType = projectTypes.find(
                    (type) => type === event.currentTarget.value,
                  );
                  if (selectedType) selectType(selectedType);
                }}
                value={activeType}
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "ALL" ? "All projects" : type}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                ▾
              </span>
            </label>
            <div className="hidden flex-wrap items-center gap-x-4 gap-y-2 md:flex">
              {projectTypes.map((type) => (
                <button
                  aria-pressed={activeType === type}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                    activeType === type
                      ? "bg-[#30495b] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-[#f4e7df] hover:text-[#8d4e34]"
                  }`}
                  key={type}
                  onClick={() => selectType(type)}
                  type="button"
                >
                  {type}
                </button>
              ))}

              {locationParam && (
                <div className="flex items-center gap-1.5 rounded-full border border-[#d6a184]/60 bg-[#fbf6f3] px-3 py-1 text-xs font-semibold text-[#8d4e34]">
                  <span>Location: {locationParam}</span>
                  <button
                    aria-label="Clear location filter"
                    className="cursor-pointer rounded-full p-0.5 transition-colors hover:bg-[#ebd5c8]"
                    onClick={clearLocationFilter}
                    type="button"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className={`grid gap-5 sm:gap-6 lg:gap-7 ${
              visibleProjects.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visibleProjects.map((project, index) => (
              <article
                className="group min-w-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#d6a184]/70 hover:shadow-[0_16px_40px_rgba(27,45,57,0.12)]"
                key={project.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    alt={project.imageAlt}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10" />
                  <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-slate-700 backdrop-blur-sm sm:text-xs">
                    {project.type}
                  </span>
                  <span className="absolute bottom-4 right-4 font-sans text-sm font-medium tracking-[0.14em] text-white/90">
                    {String((currentPage - 1) * pageSize + index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
                    {project.location}
                  </p>
                  <h2 className="mt-2 font-sans text-xl font-medium leading-snug text-slate-800 sm:text-2xl">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          {pageCount > 1 ? (
            <nav
              aria-label="Project pages"
              className="flex items-center justify-center gap-2 py-8"
            >
              <button
                aria-label="Previous page"
                className="px-2 py-1 text-sm text-slate-600 hover:text-[#bd7958] disabled:opacity-40"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
                type="button"
              >
                ←
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`min-w-8 px-2 py-1 text-sm ${
                      currentPage === page
                        ? "font-semibold text-slate-900 underline underline-offset-4"
                        : "text-slate-600 hover:text-[#bd7958]"
                    }`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                aria-label="Next page"
                className="px-2 py-1 text-sm text-slate-600 hover:text-[#bd7958] disabled:opacity-40"
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage((page) => page + 1)}
                type="button"
              >
                →
              </button>
            </nav>
          ) : null}
        </section>
      </div>
    </main>
  );
}
