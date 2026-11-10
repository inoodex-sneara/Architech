import type { Metadata } from "next";
import { ProjectsListing } from "@/components/ProjectsListing";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Inoodex project concepts for communities and cities across Bangladesh.",
};

export default function ProjectsPage() {
  return <ProjectsListing />;
}
