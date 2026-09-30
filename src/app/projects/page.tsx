import { Layers3, Search, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Verified AI engineering, agentic AI, machine learning, computer vision, research and infrastructure projects by Odelola Solomon Oluwatobiloba."
};

const projectStats = [
  { value: String(projects.length), label: "Verified case studies" },
  { value: "5", label: "Professional project tracks" },
  { value: "2", label: "Research implementations" }
];

export default function ProjectsPage() {
  return (
    <>
      <Header activeHref="/projects" />
      <main className="min-w-0 bg-white text-portfolio-charcoal">
        <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
          <div className="portfolio-container min-w-0 space-y-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-end">
              <div className="min-w-0 space-y-5">
                <Tag tone="orange">Projects</Tag>
                <h1 className="max-w-4xl text-[clamp(2.55rem,6vw,4.8rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">Projects</h1>
                <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">
                  A curated portfolio of agentic AI systems, machine learning platforms, healthcare intelligence, recommendation engines, MLOps delivery and medical-imaging research implementations.
                </p>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {projectStats.map((stat) => (
                  <Card key={stat.label} className="p-5">
                    <p className="text-3xl font-semibold text-portfolio-blue">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-portfolio-slate">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
            <SectionHeader
              eyebrow="Case Study Index"
              title="Verified systems and research work"
              description="Filter projects by domain. Each card opens a reusable case-study page with public-safe technical detail and verified outcomes where available."
            />
            <ProjectsExplorer />
          </div>
        </section>

        <section className="bg-portfolio-charcoal py-12 text-white sm:py-16 lg:py-24">
          <div className="portfolio-container grid min-w-0 gap-6 md:grid-cols-3">
            <PortfolioNote icon={<ShieldCheck size={20} />} title="Content Integrity" text="Project claims are sourced from the supplied resume and omit private repositories, internal endpoints, credentials and client-sensitive implementation details." />
            <PortfolioNote icon={<Layers3 size={20} />} title="Reusable Structure" text="The listing and detail routes are powered by shared project data, so future screenshots, diagrams and links can be added without rebuilding page templates." />
            <PortfolioNote icon={<Search size={20} />} title="Visual Previews" text="Current visuals are conceptual architecture previews, clearly labeled until real product screenshots or approved diagrams are supplied." />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PortfolioNote({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-portfolio border border-white/15 bg-white/5 p-5 sm:p-6">
      <div className="grid size-11 place-items-center rounded-full bg-white/10 text-portfolio-orange">{icon}</div>
      <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
    </div>
  );
}
