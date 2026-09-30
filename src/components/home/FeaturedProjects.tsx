import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} title={`${project.title} case study`} prefetch={false} className={index > 1 ? "focus-ring group hidden lg:block" : "focus-ring group block min-w-0"}>
          <ProjectCard project={project} />
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">
            View Case Study <ArrowRight size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
