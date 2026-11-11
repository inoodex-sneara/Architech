import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsListing } from "@/components/ProjectsListing";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Inoodex project concepts for communities and cities across Bangladesh.",
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProjectsListing />
    </Suspense>
  );
}
