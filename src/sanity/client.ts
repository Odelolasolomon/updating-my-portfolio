import { createClient } from "next-sanity";

import { sanityApiVersion, sanityDataset, sanityProjectId, sanityReadToken } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId || "missingprojectid",
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: !sanityReadToken,
  perspective: "published",
  token: sanityReadToken || undefined
});
