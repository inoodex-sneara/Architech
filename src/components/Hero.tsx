"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";

const statusOptions = [
  "All Status",
  "Ongoing",
  "Upcoming",
  "Completed",
  "Concept",
];

const locationOptions = [
  "All Locations",
  "Gulshan",
  "Banani",
  "Dhanmondi",
  "Bashundhara",
  "Uttara",
  "Chattogram",
  "Cox's Bazar",
  "Sylhet",
];

export function Hero() {
  const router = useRouter();
  const filterRef = useRef<HTMLDivElement | null>(null);
  const statusBtnRef = useRef<HTMLButtonElement | null>(null);
  const locationBtnRef = useRef<HTMLButtonElement | null>(null);

  const [openDropdown, setOpenDropdown] = useState<"status" | "location" | null>(null);
  const [dropdownPlacement, setDropdownPlacement] = useState<"top" | "bottom">("top");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const checkPlacement = (type: "status" | "location") => {
    const el = type === "status" ? statusBtnRef.current : locationBtnRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const neededSpace = type === "status" ? 250 : 310;
      // If there is not enough room above in the viewport, open downwards
      if (rect.top < neededSpace) {
        setDropdownPlacement("bottom");
      } else {
        setDropdownPlacement("top");
      }
    }
  };

  const handleToggleDropdown = (type: "status" | "location") => {
    if (openDropdown === type) {
      setOpenDropdown(null);
    } else {
      checkPlacement(type);
      setOpenDropdown(type);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;

    function handleScrollOrResize() {
      if (!openDropdown) return;
      checkPlacement(openDropdown);
    }

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [openDropdown]);

  const navigateWithFilters = (status: string, location: string) => {
    const params = new URLSearchParams();
    if (status !== "All Status") params.set("status", status.toLowerCase());
    if (location !== "All Locations") params.set("location", location);
    const qs = params.toString();
    router.push(qs ? `/projects?${qs}` : "/projects");
  };

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
    setOpenDropdown(null);
    navigateWithFilters(status, selectedLocation);
  };

  const handleSelectLocation = (loc: string) => {
    setSelectedLocation(loc);
    setOpenDropdown(null);
    navigateWithFilters(selectedStatus, loc);
  };

  return (
    <section
      aria-label="Inoodex architectural film"
      className="relative isolate z-30 flex min-h-[560px] sm:min-h-[620px] md:min-h-[calc(100svh-82px)] w-full items-end bg-slate-950"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/images/homepage-video-poster.webp"
          preload="metadata"
        >
          <source src="/video/2_Homepage_20260430.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Vignette Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/15"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 pb-8 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {/* Headline & Kicker */}
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.24em] text-white/80 sm:mb-4 sm:text-sm">
              INOODEX&nbsp; / &nbsp;ARCHITECTURE
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Designed around life.
            </h1>
          </div>

          {/* Floating Filter Widget Bar */}
          <div className="flex flex-col items-center">
            <div
              ref={filterRef}
              className="relative w-full max-w-[620px] rounded-[32px] border border-white/35 bg-[#172f3d]/65 p-2 shadow-[0_22px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-full"
            >
              <div className="grid grid-cols-1 gap-2 min-[520px]:grid-cols-2">
                {/* PROJECT STATUS */}
                <div className="relative">
                  <button
                    aria-expanded={openDropdown === "status"}
                    aria-haspopup="listbox"
                    className="flex w-full cursor-pointer items-center justify-between rounded-[24px] border border-white/25 bg-[#172f3d]/45 px-5 py-2.5 text-left shadow-[0_2px_10px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-colors hover:bg-[#172f3d]/65 sm:rounded-full sm:px-6 sm:py-3"
                    onClick={() => handleToggleDropdown("status")}
                    ref={statusBtnRef}
                    type="button"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="block text-[10px] font-bold tracking-[0.14em] text-[#e4b396] uppercase sm:text-[11px]">
                        PROJECT STATUS
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-bold text-white sm:text-[15px]">
                        {selectedStatus}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#e4b396] transition-transform duration-200 ${
                        openDropdown === "status" ? "rotate-180 text-[#d6a184]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu for Status */}
                  {openDropdown === "status" && (
                    <div
                      className={`absolute left-0 right-0 z-50 rounded-2xl border border-white/20 bg-[#172f3d]/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-200 sm:right-auto sm:left-0 sm:w-60 ${
                        dropdownPlacement === "top"
                          ? "bottom-full mb-3"
                          : "top-full mt-3"
                      }`}
                    >
                      <p className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#e4b396] uppercase">
                        Select Status
                      </p>
                      <div className="max-h-60 space-y-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {statusOptions.map((status) => (
                          <button
                            className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                              selectedStatus === status
                                ? "bg-[#d6a184] text-[#142936] font-bold"
                                : "text-white/90 hover:bg-white/10 hover:text-white"
                            }`}
                            key={status}
                            onClick={() => handleSelectStatus(status)}
                            type="button"
                          >
                            <span>{status}</span>
                            {selectedStatus === status && (
                              <Check className="h-3.5 w-3.5 text-[#142936]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* PRIME LOCATION */}
                <div className="relative">
                  <button
                    aria-expanded={openDropdown === "location"}
                    aria-haspopup="listbox"
                    className="flex w-full cursor-pointer items-center justify-between rounded-[24px] border border-white/25 bg-[#172f3d]/45 px-5 py-2.5 text-left shadow-[0_2px_10px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-colors hover:bg-[#172f3d]/65 sm:rounded-full sm:px-6 sm:py-3"
                    onClick={() => handleToggleDropdown("location")}
                    ref={locationBtnRef}
                    type="button"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="block text-[10px] font-bold tracking-[0.14em] text-[#e4b396] uppercase sm:text-[11px]">
                        PRIME LOCATION
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-bold text-white sm:text-[15px]">
                        {selectedLocation}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#e4b396] transition-transform duration-200 ${
                        openDropdown === "location" ? "rotate-180 text-[#d6a184]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu for Location */}
                  {openDropdown === "location" && (
                    <div
                      className={`absolute left-0 right-0 z-50 rounded-2xl border border-white/20 bg-[#172f3d]/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-200 sm:right-0 sm:left-auto sm:w-60 ${
                        dropdownPlacement === "top"
                          ? "bottom-full mb-3"
                          : "top-full mt-3"
                      }`}
                    >
                      <p className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#e4b396] uppercase">
                        Select Location
                      </p>
                      <div className="max-h-60 space-y-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {locationOptions.map((loc) => (
                          <button
                            className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                              selectedLocation === loc
                                ? "bg-[#d6a184] text-[#142936] font-bold"
                                : "text-white/90 hover:bg-white/10 hover:text-white"
                            }`}
                            key={loc}
                            onClick={() => handleSelectLocation(loc)}
                            type="button"
                          >
                            <span>{loc}</span>
                            {selectedLocation === loc && (
                              <Check className="h-3.5 w-3.5 text-[#142936]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div
              aria-hidden="true"
              className="mt-3.5 flex items-center justify-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-6 rounded-full bg-white shadow-sm transition-all" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
