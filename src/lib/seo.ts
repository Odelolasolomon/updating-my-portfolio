import type { Metadata } from "next";

import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

const title = `${profile.name} - Senior AI/ML Engineer`;
const siteUrl = getSiteUrl();

export const defaultMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${profile.name}`
  },
  description: profile.summary,
  applicationName: `${profile.shortName} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  category: "technology",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description: profile.summary,
    type: "website",
    siteName: `${profile.shortName} Portfolio`,
    url: "/"
  },
  twitter: {
    card: "summary",
    title,
    description: profile.summary
  }
};
