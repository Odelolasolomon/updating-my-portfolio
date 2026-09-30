import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function StrengthCard({ icon, label, title, description, className }: { icon: React.ReactNode; label: string; title: string; description: string; className?: string }) {
  return (
    <Card className={cn("group flex h-full flex-col p-4 transition hover:-translate-y-1 hover:border-portfolio-blue hover:shadow-portfolio-soft md:p-6", className)}>
      <div className="flex items-center gap-3 text-sm font-semibold uppercase text-portfolio-blue">
        <span className="grid size-10 place-items-center rounded-full bg-portfolio-blue-soft text-portfolio-blue">{icon}</span>
        {label}
      </div>
      <h3 className="mt-4 text-lg md:mt-5 md:text-xl font-semibold text-portfolio-charcoal">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-portfolio-slate">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">
        Learn More <ArrowRight size={16} />
      </span>
    </Card>
  );
}

