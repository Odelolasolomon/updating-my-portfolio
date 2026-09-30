import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Publication } from "@/data/publications";
import { routes } from "@/lib/routes";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="min-w-0 p-5 sm:p-6">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <Tag tone="blue">{publication.venue} {publication.year}</Tag>
        <Tag tone="orange">{publication.status}</Tag>
      </div>
      <h3 className="mt-5 text-2xl font-semibold leading-8 text-portfolio-charcoal">{publication.title}</h3>
      <p className="mt-3 text-sm font-semibold text-portfolio-blue">{publication.note}</p>
      <p className="mt-4 text-sm leading-7 text-portfolio-slate">{publication.summary}</p>
      <div className="mt-5 border-t border-portfolio-grey pt-5">
        <h4 className="text-sm font-semibold uppercase text-portfolio-blue">Research Contribution</h4>
        <p className="mt-3 text-sm leading-7 text-portfolio-slate">{publication.contribution}</p>
      </div>
      <div className="mt-5 flex min-w-0 flex-wrap gap-2">
        {publication.methods.map((method) => <Tag key={method} tone="neutral">{method}</Tag>)}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {publication.projectSlug ? (
          <Link href={routes.projectDetail(publication.projectSlug)} className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio bg-portfolio-blue px-5 py-2.5 text-sm font-semibold text-white shadow-portfolio-soft transition hover:bg-blue-700" prefetch={false}>
            View Case Study <ArrowRight size={16} />
          </Link>
        ) : null}
        {publication.links?.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio border border-portfolio-grey bg-white px-5 py-2.5 text-sm font-semibold text-portfolio-charcoal transition hover:border-portfolio-blue hover:text-portfolio-blue">
            {link.label} <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </Card>
  );
}
