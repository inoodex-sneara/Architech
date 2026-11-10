import { CraftSection } from "@/components/CraftSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { NewsSection } from "@/components/NewsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white font-sans">
      <Hero />
      <div className="relative">
        <MissionSection />
        <CraftSection />
      </div>
      <ExpertiseSection />
      <NewsSection />
      <ClientsSection />
    </main>
  );
}
