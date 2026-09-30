import { Building2, CalendarDays, ShieldCheck, UserRound } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function ProjectSpecs({ project }: { project: Project }) {
  return (
    <Card className="p-5 sm:p-6 lg:sticky lg:top-28">
      <h2 className="text-xl font-semibold text-portfolio-charcoal">Quick Project Specs</h2>
      <dl className="mt-5 space-y-4 text-sm">
        <Spec icon={<UserRound size={16} />} label="My Role" value={project.role} />
        <Spec icon={<CalendarDays size={16} />} label="Period" value={project.period} />
        <Spec icon={<Building2 size={16} />} label="Organization" value={project.organization} />
        <Spec icon={<ShieldCheck size={16} />} label="Source" value={project.source} />
      </dl>
      <div className="mt-6 border-t border-portfolio-grey pt-5">
        <h3 className="text-sm font-semibold uppercase text-portfolio-blue">Technologies</h3>
        <div className="mt-3 flex min-w-0 flex-wrap gap-2">
          {project.technologies.map((technology) => <Tag key={technology} tone="blue">{technology}</Tag>)}
        </div>
      </div>
      <div className="mt-6 border-t border-portfolio-grey pt-5">
        <h3 className="text-sm font-semibold uppercase text-portfolio-blue">Verified Outcomes</h3>
        <div className="mt-3 grid gap-2">
          {project.outcomes.map((outcome) => <p key={outcome} className="rounded-portfolio bg-portfolio-orange-soft px-3 py-2 text-xs font-semibold leading-5 text-portfolio-orange">{outcome}</p>)}
        </div>
      </div>
    </Card>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{icon}</div>
      <div>
        <dt className="font-semibold text-portfolio-charcoal">{label}</dt>
        <dd className="mt-1 leading-6 text-portfolio-slate">{value}</dd>
      </div>
    </div>
  );
}
