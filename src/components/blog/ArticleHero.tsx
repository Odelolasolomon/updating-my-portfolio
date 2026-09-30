import { CalendarDays, Clock, UserRound } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import type { BlogArticle } from "@/data/blog";

export function ArticleHero({ article }: { article: BlogArticle }) {
  return (
    <section className="border-b border-portfolio-grey bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] py-8 sm:py-10 lg:py-14">
      <div className="portfolio-container min-w-0 space-y-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: article.title }]} />
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="min-w-0 space-y-5">
            <Tag tone="orange">{article.category}</Tag>
            <h1 className="max-w-4xl text-[clamp(2.35rem,6vw,4.5rem)] font-semibold leading-[1.03] tracking-normal text-portfolio-charcoal">{article.title}</h1>
            <p className="max-w-3xl text-base leading-7 text-portfolio-slate sm:text-lg sm:leading-8">{article.excerpt}</p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-portfolio-slate">
              <span className="inline-flex items-center gap-2"><UserRound size={16} /> {article.author}</span>
              {article.publishedAt ? <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {article.publishedAt}</span> : null}
              {article.readTime ? <span className="inline-flex items-center gap-2"><Clock size={16} /> {article.readTime}</span> : null}
            </div>
          </div>
          <div className="rounded-portfolio border border-portfolio-grey bg-white p-5 shadow-portfolio-card">
            <p className="text-sm font-semibold uppercase text-portfolio-blue">Article Focus</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => <Tag key={tag} tone="blue">{tag}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
