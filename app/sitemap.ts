import { MetadataRoute } from "next";
import { programsData } from "@/lib/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hayatabadgym.pk";

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/trainers",
    "/membership",
    "/facilities",
    "/gallery",
    "/schedule",
    "/contact",
    "/join"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const programRoutes = programsData.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...programRoutes];
}
