import type { Metadata } from "next";
import { NewsListing } from "@/components/NewsListing";

export const metadata: Metadata = {
  title: "News",
  description:
    "Explore the latest news, press, awards, and events from Inoodex.",
};

export default function NewsPage() {
  return <NewsListing />;
}
