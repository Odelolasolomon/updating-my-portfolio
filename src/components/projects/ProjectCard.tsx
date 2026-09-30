import { ArrowRight, BrainCircuit, DatabaseZap, FlaskConical, HeartPulse, LineChart, Network, Plane, ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Project, ProjectVisual } from "@/data/projects";

const visualMeta: Record<ProjectVisual, { label: string; icon: React.ReactNode; accent: string }> = {
  agent: { label: "Conceptual agent architecture", icon: <Network size={24} />, accent: "bg-portfolio-blue" },
  finance: { label: "Conceptual market intelligence flow", icon: <LineChart size={24} />, accent: "bg-portfolio-orange" },
  health: { label: "Conceptual healthcare AI workflow", icon: <HeartPulse size={24} />, accent: "bg-portfolio-blue" },
  mlops: { label: "Conceptual MLOps deployment map", icon: <DatabaseZap size={24} />, accent: "bg-portfolio-charcoal" },
  travel: { label: "Conceptual travel RAG workflow", icon: <Plane size={24} />, accent: "bg-portfolio-orange" },
  vision: { label: "Conceptual medical vision pipeline", icon: <FlaskConical size={24} />, accent: "bg-portfolio-blue" },
  oct: { label: "Conceptual vessel segmentation pipeline", icon: <BrainCircuit size={24} />, accent: "bg-portfolio-charcoal" }
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card className="group/card h-full min-w-0 overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-portfolio-blue hover:shadow-portfolio-soft">
      <ProjectPreview project={project} compact={!featured} />
      <div className="min-w-0 space-y-4 p-5 sm:p-6">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Tag tone="blue">{project.category}</Tag>
          <Tag tone="orange">{project.status}</Tag>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-7 text-portfolio-charcoal">{project.shortTitle}</h3>
          <p className="text-sm leading-6 text-portfolio-slate">{project.excerpt}</p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech) => <Tag key={tech} tone="neutral">{tech}</Tag>)}
        </div>
        <div className="grid min-w-0 gap-2">
          {project.outcomes.slice(0, featured ? 3 : 2).map((outcome) => (
            <p key={outcome} className="rounded-portfolio bg-portfolio-orange-soft px-3 py-2 text-xs font-semibold leading-5 text-portfolio-orange">{outcome}</p>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">
          View Case Study <ArrowRight size={16} />
        </span>
      </div>
    </Card>
  );
}

export function ProjectPreview({ project, compact = false }: { project: Project; compact?: boolean }) {
  const meta = visualMeta[project.visual];

  return (
    <div className={`relative min-w-0 overflow-hidden bg-portfolio-charcoal text-white ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`} aria-label={meta.label}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,43,54,0.98),rgba(37,99,235,0.62)_52%,rgba(249,115,22,0.45))]" />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs font-semibold text-white/70">
        <span>Conceptual Preview</span>
        <span className="rounded-full border border-white/20 px-2 py-1">{project.category}</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-portfolio border border-white/15 bg-white/10 p-4 shadow-portfolio-card backdrop-blur">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 shrink-0 place-items-center rounded-full text-white ${meta.accent}`}>{meta.icon}</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{project.shortTitle}</p>
            <p className="mt-1 text-xs text-white/65">{meta.label}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
          <span className="h-2 rounded-full bg-white/70" />
          <ArrowRight size={13} className="text-portfolio-orange" />
          <span className="h-2 rounded-full bg-portfolio-blue" />
          <ArrowRight size={13} className="text-portfolio-orange" />
          <span className="h-2 rounded-full bg-white/35" />
        </div>
      </div>
      <ShieldCheck className="absolute right-5 top-16 text-white/15" size={compact ? 70 : 96} />
    </div>
  );
}
