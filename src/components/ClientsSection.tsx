import Image from "next/image";

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  {
    name: "ORION",
    logo: "/clients/orion.svg",
  },
  {
    name: "SANMAR",
    logo: "/clients/sanmar-dark.svg",
  },
  {
    name: "ANWAR LANDMARK",
    logo: "/clients/anwar-landmark-dark.svg",
  },
  {
    name: "ABC",
    logo: "/clients/abc.jpg",
  },
  {
    name: "RANGS PROPERTIES",
    logo: "/clients/rangs-properties.svg",
  },
  {
    name: "KIDNEY FOUNDATION",
    logo: "/clients/kidney-foundation.png",
  },
  {
    name: "BDG",
    logo: "/clients/bdg.png",
  },
  {
    name: "AWR REAL ESTATE",
    logo: "/clients/awr.png",
  },
  {
    name: "SUNNYDALE",
    logo: "/clients/sunnydale.png",
  },
  {
    name: "KAZI FARMS",
    logo: "/clients/kazi-farms.png",
  },
  {
    name: "RAKEEN",
    logo: "/clients/rakeen-bd.png",
  },
  {
    name: "US-BANGLA",
    logo: "/clients/us-bangla.png",
  },
  {
    name: "SUVASTU",
    logo: "/clients/suvastu-dark.svg",
  },
  {
    name: "SHAPTAK",
    logo: "/clients/shaptak.jpg",
  },
  {
    name: "CPA",
    logo: "/clients/cpa.png",
  },
];

export function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="bg-[#fbfbfb] text-slate-800"
      id="clients"
    >
      <div className="border-b border-slate-200/60 bg-white">
        <div className="mx-auto grid max-w-[1640px] gap-3 px-5 py-8 sm:gap-5 sm:px-10 sm:py-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-10 lg:px-16 lg:py-14">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#a86544] uppercase sm:text-sm">
              TRUSTED PARTNERS
            </p>
            <h2
              className="font-sans text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              id="clients-heading"
            >
              Our Clients
            </h2>
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
            We work alongside leading developers, institutions, and organizations across
            Bangladesh to create places that support communities, businesses, and sustainable growth.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1640px] px-4 py-6 sm:px-10 sm:py-10 lg:px-16 lg:py-12">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              className="group flex h-[68px] items-center justify-center rounded-xl border border-slate-200/80 bg-white px-3 py-2 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd7958]/50 hover:shadow-md sm:h-[82px] sm:px-4 sm:py-3 lg:h-[90px]"
              key={client.name}
            >
              <div className="relative flex h-8 w-full max-w-[110px] items-center justify-center sm:h-10 sm:max-w-[130px] lg:h-11 lg:max-w-[140px]">
                <Image
                  alt={`${client.name} logo`}
                  className="h-full w-full object-contain transition-all duration-300"
                  height={44}
                  src={client.logo}
                  unoptimized={client.logo.endsWith(".svg")}
                  width={140}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

