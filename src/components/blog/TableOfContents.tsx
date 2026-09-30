import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { BlogArticle } from "@/data/blog";

export function TableOfContents({ article }: { article: BlogArticle }) {
  if (!article.sections.length) return null;

  return (
    <Card className="p-5 sm:p-6">
      <h2 className="text-sm font-semibold uppercase text-portfolio-blue">Table of Contents</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-portfolio-slate">
        {article.sections.map((section, index) => (
          <li key={section.id}>
            <Link href={`#${section.id}`} className="focus-ring inline-flex gap-2 rounded-sm hover:text-portfolio-blue">
              <span className="font-semibold text-portfolio-orange">{String(index + 1).padStart(2, "0")}</span>
              <span>{section.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </Card>
  );
}
