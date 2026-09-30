import { ArrowRight, CalendarDays, Clock, FileText } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { BlogArticle } from "@/data/blog";
import { articleHref } from "@/data/blog";

export function ArticleCard({ article, featured = false }: { article: BlogArticle; featured?: boolean }) {
  return (
    <Link href={articleHref(article.slug)} className="focus-ring group block min-w-0" prefetch={false}>
      <Card className={`h-full min-w-0 overflow-hidden transition duration-200 group-hover:-translate-y-1 group-hover:border-portfolio-blue group-hover:shadow-portfolio-soft ${featured ? "lg:grid lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
        <ArticlePreview category={article.category} label={article.heroLabel} compact={!featured} imageUrl={article.coverImageUrl} imageAlt={article.coverImageAlt || article.title} />
        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            <Tag tone="blue">{article.category}</Tag>
            {article.readTime ? <Tag tone="neutral">{article.readTime}</Tag> : null}
          </div>
          <h2 className={`${featured ? "text-3xl leading-9" : "text-xl leading-7"} mt-5 font-semibold text-portfolio-charcoal`}>{article.title}</h2>
          <p className="mt-3 text-sm leading-7 text-portfolio-slate">{article.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold uppercase text-portfolio-slate">
            <span className="inline-flex items-center gap-2"><FileText size={14} /> {article.author}</span>
            {article.publishedAt ? <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> {article.publishedAt}</span> : null}
            {article.readTime ? <span className="inline-flex items-center gap-2"><Clock size={14} /> {article.readTime}</span> : null}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-portfolio-blue">Read Article <ArrowRight size={16} /></span>
        </div>
      </Card>
    </Link>
  );
}

export function ArticlePreview({ category, label, compact = false, imageUrl, imageAlt }: { category: string; label: string; compact?: boolean; imageUrl?: string; imageAlt?: string }) {
  return (
    <div className={`relative min-h-[220px] overflow-hidden bg-portfolio-charcoal text-white ${compact ? "aspect-[4/3]" : "lg:min-h-full"}`}>
      {imageUrl ? <div role="img" aria-label={imageAlt || "Article cover image"} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} /> : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.55),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.35),transparent_30%),linear-gradient(135deg,rgba(37,43,54,0.92),rgba(17,24,39,0.92))]" />
      <div className="absolute inset-5 rounded-portfolio border border-white/15" />
      <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-20">
        {Array.from({ length: 36 }).map((_, index) => <span key={index} className="bg-white/20" />)}
      </div>
      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-5 sm:p-6">
        <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">{category}</span>
        <div>
          <p className="text-sm font-semibold uppercase text-portfolio-orange">{label}</p>
          <div className="mt-3 h-2 w-24 rounded-full bg-portfolio-blue" />
        </div>
      </div>
    </div>
  );
}




