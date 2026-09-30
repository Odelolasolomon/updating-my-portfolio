import type { MetadataRoute } from "next";

import { getPublicArticles } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { projects } from "@/data/projects";

const staticRoutes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/research",
  "/skills",
  "/leadership",
  "/achievements",
  "/blog",
  "/contact"
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const articles = await getPublicArticles();
  const routes = [
    ...staticRoutes,
    ...projects.map((project) => `/projects/${project.slug}`),
    ...articles.map((article) => `/blog/${article.slug}`)
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8
  }));
}
