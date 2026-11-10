import Image from "next/image";

type Client = {
  name: string;
  secondary?: string;
  style: string;
  logo?: string;
  logoSurface?: string;
};

const clients = [
  {
    name: "ORION",
    logo: "/clients/orion.svg",
    style: "font-serif text-2xl font-semibold tracking-wide",
  },
  {
    name: "SANMAR",
    logo: "/clients/sanmar.svg",
    logoSurface: "bg-[#283b4b]",
    style: "font-serif text-xl tracking-[0.12em]",
  },
  {
    name: "ANWAR",
    secondary: "LANDMARK",
    logo: "/clients/anwar-landmark.svg",
    logoSurface: "bg-[#283b4b]",
    style: "text-xl font-black tracking-[0.16em]",
  },
  { name: "ABC", style: "font-serif text-2xl font-bold tracking-[0.2em]" },
  {
    name: "RANGS",
    secondary: "PROPERTIES",
    logo: "/clients/rangs.svg",
    logoSurface: "bg-[#283b4b]",
    style: "text-xl font-extrabold tracking-[0.2em]",
  },
  {
    name: "KF",
    secondary: "KIDNEY FOUNDATION",
    logo: "/clients/kidney-foundation.png",
    style: "font-serif text-3xl font-semibold",
  },
  {
    name: "BDG",
    logo: "/clients/bdg.png",
    logoSurface: "bg-[#283b4b]",
    style: "font-serif text-3xl tracking-[0.12em]",
  },
  {
    name: "AWR",
    secondary: "REAL ESTATE",
    logo: "/clients/awr.png",
    style: "font-serif text-2xl font-medium tracking-[0.12em]",
  },
  { name: "3G", style: "text-3xl font-black italic tracking-tight" },
  {
    name: "SUNNYDALE",
    secondary: "SCHOOL",
    logo: "/clients/sunnydale.png",
    style: "font-serif text-lg font-bold tracking-wide",
  },
  {
    name: "PGCB",
    secondary: "POWER GRID COMPANY",
    style: "font-serif text-2xl font-bold tracking-[0.12em]",
  },
  {
    name: "kazifarms",
    logo: "/clients/kazi-farms.png",
    style: "text-2xl font-extrabold tracking-tight",
  },
  {
    name: "rakeen",
    logo: "/clients/rakeen-bd.png",
    logoSurface: "bg-[#283b4b]",
    style: "text-2xl font-semibold tracking-tight",
  },
  {
    name: "US-Bangla",
    secondary: "Hi-Tech",
    style: "text-lg font-medium tracking-wide",
  },
  {
    name: "SUVASTU",
    secondary: "PROPERTIES",
    logo: "/clients/suvastu.svg",
    logoSurface: "bg-[#283b4b]",
    style: "text-xl font-black tracking-[0.18em]",
  },
  {
    name: "SHAPTAK",
    secondary: "GRIHAYAN",
    style: "text-lg font-bold tracking-[0.16em]",
  },
  {
    name: "CPA",
    secondary: "CHITTAGONG PORT AUTHORITY",
    style: "font-serif text-2xl font-bold tracking-[0.14em]",
  },
] satisfies Client[];

export function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="bg-[#fafafa] text-slate-800"
      id="clients"
    >
      <div className="bg-white">
        <div className="mx-auto grid max-w-[1640px] gap-5 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-10 lg:px-16 lg:py-20">
          <h2
            className="font-sans text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            id="clients-heading"
          >
            Clients
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            We work alongside organizations across Bangladesh to create places
            that support communities, businesses, and a brighter future.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1640px] px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-5">
          {clients.map((client) => (
            <li
              className="flex aspect-[1.15/1] min-w-0 items-center justify-center bg-white p-3 text-center text-slate-500 transition-colors duration-300 hover:text-[#30495b] sm:p-5"
              key={client.name}
            >
              {client.logo ? (
                <div
                  className={`relative flex h-16 w-full max-w-[190px] items-center justify-center ${client.logoSurface ?? ""}`}
                >
                  <Image
                    alt={`${client.name}${client.secondary ? ` ${client.secondary}` : ""} logo`}
                    className="h-full w-full object-contain p-2"
                    height={100}
                    src={client.logo}
                    unoptimized={client.logo.endsWith(".svg")}
                    width={220}
                  />
                </div>
              ) : (
                <span className={client.style}>
                  {client.name}
                  {client.secondary ? (
                    <span className="mt-1 block text-[9px] font-semibold tracking-[0.14em] sm:text-[10px]">
                      {client.secondary}
                    </span>
                  ) : null}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
