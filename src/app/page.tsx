import { CraftSection } from "@/components/CraftSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { NewsSection } from "@/components/NewsSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white font-sans">
      <Hero />
      <div className="relative">
        <MissionSection />
        <CraftSection />
      </div>
      <ConsultationSection />
      <ExpertiseSection />
      <NewsSection />
      <ClientsSection />
      <ReviewsSection />
    </main>
  );
}
