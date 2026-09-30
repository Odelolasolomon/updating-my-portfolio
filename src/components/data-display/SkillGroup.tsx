import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { SkillCategory } from "@/data/skills";

export function SkillGroup({ category, icon }: { category: SkillCategory; icon: React.ReactNode }) {
  return (
    <Card className="h-full min-w-0 overflow-hidden p-5 sm:p-6">
      <div className="flex min-w-0 items-start gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-portfolio-blue text-sm font-semibold text-white shadow-portfolio-soft">{category.number}</div>
        <div className="min-w-0">
          <div className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{icon}</div>
          <h2 className="mt-4 text-xl font-semibold leading-7 text-portfolio-charcoal">{category.title}</h2>
          <p className="mt-3 text-sm leading-7 text-portfolio-slate">{category.description}</p>
        </div>
      </div>
      <div className="mt-6 flex min-w-0 flex-wrap gap-2">
        {category.skills.map((skill) => <Tag key={skill} tone="neutral">{skill}</Tag>)}
      </div>
      <div className="mt-6 border-t border-portfolio-grey pt-5">
        <h3 className="text-sm font-semibold uppercase text-portfolio-blue">Evidence</h3>
        <div className="mt-3 flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap">
          {category.evidence.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-4 py-2 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue" prefetch={false}>
              {item.label} <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
