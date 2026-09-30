import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase text-portfolio-blue">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-normal text-portfolio-charcoal md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-portfolio-slate md:text-lg">{description}</p> : null}
    </div>
  );
}
