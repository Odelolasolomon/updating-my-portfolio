"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET);

export default function StudioPage() {
  if (!configured) {
    return (
      <main className="min-h-screen bg-portfolio-soft px-5 py-12 text-portfolio-charcoal">
        <div className="mx-auto max-w-2xl rounded-portfolio border border-portfolio-grey bg-white p-6 shadow-portfolio-card">
          <p className="text-sm font-semibold uppercase text-portfolio-orange">CMS setup required</p>
          <h1 className="mt-3 text-3xl font-semibold">Sanity Studio is prepared</h1>
          <p className="mt-4 text-sm leading-7 text-portfolio-slate">
            Add the Sanity project ID and dataset environment variables before opening the private publishing dashboard. This route does not connect to Sanity until those values are configured.
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-portfolio-slate">
            <li>NEXT_PUBLIC_SANITY_PROJECT_ID</li>
            <li>NEXT_PUBLIC_SANITY_DATASET</li>
            <li>NEXT_PUBLIC_SANITY_API_VERSION</li>
          </ul>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
