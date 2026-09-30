import { Card } from "@/components/ui/Card";

export function CaseStudySection({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section id={slugify(title)} className="scroll-mt-28 py-8 first:pt-0">
      <div className="space-y-3">
        {eyebrow ? <p className="text-sm font-semibold uppercase text-portfolio-blue">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-normal text-portfolio-charcoal md:text-3xl">{title}</h2>
      </div>
      <Card className="mt-5 p-5 sm:p-6">
        {children}
      </Card>
    </section>
  );
}

export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
