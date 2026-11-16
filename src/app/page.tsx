import { AboutSection } from "@/components/AboutSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { NewsSection } from "@/components/NewsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white font-sans">
      <Hero />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <ExpertiseSection />
      <NewsSection />

      <ConsultationSection />
      <ClientsSection />
      <ReviewsSection />
    </main>
  );
}
