"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters, type FilterValue } from "@/components/projects/ProjectFilters";
import { projectCategories, projectHref, projects } from "@/data/projects";

export function ProjectsExplorer() {
  const [active, setActive] = useState<FilterValue>("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category === active), [active]);

  return (
    <div className="min-w-0 space-y-8">
      <ProjectFilters categories={projectCategories} active={active} onChange={setActive} />
      <div className="grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <Link key={project.slug} href={projectHref(project.slug)} className="focus-ring group block min-w-0" prefetch={false}>
            <ProjectCard project={project} featured={index === 0 && active === "All"} />
          </Link>
        ))}
      </div>
      <div className="rounded-portfolio border border-portfolio-grey bg-portfolio-soft p-5 text-sm leading-6 text-portfolio-slate">
        Project visuals are conceptual system previews until approved screenshots, diagrams or demo videos are supplied.
      </div>
    </div>
  );
}
