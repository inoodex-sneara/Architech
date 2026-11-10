export function Hero() {
  return (
    <section
      aria-label="Inoodex architectural film"
      className="relative isolate flex h-[62svh] min-h-[400px] max-h-[560px] w-full items-end overflow-hidden bg-slate-950 md:h-auto md:min-h-[calc(100svh-82px)] md:max-h-none"
    >
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster="/images/homepage-video-poster.webp"
        preload="metadata"
      >
        <source src="/video/2_Homepage_20260430.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-slate-950/10"
      />
      <div className="w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <p className="mb-4 text-xs font-medium tracking-[0.24em] text-white/80 sm:text-sm">
          INOODEX&nbsp; / &nbsp;ARCHITECTURE
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Designed around life.
        </h1>
      </div>
    </section>
  );
}
