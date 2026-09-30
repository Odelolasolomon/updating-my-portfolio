import { Quote } from "lucide-react";

import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full min-w-0 flex-col p-5 sm:p-6">
      <div className="grid size-10 place-items-center rounded-full bg-portfolio-orange-soft text-portfolio-orange">
        <Quote size={18} />
      </div>
      <blockquote className="mt-5 text-lg font-semibold leading-8 text-portfolio-charcoal">
        &ldquo;{testimonial.excerpt}&rdquo;
      </blockquote>
      <div className="mt-auto pt-6">
        <p className="text-sm font-semibold text-portfolio-charcoal">{testimonial.name}</p>
        <p className="mt-2 text-xs leading-5 text-portfolio-slate">{testimonial.description}</p>
        <p className="mt-4 text-xs font-semibold uppercase text-portfolio-blue">{testimonial.sourceLabel}</p>
      </div>
    </Card>
  );
}
