import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getRelatedProjects, projectHref, type Project } from "@/data/projects";

export function RelatedProjects({ project }: { project: Project }) {
  const related = getRelatedProjects(project).slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-portfolio-soft py-12 sm:py-16 lg:py-24">
      <div className="portfolio-container min-w-0 space-y-8 lg:space-y-10">
        <SectionHeader eyebrow="Related Case Studies" title="More verified AI systems" description="Additional projects connected by agentic AI, applied machine learning, production infrastructure or medical-imaging research." />
        <div className="grid min-w-0 gap-6 lg:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={projectHref(item.slug)} className="focus-ring group block min-w-0" prefetch={false}>
              <ProjectCard project={item} />
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">Read Case Study <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
