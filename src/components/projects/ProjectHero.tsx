import { CalendarDays, LockKeyhole, UserRound } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectPreview } from "@/components/projects/ProjectCard";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
      <div className="portfolio-container min-w-0 space-y-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.shortTitle }]} />
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="min-w-0 space-y-5">
            <div className="flex min-w-0 flex-wrap gap-2">
              <Tag tone="blue">{project.category}</Tag>
              <Tag tone="orange">{project.status}</Tag>
            </div>
            <h1 className="max-w-4xl text-[clamp(2.35rem,6vw,4.55rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">{project.title}</h1>
            <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">{project.overview}</p>
            <div className="grid min-w-0 gap-3 sm:grid-cols-3">
              <HeroMeta icon={<UserRound size={17} />} label="Role" value={project.role} />
              <HeroMeta icon={<CalendarDays size={17} />} label="Period" value={project.period} />
              <HeroMeta icon={<LockKeyhole size={17} />} label="Access" value="Public-safe summary" />
            </div>
          </div>
          <ProjectPreview project={project} />
        </div>
      </div>
    </section>
  );
}

function HeroMeta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-portfolio border border-portfolio-grey bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase text-portfolio-blue">{icon}{label}</div>
      <p className="mt-2 text-sm font-semibold leading-6 text-portfolio-charcoal">{value}</p>
    </div>
  );
}
