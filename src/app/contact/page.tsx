import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Inoodex about your next architecture project.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white text-slate-800">
      <section className="mx-auto max-w-[1640px] px-6 pb-14 pt-10 sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-24">
        <div className="mb-9 max-w-4xl sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 sm:text-sm">
            CONTACT / INOODEX
          </p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Good design begins with a conversation.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Tell us what you are imagining. We would love to hear about the
            people, place, and possibilities behind your next project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
          <section
            aria-labelledby="contact-form-heading"
            className="border border-slate-200 bg-white p-5 sm:p-8 lg:p-10"
          >
            <div className="mb-7 border-b border-slate-200 pb-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#bd7958]">
                PROJECT ENQUIRY
              </p>
              <h2
                className="mt-2 font-sans text-2xl font-semibold tracking-tight sm:text-3xl"
                id="contact-form-heading"
              >
                Let&apos;s get started
              </h2>
            </div>
            <ContactForm />
          </section>

          <aside className="flex flex-col gap-6">
            <div className="relative min-h-[280px] flex-1 overflow-hidden bg-slate-100 sm:min-h-[380px]">
              <div
                aria-label="Contemporary architecture integrated with its surroundings"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
                role="img"
                style={{ backgroundImage: "url('/images/Context_Homepage-1.webp')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172f3d]/80 via-[#172f3d]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/75">
                  EVERY PROJECT STARTS SOMEWHERE
                </p>
                <p className="mt-3 max-w-sm font-serif text-2xl leading-snug sm:text-3xl">
                  A place, a purpose, a possibility.
                </p>
              </div>
            </div>

            <div className="bg-[#30495b] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/65">
                WHAT&apos;S ON YOUR MIND?
              </p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                Share a project brief, ask about our approach, or simply tell us
                about a place you think could work better.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Architecture", "Interiors", "Urban design", "Collaboration"].map(
                  (topic) => (
                    <span
                      className="border border-white/25 px-3 py-1.5 text-xs font-medium text-white/90"
                      key={topic}
                    >
                      {topic}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
